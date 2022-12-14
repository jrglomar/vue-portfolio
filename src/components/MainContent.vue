<template>
  <div class="fixed-container"> 
    <h1 class="main-details" width="100%">
      <h1 class="main-page-title"><b style="color: #2c3333">Hi!</b> I am</h1>
    </h1>
    <h1 class="wrap" style="text-align: center; padding: 0px">
      <p class="shadows r animate__animated animate__pulse animate__infinite  animate__slow">
        <span class="shadows r">R</span>
        <span class="shadows a">a</span>
        <span class="shadows v">v</span>
        <span class="shadows e">e</span>
        <span class="shadows n">n</span>
      </p>
    </h1>
    <div class="row" style="padding: 0px; justify-content: center">
      <p class="details">
        My full name is John Raven Glomar. I'm a software engineer from Quezon City.
        I studied Bachelor of Science in Information Technology at the
        Polytechnic University of the Philippines. I created this portfolio
        using <img class="vue-logo" src="../assets/logo.png" /> Vue.js and style
        it with CSS from scratch.
        
      </p>
    </div>
    <div class="row" style="padding: 0px; justify-content: center">
      <h5 class="details">Keep Scrolling...</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
};
</script>

<style>
  .fixed-container {
    position: fixed;
  }
</style>