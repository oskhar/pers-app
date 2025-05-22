<!-- src/components/WhyChoose.vue -->
<template>
  <section id="about" class="why-choose">
    <h2>Why Choose Us?</h2>
    <div class="content">
      <div class="story">
        <h3>{{ data.storyTitle }}</h3>
        <p>{{ data.story }}</p>
      </div>
      <div class="advantages">
        <h3>Unique Advantages</h3>
        <ul>
          <li v-for="adv in data.advantages" :key="adv.title">
            <strong>{{ adv.title }}:</strong> {{ adv.text }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyChoose",
  props: ["data"],
};
</script>

<style scoped>
.why-choose {
  padding: 60px 20px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.story,
.advantages {
  flex: 1;
  min-width: 300px;
}
.advantages ul {
  list-style: disc;
  margin-left: 20px;
}
</style>
