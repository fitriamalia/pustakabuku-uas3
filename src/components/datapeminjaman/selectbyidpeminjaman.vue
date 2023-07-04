<script>
import axios from 'axios';
import { ref } from 'vue';

const selectbyidpeminjaman = 'https://fitriamalia-pustakabuku.000webhostapp.com/selectbyidpeminjaman.php';

export default {
  data() {
    return {
      selectbyidpeminjaman: ref([]),
      inputID: '',
    };
  },
  mounted() {
    this.selectByIdPeminjaman();
  },
  methods: {
    selectByIdPeminjaman() {
      axios
          .get(selectbyidpeminjaman + '?id_peminjaman=' + this.inputID)
          .then((resp) => {
            console.log(resp);
            this.selectbyidpeminjaman = resp.data;
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
      <div class="welcome">Tampilan Pencarian Berdasarkan ID</div>
    </div>

  <div class="container align-items-center">
    <div class="row container">
      <input
          style=""
          class="form-control col"
          type="text"
          v-model="inputID"
          placeholder="Cari berdasarkan ID"
          aria-label="default input example" /><br/>
      <button
          type="button"
          class="btn btn-secondary col-3"
          v-on:click="selectByIdPeminjaman">
        Cari
      </button>
    </div>

    <table>
      <thead>
      <tr>
        <td class="border" style="text-align: center;width: 150px"><strong>ID</strong></td>
        <td class="border" style="text-align: center;width: 200px"><strong>Tanggal Peminjaman</strong></td>
        <td class="border" style="text-align: center;width: 100px"><strong>Nomor Anggota</strong></td>
        <td class="border" style="text-align: center;width: 300px"><strong>Status Peminjaman</strong></td>
        <td class="border" style="text-align: center;width: 300px"><strong>Tanggal Pengembalian</strong></td>
        <td class="border" style="text-align: center;width: 300px"><strong>Durasi Keterlambatan</strong></td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in selectbyidpeminjaman" >
        <td class="border" style="text-align: center">{{ data.id_peminjaman }}</td>
        <td class="border" style="text-align: center">{{ data.tanggal_peminjaman }}</td>
        <td class="border" style="text-align: center">{{ data.nomor_anggota }}</td>
        <td class="border" style="text-align: center">{{ data.status_peminjaman }}</td>
        <td class="border" style="text-align: center">{{ data.tanggal_pengembalian }}</td>
        <td class="border" style="text-align: center">{{ data.durasi_keterlambatan }}</td>
      </tr>
      </tbody>
    </table>
    <router-link
        to="/readallpeminjamanmaster"
        class="btn btn-secondary mt-5">
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
  background-color: #D3D3D3;
  padding-right: 200pt;
  padding-left: 200pt;
}

.welcome {
  font-size: 20pt;
  text-align: center;
  padding-top: 10pt;
  font-weight: bold;
  padding-bottom: 20pt;
}

.container {
  padding-top: 20pt;
  padding-bottom: 40pt;
}

.row {
  padding-left: 175pt;
  padding-right: 175pt;
}

</style>
