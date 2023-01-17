<!-- ==========template=============-->
<template>
  <div class="categories_cps">
    <ul>
      <template v-for="(item, index) in list" :key="index">
        <li @click="change(index)">
          <a class="clickable"> {{ item.name }} </a>
        </li>
      </template>
    </ul>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";

defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const currIndex = ref(0);
const emit = defineEmits(["currIndex"]);
function change(index) {
  currIndex.value = index;
  emit("currIndex", index);
}
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
