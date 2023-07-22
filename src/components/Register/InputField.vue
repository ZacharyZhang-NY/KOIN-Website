<script>
export default {
    name: 'InputField',
    props: {
    label: String,
    typeFormat: String,
    placeholder: String,
    }
}
</script>

<template>
    <div class="input-wrapper mt-5">
        <label class="brutalism-label" :for="type">{{ this.label }}</label>
        <input 
        :type="typeFormat"
        class="brutalism-field" 
        :placeholder="placeholder"
        aria-describedby="addon-wrapping">
    
    </div>
</template>

<style scoped>
.input-wrapper{
  
  padding-left:50px;
  padding-right: 50px;
}
.brutalism-field {
    border-color: rgb(238, 180, 4);
    border-width: 3px;
    background-color: #f5f5f5;
    color: rgb(18, 1, 1);
    width: 30vw;
    border-radius:4px;
    height: 6vh;
}

@media (max-width: 300px) {
    .brutalism-field {
        width: 100%;
        height: 6vh;
    }
}

@media (max-width: 320px) {
    .brutalism-field {
        width: 100%;
        height: 6vh;
    }
}

.brutalism-label {
    font-weight: 700;
    font-size: 15px;
    color: black;
    font-family: Poppins;
    text-align: left;
    padding-top: 50px;
  padding-left:50px;
  padding-right: 50px;
}

.inputWrapper input, label{
  display:block;
  color: black;
}

</style>