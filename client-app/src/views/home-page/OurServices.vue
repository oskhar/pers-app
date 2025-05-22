<!-- src/components/Services.vue -->
<template>
  <section id="services" class="services-section">
    <h2>Our Service</h2>
    <p>{{ description }}</p>
    <div class="service-list">
      <div v-for="service in services" :key="service.title" class="service-item">
        <h3>{{ service.title }}</h3>
        <a :href="service.link">Read More</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  props: ['services', 'description']
}
</script>

<style scoped>
.services-section {
  padding: 60px 20px;
}
.service-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.service-item {
  flex: 1 1 200px;
  border: 1px solid #ccc;
  padding: 20px;
}
.service-item h3 {
  margin: 0 0 10px;
}
.service-item a {
  color: #0066cc;
  text-decoration: none;
}
</style>
