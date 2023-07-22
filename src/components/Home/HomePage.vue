<template>
  <div class="background">
    <KoinHeader/>
    <Introduction v-if="!this.$store.state.messages.length"/>
    <ModelButton v-if="!this.$store.state.messages.length"/>
    <ChatWindow v-if="this.$store.state.messages.length"/>
    <StartButton v-if="!this.$store.state.isLogin"/>
    <InputMessage v-if="this.$store.state.isLogin"/>
    <router-view />
  </div>
</template>

<script>
import KoinHeader from './KoinHeader.vue'
import ModelIntroduction from './ModelIntroduction.vue'
import ModelSelection from './ModelSelection.vue'
import StartButton from './StartButton.vue'
import ChatWindow from './ChatWindow.vue'
import InputMessage from './InputMessage.vue'
export default {
  name: 'HomePage',
  components: {
    'KoinHeader': KoinHeader,
    'Introduction': ModelIntroduction,
    "ModelButton": ModelSelection,
    "StartButton": StartButton,
    "ChatWindow": ChatWindow,
    "InputMessage": InputMessage
  }
}
</script>

<style scoped>
.background {
  background: linear-gradient(225deg, #FFD6B8 0%, #FFF4EE 47.68%, #FFECCE 100%);
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
