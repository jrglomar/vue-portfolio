<template>
  <Header />
  <div class="container">
    <div class="main-container">
      <h1>Experience</h1>
      <div class="experience-content">
        <FourthContent/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import FourthContent from "../components/FourthContent";

export default {
  name: "Experiences",
  components: {
    Header,
    FourthContent
},
};
</script>