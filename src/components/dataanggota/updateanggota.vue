<script>
import axios from 'axios';
import { ref } from 'vue';

const selByNomor = 'https://fitriamalia-pustakabuku.000webhostapp.com/selectbynomor.php';
const urlUpdate = 'https://fitriamalia-pustakabuku.000webhostapp.com/updateanggota.php';

export default {
  data() {
    return {
      selectAnggota: ref([]),
      updatenomor: '',
      updatenama: '',
      updatejenis_kelamin: '',
      updatealamat: '',
      updateno_hp: '',
    };
  },
  mounted() {
    this.getAnggota();
    this.updateAnggota();
  },
  methods: {
    getAnggota() {
      axios
          .get(selByNomor + '?nomor=' + this.$route.params.nomor)
          .then((resp) => {
            console.log(resp);
            this.selectAnggota = resp.data;
            this.updatenomor = this.selectAnggota.nomor;
            this.updatenama = this.selectAnggota.nama;
            this.updatejenis_kelamin = this.selectAnggota.jenis_kelamin;
            this.updatealamat = this.selectAnggota.alamat;
            this.updateno_hp = this.selectAnggota.no_hp;
          })
          .catch((err) => {
            console.log(err);
          });
    },

    updateAnggota() {
      let formData = new FormData();

      formData.append('nomor', this.$route.params.nomor);
      formData.append('nama', this.updatenama);
      formData.append('jenis_kelamin', this.updatejenis_kelamin);
      formData.append('alamat', this.updatealamat);
      formData.append('no_hp', this.updateno_hp);

      axios
          .post(urlUpdate, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.getAnggota();
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
      <div class="welcome">Update Data Anggota Perpustakaan Digital</div>
    </div>

    <div class="modal-body">
      <input
          class="form-control"
          type="text"
          v-model="updatenomor"
          placeholder="Nomor Anggota"
          aria-label="default input example" /><br />
      <input
          class="form-control"
          type="text"
          v-model="updatenama"
          placeholder="Nama Anggota"
          aria-label="default input example" /><br />
      <input
          class="form-control"
          type="text"
          v-model="updatejenis_kelamin"
          placeholder="Jenis Kelamin"
          aria-label="default input example" /><br />
      <input
          class="form-control"
          type="text"
          v-model="updatealamat"
          placeholder="Alamat"
          aria-label="default input example" /><br />
      <input
          class="form-control"
          type="text"
          v-model="updateno_hp"
          placeholder="Nomor HP"
          aria-label="default input example" /><br />
      <button
          type="button"
          class="btn btn-primary me-3"
          v-on:click="updateAnggota()">
        Update Anggota
      </button>
      <router-link
          to="/readallanggota"
          class="btn btn-secondary me-5">
        Back
      </router-link>
    </div>

    <hr>

    <footer class="text-black text-center pb-5">
      <p>&copy; 2023 <a href="#" class="text-black fw-bold">Perpustakaan Digital</a> &middot; Created by Fitri Amalia</p>
    </footer>
  </div>

</template>

<style scoped>
.intro {
  padding-left: 100pt;
  padding-right: 100pt;
  background-color: #D3D3D3;
}

.welcome {
  font-size: 20pt;
  text-align: center;
  padding-top: 10pt;
  font-weight: bold;
  padding-bottom: 20pt;
}

</style>