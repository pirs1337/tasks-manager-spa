<template>
  <div class="modal fade" :id="'exampleModalDelete'+element.id" tabindex="-1" :aria-labelledby="'exampleModalLabelDelete'+element.id" aria-hidden="true">
    <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" :id="'exampleModalLabelDelete'+element.id">Удалить {{element.title}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Вы уверены что хотите удалить задачу {{element.title}}?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="submit" class="btn btn-danger" @click.prevent="handler">Удалить</button>
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
    methods: {
        handler(){
            this.$store.dispatch('delete', {id: this.element.id});
        }
    }
}
</script>

<style>

</style>