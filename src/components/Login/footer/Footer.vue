<script>
export default {
  name: 'FooterBar',
}
</script>

<template>
  <footer class="mt-auto foot-brutalism text-black">
      <div class="container-fluid p-4 foot-border bg-footer2">
            <!--Grid row-->
            <div class="row">
                <p class="register">Don't have an account? <router-link to="/register" class="register-link">Register</router-link></p> 

            </div>
      </div>
  </footer>
</template>

<style scoped>
/* #rowOverride,
.row {
    width: 0%;
} */

.first-foot-brutalism {
    margin-top: 4vh;
    border: 3px solid black;
    width: 21vw;
}

@media (min-width: 1280px) {
    .first-foot-brutalism {
        margin-top: 4vh;
        border: 3px solid black;
        width: 14vw;
    }
}

.foot-brutalism {
    padding-top: 10vh;
    background-color: transparent;
    font-family: Poppins;
}

.foot-brutalism a {
    color: rgb(249, 164, 19);
    transition: color 0.2s;
    font-family: Poppins;
}
.register{
    color: rgba(185, 185, 179, 0.84);
}
.foot-brutalism a:hover {
    color: white;
}
.row{
    text-align:center;
}
.foot-border {
    height: 160px;
    border-top: 3px solid rgb(255, 254, 254);
    border-width: 3px;
}

.foot-border-mid {
    height: 120px;
    border-top: 3px solid black;
    border-width: 3px;
}


.bg-footer {
    background-color: bisque;
}

.bg-footer2 {
    background-color: #ffffff;
}

.brutalism-head {
    font-weight: 700;
    font-size: 40px;
    margin-top: 1vh;
}

.icon-svg-social {
    width: 32px;
    height: 32px;
}
.register-link{
  margin-left: 58px;
  margin-right: 99px;
  color: #ea9d1f;
  text-align: center; 
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 87.5% */
  text-decoration: none;
}
@media (max-width: 680px) {
    .brutalism-head {
        font-weight: 700;
        font-size: 30px;
        margin-top: 2vh;
    }

    .icon-svg-social {
        width: 24px;
        height: 24px;
    }

    .first-foot-brutalism {
        margin-top: 4vh;
        border: 3px solid black;
        width: 40vw;
    }
}

</style>