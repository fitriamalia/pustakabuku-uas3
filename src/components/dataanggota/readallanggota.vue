<script>
import axios from 'axios';
import { ref } from 'vue';

const readAllAnggota = 'https://fitriamalia-pustakabuku.000webhostapp.com/readallanggota.php';
const insertAnggota = 'https://fitriamalia-pustakabuku.000webhostapp.com/insertanggota.php';
const delAnggota = 'https://fitriamalia-pustakabuku.000webhostapp.com/deleteanggota.php';

export default {
  data() {
    return {
      anggota: ref([]),
      insertnomor: '',
      insertnama: '',
      insertjenis_kelamin: '',
      insertalamat: '',
      insertno_hp: '',
    };
  },
  mounted() {
    this.readAnggota();
  },
  methods: {
    refreshpage() {
      location.reload();
    },

    readAnggota() {
      axios
          .get(readAllAnggota)
          .then((resp) => {
            console.log(resp);
            this.anggota = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },

    postAnggota() {
      let formData = new FormData();

      formData.append('nomor', this.insertnomor);
      formData.append('nama', this.insertnama);
      formData.append('jenis_kelamin', this.insertjenis_kelamin);
      formData.append('alamat', this.insertalamat);
      formData.append('no_hp', this.insertno_hp);

      axios
          .post(insertAnggota, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.readAnggota();
            this.insertnomor = '';
            this.insertnama = '';
            this.insertjenis_kelamin = '';
            this.insertalamat = '';
            this.insertno_hp = '';
          })
          .catch((err) => {
            console.log(err);
          });
    },

    deleteAnggota(nomor) {
      if (confirm('Apakah Anda yakin ingin menghapus data anggota?')) {
        axios
            .get(delAnggota + '?nomor=' + nomor)
            .then((resp) => {
              console.log(resp);
              this.readAnggota();
            })
            .catch((err) => {
              console.log(err);
            });
      }
    },
  },
};
</script>

<template>
  <div class="intro">
    <div>
      <div class="welcome">Daftar Anggota Perpustakaan Digital</div>
    </div>

    <thead>
    <tr>
      <td class="border" style="text-align: center;width: 250px"><strong>Nomor Anggota</strong></td>
      <td class="border" style="text-align: center;width: 550px"><strong>Nama Anggota</strong></td>
      <td class="border" style="text-align: center;width: 250px"><strong>Jenis Kelamin</strong></td>
      <td class="border" style="text-align: center;width: 500px"><strong>Alamat</strong></td>
      <td class="border" style="text-align: center;width: 300px"><strong>Nomor HP</strong></td>
      <td class="border" style="text-align: center;width: 300px"><strong>Tanggal Terdaftar</strong></td>
      <td class="border" style="text-align: center;width: 500px"><strong>Aksi</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="data in anggota">
      <td>{{ data.nomor }}</td>
      <td>{{ data.nama }}</td>
      <td>{{ data.jenis_kelamin }}</td>
      <td>{{ data.alamat }}</td>
      <td>{{ data.no_hp }}</td>
      <td>{{ data.tanggal_terdaftar }}</td>
      <td>
        <router-link
            :to="{ name: 'updateanggota', params: { nomor: data.nomor } }"
            class="btn btn-warning me-3">
          Update
        </router-link>
        <button
            type="button"
            class="btn btn-danger"
            v-on:click="deleteAnggota(data.nomor)">
          Delete
        </button>
      </td>
    </tr>
    </tbody>

    <hr>

    <div class="modal-body">
      <input
          class="form-control"
          type="text"
          v-model="insertnomor"
          placeholder="Nomor Anggota"
          aria-label="default input example" /><br />
      <input
          class="form-control"
          type="text"
          v-model="insertnama"
          placeholder="Nama Anggota"
          aria-label="default input example" /><br />
      <input
          class="form-control"
          type="text"
          v-model="insertjenis_kelamin"
          placeholder="Jenis Kelamin"
          aria-label="default input example" /><br />
      <input
          class="form-control"
          type="text"
          v-model="insertalamat"
          placeholder="Alamat"
          aria-label="default input example" /><br />
      <input
          class="form-control"
          type="text"
          v-model="insertno_hp"
          placeholder="Nomor HP"
          aria-label="default input example" /><br />
      <button
          type="button"
          class="btn btn-primary"
          v-on:click="postAnggota()">
        Tambah Anggota
      </button>
      <button
          class="btn btn-secondary ms-2"
          @click="refreshpage">
        Refresh
      </button>
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
  padding-bottom: 10pt;
}

</style>