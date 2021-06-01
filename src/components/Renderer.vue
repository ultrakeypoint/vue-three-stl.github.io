<template>
  <div class="scene-3" ref="container">
  <figure class="scene-3__item">
    <div ref="aspect" class="scene-3__item-aspect" />
  </figure>
  <canvas ref="canvas" class="scene-3__canvas" />
</div>
</template>

<script>
import * as THREE from "three";

let scene, camera, renderer, plane;

export default {
  name: 'Renderer',
  data() {
    return {
      aspect: {},
    };
  },
  methods: {
    init() {

      scene = new THREE.Scene();

      camera = new THREE.OrthographicCamera(
        window.innerWidth / -2,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerHeight / -2,
        1,
        1000
      );

      camera.position.z = 1;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: this.$refs.canvas,
      });

      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.PlaneBufferGeometry(
        this.aspect.data.width,
        this.aspect.data.height,
        5
      );

      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

      plane = new THREE.Mesh(geometry, material);

      scene.add(plane);

      renderer.render(scene, camera);
    },
    loadTexture(loader, url) {
      return new Promise((resolve) => {
        loader.load(url, (texture) => {
          resolve(texture);
        });
      });
    },
  },
  mounted() {
    this.aspect = {
      ref: this.$refs.aspect,
      data: this.$refs.aspect.getBoundingClientRect(),
    };

    this.init();
  },
};
</script>

<style>
.scene-3 {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scene-3__item {
  position: relative;
  display: flex;
  margin: 0;
}

.scene-3__item-aspect {
  padding-top: 60%;
}

.scene-3__item-img {
  display: none;
}

.scene-3__canvas {
  width: 100%;
  height: 100%;
}
</style>
