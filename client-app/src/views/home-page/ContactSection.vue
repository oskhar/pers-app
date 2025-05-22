<!-- src/components/Contact.vue -->
<template>
  <section id="contact" class="contact-section">
    <h2>Get in Touch</h2>
    <div class="offices">
      <div class="office">
        <h3>JAKARTA OFFICE</h3>
        <p v-for="line in data.jakarta.address" :key="line">{{ line }}<br /></p>
        <p><strong>Phone:</strong> {{ data.jakarta.phone }}</p>
        <p><strong>Whatsapp:</strong> {{ data.jakarta.whatsapp }}</p>
      </div>
      <div class="office">
        <h3>SURABAYA OFFICE</h3>
        <p v-for="line in data.surabaya.address" :key="line">
          {{ line }}<br />
        </p>
        <p><strong>Phone:</strong> {{ data.surabaya.phone }}</p>
        <p><strong>Whatsapp:</strong> {{ data.surabaya.whatsapp }}</p>
      </div>
    </div>
    <p><strong>Email:</strong> {{ data.email }}</p>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: ["data"],
};
</script>

<style scoped>
.contact-section {
  padding: 60px 20px;
}
.offices {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.office {
  flex: 1 1 200px;
}
</style>
