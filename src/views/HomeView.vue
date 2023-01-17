<script>
import { RouterLink } from 'vue-router';

async function getClientById(id) {
  const _token = localStorage.getItem('authorization');
  let options = {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + _token
    },
  }

  const req = await fetch('http://186.237.58.167:65129/api/user/getuserbyid/G/' + id, options)

  if (req.status === 200) {
    const reader = req.body.getReader();
    const stream = new ReadableStream({
      start(controller) {
        return pump();

        function pump() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }

            controller.enqueue(value);
            return pump();
          });
        }
      }
    });
    const blob = await new Response(stream).blob();
    const text = await blob.text();
    return JSON.parse(text);
  } else {
    alert('Falha na requisição!')
  }
}

export default {
  API: 'http://186.237.58.167:65129',
  name: "",
  timeValue: 0,
  data() {
    return {
      name: null,
      listProduct: [],
      listClients: [],
      confirmPassword: null,
      form: {
        id: null,
        userName: null,
        name: null,
        UserPassword: null,
        email: null,
        improveTeamMember: false,
        supervisor: true, // Padrão?
        receiveAutonomousWarning: false,
        loginExpiration: 1,
        disabled: false,
        system: 'G',
        unitId: null
      }
    }
  },
  mounted() {
    this.getproductionunitlist();
    this.getClients();
  },
  methods: {
    async getproductionunitlist() {
      const _token = localStorage.getItem('authorization');
      let options = {
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json;charset=utf-8',
          'Authorization': 'Bearer ' + _token
        },
      }

      const req = await fetch('http://186.237.58.167:65129/api/user/getproductionunitlist', options)

      if (req.status === 200) {
        const reader = req.body.getReader();
        const stream = new ReadableStream({
          start(controller) {
            return pump();

            function pump() {
              return reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }

                controller.enqueue(value);
                return pump();
              });
            }
          }
        });
        const blob = await new Response(stream).blob();
        const text = await blob.text();
        this.listProduct = JSON.parse(text).productionUnitList
      } else {
        alert('Falha na requisição!')
      }
    },
    async getClients() {
      const _token = localStorage.getItem('authorization');
      let options = {
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json;charset=utf-8',
          'Authorization': 'Bearer ' + _token
        },
      }

      const req = await fetch('http://186.237.58.167:65129/api/user/getusers', options)

      if (req.status === 200) {
        const reader = req.body.getReader();
        const stream = new ReadableStream({
          start(controller) {
            return pump();

            function pump() {
              return reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }

                controller.enqueue(value);
                return pump();
              });
            }
          }
        });
        const blob = await new Response(stream).blob();
        const text = await blob.text();
        this.listClients = JSON.parse(text);
      } else {
        alert('Falha na requisição!')
      }
    },
    getClientById,
    signout() {
      localStorage.removeItem('authorization');
      this.$router.push('/auth/login');
    },
    tokenTimeDecrement() {
      if (this.form.loginExpiration > 1) {
        this.form.loginExpiration -= 1;
      } else {
        alert('Minimo de 1 hora para armazenar login!');
      }
    },
    tokenTimeIncrement() {
      this.form.loginExpiration += 1;
    },
    async editClient(clientId) {
      const client = await getClientById(clientId);
      this.form = client;
    }
  },

}
</script>

<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand mx-4">Gest</a>
    <button class="btn btn-outline-dark mx-4" type="button" @click="signout">Sair</button>
  </nav>

  <div class="content-area container">
    <form>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="login">Login</label>
              <input id="login"
                type="text"
                class="form-control"
                v-model="form.userName">
            </div>
          </div>
          <div class="col">
            <label for="unidade">Unidade</label>
            <select id="unidade" class="form-control" v-model="form.unitId">
              <option selected>Escolher</option>
              <option v-for="item in listProduct" :value="item.id">{{item.name}}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="fullName">Nome completo</label>
              <input id="fullName"
                type="text"
                class="form-control"
                v-model="form.name">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="email">E-mail</label>
              <input id="email"
                type="text"
                class="form-control"
                v-model="form.email">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="password">Senha</label>
              <input id="password"
                type="text"
                class="form-control"
                v-model="form.UserPassword">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="confirmPassword">Confirmar senha</label>
              <input id="confirmPassword"
                type="text"
                class="form-control"
                v-model="confirmPassword">
            </div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col d-flex">
            <button class="negative-button" type="button" @click="tokenTimeDecrement">-</button>
            <input type="text"
              class="input-time-value"
              readonly
              v-model="form.loginExpiration"
              placeholder="Tempo do token">
            <button class="positive-button" type="button" @click="tokenTimeIncrement">+</button>
          </div>
          <div class="col">
            <div class="form-check form-switch">
              <input id="alert"
                class="form-check-input"
                type="checkbox"
                role="switch"
                v-model="form.receiveAutonomousWarning">
              <label class="form-check-label" for="alert">Receber Alertas?</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check form-switch">
              <input id="treatOccurrence"
                class="form-check-input"
                type="checkbox"
                role="switch"
                v-model="form.improveTeamMember">
              <label class="form-check-label" for="ocurrence">Tratar ocorrências?</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check form-switch">
              <input id="desableUser"
                class="form-check-input"
                type="checkbox"
                role="switch"
                v-model="form.disabled">
              <label class="form-check-label" for="desabledUser">DESABILITAR USUARIO?</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-primary mx-2" @click="postNewClient">Salvar</button>
      </div>
    </form>
  </div>
  <div class="second-content-area mt-4">
    <div class="container table-area">
      <table class="table user-table">
        <thead class="thead-dark">
          <tr class="text-center">
            <th scope="col">Código</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Status</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center align-middle" v-for="client in listClients">
            <th scope="row">{{ client.id }}</th>
            <td>{{ client.userName }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.disabled ? 'Ativo' : 'Inativo' }}</td>
            <td>
              <button class="btn btn-success m-1" type="button" @click="editClient(client.id)">Editar</button>
              <!-- <button class="btn btn-warning m-1">Remover</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
  body {
    background: rgb(41, 151, 241);
  }

  .content-area {
    background: rgb(236, 236, 236);
    padding: 2rem;
    margin-top: 2rem;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .input-time-value,
  .negative-button,
  .positive-button {
    height: 1.5rem;
    border: none;
  }

  .negative-button,
  .positive-button {
    width: 1.5rem;
  }

  .input-time-value {
    width: 3rem;
  }

  .second-content-area {
    /* background: rgb(21, 123, 207); */
    background: rgb(223, 223, 223);
  }

  .table-area {
    padding: 2rem 0rem;
  }

  .user-table {
    background: rgb(223, 223, 223);
    border-radius: 5px;
  }

  th {
    font-weight: 600;
  }
  
@media (min-width: 1024px) {
}
</style>
