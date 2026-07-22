"use client";
import { useEffect, useRef, useState } from "react";

export default function CanvasGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let THREE: any;
    let renderer: any;
    let scene: any;
    let camera: any;
    let globeGroup: any;
    let animationFrameId: number;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Financial Hubs (Latitude, Longitude)
    const hubs = [
      { name: "Dubai", lat: 25.2048, lon: 55.2708, isCenter: true },
      { name: "New York", lat: 40.7128, lon: -74.0060, isCenter: false },
      { name: "London", lat: 51.5074, lon: -0.1278, isCenter: false },
      { name: "Singapore", lat: 1.3521, lon: 103.8198, isCenter: false },
      { name: "Tokyo", lat: 35.6762, lon: 139.6503, isCenter: false },
    ];

    // Helper: Lat/Lon to 3D Sphere Coordinates
    const convertCoords = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      return {
        x: -(radius * Math.sin(phi) * Math.sin(theta)),
        y: radius * Math.cos(phi),
        z: radius * Math.sin(phi) * Math.cos(theta),
      };
    };

    const init = async () => {
      // Dynamic import to support SSR
      THREE = await import("three");
      setLoading(false);

      const width = container.clientWidth;
      const height = container.clientHeight || 500;

      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 210;

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      globeGroup = new THREE.Group();
      scene.add(globeGroup);

      const globeRadius = 60;

      // 1. Globe Point Cloud (Particles)
      const particleCount = 2500;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // Uniform distribution on a sphere
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);

        const r = globeRadius;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const pointsMaterial = new THREE.PointsMaterial({
        color: 0x8b5cf6, // purple accent
        size: 0.85,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });

      const pointCloud = new THREE.Points(geometry, pointsMaterial);
      globeGroup.add(pointCloud);

      // 2. Translucent Inner Sphere
      const sphereGeo = new THREE.SphereGeometry(globeRadius - 0.5, 32, 32);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x04040a,
        transparent: true,
        opacity: 0.75,
      });
      const innerSphere = new THREE.Mesh(sphereGeo, sphereMat);
      globeGroup.add(innerSphere);

      // 3. Latitude & Longitude Meridians Grid Wireframe
      const gridGeo = new THREE.SphereGeometry(globeRadius + 0.2, 24, 24);
      const gridMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
        blending: THREE.AdditiveBlending,
      });
      const gridMesh = new THREE.Mesh(gridGeo, gridMat);
      globeGroup.add(gridMesh);

      // 4. Glowing Atmosphere Envelope Sphere
      const atmosphereGeo = new THREE.SphereGeometry(globeRadius + 4, 32, 32);
      const atmosphereMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      });
      const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
      globeGroup.add(atmosphereMesh);

      // 5. Financial Hub Hotspots
      const hubObjects: any[] = [];
      const dubaiCoords = convertCoords(25.2048, 55.2708, globeRadius);

      hubs.forEach((hub) => {
        const coords = convertCoords(hub.lat, hub.lon, globeRadius);

        // Core dot
        const dotGeo = new THREE.SphereGeometry(hub.isCenter ? 1.6 : 1, 16, 16);
        const dotMat = new THREE.MeshBasicMaterial({
          color: hub.isCenter ? 0x10b981 : 0x8b5cf6, // emerald for Dubai, purple for others
        });
        const dotMesh = new THREE.Mesh(dotGeo, dotMat);
        dotMesh.position.set(coords.x, coords.y, coords.z);
        globeGroup.add(dotMesh);
        hubObjects.push({ name: hub.name, position: coords, isCenter: hub.isCenter });

        // Outer pulse ring
        const ringGeo = new THREE.RingGeometry(hub.isCenter ? 2 : 1.5, hub.isCenter ? 3 : 2, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: hub.isCenter ? 0x10b981 : 0x8b5cf6,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.4,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.set(coords.x, coords.y, coords.z);
        ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
        globeGroup.add(ringMesh);
        (dotMesh as any).pulseRing = ringMesh;
      });

      // 6. Curved Transaction Arcs connecting to Dubai
      const arcs: any[] = [];
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
      });

      hubObjects.forEach((hub) => {
        if (hub.isCenter) return;

        // Calculate points for a curve
        const start = new THREE.Vector3(hub.position.x, hub.position.y, hub.position.z);
        const end = new THREE.Vector3(dubaiCoords.x, dubaiCoords.y, dubaiCoords.z);

        // Interpolate mid-point and push outward to create arc height
        const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        const distance = start.distanceTo(end);
        midPoint.normalize().multiplyScalar(globeRadius + distance * 0.25);

        const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);

        // Draw static path
        const points = curve.getPoints(50);
        const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
        const arcLine = new THREE.Line(curveGeo, lineMaterial);
        globeGroup.add(arcLine);

        // Transaction particle running along the arc
        const pGeo = new THREE.SphereGeometry(0.85, 8, 8);
        const pMat = new THREE.MeshBasicMaterial({
          color: 0x10b981,
          transparent: true,
          opacity: 0.95,
        });
        const particleMesh = new THREE.Mesh(pGeo, pMat);
        globeGroup.add(particleMesh);

        arcs.push({
          curve,
          mesh: particleMesh,
          progress: Math.random(), // randomized initial position
          speed: 0.004 + Math.random() * 0.004,
        });
      });

      // 7. Starfield Background
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 350;
      const starPositions = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * 600;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * 600;
        starPositions[i * 3 + 2] = -120 - Math.random() * 200;
      }
      starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
      const starMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.8,
        transparent: true,
        opacity: 0.35,
      });
      const starField = new THREE.Points(starGeometry, starMat);
      scene.add(starField);

      // Mouse interactive tilt values
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Render Loop
      let pulseTime = 0;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Auto rotation
        globeGroup.rotation.y += 0.0012;

        // Mouse Parallax/Tilt Lerp
        targetX += (mouseX * 0.05 - targetX) * 0.05;
        targetY += (mouseY * 0.05 - targetY) * 0.05;
        globeGroup.rotation.x = targetY;
        globeGroup.rotation.y += targetX * 0.04;

        // Animate pulse rings
        pulseTime += 0.05;
        globeGroup.traverse((node: any) => {
          if (node.pulseRing) {
            const scale = 1 + Math.sin(pulseTime) * 0.3;
            node.pulseRing.scale.set(scale, scale, scale);
            node.pulseRing.material.opacity = 0.4 - (scale - 0.7) * 0.4;
          }
        });

        // Update transaction particles along curves
        arcs.forEach((arc) => {
          arc.progress += arc.speed;
          if (arc.progress > 1) {
            arc.progress = 0;
          }
          const p = arc.curve.getPointAt(arc.progress);
          arc.mesh.position.set(p.x, p.y, p.z);
        });

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight || 500;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      };
    };

    let cleanupFn: (() => void) | undefined;
    init().then((cleanup) => {
      cleanupFn = cleanup;
    });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[350px] md:h-[550px] lg:h-[650px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center flex-col space-y-3 z-10">
          <div className="w-8 h-8 border-2 border-purple-accent/30 border-t-purple-accent rounded-full animate-spin" />
          <span className="text-xs uppercase tracking-widest text-foreground/40 font-mono">
            Initializing 3D Ecosystem
          </span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full block touch-none"
        style={{ outline: "none" }}
      />
    </div>
  );
}
