<!-- CompanyProfileSection.vue -->
<template>
  <v-container class="py-12">
    <h2 class="text-center mb-6">Profil Perusahaan</h2>
    <v-row align="center">
      <v-col cols="12" md="6">
        <h3>Cerita Kami</h3>
        <p>
          Didirikan oleh profesional hukum berpengalaman, [Nama Perusahaan]
          tumbuh menjadi firma legal terpercaya. Kami melayani klien baik
          korporasi multinasional maupun individu, dengan fokus solusi jangka
          panjang.
        </p>
        <h3>Keunggulan Kami</h3>
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                - Berpengalaman luas dalam berbagai bidang hukum.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                - Tim ahli dengan pengalaman internasional.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                - Pendekatan layanan yang berfokus pada kebutuhan klien.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/meeting-room.jpg"
          alt="Ruang Rapat"
          height="300px"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CompanyProfileSection",
  // Komponen berisi deskripsi singkat perusahaan dan poin keunggulan.
  // Ganti teks sesuai profil perusahaan, gunakan fitur i18n jika perlu.
};
</script>

<style scoped>
/* Custom styling: misalnya menambah margin atau mengubah bullet style */
</style>
