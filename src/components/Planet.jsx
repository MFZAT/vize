/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/zatplanet.glb -o src/components/Planet.jsx -k -K -r public 
*/

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Planet(props) {
  const { nodes, materials } = useGLTF("/models/zatplanet.glb");
  const map = useTexture("public/textures/ganges_river_pebbles_diff_4k.png");
  const displacementMap = useTexture(
    "public/textures/ganges_river_pebbles_disp_4k.png"
  );
  const normalMap = useTexture(
    "public/textures/ganges_river_pebbles_nor_dx_4k.png"
  );
  const rougnessMap = useTexture(
    "public/textures/ganges_river_pebbles_rough_4k.png"
  );

  const material = new THREE.meshStandardMaterial();
  material.map = map;
  material.normalMap = normalMap;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        {/* <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={material}
          scale={[4, 4, 4]}
        ></mesh> */}

        <mesh>
          <sphereGeometry args={[1, 100]} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/zatplanet.glb");
