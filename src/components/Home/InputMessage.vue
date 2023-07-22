<template>
    <p class="space"></p>
    <div class="input-Bar">
        <div class="button" @click="handleClick">
            <img src="@/assets/vuesax/linear/message-add.svg" alt="Description of image">
            <p class="button-text">New Topic</p>
        </div>
        <input class="inputBox" type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message...">
    </div>
    <p class="space"></p>
</template>

<script>
export default {
    name: 'InputMessage',
    data() {
        return {
        newMessage: ''
        }
    },
methods: {
    sendMessage() {
        if (this.newMessage.trim() !== '') {
            this.$store.dispatch('ChatAPIAction',this.newMessage);
            this.newMessage = '';
        }
    },
    handleClick() {
        this.$store.commit('MockNewChat');
    },
}
}
</script>

<style scoped>
.space{
    height: 1rem;
}
.input-Bar{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.inputBox{
    width: 60%;
    height: 4rem;
    flex-shrink: 0;
    border-radius: 3.125rem;
    background: #FFF;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
}
.button{
    width: 10%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 3.125rem;
    background: #FFB822;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
}
.button-text{
    color: #FFF;
    text-align: center;
    font-family: Mukta;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 116.667% */
    padding: 1px;
}
</style>
