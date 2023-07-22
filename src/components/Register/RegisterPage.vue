<template>
    <div class="col-lg-6 gradient-custom-1">
      <div class="card-body p-md-5 mx-md-4">
        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
        
<img src="@/assets/logo.png" >
<div class="description"> 
<h1>KOIN</h1>
<br>
<h2>Not sure where to start? We are here to help!</h2>
<br>
<h3 class="small mb-0">KOIN AI language model to provide personalized investment recommendations and real-time market updates.</h3>
</div>        
</div>
        
      </div>
    </div>
    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
        <div class="text-center up">
            <h1 class="brutalism-head1"> Create an account </h1>
        </div>
        
        <InputField 
            label="EmailL" 
            typeFormat="email"
            placeholder="MARIO@ROSSI.COM"/>
            <InputField 
            label="Phone" 
            typeFormat="tel"
            placeholder="0000000000"/>
        <InputField 
            label="Password" 
            typeFormat="password"
            placeholder="********"/>
            <div class="button">
            <ButtonField
            value="Create account"
            bg-color="cyan"
            border-color="orange"
            :onClickFun="goAbout"/>
          </div>
        <Footer />
    </div>



</template>
<script>
import InputField from './InputField.vue'
import ButtonField from './ButtonField.vue'
import Footer from './footer/Footer.vue'

// import { useRouter } from "vue-router";

// const router = useRouter();
export default {
name: 'RegisterPage',
components: {
'InputField': InputField,
'ButtonField': ButtonField,
'Footer': Footer,

}
}

</script> 



<style scoped>
.description{
padding-left:150px;
padding-right:150px;
}
.up{


text-align: left;
font-family: Poppins;


}
.button{
padding-top: 50px;
}
.gradient-custom-1 {
/* fallback for old browsers */
background: #fccb90;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, #FFD6B8 0%, #FFF4EE 47.68%, #FFECCE 100%);

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right,#FFD6B8 0%, #FFF4EE 47.68%, #FFECCE 100%);
padding-bottom:450px;
padding-top: 350px;
text-align: center;
font-family: Poppins;

}
.align-items-center{
text-align: center;
}
@media (min-width: 768px) {
.gradient-form {
height: 100vh !important;
}
}
@media (min-width: 769px) {
.gradient-custom-2 {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem;
font-family: Poppins;
}
}
</style>