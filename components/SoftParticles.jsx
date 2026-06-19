"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const points = useRef(null);
  const positions = useMemo(() => {
    const values = new Float32Array(420 * 3);
    for (let index = 0; index < 420; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 9;
      values[index * 3 + 1] = (Math.random() - 0.5) * 4.2;
      values[index * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return values;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) {
      return;
    }
    points.current.rotation.y = Math.sin(clock.elapsedTime * 0.12) * 0.16;
    points.current.rotation.x = Math.cos(clock.elapsedTime * 0.1) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#BFDCEF"
        size={0.024}
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function SoftParticles() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.6]}>
      <ambientLight intensity={0.65} />
      <ParticleField />
    </Canvas>
  );
}
