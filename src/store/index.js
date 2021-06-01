import Vuex from "vuex";
import * as THREE from "three";
import TrackballControls from 'three-trackballcontrols';


export default new Vuex.Store({
  state: {
    width: 0,
    height: 0,
    camera: null,
    controls: null,
    scene: null,
    renderer: null,
    axisLines: [],
    pyramids: []
  },
  getters: {
    CAMERA_POSITION: state => {
      return state.camera ? state.camera.position : null;
    }
  },
  mutations: {

    SET_VIEWPORT_SIZE(state, { width, height }) {
      state.width = width;
      state.height = height;
    },
    INITIALIZE_RENDERER(state, el) {
      state.renderer = new THREE.WebGLRenderer({ antialias: true });
      state.renderer.setPixelRatio(window.devicePixelRatio);
      state.renderer.setSize(state.width, state.height);
      el.appendChild(state.renderer.domElement);
    },
    INITIALIZE_CAMERA(state) {
      state.camera = new THREE.PerspectiveCamera(
        60, 												// 1. Field of View (degrees)
        state.width / state.height, // 2. Aspect ratio
        1, 													// 3. Near clipping plane
        1000 												// 4. Far clipping plane
      );
      state.camera.position.z = 500;
    },
    INITIALIZE_CONTROLS(state) {
      state.controls = new TrackballControls(
        state.camera,
        state.renderer.domElement
      );
      state.controls.rotateSpeed = 1.0;
      state.controls.zoomSpeed = 1.2;
      state.controls.panSpeed = 0.8;
      state.controls.noZoom = false;
      state.controls.noPan = false;
      state.controls.staticMoving = true;
      state.controls.dynamicDampingFactor = 0.3;
      state.controls.keys = [65, 83, 68];
    },
    UPDATE_CONTROLS(state) {
      state.controls.update();
    },
    INITIALIZE_SCENE(state) {
      state.scene = new THREE.Scene();
      state.scene.background = new THREE.Color(0xcccccc);
      state.scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
      var geometry = new THREE.CylinderBufferGeometry(0, 10, 30, 4, 1);
      var material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        flatShading: true
      });
      for (var i = 0; i < 500; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 1000;
        mesh.position.y = (Math.random() - 0.5) * 1000;
        mesh.position.z = (Math.random() - 0.5) * 1000;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        state.pyramids.push(mesh);
      }
      state.scene.add(...state.pyramids);

      // lights
      var lightA = new THREE.DirectionalLight(0xffffff);
      lightA.position.set(1, 1, 1);
      state.scene.add(lightA);
      var lightB = new THREE.DirectionalLight(0x002288);
      lightB.position.set(-1, -1, -1);
      state.scene.add(lightB);
      var lightC = new THREE.AmbientLight(0x222222);
      state.scene.add(lightC);

      // Axis Line 1
      // var materialB = new THREE.LineBasicMaterial({ color: 0x0000ff });
      // var geometryB = new THREE.Geometry();
      // geometryB.vertices.push(new THREE.Vector3(0, 0, 0));
      // geometryB.vertices.push(new THREE.Vector3(0, 1000, 0));
      // var lineA = new THREE.Line(geometryB, materialB);
      // state.axisLines.push(lineA);

      // Axis Line 2
      // var materialC = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      // var geometryC = new THREE.Geometry();
      // geometryC.vertices.push(new THREE.Vector3(0, 0, 0));
      // geometryC.vertices.push(new THREE.Vector3(1000, 0, 0));
      // var lineB = new THREE.Line(geometryC, materialC);
      // state.axisLines.push(lineB);

      // Axis 3
      // var materialD = new THREE.LineBasicMaterial({ color: 0xff0000 });
      // var geometryD = new THREE.Geometry();
      // geometryD.vertices.push(new THREE.Vector3(0, 0, 0));
      // geometryD.vertices.push(new THREE.Vector3(0, 0, 1000));
      // var lineC = new THREE.Line(geometryD, materialD);
      // state.axisLines.push(lineC);

      // state.scene.add(...state.axisLines);
    },
    RESIZE(state, { width, height }) {
      state.width = width;
      state.height = height;
      state.camera.aspect = width / height;
      state.camera.updateProjectionMatrix();
      state.renderer.setSize(width, height);
      state.controls.handleResize();
      state.renderer.render(state.scene, state.camera);
    },
    SET_CAMERA_POSITION(state, { x, y, z }) {
      if (state.camera) {
        state.camera.position.set(x, y, z);
      }
    },
    RESET_CAMERA_ROTATION(state) {
      if (state.camera) {
        state.camera.rotation.set(0, 0, 0);
        state.camera.quaternion.set(0, 0, 0, 1);
        state.camera.up.set(0, 1, 0);
        state.controls.target.set(0, 0, 0);
      }
    },
    HIDE_AXIS_LINES(state) {
      state.scene.remove(...state.axisLines);
      state.renderer.render(state.scene, state.camera);
    },
    SHOW_AXIS_LINES(state) {
      state.scene.add(...state.axisLines);
      state.renderer.render(state.scene, state.camera);
    },
    HIDE_PYRAMIDS(state) {
      state.scene.remove(...state.pyramids);
      state.renderer.render(state.scene, state.camera);
    },
    SHOW_PYRAMIDS(state) {
      state.scene.add(...state.pyramids);
      state.renderer.render(state.scene, state.camera);
    }
  },
  actions: {

    INIT({ state, commit }, { width, height, el }) {

      return new Promise(resolve => {

        commit("SET_VIEWPORT_SIZE", { width, height });
        commit("INITIALIZE_RENDERER", el);
        commit("INITIALIZE_CAMERA");
        commit("INITIALIZE_CONTROLS");
        commit("INITIALIZE_SCENE");

        // Initial scene rendering
        state.renderer.render(state.scene, state.camera);

        // Add an event listener that will re-render
        // the scene when the controls are changed
        state.controls.addEventListener("change", () => {
          state.renderer.render(state.scene, state.camera);
        });

        resolve();
      });
    },
    ANIMATE({ state, dispatch }) {
      window.requestAnimationFrame(() => {
        dispatch("ANIMATE");
        state.controls.update();
      });
    }
  }
});
