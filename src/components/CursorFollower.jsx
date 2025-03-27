import { useState, useEffect } from "react";

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div>
      {/* Red Dot */}
      <div
        className="fixed w-3 h-3 bg-[#2BC0CD] rounded-full pointer-events-none transition-all duration-75"
        style={{
          left: position.x + "px",
          top: position.y + "px",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export default CursorFollower;
