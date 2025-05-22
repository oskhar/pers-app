<!-- src/components/Partners.vue -->
<template>
  <section id="partners" class="partners-section">
    <h2>Meet Our Partners</h2>
    <div class="partners-list">
      <div v-for="partner in data" :key="partner.name" class="partner-item">
        <h3>{{ partner.name }}</h3>
        <p>{{ partner.position }}</p>
        <a :href="partner.link">Read More</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Partners",
  props: ["data"],
};
</script>

<style scoped>
.partners-section {
  padding: 60px 20px;
}
.partners-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.partner-item {
  flex: 1 1 200px;
  border: 1px solid #ccc;
  padding: 20px;
}
.partner-item h3 {
  margin: 0;
}
.partner-item a {
  color: #0066cc;
  text-decoration: none;
}
</style>
