<template>
  <div id="template"></div>
</template>

<script>

import * as THREE from "three";
// import Stats from 'three/examples/jsm/libs/stats.module';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let container;
let camera, cameraTarget, scene, renderer;

export default {
  name: 'Sample',
  data() {
    return {};
  },
  methods: {
    init() {

      container = document.getElementById('template');

			camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
			camera.position.set( 3, 0.15, 3 );

			cameraTarget = new THREE.Vector3( 0, - 0.25, 0 );

			scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xffffff );
			// scene.fog = new THREE.Fog( 0x72645b, 2, 15 );

			// const plane = new THREE.Mesh(
			// 	new THREE.PlaneGeometry( 40, 40 ),
			// 	new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
			// );
			// plane.rotation.x = - Math.PI / 2;
			// plane.position.y = - 0.5;
			// scene.add( plane );
      //
			// plane.receiveShadow = true;

			// ASCII file
			const loader = new STLLoader();
			// loader.load('./models/stl/sample/sample.stl', function (geometry) {
      //
			// 	const material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
			// 	const mesh = new THREE.Mesh( geometry, material );
      //
			// 	mesh.position.set( 0, - 0.25, 0.6 );
			// 	mesh.rotation.set( 0, - Math.PI / 2, 0 );
			// 	mesh.scale.set( 0.5, 0.5, 0.5 );
      //
			// 	mesh.castShadow = true;
			// 	mesh.receiveShadow = true;
      //
			// 	scene.add(mesh);
			// });
      //
			// loader.load('./models/stl/sample/sample2.stl', function (geometry) {
      //
			// 	const material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
			// 	const mesh = new THREE.Mesh( geometry, material );
      //
      //   mesh.position.set( 0.136, - 0.37, - 0.6 );
      //   mesh.rotation.set( - Math.PI / 2, 0.3, 0 );
      //   mesh.scale.set( 2, 2, 2 );
      //
			// 	mesh.castShadow = true;
			// 	mesh.receiveShadow = true;
      //
			// 	scene.add(mesh);
			// });

			// loader.load('./models/stl/sample/sample3.stl', function (geometry) {
      //
			// 	const material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
			// 	const mesh = new THREE.Mesh( geometry, material );
      //
      //   mesh.position.set( 0, 0.1, 0 );
      //   mesh.rotation.set( - Math.PI / 2.5, 0, 0 );
      //   mesh.scale.set( 0.5, 0.5, 0.5);
      //
			// 	mesh.castShadow = true;
			// 	mesh.receiveShadow = true;
      //
			// 	scene.add(mesh);
			// });
      //
			// loader.load('./models/stl/sample/sample4.stl', function (geometry) {
      //
      //   console.log(geometry);
      //
			// 	const material = new THREE.MeshPhongMaterial( { color: 0x076dd9, specular: 0x111111, shininess: 200 } );
			// 	// const material = new THREE.MeshPhongMaterial     ( {  } );
			// 	const mesh = new THREE.Mesh( geometry, material);
      //
      //   mesh.position.set( 0, 0.1, 0 );
      //   mesh.rotation.set( - Math.PI / 2.5, 0, 0 );
      //   mesh.scale.set( 0.5, 0.5, 0.5);
      //
			// 	mesh.castShadow = true;
			// 	mesh.receiveShadow = true;
      //
			// 	scene.add(mesh);
			// });

			loader.load('./models/stl/sample/s-1.stl', function (geometry) {

        console.log(geometry);

				const material = new THREE.MeshPhongMaterial( { color: 0x076dd9, specular: 0xffffff, shininess: 0 } );
				// const material = new THREE.MeshPhongMaterial     ( {  } );
				const mesh = new THREE.Mesh( geometry, material);

        mesh.position.set( 0, 0.1, 0 );
        mesh.rotation.set( - Math.PI / 2.6, 0, 0 );
        mesh.scale.set( 0.8, 0.8, 0.8);

				// mesh.castShadow = true;
				// mesh.receiveShadow = true;

				scene.add(mesh);
			});

			loader.load('./models/stl/sample/s-2.stl', function (geometry) {

				const material = new THREE.MeshPhongMaterial( {
          color: 0x00eb73,
          specular: 0x111111,
          shininess: 200,

        });
				const mesh = new THREE.Mesh( geometry, material);

        mesh.position.set( 0, 0.1, 0 );
        mesh.rotation.set( - Math.PI / 2.6, 0, 0 );
        mesh.scale.set( 0.8, 0.8, 0.8);

				mesh.castShadow = true;
				mesh.receiveShadow = true;

				scene.add(mesh);
			});

			// Lights
      // const color = 0xFFFFFF;
      // const intensity = 1;
      // const light = new THREE.AmbientLight(color, intensity);
      // scene.add(light);

      const skyColor = 0xffffff;  // light blue
      const groundColor = 0xffffff;  // brownish orange
      const intensity = 1;
      const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
      scene.add(light);

      //
			// scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );
      //
			// this.addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
			// this.addShadowedLight( 0.5, 1, - 1, 0xffaa00, 1 );

			// renderer
			renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.shadowMap.enabled = true;

			container.appendChild( renderer.domElement );

      const controls = new OrbitControls( camera, renderer.domElement );
      controls.update();

			// stats
			// stats = new Stats();
			// container.appendChild( stats.dom );

			window.addEventListener('resize', this.onWindowResize);
      window.addEventListener('mousedown', this.onDocumentMouseDown, false);
    },
    addShadowedLight(x, y, z, color, intensity) {

      const directionalLight = new THREE.DirectionalLight( color, intensity );
			directionalLight.position.set( x, y, z );
			scene.add( directionalLight );

			directionalLight.castShadow = true;

			const d = 1;
			directionalLight.shadow.camera.left = - d;
			directionalLight.shadow.camera.right = d;
			directionalLight.shadow.camera.top = d;
			directionalLight.shadow.camera.bottom = - d;

			directionalLight.shadow.camera.near = 1;
			directionalLight.shadow.camera.far = 4;

			directionalLight.shadow.bias = - 0.002;
    },
    animate() {

      requestAnimationFrame( this.animate );
			this.render();
			// stats.update();
    },
    render() {

      // const timer = Date.now() * 0.0005;
			// camera.position.x = Math.cos( timer ) * 3;
			// camera.position.z = Math.sin( timer ) * 3;
      //
			camera.lookAt( cameraTarget );

			renderer.render( scene, camera );
    },
    onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

    },
    onDocumentMouseDown() {

      console.log('onDocumentMouseDown');
    }
  },
  mounted() {

    this.init();
    this.animate();
  },
};
</script>

<style>

</style>
