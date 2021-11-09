<template>
  <div class="tasks-wrapper">
    {{ response }}
    <button class="make-task">
      <span>Utwórz zadanie</span>
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

// const API = 'http://localhost:3001/api/test'

export default {
  components: {
    Task
  },
  async asyncData (context) {
    const response = await context.app.$axios.$get('/api/test')
    return { response }
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
