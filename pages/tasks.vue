<template v-on:load="takeTasks">
  <div class="tasks-wrapper">
    <button class="make-task">
      <span @click="takeTasks">Utwórz zadanie</span>
    </button>
    <div class="tasks">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import Task from '@/components/Task.vue'

const API = 'http://192.168.1.32:49712/tasks'

export default {
  components: {
    Task
  },
  data () {
    return {
      tasks: []
    }
  },
  head () {
    return {
      title: 'My Volunteer | Zadania'
    }
  },
  methods: {
    async takeTasks () {
      await axios
        .post(API, this.tasks)
        .then((result) => {
          console.log(result.data)
        })
        .catch((err) => {
          console.log(err)
        })
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
