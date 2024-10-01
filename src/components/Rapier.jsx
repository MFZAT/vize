import { OrbitControls, Box, Sphere, Torus } from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";

export const Rapier = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />
      <RigidBody position={[0, 5, 0]} colliders="ball" gravityScale={4}>
        <Sphere>
          <meshStandardMaterial color="hotpink" />
        </Sphere>
      </RigidBody>

      <RigidBody position={[3, 5, 0]}>
        <Box>
          <meshStandardMaterial color="royalblue" />
        </Box>
      </RigidBody>

      <RigidBody position={[-2, 5, 0]} colliders="trimesh">
        <Torus>
          <meshStandardMaterial color="orange" />
        </Torus>
      </RigidBody>

      <RigidBody type="fixed" restitution={2}>
        <Box position={[0, 0, 0]} args={[20, 1, 20]}>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
};
