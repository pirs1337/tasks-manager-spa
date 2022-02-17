<template>
    <h1>{{title}}</h1>
    <form @submit.prevent="SubmitHandler">
        <div class="mb-3">
            <label for="username" class="form-label">Имя пользователя</label>
            <input type="text" v-model="form.username" class="form-control" id="username">
           
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email адрес</label>
            <input type="email" v-model="form.email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input type="password"  v-model="form.password"  class="form-control" id="password">
        </div>
        <div class="mb-3">
            <label for="password_confirmation" class="form-label">Повторите пароль</label>
            <input type="password"  v-model="form.password_confirmation" class="form-control" id="password_confirmation">
        </div>
        <button type="submit" class="btn btn-dark">Зарегистрироваться</button>
    </form>
</template>

<script>
export default {
    data:()=> {
        return {
            title: 'Регистрация',
            form: {},
        }
    },
    methods: {
        SubmitHandler(){
           this.$store.dispatch('register', this.form);
        }
    }
}
</script>

<style>

</style>