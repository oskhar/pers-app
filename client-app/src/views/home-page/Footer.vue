<!-- src/components/Footer.vue -->
<template>
  <footer class="app-footer">
    <p>{{ text }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["text"],
};
</script>

<style scoped>
.app-footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}
.app-footer p {
  margin: 0;
}
</style>
