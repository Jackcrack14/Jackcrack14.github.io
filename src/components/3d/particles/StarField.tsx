import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface StarFieldProps {
  count?: number;
  radius?: number;
  size?: number;
  color?: string;
}

export default function StarField({
  count = 5000,
  radius = 1.5,
  size = 0.002,
  color = "#88ccff",
}: StarFieldProps) {
  const ref = useRef<THREE.Points>(null);

  // Generate particles only once using useMemo
  const [positions, coordinates] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const coordinates = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Generate random spherical coordinates
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.cbrt(Math.random()) * radius; // Cube root for better distribution

      // Convert to Cartesian coordinates
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      coordinates[i * 3] = x;
      coordinates[i * 3 + 1] = y;
      coordinates[i * 3 + 2] = z;
    }

    return [positions, coordinates];
  }, [count, radius]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.1;
      ref.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        fog={false}
      />
    </Points>
  );
}
