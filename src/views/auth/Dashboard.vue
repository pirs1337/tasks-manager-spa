<template>
    <h1>{{title}}</h1>
      <div class="row row-cols-auto">
        <div class="col mb-4" v-for="task in allTasks" :key="task.id">
            <div class="card h-100" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{{task.title}}</h5>
                <p class="card-text">{{task.body}}</p>
                <button class="btn btn-success" data-bs-toggle="modal" :data-bs-target="'#'+'exampleModalEdit'+task.id">Редактировать</button>
                <button class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#'+'exampleModalDelete'+task.id">Удалить</button>
              </div>
          </div>
          <EditModal :element="task"/>
          <DeleteModal :element="task"/>
        </div>
    </div>
    
</template>

<script>

import {mapGetters} from 'vuex';
import EditModal from '../../components/modal/EditModal.vue';
import DeleteModal from '../../components/modal/DeleteModal.vue';

export default {
    components: {
      EditModal,
      DeleteModal
    },
    computed: {
      allTasks() {
        return this.$store.getters.allTasks
      },
  },
    data:()=> {
        return {
            title: 'Мои задачи',
        }
    },
    created(){
      this.$store.dispatch('getAll');
    },
}
</script>
<style>

</style>