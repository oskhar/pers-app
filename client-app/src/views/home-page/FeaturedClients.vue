<!-- FeaturedClients.vue -->
<template>
  <v-container class="py-16 grey lighten-4">
    <h2 class="text-center mb-10">Our Featured Clients</h2>
    <v-row>
      <v-col cols="6" md="2" v-for="n in 6" :key="n">
        <v-img :src="`/logos/client${n}.png`" contain height="60" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FeaturedClients",
};
</script>
