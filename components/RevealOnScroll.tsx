"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function RevealOnScroll({
  children,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
