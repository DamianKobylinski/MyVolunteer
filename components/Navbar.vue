<template>
  <div class="navbar-wrapper">
    <nuxt-link to="/">
      <img src="@/assets/img/MyVolunteer_Logo.png" loading="lazy" alt="My Volunteer blue logo on transpratent background">
    </nuxt-link>
    <div class="actions">
      <p>Logowanie</p>
      <p>Rejestracja</p>
      <nuxt-link to="/tasks">
        <button class="create-task">
          <span>Zadania</span>
        </button>
      </nuxt-link>
    </div>
    <div class="hamburger-actions" @click="toggleNavbar">
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleNavbar () {
      document.querySelector('.actions').classList.toggle('actions-active')
      document.querySelector('.hamburger-actions').classList.toggle('hamburger-actions-active')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-wrapper {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 17px;
    font-weight: 400;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & img {
      width: 250px;
      padding: 0 20px;
      @include breakpoint(xs) {
        padding: 0;
        width: 200px;
      }
    }
    & .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        @include breakpoint(md) {
          position: absolute;
          height: 100vh;
          width: 70%;
          right: 0;
          top: 0;
          flex-direction: column-reverse;
          background: linear-gradient(to right bottom, $blue, $light-blue);
          transform: translateX(100%);
          transition: transform 0.5s ease-in-out;
        }
        & button {
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
            @include breakpoint(md) {
              margin: 0;
              margin-bottom: 100px;
              margin-top: 100px;
              font-size: 20px;
              border-radius: 10px;
              font-weight: 500;
            }
            &:hover {
                cursor: pointer;
                border: solid 3px $blue;
                background-color: #fff;
                color: $blue;
            }
        }
        & p {
            color: $blue;
            padding: 0 30px;
            cursor: pointer;
            transition: opacity 0.2s ease-in;
            @include breakpoint(md) {
              color: #fff;
              margin-bottom: 100px;
              font-size: 20px;
              font-weight: 500;
            }
            &:hover {
              opacity: 0.75;
            }
        }
    }
    & .actions-active {
      transform: translateX(0%);
    }
    & .hamburger-actions {
      z-index: 99;
      display: inline-block;
      padding: 20px 20px;
      display: none;
      cursor: pointer;
      @include breakpoint(md) {
        display: block;
      }
      & span {
        width: 30px;
        height: 5px;
        border-radius: 10px;
        background-color: $blue;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        transition: all 0.3s ease-in;
      }
    }
    & .hamburger-actions-active {
      & span {
        background-color: #fff;
      }
      & span:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
      }
      & span:nth-child(2) {
        opacity: 0;
      }
      & span:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
      }
    }
}
</style>
