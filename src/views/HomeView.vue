<script>
import { RouterLink } from 'vue-router';
  export default {
    name: "",
    timeValue: 0,
    data() {
      return {
        name: null
      }
    },
    methods: {
      signout() {
        this.$router.push('/auth/login');
      }
    }
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
              <input type="text" class="form-control" id="login" placeholder="Login">
            </div>
          </div>
          <div class="col">
            <label for="unidade">Unidade</label>
            <select id="unidade" class="form-control">
              <option selected>Escolher</option>
              <option>Teste 1</option>
              <option>Teste 2</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="">Nome completo</label>
              <input type="text" class="form-control" id="">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="">E-mail</label>
              <input type="text" class="form-control" id="">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="">Senha</label>
              <input type="text" class="form-control" id="">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="">Confirmar senha</label>
              <input type="text" class="form-control" id="">
            </div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col d-flex">
            <button class="negative-button" type="button">-</button>
            <input type="text" class="input-time-value" v-model="timeValue">
            <button class="positive-button" type="button">+</button>
          </div>
          <div class="col">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="alert">
              <label class="form-check-label" for="alert">Receber Alertas?</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="treatOccurrence">
              <label class="form-check-label" for="ocurrence">Tratar ocorrências?</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="desableUser">
              <label class="form-check-label" for="desabledUser">DESABILITAR USUARIO?</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary mx-2">Salvar</button>
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
          <tr class="text-center align-middle">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button class="btn">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
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
    background: rgb(21, 123, 207);
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
