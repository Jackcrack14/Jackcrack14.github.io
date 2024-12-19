import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import StarField from "./particles/StarField";
import SceneLoader from "./SceneLoader";

export default function Scene3D() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 1],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
      dpr={[1, 2]} // Optimize for different pixel ratios
      gl={{
        antialias: false, // Disable antialiasing for better performance
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={<SceneLoader />}>
        <StarField />
        <Preload all /> {/* Preload all assets */}
      </Suspense>
    </Canvas>
  );
}
