<template>
  <div class="d-block mx-auto" style="width: 600px">
    <ul class="d-flex justify-content-between p-2 text-white list" id="list-menu">
      <li v-for="ls in list" :key="ls.Id" @click="handleClick(ls.Name_List)">
        <button>{{ ls.Name_List }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getList } from "@/services/MenuList.service";

export default {
  name: "MenuList",

  data() {
    return {
      list: [],
      options: {
        home: "Home",
        product: "Products",
        contact: "Contact",
        about: "About Us",
      },
    };
  },

  methods: {
    handleClick(name) {
      if (name === this.options.home) {
        this.$router.push({ name: "home" });
      } else {
        if (name === this.options.product) {
          this.$router.push({ name: "productos" });
        } else {
          if (name === this.options.contact) {
            this.$router.push({ name: "contact" });
          } else {
            if (name === this.options.about) {
              this.$router.push({ name: "about-us" }); //implementar ruta desde la database
            }
          }
        }
      }
    },

    async lodignItems() {
      const result = await getList();
      this.list = result;
      console.log(result);
    },
  },

  mounted() {
    this.lodignItems();
  },
};
</script>

<style scoped>
#list-menu {
  list-style: none;
  margin: 0;
}

.list li:hover {
  transition: 0.5s;
  cursor: pointer;
}
.list li button {
  background-color: transparent;
  border: none;
  color: white;
}
</style>
