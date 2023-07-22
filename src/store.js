import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLogin: false,
    mode: 'Market Explorer',
    userName: 'Test User',
    // messages: [{ content: "hello", isUser: true },{ content: "I have received you message. ", isUser: false }],
    messages: [],
    // your data goes here
  },
  mutations: {
    // your synchronous functions go here
    //Mock login.
    setIsLogin(state){
      state.isLogin = true;
    },
    setMode(state, mode){
      state.mode = mode;
    },
    AddUserMessage(state, message){
      state.messages.push({content: message, isUser: true});
    },
    AddBotMessage(state, message){
      state.messages.push({content: message, isUser: false});
    },
    MockNewChat(state){
      state.messages = [];
    }
  },
  actions: {
    // your asynchronous functions go here
    async ChatAPIAction({commit}, requestData){
      const chatAPIUrl = 'http://18.191.201.15:5000/ai_test/chat_1';
    
      try {
        commit('AddUserMessage', requestData);
        const response = await fetch(chatAPIUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
        const data = await response.json();
        commit('AddBotMessage', data.response);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
  modules: {
    // your modules go here
  },
})

export default store;