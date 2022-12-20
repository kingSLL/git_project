<!-- ==========template=============-->
<template>
  <div class="home">
    <discover-nav-bar></discover-nav-bar>
    <div class="contant">
      <router-view></router-view>
    </div>
    <footer-cps></footer-cps>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import DiscoverNavBar from "@/components/discove_music/navigation_bar/discover_navbar.vue";
import footerCps from "@/components/discove_music/footer/footer_cps.vue";
</script>
<!-- ============style============== -->
<style scoped>
.contant {
  width: 980px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #ffffff;
}
</style>
