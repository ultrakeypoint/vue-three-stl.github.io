<template>
  <div class="">
    <h1>{{ count }}</h1><br>
    <h2>computed: {{ calculated }}</h2>
    <h2>watch: {{ watchedCount }}</h2>
    <button @click="count --">카운트 감소</button>
  </div>
</template>

<script>
export default {
  name: 'Viewer',
  data() {
    return {
      count: 3,
      watchedCount: 9,
    }
  },
  computed: {
  	calculated() {
      if(this.count === 2) {
        alert('값이 2가 되었습니다.')
      }
      console.log('computed');
    	return this.count * 3;
    }
  },
  watch: {
    count: function (newVal, oldVal) {

      console.log('watch');
      console.log(newVal);
      console.log(oldVal);
    	this.watchedCount = newVal * 3
    }
  }
}
</script>

<style scoped>

</style>
