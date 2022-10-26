/**
 * You get the imports for free
 */
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

import { useRef, useEffect } from "react";
function Three() {
	const canvasRef = useRef(null);

	useEffect(() => {
		/**
		 * Base
		 */

		// Canvas
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		console.log(canvas);
		// Scene
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
		camera.position.set(0, 0, 5);
		camera.lookAt(0, 0, 0);

		/**
		 * Models
		 */
		const dracoloader = new DRACOLoader();
		dracoloader.setDecoderPath("./draco/");
		// dracoloader = complete package waarvan gltf loader een onderdeel van is (wrapper rond gltf)

		const gltfloader = new GLTFLoader();
		gltfloader.setDRACOLoader(dracoloader);

		gltfloader.load("./models/pc/scene.gltf", (gltf) => {
			gltf.scene.scale.set(3, 3, 3);
			scene.add(gltf.scene);
		});

		/**
		 * Lights
		 */
		const light = new THREE.AmbientLight(0xffffff, 1);
		light.castShadow = true;
		scene.add(light);
		//light.shadow.mapSize.width = 2048;

		/**
		 * Sizes
		 */

		/**
		 * Camera
		 */
		// Base camera

		// Controls

		/**
		 * Renderer
		 */

		//make renderer using canvas
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
			alpha: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(canvas.width, canvas.height);
		renderer.setClearColor(0x000000, 1);

		// Controls
		const controls = new OrbitControls(camera, renderer.domElement);

		function animate() {
			renderer.render(scene, camera);
			controls.update();
		}
		renderer.setAnimationLoop(animate);

		const resizeEventListener = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			camera.aspect = canvas.width / canvas.height;
			camera.updateProjectionMatrix();
			renderer.setSize(canvas.width, canvas.height);
		};
		window.addEventListener("resize", resizeEventListener);
		resizeEventListener();

		return () => {
			window.removeEventListener("resize", resizeEventListener);
			renderer.dispose();
		};
	}, [canvasRef]);

	return <canvas ref={canvasRef} />;
}

export default Three;
