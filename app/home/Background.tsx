import { Suspense, useState, useEffect, useRef } from "react";
import { OrbitControls, Scroll, Text3D } from "@react-three/drei";
import Logo from "../components/HomePage/Logo";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  window.addEventListener("wheel", (e) => {
    scrollY += e.deltaY / window.innerHeight;

    scrollY = Math.max(0, Math.min(1, scrollY));

    setScrollPos(scrollY);
  });

  console.log(scrollPos);

  return (
    <Suspense fallback={null}>
      <directionalLight
        position={[10 * mousePos.x, 10 * -mousePos.y, 10]}
        intensity={1}
        color={"#FFD7AA"}
      />
      <pointLight position={[0, 20, 0]} intensity={200} color={"#FFA44B"} />
      <Logo />
    </Suspense>
  );
};

export default Background;
