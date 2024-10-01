import {
  Environment,
  OrbitControls,
  Text,
  CameraControls,
  MeshReflectorMaterial,
  Text3D,
  Center,
  RenderTexture,
  Float,
} from "@react-three/drei";
import { Planet3 } from "./Planet3";
import { degToRad, lerp } from "three/src/math/MathUtils.js";

import { useEffect, useRef } from "react";
import { Color } from "three";
import { currentPageAtom } from "./ui";
import { useAtom } from "jotai";
import { useFrame } from "@react-three/fiber";
import { Fracture } from "./Fracture";

export const CellFractured = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />

      <Float floatIntensity={2} speed={3}>
        <Fracture />
      </Float>
      <directionalLight position={[-10, 10, 0]} intensity={2} />
      <Environment preset="sunset" blur={0.4} />
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};
