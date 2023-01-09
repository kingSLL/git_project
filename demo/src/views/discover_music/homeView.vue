<!-- ==========template=============-->
<template>
  <div class="home">
    <discover-nav-bar></discover-nav-bar>
    <router-view></router-view>
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
}
</style>
