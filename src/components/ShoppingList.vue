<template>
  <ul>
    <li v-if="!list.length">
      List is empty
    </li>
    <li v-for="item in list" :key="item.id">
      <slot name="item" v-bind="item"/>
    </li>
  </ul>
</template>

<script>

export default {
  name: "ShoppingList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border-radius: 2px;
  }
  li {
    padding: 12px 20px;
    margin: 2px;
    background: #fff;
  }
</style>
