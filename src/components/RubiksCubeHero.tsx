"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

interface RubiksCubeHeroProps {
  imageSrc?: string;
  imageAlt?: string;
  transformDelay?: number; // milliseconds before cube transforms to image
}

export default function RubiksCubeHero({
  imageSrc = "/Jasper.jpg",
  imageAlt = "Profile",
  transformDelay = 4000,
}: RubiksCubeHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isTransformed, setIsTransformed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeGroupRef = useRef<THREE.Group | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current || isTransformed) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-5, -5, 5);
    scene.add(directionalLight2);

    // Rubik's Cube Colors (classic)
    const colors = {
      front: 0xff0000, // Red
      back: 0xffa500, // Orange
      top: 0xffffff, // White
      bottom: 0xffff00, // Yellow
      right: 0x00ff00, // Green
      left: 0x0000ff, // Blue
    };

    // Create Rubik's cube (3x3x3)
    const cubeGroup = new THREE.Group();
    cubeGroupRef.current = cubeGroup;

    const cubieSize = 0.9;
    const gap = 0.05;
    const offset = 1;

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const geometry = new THREE.BoxGeometry(cubieSize, cubieSize, cubieSize);
          
          // Create materials for each face
          const materials = [
            new THREE.MeshStandardMaterial({ 
              color: x === 1 ? colors.right : 0x111111,
              roughness: 0.3,
              metalness: 0.1,
            }),
            new THREE.MeshStandardMaterial({ 
              color: x === -1 ? colors.left : 0x111111,
              roughness: 0.3,
              metalness: 0.1,
            }),
            new THREE.MeshStandardMaterial({ 
              color: y === 1 ? colors.top : 0x111111,
              roughness: 0.3,
              metalness: 0.1,
            }),
            new THREE.MeshStandardMaterial({ 
              color: y === -1 ? colors.bottom : 0x111111,
              roughness: 0.3,
              metalness: 0.1,
            }),
            new THREE.MeshStandardMaterial({ 
              color: z === 1 ? colors.front : 0x111111,
              roughness: 0.3,
              metalness: 0.1,
            }),
            new THREE.MeshStandardMaterial({ 
              color: z === -1 ? colors.back : 0x111111,
              roughness: 0.3,
              metalness: 0.1,
            }),
          ];

          const cubie = new THREE.Mesh(geometry, materials);
          cubie.position.set(x * offset, y * offset, z * offset);
          
          // Add black edges
          const edges = new THREE.EdgesGeometry(geometry);
          const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })
          );
          cubie.add(line);
          
          cubeGroup.add(cubie);
        }
      }
    }

    scene.add(cubeGroup);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (cubeGroup) {
        // Continuous rotation with hover acceleration
        const speed = isHovered ? 2.5 : 1;
        cubeGroup.rotation.x += 0.005 * speed;
        cubeGroup.rotation.y += 0.008 * speed;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current || !renderer || !camera) return;
      
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Auto-transform timer
    const transformTimer = setTimeout(() => {
      setIsTransformed(true);
    }, transformDelay);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      clearTimeout(transformTimer);
      renderer.dispose();
    };
  }, [isTransformed, isHovered, transformDelay]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 3D Canvas */}
      <div 
        className={`transition-all duration-1000 ease-in-out ${isTransformed ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
        style={{ width: "400px", height: "400px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />
      </div>

      {/* Transformed Image */}
      <AnimatePresence>
        {isTransformed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              transition: {
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
              }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary opacity-70 blur-xl animate-pulse" />
              
              {/* Image container with 3D tilt effect */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

