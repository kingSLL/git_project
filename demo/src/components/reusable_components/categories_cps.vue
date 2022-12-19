<!-- ==========template=============-->
<template>
  <div class="categories_cps">
    <ul v-if="showlist">
      <template v-for="(item, index) in list" :key="index">
        <li>
          <a class="clickable"> {{ item }} </a>
        </li>
      </template>
    </ul>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  showlist: {
    type: Boolean,
    default: false,
  },
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.categories_cps {
  ul {
    display: flex;

    margin-left: 20px;
    li {
      a {
        padding: 0 10px;
        color: #666666;
        border-right: 1px #666666 solid;
      }
    }
    li:first-of-type a {
      padding-left: 0;
    }
    li:last-of-type a {
      border: none;
    }
  }
}
</style>
