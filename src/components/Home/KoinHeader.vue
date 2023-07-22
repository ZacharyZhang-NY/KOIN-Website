<template>
<header class="header">
    <div class="logo-container">
        <img class="logo" src="@/assets/logo.png">
        <p class="logo-text">KOIN</p>
        <p class="logo-text2">KOIN-AI</p>
        <router-link to="/" class="home-link">Home</router-link>
        <router-link v-if="!$store.state.isLogin" to="/login" class="login-link">Login</router-link>
        <router-link v-if="!$store.state.isLogin" to="/register" class="register-link">Register</router-link>
        <img class="user-avatar" src="@/assets/Oval.png">
        <p class="username-text">{{this.$store.state.userName}}</p>
    </div>
</header>
</template>
<script>
export default {
  name: 'KoinHeader',
}
</script>
<style scoped>
.logo-container {
  flex-shrink: 0;
  margin-left: 95px;
  margin-top: 1%;
  display: flex;
  align-items: center;
}
.logo-container .home-link {
  margin-left: 92px;
  color: #4E5053;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  text-decoration: none;
}
.logo-container .login-link{
  margin-left: 500px;
  color: #111827;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 87.5% */
  text-decoration: none;
}
.logo-container .register-link{
  margin-left: 58px;
  margin-right: 99px;
  color: #4E5053;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 87.5% */
  text-decoration: none;
}
.logo-text{
  margin-left: 19px;
  top: 77px;
  color: #4E5053;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 70% */
}
.logo-text2{
  margin-left: 186px;
  color: #111827;
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 87.5% */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; /* Ensures that the components are ordered in a row */
}
.logo {
  width: 72px;
  height: 72px;
}
.username-text{
  margin-left: 1.75rem;
  margin-right: 6.06rem;
  color: #4E5053;
  text-align: center;
  font-family: Mukta;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem; /* 87.5% */
}
.user-avatar {
  width: 2.4375rem;
  height: 2.4375rem;
  margin-left: 36.44rem;
}
</style>