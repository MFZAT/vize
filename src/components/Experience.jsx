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
  Sparkles,
  Stars,
  Clouds,
  Cloud,
  MeshDistortMaterial,
  GradientTexture,
} from "@react-three/drei";
import { Planet3 } from "./Planet3";
import { degToRad, lerp } from "three/src/math/MathUtils.js";

import { useEffect, useRef } from "react";
import { Color } from "three";
import { currentPageAtom } from "./ui";
import { useAtom } from "jotai";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraStore = useRef();
  const textMaterial = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  // useFrame((_, delta) => {
  //   textMaterial.current.opacity = lerp(
  //     textMaterial.current.opacity,
  //     currentPage === "home" || currentPage === "intro" ? 1 : 0,
  //     delta * 2
  //   );
  // });

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.6;
    // controls.current.dolly(22, true);
    setTimeout(() => {
      setCurrentPage("home");
    }, 2400);

    fitCamera;
  };

  const fitCamera = async () => {
    if (currentPage === "store") {
      controls.current.smoothTime = 0.8;
      controls.current.fitToBox(meshFitCameraStore.current, true);
    } else {
      controls.current.smoothTime = 1.6;
      controls.current.fitToBox(meshFitCameraHome.current, true);
    }
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  return (
    <>
      {/* <OrbitControls /> */}
      <CameraControls ref={controls} />
      <mesh
        ref={meshFitCameraHome}
        position-z={1.5}
        position-x={1}
        visible={false}
      >
        <boxGeometry args={[7, 5, 5]} />
        <meshBasicMaterial color="orange" transparent />
      </mesh>
      {/* <Text
        font={"fonts/IndieFlower-Regular.ttf"}
        position-x={-3}
        position-y={-0.1}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorX={"bottom"}
      >
        VIZE{"\n"}ZAT{"\n"}
        <meshBasicMaterial color="white" /> */}
      {/* <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
          ref={textMaterial}
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="city" />
            <Float
              // floatIntensity={4}
              rotationIntensity={2}
            >
              <Planet3
                scale={0.8}
                rotation-y={-degToRad(25)}
                rotation-x={degToRad(40)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial> */}
      {/* </Text> */}
      {/* 
      <Center top left>
        <Text3D font={"fonts/IndieFlower-Regular.ttf"}>hello</Text3D>
      </Center> */}

      <group rotation-y={degToRad(0)} position-x={1} position-y={0}>
        <Planet3 scale={0.5} html />
        {/* <Sparkles
            count={50}
            scale={1}
            size={5}
            speed={0.1}
            position-x={1}
            position-y={2}
            position-z={0}
          /> */}
        <mesh
          ref={meshFitCameraStore}
          position-z={0}
          position-x={0}
          visible={false}
        >
          <boxGeometry args={[3, 3, 3]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
        <Float rotationIntensity={2}>
          <Clouds material={THREE.MeshBasicMaterial}>
            <Cloud
              bounds={[12, 0.1, 12]}
              seed={10}
              scale={0.3}
              volume={20}
              color="skylightblue"
              fade={100}
            />
            <mesh scale={[1, 1, 1]}>
              <Text font="" position-z={-3}>
                Hodnoty
                <MeshDistortMaterial speed={1}>
                  <GradientTexture
                    stops={[0, 0.8, 1]}
                    colors={["lightblue", "springreen", "yellow"]}
                    size={100}
                  />
                </MeshDistortMaterial>
              </Text>
            </mesh>
            <mesh scale={[1, 1, 1]}>
              <Text font="" position-z={2.5} rotation-y={degToRad(30)}>
                Trendy
                <MeshDistortMaterial speed={1}>
                  <GradientTexture
                    stops={[0, 0.8, 1]}
                    colors={["lightblue", "black", "lightgrey"]}
                    size={2}
                  />
                </MeshDistortMaterial>
              </Text>
            </mesh>
          </Clouds>
        </Float>
      </group>

      <mesh position-y={-2} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
          mixBlur={1} // How much blur mixes with surface roughness (default = 1)
          mixStrength={10} // Strength of the reflections
          mixContrast={1} // Contrast of the reflections
          resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
          roughness={1}
          opacity={0.5}
          color="#333"
          metalness={0.9}
          // mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          depthScale={1} // Scale the depth factor (0 = no depth, default = 0)
          minDepthThreshold={0.4} // Lower edge for the depthTexture interpolation (default = 0)
          maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
          // depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
          debug={0} // Depending on the assigned value, one of the following channels is shown:
        />
      </mesh>
      <Stars
        radius={100}
        depth={500}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Clouds material={THREE.MeshBasicMaterial}>
        {/* <Cloud
          seed={2}
          segments={40}
          bounds={[10, 2, 2]}
          volume={10}
          color="white"
        /> */}
        {/* <Cloud seed={1} scale={2} volume={5} color="skylightblue" fade={100} /> */}
      </Clouds>

      <Environment preset="sunset" />

      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};
