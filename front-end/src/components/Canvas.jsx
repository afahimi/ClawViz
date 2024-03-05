import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const light = new THREE.PointLight(0xff0000, 10, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff6347,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    const controls = new OrbitControls(camera, renderer.domElement);

    let hue = 0

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      torus.rotation.z += 0.01;
      
      hue += 0.0001;
      if (hue > 1) hue = 0;
    
      torus.material.color.setHSL(hue, 1, 0.5);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0" id="bg" />;
};

export default Canvas;
