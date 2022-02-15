<template>
    <h1>{{title}}</h1>
    <form @submit.prevent="login">
        <div class="mb-3">
            <label for="email" class="form-label">Email адрес</label>
            <input type="email" v-model="form.email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input type="password" v-model="form.password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-dark">Войти</button>
    </form>
</template>

<script>
import authMixin from '../../../mixins/axios/Auth.js';

export default {
    mixins: [authMixin],
    data:()=> {
        return {
            title: 'Вход',
            form: {},
        }
    },
    methods: {
        login(e){
            this.auth(e, 'login', 'dashboard', true);
        }
    }
}
</script>

<style>

</style>