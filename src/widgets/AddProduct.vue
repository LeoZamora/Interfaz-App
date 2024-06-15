<template>
  <div
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    style="display: block; background: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5 class="modal-tittle"><span>Add Product</span></h5>
          <button type="button" class="close btn" id="btn-close" @click="closeAddModal">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="col-md-6">
              <div class="form-group">
                <label for="code"><span>Code: </span></label>
                <input
                  type="text"
                  id="code"
                  class="form-control"
                  v-model="getNewProduct.Codigo"
                  placeholder="Enter product code"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name"><span>Name: </span></label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    autocomplete="name"
                    v-model="getNewProduct.Nombre"
                    placeholder="Enter product name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="precie"><span>Precie: </span></label>
                  <input
                    id="precie"
                    type="text"
                    class="form-control"
                    v-model="getNewProduct.Precio"
                    placeholder="Enter product precie"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="category"><span>Category: </span></label>
                  <input
                    type="text"
                    id="category"
                    class="form-control"
                    v-model="getNewProduct.Categoria"
                    placeholder="Enter product category"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="tipoEmp"><span>Packaging type: </span></label>
                  <input
                    type="text"
                    id="tipoEmp"
                    class="form-control"
                    v-model="getNewProduct.TipoEmpaque"
                    placeholder="Enter product category"
                  />
                </div>
              </div>
            </div>
            <div class="">
              <div class="form-group">
                <label for="desc"><span>Description: </span></label>
                <textarea
                  id="desc"
                  type="textarea"
                  class="form-control"
                  v-model="getNewProduct.Descripcion"
                  placeholder="Enter product description"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end">
          <button
            type="button"
            id="btn-save"
            class="btn btn-primary"
            @click="saveChanges"
          >
            Save
          </button>
          <button
            type="button"
            id="btn-cancel"
            class="btn btn-secondary"
            @click="closeAddModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveProduct } from "@/controllers/Save.controller";

export default {
  name: "AddProduct",

  data() {
    return {
      getNewProduct: {
        Codigo: "",
        Nombre: "",
        Precio: "",
        Descripcion: "",
        Categoria: "",
        TipoEmpaque: "",
      },
    };
  },

  methods: {
    closeAddModal() {
      this.$emit("close");
    },

    saveChanges() {
      saveProduct(this.getNewProduct);
      this.closeAddModal();
      console.log(this.getNewProduct);
    },
  },
};
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
