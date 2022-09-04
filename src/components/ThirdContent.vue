<template>
  <div class="accomplishment-container">
    <div class="page-title">
      <h1>Student Accomplishments</h1>
    </div>
    <div
      class="accomplishment-card"
      id="2018"
      @click="acHandler"
      style="background-color: #ffe61b"
    >
      <h1>2018-2019</h1>
    </div>
    <div
      class="accomplishment-card"
      id="2019"
      @click="acHandler"
      style="background-color: #f7f7f7"
    >
      <h1>2019-2020</h1>
    </div>
    <div
      class="accomplishment-card"
      id="2020"
      @click="acHandler"
      style="background-color: #b5fe83"
    >
      <h1>2020-2021</h1>
    </div>
    <div
      class="accomplishment-card"
      id="2021"
      @click="acHandler"
      style="background-color: #ffb72b"
    >
      <h1>2021-2022</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "ThirdContent",
  data() {
    return {
      modalMouseHover: false,
      modalData: [
        {
          id: "2018",
          title: "2018-2019 Accomplishment/s",
          body: `• Created an ecommerce website using
    - Wordpress
• Program and passed a Case Studies using C language`,
        },
        {
          id: "2019",
          title: "2019-2020 Accomplishment/s",
          body: `• Program and passed a Case Studies using COBOL language
• Program and passed a Case Studies using Java language
• Program and passed a Case Studies using PHP
• I’ve developed a GUI application using following technology stacks:
    - Python Tkinter
    - MySQL
    - Git
    System Link: https://github.com/jrglomar/studyhelpersystem`,
        },
        {
          id: "2020",
          title: "2020-2021 Accomplishment/s",
          body: `• Developed Online Voting System called PUP-Eboto a Web Application System
as solo developer using following technology stacks:
    - PHP CodeIgniter
    - MSSQL
    - jQuery
    - Git
    System Link: https://github.com/jrglomar/eboto
• Developed Reminder App called Forget Me Not a Web Application System as
    solo developer using following technology stacks:
    - PHP CodeIgniter
    - MSSQL
    - jQuery
    - Git
    System Link: https://github.com/jrglomar/forgetmenot
• Developed Reservation System called GTV Dayo a Web Application System
as solo developer using following technology stacks:
    - PHP CodeIgniter
    - MSSQL
    - jQuery
    - Git
    System Link: https://github.com/jrglomar/gtvdayo
• Developed Bus Management System a Web Application System as lead
developer using following technology stacks:
    - PHP CodeIgniter
    - NodeJS – ExpressJS(API), SequelizeORM(ORM)
    - MySQL
    - jQuery
    - Git
    System Link: https://github.com/jrglomar/brs-api
    https://github.com/jrglomar/brs-web
• I've been part of Software Research Group in PUP Quezon City.
• Maintain the PSUCCESS website using
    - Wordpress.
System Link: https://psuccess.ph/
• Developed a module on SRG Project called bitbo a Barangay IT Robot is
designed to handle a wide-range of information relating to barangay profile,
citizens profile, barangay IDs/clearances/certifications, blotter cases, local
businesses, and barangay legislation.
    - PHP Laravel
    - jQuery
    - MySQL
    - Git
    System Link: https://github.com/jrglomar/bitbov1
• Developed a Library System program using:
    - C++
    System Link: https://github.com/jrglomar/librarysystem
• Developed realme Raffle System a Web Application System as lead developer
using following technology stacks:
    - PHP CodeIgniter
    - MySQL
    - jQuery
    - Git
    System Link: https://realmephpromos.com/registration
• Developed Payroll Management System a program using:
    - VBA Excel
    System Link: https://github.com/jrglomar/VBA-PMS
`,
        },
        {
          id: "2021",
          title: "2021-2022 Accomplishment/s",
          body: `• Create a prototype design for Extension Project Management System a Web
Application System using following technology stacks:
    - PHP CodeIgniter
    - jQuery
    - Git
    System Link: https://github.com/jrglomar/epms
• Create a prototype design for Student Organization Management System a
Web Application System using following technology stacks:
    - PHP CodeIgniter
    - jQuery
    - Git
    System Link: https://github.com/jrglomar/studentorg
• Developed a Time and Attendance for Hospital Management Systems a Web
Application System as solo developer using following technology stacks:
    - Python – FastAPI(API), SQLAlchemy(ORM)
    - Database – Alembic Migration Script
    - MySQL
    - jQuery
    - Git
    System Link: https://github.com/jrglomar/time_and_attendance
• Developed a Faculty Monitoring System a Web Application System as lead full
stack developer using following technology stacks:
    - PHP – Laravel, Eloquent(API, ORM)
    - Database – Laravel - Migration Script, Seeder, Factory
    - jQuery
    - Git
    - MySQL
    System Link: https://github.com/jrglomar/fms
• Developed a my personal web portfolio using:
    - VueJS
    - CSS (from scratch)
    System Link: https://github.com/jrglomar/vue-portfolio
`,
        },
      ],
    };
  },
  emits: ["modalTitleTrigger"],
  methods: {
    acHandler(e) {
      let id = e.currentTarget.id;
      var selected_data = this.modalData
        .filter(function (data) {
          return data.id == id;
        })
        .pop();
      this.$emit("modalTitleTrigger", selected_data);
      let modal = document.querySelector(".modal");
      modal.style.display = "block";
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style>
.text-span {
  color: var(--main-text);
}
.accomplishment-container {
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
}
.accomplishment-card {
  background-color: white;
  width: 200px;
  height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  transition: transform 1s;
  border-radius: 50%;
  margin: 10px;
  border: 3px solid white;
  box-shadow: 10px 10px 0px black;
  cursor: pointer;
}
.accomplishment-card h1 {
  font-weight: 800;
  font-size: 22px;
  color: black;
}
.reveal.active .accomplishment-container .accomplishment-card {
  animation: right-to-left 1s ease-in forwards alternate 1;
}

/* TEXT RESIZE ON SCREEN SIZE 700px */
@media screen and (min-width: 0px) and (max-width: 700px) {
  .accomplishment-card {
    justify-content: center;
    width: 75px;
    height: 75px;
  }
  .accomplishment-card h1 {
    font-size: 12px;
  }
}
</style>


