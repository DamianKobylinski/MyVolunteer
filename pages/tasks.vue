<template>
  <div class="tasks-wrapper">
    <button class="make-task">
      <span>Utwórz zadanie</span>
    </button>
    <div class="tasks">
      <Task
        v-for="task in tasks"
        :key="task.id"
        :name="task.name"
        :surname="task.surname"
        :content="task.information"
        :date="task.data"
      />
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'

// const API = 'http://localhost:3001/api/test'

export default {
  components: {
    Task
  },
  async asyncData (context) {
    const tasks = await context.app.$axios.$get('/api/tasks')
      .then(res => res.data)
    return { tasks }
  },
  head () {
    return {
      title: 'My Volunteer | Zadania'
    }
  }
}
</script>

<style scoped lang="scss">
.tasks-wrapper {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 400;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;

  & .make-task {
    background-color: $blue;
    color: #fff;
    border: none;
    border: solid 3px $blue;
    border-radius: 11px;
    padding: 10px 40px;
    margin: 15px 0;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 17px;
    font-weight: 400;
    transition: all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
      cursor: pointer;
      border: solid 3px $blue;
      background-color: #fff;
      color: $blue;
    }
  }

  & .tasks {
    min-height: 100%;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
  }
}
</style>
