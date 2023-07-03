import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import readallbuku from "@/components/databuku/readallbuku.vue";
import updatebuku from "@/components/databuku/updatebuku.vue";
import readallkategori from "@/components/kategoribuku/readallkategori.vue";
import updatekategori from "@/components/kategoribuku/updatekategori.vue";
import Home from "@/components/view/Home.vue";
import DataBuku from "@/components/view/DataBuku.vue";
import KategoriBuku from "@/components/view/KategoriBuku.vue";
import DataAnggota from "@/components/view/DataAnggota.vue";
import readallanggota from "@/components/dataanggota/readallanggota.vue";
import updateanggota from "@/components/dataanggota/updateanggota.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/databuku",
        name: "DataBuku",
        component: DataBuku
    },
    {
        path: "/kategoribuku",
        name: "KategoriBuku",
        component: KategoriBuku
    },
    {
        path: "/dataanggota",
        name: "DataAnggota",
        component: DataAnggota
    },
    {
        path: "/readallbuku",
        name: "readallbuku",
        component: readallbuku
    },
    {
        path: "/updatebuku/:kode_buku",
        name: "updatebuku",
        component: updatebuku
    },
    {
        path: "/readallkategori",
        name: "readallkategori",
        component: readallkategori
    },
    {
        path: "/updatekategori/:kode_kategori",
        name: "updatekategori",
        component: updatekategori
    },
    {
        path: "/readallanggota",
        name: "readallanggota",
        component: readallanggota
    },
    {
        path: "/updateanggota/:nomor",
        name: "updateanggota",
        component: updateanggota
    },
];

const router= createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes
});


export default router;

createApp(App).use(router).mount('#app')
