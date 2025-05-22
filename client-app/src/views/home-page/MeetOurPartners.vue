<!-- MeetOurPartners.vue -->
<template>
  <v-container class="py-16">
    <h2 class="text-center mb-10">Meet Our Partners</h2>
    <v-row justify="center">
      <v-col cols="6" md="2" v-for="n in 5" :key="n">
        <v-img :src="`/logos/partner${n}.png`" contain height="80" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MeetOurPartners",
};
</script>
