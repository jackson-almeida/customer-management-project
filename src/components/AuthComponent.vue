<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <h1>Testandooooooooo</h1> -->
  <div class="container-fluid">
  <div class="row content--main">
    <div class="content-img col col-xs-0 bg--img"></div>
    <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-xs-12 bg-dark d-grid align-content-center">
      <h1 class="text-white text-center title">Gest</h1>

      <div class="p-2">
        <RouterView />
      </div>

    </div>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rampart+One&display=swap');

.logo {
  display: block;
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
  background-image: url('../assets/fundo.jpg');
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
