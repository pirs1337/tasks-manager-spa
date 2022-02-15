<template>
  <header>
    <nav class="navbar navbar-expand-lg d-flex justify-content-end navbar-light bg-light shadow p-3 mb-5 rounded">
      <div class="container-fluid">
        <router-link :to="{ name: 'main'}"><a class="navbar-brand"><b>Navbar</b></a></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
              <div v-if="!this.$store.state.isAuth">
                  <li class="nav-item" v-if="this.$route.path == '/login'">
                    <router-link :to="{ name: 'register'}">
                      <a class="btn btn-dark text-white">Регистрация</a>
                    </router-link>
                </li>
                <li class="nav-item" v-else>
                  <router-link :to="{ name: 'login'}">
                    <a class="btn btn-dark text-white">Войти</a>
                  </router-link>
                </li>
              </div>
              <div v-else>
                <router-link :to="{ name: 'dashboard'}">
                    <a class="btn btn-dark text-white">Мой профиль</a>
                </router-link>
              </div>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>
<style >

</style>
