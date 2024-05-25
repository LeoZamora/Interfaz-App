<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="login">
            <h2 class="text-center mb-4">Inicio de Sesión</h2>
            <div class="form-group">
              <label for="username">Usuario</label>
              <input type="text" class="form-control" id="username" v-model="username" required>
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LoginVue',
    data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
    }
  }
}
</script>

<style>
template {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>