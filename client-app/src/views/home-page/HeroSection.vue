<!-- src/components/HeroSection.vue -->
<template>
  <section class="hero-section" :style="{'background-image': data.image ? `url(${data.image})` : 'none'}">
    <div class="hero-content">
      <h1>{{ data.title }}</h1>
      <p>{{ data.text }}</p>
      <button>Read More</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: ['data']
}
</script>

<style scoped>
.hero-section {
  background-color: #f4f4f4;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 100px 20px;
}
.hero-content {
  background: rgba(255, 255, 255, 0.8);
  display: inline-block;
  padding: 20px;
}
.hero-section h1 {
  font-size: 2.5em;
  margin: 0;
}
.hero-section p {
  max-width: 800px;
  margin: 20px auto;
}
.hero-section button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
</style>
