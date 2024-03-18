import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

const Model = ({ name, scale }) => {
  const { scene } = useGLTF(`/models/${name}.glb`);
  return <primitive object={scene} scale={scale} />;
};

const ThreeDModel = ({ name, scale, fov }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadow={false}
      className="canvas"
      camera={{ fov: fov }}
    >
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"night"}>
          <Model name={name} scale={scale} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default ThreeDModel;
