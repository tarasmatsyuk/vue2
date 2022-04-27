<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header
          class="modal-header"
          id="modalTitle"
      >
        <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
        >
          x
        </button>
      </header>
      <section class="modal-body">
        <AddItemForm @update="formUpdate" @hasErrors="hasErrors"></AddItemForm>
      </section>
      <footer class="modal-footer">
        <button
            class="btn btn-green"
            @click="submit"
            :disabled="isDisabled"
        >
          Ok
        </button>
        <button
            class="btn btn-cancel"
            @click="close"
        >
         Cancel
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import AddItemForm from "@/components/AddItemForm";

export default {
  name: "ModalWindow",
  components: {
    AddItemForm
  },
  data() {
    return {
      isDisabled: true,
      form: null
    }
  },
  methods: {
    submit() {
      this.$emit('sumbit', this.form);
    },
    close() {
      this.$emit('close');
    },
    formUpdate(form) {
      this.form = form;
    },
    hasErrors(value) {
      this.isDisabled = value;
    }
  },
}
</script>

<style scoped lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    min-width: 200px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: space-between;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn {
    min-width: 60px;
    color: white;
    border-radius: 3px;
    padding: 3px 10px;
    cursor: pointer;
    &[disabled] {
     background: darkgray;
      border: 1px solid darkgray;
      cursor: default;
    }
  }

  .btn-green {
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
  }

  .btn-cancel {
    background: red;
    border: 1px solid red;
    border-radius: 2px;
  }
</style>
