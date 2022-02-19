<template>
  <h1>{{title}}</h1>
  <form @submit.prevent="submitHandler">
        <div class="mb-3">
            <label for="title" class="form-label">Заголовок</label>
            <input type="title" v-model="form.title" class="form-control" id="title">
        </div>
        <div class="mb-3">
            <div class="form-floating">
                <textarea class="form-control" v-model="form.body" placeholder="Leave a comment here" id="body" style="height: 100px"></textarea>
                <label for="body">Текст</label>
            </div>
        </div>
        <button type="submit" class="btn btn-dark">Создать</button>
    </form>
</template>

<script>
import msgMixin from '../../../mixins/Msg.js';

export default {
    mixins: [msgMixin],
    data(){
        return {
            title: 'Создание задачи',
            form: {},
        }
    },
    methods: {
        submitHandler(e){
               this.$store.dispatch('create', {formData: this.form})
                .then(() => {
                    this.form = {};
                    this.showSuccessMsg(e.target, 'Задача создана');
                }).catch(error => {
                    if (error.response) {
                        let errors = error.response.data.error.errors;
                        this.showErrors(errors);
                    }
                });
        }
    }
}
</script>

<style>

</style>