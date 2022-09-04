<template>
  <div class="page-title">
    <h1>Experience</h1>
  </div>
  <div class="card-container">
    <div class="card-body">
      <ul>
        <li>
          <h3>Intern at PUPQC Software Research Group as a developer.</h3>
            <h5>June 2020 - Aug 2021</h5>
        </li>
        <li>
          <h3>In my official OJT at PUPQC I was the lead developer of the team. Developing web application.</h3>
            <h5>April 2022 - July 2022</h5>
            <p> - Faculty Monitoring System (FMS) a web application<br/>
                  <a target="_blank" href="https://github.com/jrglomar/fms">Link and Details</a><br/>
                  <a target="_blank" href="https://www.canva.com/design/DAFFLHSQWeM/Zay3sIsWeqs_ivfDJyE0_g/view?utm_content=DAFFLHSQWeM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">View OJT Portfolio</a>
            </p>
        </li>
        <li>
          <h3>Work as a freelancer software developer</h3>
            <h5>December 2020 - September 2022</h5>
            
        </li>
      </ul>
        
    </div>
  </div>
</template>


<script>
export default {
  name: "FourthContent",
  data() {
    
  },
  emits: [],
  methods: {
    
  },
  created() {},
};
</script>

<style scoped>
p {
  color: var(--main-bg);
}
h3 {
  color: var(--main-bg)
}
.text-span {
  color: var(--main-bg);
}
.card-container {
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
.card-body{
  justify-content: center;
  text-align: start;
  display: inherit;
  font-size: 18px;
}

ul {
  color: white;
}
a {
  color: cyan;
}

li p {
  padding-left: 5%;
  color: #A5C9CA;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
  /* show it on small screens */
  .card-body {
    font-size: 11px;
  }
  
}
</style>


