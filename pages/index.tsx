import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import MessedLine from "../components/MessedLine";

export default function Home() {
  return (
    <div id="root">
      <Canvas>
        <MessedLine />
      </Canvas>
    </div>
  );
}
