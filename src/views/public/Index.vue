<template>
    <div class="text-center">
        <div class="p-5 rounded-pill mb-5">
            <h1>Мощнейший планировщик для твоих дел и задач</h1>
        </div>
        <div class="p-5 rounded-pill mb-5">
            <h2>Задачи, проекты, планы, чек-листы</h2>
            <p>Выгружай дела из головы в приложение, отправляй их в проекты и упорядочивай, добавляй чек-листы к задачам</p>
            <b>Попробуйте прямо сейчас совершенно бесплатно</b>
        </div>
        <router-link v-if="!this.$store.state.isAuth" :to="{ name: 'register'}"><a class="btn btn-dark text-white text-center py-2 px-5">Начать</a></router-link>
    </div>
</template>

<script>

export default {
    data:()=>{
        return {
            title: 'Главная'
        }
    }
}
</script>

<style>

</style>
