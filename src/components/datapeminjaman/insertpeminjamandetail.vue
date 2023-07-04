<script>
import axios from 'axios';

const insertPeminjamanDetail = 'https://fitriamalia-pustakabuku.000webhostapp.com/insertpeminjamandetail.php';

export default {
  data(){
    return{
      insertid_peminjaman_master:'',
      insertkode_buku:''
    };
  },
  methods: {
    refreshpage() {
      location.reload();
    },

    insertPeminjamanDetail(){
      let formData = new FormData();

      formData.append('id_peminjaman_master', this.insertid_peminjaman_master);
      formData.append('kode_buku', this.insertkode_buku);

      axios
          .post(insertPeminjamanDetail, formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.insertid_peminjaman_master = '';
            this.insertkode_buku = '';
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
      <div class="welcome">Tambahkan Data Peminjaman Detail</div>
    </div>

    <div class="container d-flex flex-column align-items-lg-center">
      <div class="modal-body col-5">
        <input
            class="form-control"
            type="text"
            v-model="insertid_peminjaman_master"
            placeholder="ID Peminjaman Master"
            aria-label="default input example" /><br />
        <input
            class="form-control text-uppercase"
            type="text"
            v-model="insertkode_buku"
            placeholder="Kode Buku"
            aria-label="default input example" /><br />
        <button
            type="button"
            class="btn btn-primary"
            v-on:click="insertPeminjamanDetail()">
          Tambahkan
        </button>
        <div class="d-flex flex-row mt-5">
          <router-link
              to="/readallpeminjamandetail"
              class="btn btn-outline-primary me-3">
            Data Peminjaman Detail
          </router-link>
          <button
              class="btn btn-secondary ms-3"
              @click="refreshpage">
            Refresh
          </button>
          <router-link
              to="/readallpeminjamanmaster"
              class="btn btn-secondary ms-3 ">
            Back
          </router-link>
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
  background-color: #D3D3D3;
}

.welcome {
  font-size: 20pt;
  text-align: center;
  padding-top: 10pt;
  font-weight: bold;
  padding-bottom: 20pt;
}

.d-flex {
  padding-top: 15pt;
  padding-bottom: 15pt;
}

.container {
  padding-top: 20pt;
}

</style>
