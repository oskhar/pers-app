<!-- src/components/Header.vue -->
<template>
  <header class="app-header">
    <div class="logo">{{ data.title }}</div>
    <nav>
      <ul>
        <li v-for="item in data.nav" :key="item.name">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["data"],
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.logo {
  font-size: 1.5em;
  font-weight: bold;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}
nav a {
  text-decoration: none;
  color: #333;
}
</style>
