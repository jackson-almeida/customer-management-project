<script setup lang="ts">
import { useRouter } from "vue-router"

  defineProps<{
    title: string
  }>()

  const goHome = () => {
    console.log('Teste')
  }
</script>

<template>
  <form class="p-4 w-100">
    <h2>{{ title }}</h2>
    <div class="form-group mb-4">
      <label class="text-dark">Insira seu E-mail</label>
      <input type="email" class="form-control" placeholder="E-mail">
    </div>
    <div class="form-group mb-4">
      <label class="text-dark">Insira sua senha</label>
      <input type="password" class="form-control" placeholder="Password">
      <small class="form-text text-muted">Nunca compartilhe sua senha com terceiros!</small>
    </div>
    <RouterLink to="/home" class="btn btn-success">Entrar</RouterLink>
  </form>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rampart+One&display=swap');

.content--main {
  height: 100vh;
  overflow: hidden;
}

.bg--img {
  width: 100%;
  height: 100%;
  background-image: url('../../../../assets/images/exemplo_01.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.title{
  font-family: 'Rampart One', cursive;
  font-size: 50px;
}

.subtitle {
  font-size: 25px;
}


@media(max-width: 770px) {
  .content-img {
    display: none !important;
  }
}
</style>
