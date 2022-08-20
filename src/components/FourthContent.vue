<template>
  <div class="page-title">
    <h1>Experience</h1>
  </div>
  <div class="card-container">
    <div class="card-body">
      <ul>
        <li>
          <h3>Intern at PUPQC Software Research Group.</h3>
            <h5>June 2020 - Aug 2021</h5>
            <p> - Handling web apps called Bitbo. 
                  <a target="_blank" href="https://github.com/jrglomar/bitbov1">Link and Details</a>
            </p>
            <p> - Doing web design on PSUCCESS. 
                  <a target="_blank" href="https://psuccess.ph">Link and Details</a>
            </p>
        </li>
        <li>
          <h3>In my official OJT at PUPQC I was the lead developer of the team. Developing web application.</h3>
            <h5>April 2022 - July 2022</h5>
            <p> - Faculty Monitoring System (FMS) a web application
                  <a target="_blank" href="https://github.com/jrglomar/fms">Link and Details</a>
            </p>
        </li>
        <li>
          <h3>Work as a freelancer, developed and maintained systems such as .</h3>
            <h5>December 2020 - September 2022</h5>
            <p> - Forget-Me-Not a web application. 
                  <a target="_blank" href="https://github.com/jrglomar/forgetmenot">Link and Details</a>
            </p>
            <p> - GTV Dayo a web application. 
                  <a target="_blank" href="https://github.com/jrglomar/gtvdayo">Link and Details</a>
            </p>
            <p> - Maintained realme raffle website. 
                  <a target="_blank" href="https://realmephpromos.com/registration">Link and Details</a>
            </p>
            <p> - Payroll Management System using VBA Excel System. 
                  <a target="_blank" href="https://github.com/jrglomar/VBA-PMS">Link and Details</a>
            </p>
            <p> - Asset Information Management System a web application. 
                  <a target="_blank" href="https://github.com/jrglomar/VBA-PMS">Link and Details</a>
            </p>
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


