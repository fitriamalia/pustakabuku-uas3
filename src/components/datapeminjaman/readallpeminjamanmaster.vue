<script>
import axios from 'axios';
import { ref } from 'vue';

const readallpeminjaman = 'https://fitriamalia-pustakabuku.000webhostapp.com/readallpeminjaman.php';

export default {
  data() {
    return {
      readallpeminjaman: ref([]),
    };
  },
  mounted() {
    this.readAllPeminjaman();
  },
  methods: {
    refreshpage() {
      location.reload();
    },
    readAllPeminjaman() {
      axios
          .get(readallpeminjaman)
          .then((resp) => {
            console.log(resp);
            this.readallpeminjaman = resp.data;
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
      <div class="welcome">Daftar Peminjaman Buku Perpustakaan Digital</div>
    </div>

    <div class="container d-flex flex-column align-items-lg-center">
      <table>
        <thead>
        <tr>
          <td class="border" style="text-align: center;width: 500px"><strong>ID</strong></td>
          <td class="border" style="text-align: center;width: 1000px"><strong>Tanggal Peminjaman</strong></td>
          <td class="border" style="text-align: center;width: 1000px"><strong>Nomor Anggota</strong></td>
          <td class="border" style="text-align: center;width: 1000px"><strong>Status Peminjaman</strong></td>
          <td class="border" style="text-align: center;width: 1000px"><strong>Tanggal Pengembalian</strong></td>
          <td class="border" style="text-align: center;width: 1000px"><strong>Durasi Keterlambatan</strong></td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in readallpeminjaman" >
          <td class="border" style="text-align: center">{{ data.id_peminjaman }}</td>
          <td class="border" style="text-align: center">{{ data.tanggal_peminjaman }}</td>
          <td class="border" style="text-align: center">{{ data.nomor_anggota }}</td>
          <td class="border" style="text-align: center">{{ data.status_peminjaman }}</td>
          <td class="border" style="text-align: center">{{ data.tanggal_pengembalian }}</td>
          <td class="border" style="text-align: center">{{ data.durasi_keterlambatan }}</td>
        </tr>
        </tbody>
      </table>

      <div class="d-flex flex-row align-items-start">

        <div class="me-5">
          <h5 class="mb-3">
            Tampilkan Menurut Status
          </h5>
          <div  class="d-flex flex-column" >
            <router-link
                :to="{ name: 'selectbystatusdikembalikan', params: { status_peminjaman: 'Dikembalikan' } }"
                class="btn btn-outline-primary me-2 mb-3">
              Dikembalikan
            </router-link>

            <router-link
                :to="{ name: 'selectbystatusdipinjam', params: { status_peminjaman: 'Dipinjam' } }"
                class="btn btn-outline-primary me-2 mb-3">
              Dipinjam
            </router-link>

            <router-link
                to="/selectbyidpeminjaman"
                class="btn btn-outline-secondary me-2">
              Cari berdasarkan ID
            </router-link>
          </div>
        </div>

        <div class="me-51">
          <h5 class="mb-3">Menu Peminjaman</h5>
          <div class="d-flex flex-column">
            <router-link
                to="/insertpeminjamanmaster"
                class="btn btn-primary me-2 mb-3">
              Peminjaman Master
            </router-link>
            <router-link
                to="/insertpeminjamandetail"
                class="btn btn-primary me-2 mb-3">
              Peminjaman Detail
            </router-link>
          </div>
        </div>
      </div>
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

.me-51 {
  padding-bottom: 20pt;
  padding-top: 20pt;
  padding-left: 20pt;
}

.me-5 {
  padding-top: 20pt;
  padding-bottom: 20pt;
}

.d-flex {
  padding-top: 15pt;
}

</style>
