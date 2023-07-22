<template>
  <p class="space"></p>
  <div class="start">
      <div class="button" @click="handleClick">
        <p class="button-text">Start Chat</p>
      </div>
  </div>
  <p class="space"></p>
</template>

<script>
export default {
name: 'StartButton',
methods: {
  handleClick() {
    //TODO: change to login page
    this.$store.commit('setIsLogin', true);
    // this.$router.push('/login');
  },
},
}
</script>

<style scoped>
.space{
    height: 1rem;
}
.start {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.button {
  width: 15%;
  height: 1%;
  flex-shrink: 0;
  border-radius: 4.42706rem;
  background: #FFB822;
  cursor: pointer;
}
.button-text{
  color: #FFF;
  text-align: center;
  font-family: Mukta;
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.47919rem; /* 116.667% */
}
</style>
