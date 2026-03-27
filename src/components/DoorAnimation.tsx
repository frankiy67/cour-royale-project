import { useState, useEffect, useRef } from "react";

export default function DoorAnimation() {
  const [opened, setOpened] = useState(false);
  const canvasLeftRef  = useRef<HTMLCanvasElement>(null);
  const canvasRightRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/porte-semeuse.jpg";
    img.onload = () => {
      const w = img.width;
      const h = img.height;

      if (canvasLeftRef.current) {
        canvasLeftRef.current.width  = w / 2;
        canvasLeftRef.current.height = h;
        canvasLeftRef.current.getContext("2d")!.drawImage(img, 0, 0);
      }
      if (canvasRightRef.current) {
        canvasRightRef.current.width  = w / 2;
        canvasRightRef.current.height = h;
        canvasRightRef.current.getContext("2d")!.drawImage(img, -w / 2, 0);
      }
    };
  }, []);

  const handleClick = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }, 750);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: opened ? "default" : "pointer",
        userSelect: "none",
        marginTop: "32px",
      }}
    >
      {/* Door frame */}
      <div style={{
        width: 220,
        height: 280,
        display: "flex",
        border: "4px solid #3d1800",
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
      }}>
        {/* Left panel */}
        <div style={{
          width: "50%",
          height: "100%",
          transformOrigin: "left center",
          transition: "transform 1.2s cubic-bezier(0.4,0,0.2,1)",
          transform: opened ? "perspective(500px) rotateY(-78deg)" : "none",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <canvas
            ref={canvasLeftRef}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
        {/* Right panel */}
        <div style={{
          width: "50%",
          height: "100%",
          transformOrigin: "right center",
          transition: "transform 1.2s cubic-bezier(0.4,0,0.2,1)",
          transform: opened ? "perspective(500px) rotateY(78deg)" : "none",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <canvas
            ref={canvasRightRef}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
      </div>

      {/* Label */}
      <p style={{
        marginTop: 14,
        fontSize: 11,
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.55)",
        transition: "opacity 0.4s",
        opacity: opened ? 0 : 1,
        fontFamily: "var(--font-inter, sans-serif)",
      }}>
        Entrer
      </p>
    </div>
  );
}
