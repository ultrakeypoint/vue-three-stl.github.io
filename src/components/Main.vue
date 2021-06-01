<template>
  <div id="nav">
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/viewer">Viewer</router-link></li>
      <li><router-link to="/viewport">Viewport</router-link></li>
      <li><router-link to="/renderer">Renderer</router-link></li>
      <li><router-link to="/stl_loader">STL_Loader</router-link></li>
      <li><router-link to="/sample">Sample</router-link></li>
    </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
.scene-3 {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
