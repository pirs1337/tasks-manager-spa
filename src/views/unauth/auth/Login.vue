<template>
    <h1>{{title}}</h1>
    <form @submit.prevent="submitHandler">
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

export default {
    data:()=> {
        return {
            title: 'Вход',
            form: {},
        }
    },
    methods: {
       async submitHandler(){
           await this.$store.dispatch('login', this.form)
       }
    }
}
</script>

<style>

</style>