<template>
  <div class="tasks-wrapper">
    <button class="make-task">
      <span>Utwórz zadanie</span>
    </button>
    <div class="switch-tasks">
      <span class="switch-header">Ogłoszenia</span>
      <div class="switcher">
        <input class="switch-checkbox" type="checkbox">
        <label class="switch-label" for=""><span class="switch-button-label-span">Wolontariusze</span></label>
      </div>
    </div>
    <div class="tasks-wrapper">
      <div class="tasks">
        <div class="task" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    justify-content: center;
    flex-direction: column;
    padding: 40px 10px;
    & .make-task {
        background-color: $blue;
        color: #fff;
        border: none;
        border: solid 3px $blue;
        border-radius: 21px;
        padding: 10px 40px;
        margin: 0 30px;
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
    & .switch-tasks {
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-top: 20px;
    }
}
</style>
