<template>
    <Header/>
      <main class="flex-shrink-0">
        <div class="container bg-light rounded-3 shadow p-3 mb-5 rounded">
            <router-view></router-view>
        </div>
    </main>
    <Footer/>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
   Header,
   Footer
  },
  created(){
    this.$store.dispatch('getAuthUser');
  },
  methods: {
    async checkAuthUser(){
      try {
        await this.$store.dispatch('getAuthUser');
      } catch (error) {
          console.log(233132);
      }
    }
  }
}
</script>

<style>
  h1{
    margin-bottom: 50px !important;
  }
</style>
