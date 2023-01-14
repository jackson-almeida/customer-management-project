<script >
import { RouterLink } from 'vue-router';

export default {
  name: "LoginForm",
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async postLogin() {
      var emailBase64 = btoa(email.value);
      var passwordMd5Base64 = btoa(CryptoJS.MD5(password.value));

      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 
          'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          Username: emailBase64,
          UserPassword: passwordMd5Base64
        })
      }
      
      const req = await fetch('http://186.237.58.167:65129/api/user/login', options)
      console.log(req)
      if (req.status === 200) {

        const reader = req.body.getReader();
        const stream = new ReadableStream({
          start(controller) {
            return pump();

            function pump() {
              return reader.read().then(({ done, value }) => {
                // When no more data needs to be consumed, close the stream
                if (done) {
                  controller.close();
                  return;
                }

                // Enqueue the next data chunk into our target stream
                controller.enqueue(value);
                return pump();
              });
            }
          }
        });
        const blob = await new Response(stream).blob();
        const text = await blob.text();
        const token = text.slice(1, -1);

        localStorage.setItem("authorization", token);
        this.$router.push('/home');
      } else {
        alert('Login incorreto!')
      }
    }
  }
}
</script>

<template>
  <form class="p-4 w-100">
    <h2>Login</h2>
    <div class="form-group mb-4">
      <label class="text-white">Insira seu E-mail</label>
      <input id="email"
        class="form-control"
        type="text"
        name="email"
        v-model="email"
        placeholder="Email"/>
    </div>
    <div class="form-group mb-4">
      <label class="text-white">Insira sua senha</label>
      <input id="password"
        class="form-control"
        type="password"
        name="password"
        v-model="password"
        placeholder="Password"/>
      <small class="form-text text-muted">Nunca compartilhe sua senha com terceiros!</small>
    </div>
    <button type="button" class="btn btn-success" @click="postLogin">Entrar</button>
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
