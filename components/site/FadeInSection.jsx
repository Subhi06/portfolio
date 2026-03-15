"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeInSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const animation = gsap.fromTo(
      element,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%"
        }
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [delay]);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
