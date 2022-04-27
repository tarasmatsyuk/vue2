<template>
  <div class="wrapper">
    <div class="control">
      <input type="text" placeholder="Product Name" v-model.trim="form.name.value">
    </div>
    <div class="control">
      <input type="text" placeholder="Quantity" v-model.number="form.quantity.value">
    </div>
    <div class="control">
      <input type="text" placeholder="Price" v-model="form.price.value">
    </div>
  </div>
</template>

<script>
import {Validators} from "@/helpers/validators";

export default {
  name: "AddItemForm",
  data() {
    return {
      form: {
        name: { value: '', validators: ['required'] },
        quantity: { value: '', validators: ['required', 'int'] },
        price: { value: '', validators: ['float'] },
      },
      formValidationState: new Map([
        ['name', null],
        ['quantity', null],
        ['price', null],
      ])
    }
  },
  watch: {
    form: {
      handler(form) {
        this.formValidationState = Validators.getValidationState(this.form);
        const hasErrors = [...this.formValidationState.values()].some(errors => Object.keys(errors).length > 0);
        this.$emit('hasErrors', hasErrors)

        if (!hasErrors) {
          const name = form.name.value;
          const quantity = form.quantity.value;
          const price = + parseFloat(form.price.value).toFixed(2);

          this.$emit('update', {quantity, price, name});
        }
      },
      deep: true,
      immediate: true
    }
  },
}
</script>

<style scoped lang="scss">
  .control {
    margin-bottom: 10px;
    min-width: 250px;
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 5px 10px;
    }
  }
</style>
