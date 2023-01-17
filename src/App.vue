<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rampart+One&display=swap');

.logo {
  display: block;
  /* margin: 0 auto 2rem; */
  margin: 0;
  padding: 0;
}


.content--main {
  height: 100vh;
  overflow: hidden;
}

.bg--img {
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/images/exemplo_01.png');
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

  .title {
    font-size: 60px;
  }

  .subtitle {
    font-size: 20px;
  }
}
</style>
