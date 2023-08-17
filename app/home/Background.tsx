"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import Logo from "./3DLogo";
import { useThree, useFrame } from "@react-three/fiber";
import vertex from "./shaders/vertex.js";
import fragment from "./shaders/fragment.js";
import * as THREE from "three";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [shaderRefCheck, setShaderRefCheck] = useState(false);

  const shaderRef: any = useRef();

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -2]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX / window.innerWidth,
        y: 1 - event.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // useFrame((state, delta) => {
  //   shaderRef.current.uniforms.uTime.value += 0.01;
  //   shaderRef.current.uniforms.uMouse.value.x = mousePos.x;
  //   shaderRef.current.uniforms.uMouse.value.y = mousePos.y;
  // });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Logo />
      {/* <mesh position-z={-2}>
        <meshBasicMaterial color={"#ffe600"} />
        <planeGeometry args={[width, height]} />
      </mesh>
      <mesh position-z={-20.02}>
        <shaderMaterial
          ref={shaderRef}
          wireframe
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={{
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2() },
          }}
        />
        <planeGeometry args={[width, height, 90, 30]} />
      </mesh> */}
    </>
  );
};

export default Background;
