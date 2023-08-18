"use client";

import { useEffect, useRef } from "react";

export default function SlideUp({ children, offset = "0px" }: any) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUp");
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, offset]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
