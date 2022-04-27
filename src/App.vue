<template>
  <div>
    <button
        type="button"
        class="btn"
        @click="showModal"
    >
      Add item
    </button>
    <div class="shopping-list">
      <h1>To buy</h1>
      <ShoppingList :list="toBuy">
        <template #item="toBuy">
          <ShoppingItem @delete="deleteItem" @buy="buy" :item="toBuy"></ShoppingItem>
        </template>
      </ShoppingList>
      <hr>
      <h1>Bought</h1>
      <ShoppingList :list="bought">
        <template #item="bought">
          <ShoppingItem @delete="deleteItem" :item="bought"></ShoppingItem>
        </template>
      </ShoppingList>
    </div>
    <ModalWindow
        v-if="isModalVisible"
        @sumbit="submit"
        @close="closeModal">
    </ModalWindow>
  </div>
</template>

<script>

import ShoppingList from "@/components/ShoppingList";
import ShoppingItem from "@/components/ShoppingItem";
import ModalWindow from "@/components/ModalWindow";

export default {
  name: 'App',
  components: {
    ShoppingList,
    ShoppingItem,
    ModalWindow,
  },
  data() {
    return {
      items: [
          {id: 1, name: 'Laptop', quantity: 10, price: 100, bought: false},
          {id: 2, name: 'Phone', quantity: 3, price: 200, bought: false},
      ],
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    submit(itemForm) {
      this.items.push({id: Date.now(), ...itemForm, bought: false});
      this.closeModal();
    },
    deleteItem(product) {
      const index = this.items.findIndex(item => item.id === product.id);
      if (index >= 0) {
        this.items.splice(index, 1);
      }
    },
    buy(product) {
      const boughtItem = this.items.find(item => item.id === product.id);
      boughtItem.bought = true;

    }
  },
  computed: {
    toBuy() {
      return this.items.filter(item => !item.bought)
    },
    bought() {
      return this.items.filter(item => item.bought)
    }
  }
}
</script>

<style scoped lang="scss">
  hr {
    border: 3px solid pink;
    border-radius: 2px;
  }
</style>
