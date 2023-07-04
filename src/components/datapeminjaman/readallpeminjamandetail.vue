<script>
import axios from 'axios';
import { ref } from 'vue';

const readAllPeminjamanDetail = 'http://fitriamalia-pustakabuku.000webhostapp.com/readallpeminjamandetail.php';

export default {
  data() {
    return {
      readallpeminjamandetail: ref([]),
    };
  },
  mounted() {
    this.readAllPeminjamanDetail();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    readAllPeminjamanDetail() {
      axios
          .get(readAllPeminjamanDetail)
          .then((resp) => {
            console.log(resp);
            this.readallpeminjamandetail = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>

<template>

  <div class="intro">
    <div>
      <div class="welcome">Daftar Peminjaman Master Buku</div>
    </div>

    <div class="container d-flex flex-column align-items-lg-center" style="margin-top: 20pt">
      <table>
        <thead>
        <tr>
          <td class="border" style="text-align: center;width: 200px"><strong>ID Peminjaman Master</strong></td>
          <td class="border" style="text-align: center;width: 100px"><strong>Kode Buku</strong></td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in readallpeminjamandetail" >
          <td class="border" style="text-align: center">{{ data.id_peminjaman_master }}</td>
          <td class="border" style="text-align: center">{{ data.kode_buku }}</td>
        </tr>
        </tbody>
      </table>
      <router-link
          to="/insertpeminjamandetail"
          class="btn btn-secondary mt-3">
        Back
      </router-link>
    </div>

    <hr>

    <footer class="text-black text-center pb-5">
      <p>&copy; 2023 <a href="#" class="text-black fw-bold">Perpustakaan Digital</a> &middot; Created by Fitri
        Amalia</p>
    </footer>
  </div>

</template>

<style scoped>

.intro {
  padding-left: 250pt;
  padding-right: 250pt;
  background-color: #D3D3D3;
}

.welcome {
  font-size: 20pt;
  text-align: center;
  padding-top: 10pt;
  font-weight: bold;
  padding-bottom: 20pt;
}

.container {
  padding-bottom: 20pt;
}

</style>