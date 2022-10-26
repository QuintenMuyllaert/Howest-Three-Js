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
		console.log(canvas);
		// Scene

		/**
		 * Models
		 */

		/**
		 * Lights
		 */

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
	}, [canvasRef]);

	return <canvas ref={canvasRef} />;
}

export default Three;
