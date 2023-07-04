<script>
import axios from 'axios';

const insertPeminjaman = 'http://fitriamalia-pustakabuku.000webhostapp.com/insertpeminjaman.php';

export default {
  data(){
    return{
      insertnomor_anggota:'',
      insertstatus_peminjaman:'',
      inserttanggal_pengembalian:'',
      insertdurasi_keterlambatan:''
    };
  },
  methods: {
    refreshpage() {
      location.reload();
    },

    insertPeminjaman(){
      let formData = new FormData();

      formData.append('nomor_anggota', this.insertnomor_anggota);
      formData.append('status_peminjaman', this.insertstatus_peminjaman);
      formData.append('tanggal_pengembalian', this.inserttanggal_pengembalian);
      formData.append('durasi_keterlambatan', this.insertdurasi_keterlambatan);

      axios
          .post(insertPeminjaman, formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.insertnomor_anggota = '';
            this.insertstatus_peminjaman = '';
            this.inserttanggal_pengembalian = '';
            this.insertdurasi_keterlambatan = '';
          })
          .catch((err) => {
            console.log((err));
          });
    },
  },
};
</script>

<template>

  <div class="intro">
    <div>
      <div class="welcome">Tambahkan Data Peminjaman Master</div>
    </div>

    <div class="kolom">
      <div class="modal-body ms-5">
        <input
            class="form-control"
            type="text"
            v-model="insertnomor_anggota"
            placeholder="Nomor Anggota"
            aria-label="default input example" /><br />
        <input
            class="form-control"
            type="text"
            v-model="insertstatus_peminjaman"
            placeholder="Status Peminjaman (Dipinjam/Dikembalikan)"
            aria-label="default input example" /><br />
        <input
            class="form-control"
            type="date"
            v-model="inserttanggal_pengembalian"
            placeholder="Tanggal Pengembalian"
            aria-label="default input example" /><br />
        <input
            class="form-control"
            type="date"
            v-model="insertdurasi_keterlambatan"
            placeholder="Durasi Keterlambatan"
            aria-label="default input example" /><br />
        <button
            type="button"
            class="btn btn-primary"
            v-on:click="insertPeminjaman()">
          Tambahkan
        </button>
        <button
            class="btn btn-secondary ms-3"
            @click="refreshpage">
          Refresh
        </button>
        <router-link
            to="/readallpeminjamanmaster"
            class="btn btn-secondary ms-3">
          Back
        </router-link>
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
  background-color: #D3D3D3;
}

.welcome {
  font-size: 20pt;
  text-align: center;
  padding-top: 10pt;
  font-weight: bold;
  padding-bottom: 20pt;
}

.kolom {
  padding-right: 150pt;
  padding-left: 150pt;
  padding-top: 20pt;
  padding-bottom: 20pt;
}

</style>