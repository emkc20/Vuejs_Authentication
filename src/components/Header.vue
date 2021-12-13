<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
    <a class="navbar-brand" href="#">Auth İşlemleri</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/"
          tag="li"
          active-class="active"
          exact
          class="nav-item"
        >
          <a class="nav-link">Anasayfa</a>
        </router-link>

        <router-link
          to="/about"
          tag="li"
          active-class="active"
          class="nav-item"
        >
          <a class="nav-link">Hakkımızda</a>
        </router-link>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link" href="#">Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import store from "../store/store";

export default {
  methods: {
    logout() {
     this.$store.dispatch("logaout");
     // this.$store.commit("clearToken");
      this.$router.push("/auth");
    },
  },
  computed: {
    logoutClass() {
      return {
        "d-none": !this.$store.getters.isAuthenticated,
        //  'd-none': false
      };
    },
  },
};
</script>



