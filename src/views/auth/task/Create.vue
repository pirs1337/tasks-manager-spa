<template>
  <h1>{{title}}</h1>
  <form @submit.prevent="submitHandler">
        <div class="mb-3">
            <label for="title" class="form-label">Заголовок</label>
            <input type="title" v-model="form.title" class="form-control" id="title">
        </div>
        <div class="mb-3">
            <div class="form-floating">
                <textarea class="form-control"  v-model="form.body" placeholder="Leave a comment here" id="body" style="height: 100px"></textarea>
                <label for="body">Текст</label>
            </div>
        </div>
        <button type="submit" class="btn btn-dark">Создать</button>
    </form>
</template>

<script>
export default {
    data:()=> {
        return {
            title: 'Создание задачи',
            form: {},
        }
    },
    methods: {
        submitHandler(e){
            this.$store.dispatch('create', {e, formData: this.form});
        }
    }
}
</script>

<style>

</style>