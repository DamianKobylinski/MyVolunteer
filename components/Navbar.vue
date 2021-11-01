<template>
  <div class="navbar-wrapper">
    <nuxt-link to="/">
      <img src="@/assets/img/MyVolunteer_Logo.png" alt="My Volunteer blue logo on transpratent background">
    </nuxt-link>
    <div class="navigation">
      <ul>
        <li>
          <nuxt-link to="/">
            Zadania
          </nuxt-link>
        </li>
        <li>Wolontariusze</li>
        <li>O nas</li>
      </ul>
    </div>
    <div class="actions">
      <button class="create-task">
        <span>Utwórz zadanie</span>
      </button>
      <p>Login</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar-wrapper {
    height: 80px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 17px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & img {
      width: 250px;
      padding: 0 20px;
    }
    & .navigation {
        display: flex;
        align-items: center;
        flex-direction: row;
      & ul {
          display: flex;
          align-items: center;
          align-content: space-between;
          list-style: none;
          & li {
              color: $blue;
              padding: 0 35px;
              transition: all 0.3s ease-in;
              &:hover {
                  color: $light-blue;
                  cursor: pointer;
              }
          }
          & a {
              text-decoration: none;
              color: $blue;
              transition: all 0.3s ease-in;
              &:hover {
                  color: $light-blue;
              }
          }
      }
    }
    & .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        & button {
            background-color: $blue;
            color: #fff;
            border: none;
            border-radius: 21px;
            padding: 15px 30px;
            font-family: 'Roboto', Arial, Helvetica, sans-serif;
            font-size: 17px;
            font-weight: 400;
            &:hover {
                cursor: pointer;
            }
        }
        & p {
            color: $blue;
            padding: 0 50px;
        }
    }
}
</style>
