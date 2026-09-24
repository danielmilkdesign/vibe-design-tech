"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VGlass3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.2, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // ---------- lights ----------
    scene.add(new THREE.AmbientLight(0x223333, 0.6));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(3, 6, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x55f1ef, 0.5);
    rimLight.position.set(-4, -2, -4);
    scene.add(rimLight);

    const frontFill = new THREE.DirectionalLight(0xffffff, 0.7);
    frontFill.position.set(0, 1, 6);
    scene.add(frontFill);

    const glowLightA = new THREE.PointLight(0x55f1ef, 3.2, 9, 2);
    glowLightA.position.set(-1.1, 0.6, 1.3);
    scene.add(glowLightA);

    const glowLightB = new THREE.PointLight(0x55f1ef, 3.2, 9, 2);
    glowLightB.position.set(1.1, 0.6, 1.3);
    scene.add(glowLightB);

    const glowLightC = new THREE.PointLight(0x55f1ef, 2.4, 8, 2);
    glowLightC.position.set(0, -1.6, 1.4);
    scene.add(glowLightC);

    // ---------- V shape ----------
    function buildVShape() {
      const shape = new THREE.Shape();
      shape.moveTo(-2.0, 4.0);
      shape.lineTo(0.0, -2.0);
      shape.lineTo(2.0, 4.0);
      shape.lineTo(0.6, 4.0);
      shape.lineTo(0.0, 1.1);
      shape.lineTo(-0.6, 4.0);
      shape.closePath();
      return shape;
    }

    const vShape = buildVShape();
    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 1.3,
      bevelEnabled: true,
      bevelThickness: 0.16,
      bevelSize: 0.16,
      bevelSegments: 6,
      curveSegments: 24,
    };
    const glassGeo = new THREE.ExtrudeGeometry(vShape, extrudeSettings);
    glassGeo.center();
    glassGeo.computeVertexNormals();

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xdfffff,
      metalness: 0.05,
      roughness: 0.06,
      transparent: true,
      opacity: 0.46,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      side: THREE.DoubleSide,
      reflectivity: 1,
    });

    const vGroup = new THREE.Group();
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    vGroup.add(glassMesh);

    const edgesGeo = new THREE.EdgesGeometry(glassGeo, 12);
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
    });
    const edgeLines = new THREE.LineSegments(edgesGeo, edgeMat);
    vGroup.add(edgeLines);

    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x55f1ef,
      transparent: true,
      opacity: 0.06,
      side: THREE.BackSide,
    });
    const rimMesh = new THREE.Mesh(glassGeo, rimMat);
    rimMesh.scale.set(1.035, 1.035, 1.06);
    vGroup.add(rimMesh);

    // ---------- glowing circuit lines ----------
    function glowSprite(color: string, size: number) {
      const c = document.createElement("canvas");
      c.width = 128;
      c.height = 128;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.25, color);
      g.addColorStop(1, "rgba(85,241,239,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 128, 128);
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(size, size, 1);
      return sprite;
    }

    function tubeAlong(points: THREE.Vector3[], radius: number, color: number) {
      const curve = new THREE.CatmullRomCurve3(points);
      const geo = new THREE.TubeGeometry(curve, 40, radius, 8, false);
      const mat = new THREE.MeshBasicMaterial({ color });
      return new THREE.Mesh(geo, mat);
    }

    const circuitGroup = new THREE.Group();
    const z = 0.72;

    const leftPath = [
      new THREE.Vector3(-1.55, 3.2, z),
      new THREE.Vector3(-1.15, 2.55, z),
      new THREE.Vector3(-0.75, 1.85, z),
      new THREE.Vector3(-0.4, 0.9, z),
      new THREE.Vector3(-0.12, -0.2, z),
      new THREE.Vector3(0.0, -1.05, z),
    ];
    const rightPath = [
      new THREE.Vector3(1.55, 3.2, z),
      new THREE.Vector3(1.15, 2.55, z),
      new THREE.Vector3(0.75, 1.85, z),
      new THREE.Vector3(0.4, 0.9, z),
      new THREE.Vector3(0.12, -0.2, z),
      new THREE.Vector3(0.0, -1.05, z),
    ];

    circuitGroup.add(tubeAlong(leftPath, 0.028, 0x55f1ef));
    circuitGroup.add(tubeAlong(rightPath, 0.028, 0x55f1ef));

    [...leftPath, ...rightPath].forEach((p) => {
      const nodeGeo = new THREE.SphereGeometry(0.05, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.copy(p);
      circuitGroup.add(node);
      const glow = glowSprite("rgba(85,241,239,0.9)", 0.5);
      glow.position.copy(p);
      circuitGroup.add(glow);
    });

    vGroup.add(circuitGroup);
    vGroup.scale.setScalar(0.92);
    scene.add(vGroup);

    const backGlow = glowSprite("rgba(85,241,239,0.4)", 5.5);
    backGlow.position.set(0, 0, -2.4);
    scene.add(backGlow);

    // ---------- interaction ----------
    let isDragging = false;
    let lastX = 0,
      lastY = 0;
    let targetRotY = 0.35,
      targetRotX = -0.08;
    let currentRotY = targetRotY,
      currentRotX = targetRotX;
    let idleTimer = 0;

    function onPointerDown(e: PointerEvent) {
      isDragging = true;
      idleTimer = 0;
      lastX = e.clientX;
      lastY = e.clientY;
    }
    function onPointerMove(e: PointerEvent) {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      targetRotY += dx * 0.006;
      targetRotX += dy * 0.006;
      targetRotX = Math.max(-0.9, Math.min(0.9, targetRotX));
    }
    function onPointerUp() {
      isDragging = false;
    }
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      camera.position.z += e.deltaY * 0.003;
      camera.position.z = Math.max(4.5, Math.min(11, camera.position.z));
    }

    const canvas = renderer.domElement;
    canvas.style.touchAction = "none";
    canvas.style.cursor = "grab";
    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    // ---------- resize ----------
    const resizeObserver = new ResizeObserver(() => {
      const w = container.clientWidth,
        h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // ---------- animation loop ----------
    const clock = new THREE.Clock();
    let frameId: number;
    function animate() {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const delta = clock.getDelta();

      if (!isDragging) {
        idleTimer += delta;
        if (idleTimer > 1.6) {
          targetRotY += 0.0022;
        }
      }

      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentRotX += (targetRotX - currentRotX) * 0.08;
      vGroup.rotation.y = currentRotY;
      vGroup.rotation.x = currentRotX;

      const pulse = 0.65 + Math.sin(t * 1.6) * 0.35;
      glowLightA.intensity = 2.4 + pulse * 1.6;
      glowLightB.intensity = 2.4 + pulse * 1.6;
      glowLightC.intensity = 1.8 + pulse * 1.2;

      vGroup.position.y = Math.sin(t * 0.6) * 0.06;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      renderer.dispose();
      glassGeo.dispose();
      glassMat.dispose();
      rimMat.dispose();
      if (container.contains(canvas)) container.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full cursor-grab active:cursor-grabbing"
      aria-hidden="true"
    />
  );
}
