<template>
  <div class="modal fade" :id="'exampleModalEdit'+element.id" tabindex="-1" :aria-labelledby="'exampleModalLabelEdit'+element.id" aria-hidden="true">
    <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="'exampleModalLabelEdit'+element.id">Редактировать {{element.title}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="title" class="form-label">Заголовок</label>
                            <input type="title" v-model="form.title" class="form-control"  id="title">
                        </div>
                        <div class="mb-3">
                            <div class="form-floating">
                                <textarea class="form-control"  v-model="form.body" placeholder="Leave a comment here" id="body" style="height: 100px"></textarea>
                                <label for="body">Текст</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Статус</option>
                                <option value="1">Активный</option>
                                <option value="2">Отложенный</option>
                                <option value="3">Завершенный</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-success">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        element: {
            type: Object,
            required: true
        },
    },
    data:()=> {
        return {
            form: {}
        }
    }
}
</script>

<style>

</style>