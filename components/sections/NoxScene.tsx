"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import type { MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export type NoxPointer = {
  x: number;
  y: number;
};

type NoxSceneProps = {
  pointerRef: MutableRefObject<NoxPointer>;
  reducedMotion: boolean;
};

function NoxModel({ pointerRef, reducedMotion }: NoxSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/nox-v01.glb");

  const model = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;

      object.castShadow = false;
      object.receiveShadow = false;
      object.frustumCulled = true;

      const tuneMaterial = (material: THREE.Material) => {
        const tuned = material.clone();

        if (tuned instanceof THREE.MeshStandardMaterial) {
          tuned.roughness = Math.max(tuned.roughness, 0.72);
          tuned.metalness = Math.min(tuned.metalness, 0.08);
          tuned.envMapIntensity = 0.3;
          tuned.needsUpdate = true;
        }

        return tuned;
      };

      object.material = Array.isArray(object.material)
        ? object.material.map(tuneMaterial)
        : tuneMaterial(object.material);
    });
  }, [model]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const smoothing = 1 - Math.exp(-delta * 5.5);
    const targetRotationY = reducedMotion ? 0.06 : 0.06 + pointerRef.current.x * 0.16;
    const targetRotationX = reducedMotion ? 0 : pointerRef.current.y * 0.055;

    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetRotationY, smoothing);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetRotationX, smoothing);

    if (!reducedMotion) {
      const idle = Math.sin(state.clock.elapsedTime * 0.78) * 0.006;
      group.position.y = -0.76 + idle;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.76, 0]}
      rotation={[0, 0.06, 0]}
      scale={1.5}
    >
      <primitive object={model} />
    </group>
  );
}

export default function NoxScene({ pointerRef, reducedMotion }: NoxSceneProps) {
  return (
    <Canvas
      dpr={1}
      frameloop={reducedMotion ? "demand" : "always"}
      camera={{ position: [0, 0.02, 3.55], fov: 29, near: 0.1, far: 10 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.72} />
      <hemisphereLight args={["#dfe4ff", "#08090c", 0.82]} />
      <directionalLight position={[2.4, 3.5, 3]} intensity={2.1} color="#f6f7ff" />
      <pointLight position={[-1.8, 1.2, 2.1]} intensity={4.2} distance={6} decay={2} color="#536cff" />
      <pointLight position={[1.7, -0.2, 1.7]} intensity={2.2} distance={5} decay={2} color="#8068ff" />

      <Suspense fallback={null}>
        <NoxModel pointerRef={pointerRef} reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
