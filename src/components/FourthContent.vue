<template>
  <div class="card-container">
    <div class="page-title">
      <h1>Experience</h1>
    </div>
    <div class="card-body">
      <ul>
        <li>
          <h3>Intern Developer, Software Research Group</h3>
          <h5>June 2020 - Aug 2021</h5>
          <p>
            I was one of the developer of the team that develops school system
            solutions that helped university staff to fulfill their work with
            efficiency.
          </p>
        </li>
        <li>
          <h3>Software Developer, Freelance</h3>
          <h5>December 2020 - September 2022</h5>
          <p>
            I was doing a freelance project, such as a full-blown web app,
            maintaining systems, etc., that I found online and with my friend's
            contacts.
          </p>
        </li>
        <li>
          <h3>Intern Developer, Polytechnic University of the Philippines.</h3>
          <h5>April 2022 - July 2022</h5>
          <p>I lead the developer team developing this project called Faculty Monitoring System (FMS) a web application <br /><a
              target="_blank"
              href="https://github.com/jrglomar/fms"
              >Link and Details</a
            ><br />
            <a
              target="_blank"
              href="https://www.canva.com/design/DAFFLHSQWeM/Zay3sIsWeqs_ivfDJyE0_g/view?utm_content=DAFFLHSQWeM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            >
              View my OJT Portfolio
            </a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "FourthContent",
  data() {},
  emits: [],
  methods: {},
  created() {},
};
</script>

<style scoped>
p {
  color: var(--main-bg);
}
h3 {
  color: white;
  font-weight: 600;
}
h5 {
  font-weight: 500;
  padding-left: 2.5%;
  margin-block-start: 0;
  margin-block-end: 0;
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
.card-body {
  justify-content: center;
  text-align: start;
  display: inherit;
  font-size: 22px;
}

ul {
  color: white;
}
a {
  color: cyan;
  padding-left: 10%;
  font-size: 14px;
}

li p {
  padding-left: 5%;
  color: white;
  font-size: 18px;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
  /* show it on small screens */
  .card-body {
    font-size: 12px;
  }

  a {
    font-size: 10px;
  }
  li p {
    font-size: 10px;
  }
}
</style>


