<template>
    <div class="model-selection">
      <p class="introd-text">Choose a model</p>
      <div class="model-category" @click="toggle">
        <div class="part" :class="{ active: isActive }"></div>
            <div class="modelName">
                <div class="model-text">Market Explorer</div>
                <div class="model-text">Investment Advisor</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      if(this.isActive){
        this.$store.commit('setMode', 'Market Explorer');
      }else{
        this.$store.commit('setMode', 'Investment Advisor');
      }
    }
  }
}
</script>
  
<style scoped>
.model-text{
  margin-top: 10px;
  width: 8.25rem;
  color: #1E1E1E;
  text-align: center;
  font-family: Poppins;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 140% */
}
.model-selection{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.modelName{
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}
.model-category{
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.10);
  height: 83px;
  width: 321px;
  background: #FFF;
  border-radius: 20px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.part {
  width: 50%;
  height: 100%;
  border-radius: 20px;

  background-color: rgba(255,184,34, 0.7);
  opacity: 0.0 - 1.0;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  transition: transform 0.5s ease;
  transform: translateX(100%);
  mix-blend-mode: normal;
}

.part.active {
  transform: translateX(0%);
}

.introd-text{
  color: #1E1E1E;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 116.667% */
}
</style>
  