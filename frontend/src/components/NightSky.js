import React, { useEffect, useRef } from "react";

const NightSky = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Fullscreen canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Resize on window change
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Stars
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
    }));

    // Shooting stars
    const shootingStars = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height / 2,
      length: Math.random() * 80 + 50,
      speed: Math.random() * 4 + 2,
      opacity: 0,
      active: false,
    }));

    function drawStars() {
      ctx.fillStyle = "#ffffff";
      stars.forEach((star) => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function drawShootingStars() {
      shootingStars.forEach((star) => {
        if (!star.active && Math.random() < 0.002) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height / 3;
          star.opacity = 1;
          star.active = true;
        }

        if (star.active) {
          ctx.strokeStyle = `rgba(255,255,255,${star.opacity})`;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x + star.length, star.y + star.length / 2);
          ctx.stroke();

          star.x += star.speed;
          star.y += star.speed / 2;
          star.opacity -= 0.01;

          if (star.opacity <= 0) {
            star.active = false;
          }
        }
      });
    }

    function animate() {
      ctx.fillStyle = "rgba(9,10,15,1)"; // dark night sky
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawStars();
      drawShootingStars();

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // stay behind all sections
      }}
    />
  );
};

export default NightSky;
