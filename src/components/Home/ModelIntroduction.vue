<template>
    <div class="introduction">
        <img class="logo" src="@/assets/logo.png">
        <div>
        <p class="logo-text">Welcome to KOIN-AI</p>
        <p class="logo-text2">Your personalized AI investment copilot</p>
        </div>
        <div class="threeComp">
        <div class="space">
            <div class="introd-header">
            <img src="@/assets/Increase.png" >
            <p>Ask real-time market questions  </p>
            </div>
            <div class="text-comp">
            <div class="description">
                "What is the current price of Apple (AAPL) stock?"
            </div>
            </div>
        </div>

        <div class="space">
            <div class="introd-header">
            <img src="@/assets/News.png" >
            <p>Ask real-time market questions  </p>
            </div>
            <div class="text-comp">
            <div class="description">
                "What are the recent news articles about Tesla (TSLA) and its electric vehicle production?"
            </div>
            </div>
        </div>

        <div class="space">
            <div class="introd-header">
            <img src="@/assets/Quest.png" >
            <p>Analyzes company and market news  </p>
            </div>
            <div class="text-comp">
            <div class="description">
                "How has Apple performed in terms of international sales and expansion into emerging markets?"
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ModelIntroduction',
}
</script>
<style scoped>
.threeComp {
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.space {
  margin-left: 2%;
}

.introd-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #1E1E1E;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
}

.text-comp {
  border-radius: 20px;
  background: #FFF;
  position: relative;
  width: 431px;
  height: 166px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  top: 41px;
  left: 65px;
  width: 301px;
  color: #111827;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 116.667% */
}
.introduction {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.logo {
  width: 72px;
  height: 72px;
  flex-shrink: 0;
}
.logo-text{
  margin-top: 28px;
  color: #111827;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 70% */
}
.logo-text2{
  color: #111827;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 116.667% */
}
</style>
