<template>

    <Header />
    <div class="container">
        <div class="main-content">
              <h1 class="main-details ">
                Hi! <span class="page-title">Its me </span>
              </h1>
                <h1 class="animate__animated animate__zoomInUp animate__slow"  style="text-align:center; padding:0px;">
                  <p>
                    <span class="shadows">R</span> 
                    <span class="shadows">a</span> 
                    <span class="shadows">v</span> 
                    <span class="shadows">e</span> 
                    <span class="shadows">n</span>
                  </p>
                </h1>
              <div class="row" style="padding:0px;justify-content:center"> 
                <p class="details animate__animated animate__fadeInUpBig animate__delay-1s">My full name is John Raven Glomar. I'm a web developer from Quezon City. I studied Bachelor of Science in Information Technology at the Polytechnic University of the Philippines.</p>
              </div>
      </div>
      <div class="">
        <div class="page-line"></div>
      </div>

      <div class="second-content animate__animated animate__pulse animate__repeat-2" >
        <TechStack />
      </div>
      
    </div>
    
</template>

<script>
import Header from '../components/Header';
import TechStack from '../components/TechStacks'

export default {
  name: 'Home',
  components: {
    Header,
    TechStack
  },
  
}
</script>

<style>



</style>
