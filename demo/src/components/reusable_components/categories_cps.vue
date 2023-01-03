<!-- ==========template=============-->
<template>
  <div class="categories_cps">
    <ul>
      <template v-for="(item, index) in list" :key="index">
        <li>
          <a class="clickable"> {{ item.name }} </a>
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
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.categories_cps {
  ul {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    li {
      a {
        padding: 0 10px;
        color: #666666;
        border-right: 1px #666666 solid;
      }
    }
    li:last-of-type a {
      border: none;
    }
  }
}
</style>
