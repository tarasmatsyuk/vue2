<template>
  <div class="item">
    <div class="wrapper">
      <span class="product">Product: {{item.name}}</span> |
      <span class="quantity">Quantity: {{item.quantity}}</span> |
      <span class="price">Price: {{item.price}} $</span>
    </div>
    <div class="actions">
      <button @click="$emit('delete', item)">Delete</button>
      <label v-if="!item.bought">
        <input @change="$emit('buy', item)" type="checkbox"> Buy
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style scoped>
  .item {
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    font-weight: 600;
  }
  .price {
    color: #42b883;
  }
  .quantity {
    color: #142ee0;
  }
  .product {
    color: #0a0a00;
  }
  .actions {
    display: flex;
    align-items: center;
  }
</style>
