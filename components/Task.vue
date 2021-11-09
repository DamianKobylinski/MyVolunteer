<template>
  <div class="task">
    <div class="task-user-info">
      <div class="user-image">
        <img width="50px" src="@/assets/img/User_default_image.png" alt="User Image">
      </div>
      <div class="user-name">
        {{ `${name} ${surname} ` }}
      </div>
    </div>
    <div class="task-content">
      {{ content }}
    </div>
    <div class="task-bottom">
      <div class="task-date">
        {{ date }}
      </div>
    </div>
    <button class="share">
      <span>
        Udostępnij
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    surname: {
      type: String,
      default: '',
      required: true
    },
    content: {
      type: String,
      default: '',
      required: true
    },
    date: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.task {
    font-size: 15px;
    overflow: hidden;
    display: block;
    margin: 20px 0;
    padding: 20px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: $blue;
    border: 2px $blue solid;
    border-radius: 21px;
    height: auto;
    @include breakpoint(sm) {
        width: 100%;
    }
    & .task-user-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px;
    }
    & .task-content {
        font-weight: 500;
        padding: 3px;
        line-height: 120%;
    }
    & .task-bottom {
        padding: 5px;
    }
    & .share {
        background-color: $blue;
        color: #fff;
        border-radius: 21px;
        padding: 10px 15px;
        border: none;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-weight: 400;
        transition: all ease-in-out 0.3s;
        margin: 5px 0;
        cursor: pointer;
        transition: all ease-in 0.3s;
        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
