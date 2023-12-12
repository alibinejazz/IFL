import {
  CameraControls,
  ContactShadows,
  Environment,
  OrbitControls,
  Text,
  useTexture,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

const Dots = (props) => {
  const { loading } = useChat();
  const [loadingText, setLoadingText] = useState("");
  useEffect(() => {
    if (loading) {
      console.log('printing...')
      const interval = setInterval(() => {
        setLoadingText((loadingText) => {
          if (loadingText.length > 2) {
            return ".";
          }
          return loadingText + ".";
        });
      }, 800);
      return () => clearInterval(interval);
    } else {
      setLoadingText("");
    }
  }, [loading]);
  
  if (!loading) return null;
  return (
    <group {...props}>
      <Text fontSize={0.3} anchorX={"left"} anchorY={"bottom"}>
        {loadingText}
        <meshBasicMaterial attach="material" color="black" />
      </Text>
    </group>
  );
};

export const Experience = () => {
  const cameraControls = useRef();
  const myControl = useRef();
  const { cameraZoomed } = useChat();

  useEffect(() => {
    myControl.current.target.set(3, 15, -50);
    // cameraControls.current.setLookAt(0, 2, 5, 0, 1.5, 0);
    
  }, []);

  // useEffect(() => {
  //   if (cameraZoomed) {
  //     cameraControls.current.setLookAt(0, 1.5, 1.5, 0, 1.5, 0, true);
  //   } else {
  //     cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.0, 0, true);
  //   }
  // }, [cameraZoomed]);
  return (
    <>
    {/* <CameraControls ref={cameraControls} /> */}
  <OrbitControls  ref={myControl} enableRotate={false} enableZoom={false}   />
      <Environment preset="sunset" />
      {/* Wrapping Dots into Suspense to prevent Blink when Troika/Font is loaded */}
        <Suspense>
          <Dots position-y={3.48} position-x={-0.05} />
        </Suspense>

      <Avatar />

      <ContactShadows opacity={0.7} />
    </>
  );
};
