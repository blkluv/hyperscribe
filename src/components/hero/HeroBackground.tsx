
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    // Create particles
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    const colors = ['rgba(59, 130, 246, 0.3)', 'rgba(79, 70, 229, 0.2)', 'rgba(99, 102, 241, 0.25)'];
    
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Connect particles with lines
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 - distance/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }
      
      connectParticles();
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  
  return (
    <>
      {/* Interactive particle network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
      
      {/* Gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-100/70 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-32 right-10 w-[600px] h-[600px] bg-purple-200/70 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"
      />
    </>
  );
};

export default HeroBackground;
