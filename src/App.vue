<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Header from "./components/Header";
import store from './store/store'

export default {
  components: {
    Header,
  },
  created:{
    initAuth(){
      this.$store.dispatch("initAuth")
    }
  }
};
</script>

<style >
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-leave {
  
}
.fade-leave-active {
  transition: opacity 0.3s ease;
  opacity: 0;
}
</style>
