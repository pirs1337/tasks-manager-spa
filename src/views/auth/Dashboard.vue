<template>
    <h1>{{title}}</h1>
      <div class="row row-cols-auto mb-3">
        <div class="col mb-3">
          <router-link :to="{ name: 'dashboard'}">
            <a class="btn btn-dark">Все</a>
          </router-link>
        </div>
        <div class="col mb-3">
          <router-link :to="{ name: 'dashboard',
                   query: {status: status[0]}
                  }">
            <a class="btn btn-success">Активные</a>
          </router-link>
        </div>
          <div class="col mb-3">
            <router-link :to="{ name: 'dashboard',
                    query: {status: status[1]}
                    }">
              <a class="btn btn-warning">Отложенные</a>
            </router-link>
          </div>
        <div class="col mb-3">
          <router-link :to="{name: 'dashboard',
                    query: {status: status[2]}
                    }">
              <a class="btn btn-danger">Завершенные</a>
          </router-link>
        </div>
      </div>
      <div class="row row-cols-auto">
        <div class="col mb-4" v-for="task in tasks" :key="task.id">
            <div class="card h-100 border border-3" 
            :class="{'border-success': task.status == this.status[0], 
            'border-warning': task.status == this.status[1],
            'border-danger': task.status == this.status[2]
            }" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{{task.title}}</h5>
                <p class="card-text">{{task.body}}</p>
                <button class="btn btn-success me-3" data-bs-toggle="modal" :data-bs-target="'#'+'exampleModalEdit'+task.id">Редактировать</button>
                <button class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#'+'exampleModalDelete'+task.id">Удалить</button>
              </div>
          </div>
          <EditModal :element="task" :status="status"/>
          <DeleteModal :element="task"/>
        </div>
    </div>
    
</template>

<script>

import EditModal from '../../components/modal/EditModal.vue';
import DeleteModal from '../../components/modal/DeleteModal.vue';

export default {
    components: {
      EditModal,
      DeleteModal
    },
    data:()=> {
        return {
            title: 'Мои задачи',
            status: [
                'Активный',
                'Отложенный',
                'Завершенный'
            ],
            currentStatus: null
        }
    },
    computed: {
      tasks(){
          this.$store.dispatch('getTasks', {status: this.$route.query.status});
          return this.$store.getters.tasks;
      }
    },
    created(){
      this.currentStatus =  this.$route.query.status;
    }
}
</script>
<style>

</style>