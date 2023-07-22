<template>
    <div id="app">
      <div id="chat-window">
        <div v-for="(message, index) in $store.state.messages" :key="index" class="message">
            <img v-if="message.isUser" class="user-avatar" src="@/assets/Oval.png">
            <img v-if="!message.isUser" class="bot-avatar" src="@/assets/logo.png">
          <div :class="{ 'user-box': message.isUser, 'bot-box': !message.isUser }">
            <div class="message-text">
                {{ message.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: 'ChatWindow',
}
</script>

<style scoped>
#chat-window {
    height: 60vh;
    overflow-y: auto;
    padding: 1em;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
}

.message-text{
  color: #111827;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 116.667% */
  text-align: center;
  flex-direction: column;
  padding: 20px;
}
.user-box {
    max-width: 30%;
    float: right;
    border-radius: 3.35531rem 3.35531rem 0rem 3.35531rem;
    background: #FFFBF3;
    text-align: center;
    margin-bottom: 1rem;
}
.bot-box {
    max-width: 30%;
    transform: rotate(0.016deg);
    flex-shrink: 0;
    float: left;
    border-radius: 4.18481rem 4.18481rem 4.18481rem 0rem;
    background: #FFE7B5;
    text-align: center;
}
.user-avatar{
    height: 50px;
    margin-top: 20px;
    margin-left: 10px;
    float: right;
}
.bot-avatar{
    height: 50px;
    margin-top: 5%;
    margin-right: 10px;
    float: left;
}
</style>
