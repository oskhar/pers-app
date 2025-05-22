<!-- src/App.vue -->
<template>
  <Header :data="content.header" />
  <HeroSection :data="content.hero" />
  <WhyChoose :data="content.whyChoose" />
  <Services
    :services="content.services"
    :description="content.servicesDescription"
  />
  <Partners :data="content.partners" />
  <Contact :data="content.contact" />
  <Footer :text="content.footer.text" />
</template>

<script>
import HeroSection from "@/views/home-page/HeroSection.vue";
import WhyChoose from "@/views/home-page/WhyChooseUs.vue";
import Services from "@/views/home-page/OurServices.vue";
import Partners from "@/views/home-page/PartnersSection.vue";
import Contact from "@/views/home-page/ContactSection.vue";
import Footer from "@/views/home-page/Footer.vue";
import Header from "@/views/home-page/Header.vue";

import content from "@/data/content.json";

export default {
  name: "HomePage",
  components: {
    Header,
    HeroSection,
    WhyChoose,
    Services,
    Partners,
    Contact,
    Footer,
  },
  data() {
    return { content };
  },
};
</script>

<style>
/* Gaya global sederhana */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
