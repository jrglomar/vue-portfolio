<template>
  <div class="card-container">
    <div class="page-title card-title">
      <h2>List of Projects</h2>
    </div>
    <div class="card-body">
      <ul>
        <ProjectList :projects="project_list.data" />
      </ul>
    </div>
  </div>
</template>

<script>
import ProjectList from "./ProjectList";

export default {
  name: "ProjectContent",
  data() {
    return {
      project_list: {
        data: [
          {
            title: "Faculty Monitoring System",
            description: `I lead the developer team in FMS team with two co-developers. 
						Faculty Monitoring System is a system that will aid the faculty staff in managing the
            details of submitting the required documents, class attendance, and
            campus activities. It will also provide the faculties with automated
            tools to quickly follow them. It is a web application that offers an
            automated solution for faculty monitoring that is well-organized and
            improved.`,
            stacks: [
              "Laravel (API, EloquentORM, Database Migration, Seeding, Factory)",
              "MySQL",
              "Javascript (jQuery, DropzoneJS, EnjoyHintJS)",
              "Bootstrap",
              "Git",
            ],
            links: ["https://github.com/jrglomar/fms"],
          },
          {
            title: "Personal Web Portfolio",
            description: `It is a web portfolio made with VueJS and styled it with css from scratch.`,
            stacks: ["VueJS", "CSS"],
            links: [
              "https://jrglomar.github.io/",
              "https://github.com/jrglomar/vue-portfolio",
            ],
          },
          {
            title: "BITbo",
            description: `Contribute and developed a module on Project called bitbo a Barangay IT Robot is
						designed to handle a wide-range of information relating to barangay profile,
						citizens profile, barangay IDs/clearances/certifications, blotter cases, local
						businesses, and barangay legislation.`,
            stacks: ["Laravel", "MySQL", "jQuery", "Git"],
            links: ["https://github.com/jrglomar/bitbov1", "https://gfmic.ph/barangay-it/"],
          },
          {
            title: "Bus Management System",
            description: `I lead the team as a lead developer and project manager in this project. The Bus Management Information System with Online Reservation Payment is an easy-to-use online booking system which helps users to reserve and pay bus tours with ease and convenience. It a system that is used for reserving seats, canceling bookings, and obtaining various forms of route to make quicker reservations. It is created to manage and computerize traditional databases, ticket purchasing, and bus and travel tracking. It keeps track of all passenger information, bus information, and reservation information. This will make the booking process more efficient, convenient, and pleasant.`,
            stacks: [
              "NodeJS",
              "Express",
              "SequelizeORM",
              "MySQL",
              "jQuery",
              "Bootstrap",
            ],
            links: [
              "https://github.com/jrglomar/brs-api",
              "https://github.com/jrglomar/brs-web",
            ],
          },
          {
            title: "Time and Attendance",
            description: `I solo developed this project. The Time and Attendance System is a system that will assist the Human Resource Office of a hospital by making shift and scheduling, time and attendance, and leave application more convenient and simpler for both human resource personnel and employees.`,
            stacks: [
              "Python (FastAPI, SQLAlchemyORM)",
              "MySQL",
              "jQuery",
              "Bootstrap",
              "Javascript(InstaScan, QR Code)",
            ],
            links: ["https://github.com/jrglomar/time-and-attendance"],
          },
          {
            title: "realme Raffle System",
            description: `I maintained some of the functionalities of realme Raffle System Website.`,
            stacks: ["PHP (CodeIgniter)", "MySQL", "jQuery"],
            links: ["https://realmephpromos.com/registration"],
          },
          {
            title: "PUP E-Boto",
            description: `I am solo developer in this project with a team of QAs. The University elections depends on how the PUP QC COMELEC, Organizations, and The University organized its process and policy. PUP E-BOTO was designed to provide sufficient effect for the elections, contest, and poll that students can participate. The traditional way of voting which is through paper ballots pushed the researchers to develop an E-Voting site which is the PUP E-BOTO, it is an effective way of handling elections compared to manually or physically attending the elections that involves a bunch of physical contacts to other people, long lines to wait, and prone to anomalies or tampering. Therefore, the researchers come up with the study that addressed this kind of dilemma.`,
            stacks: [
              "PHP (CodeIgniter)",
              "MSSQL",
              "jQuery",
              "Bootstrap",
              "Git",
            ],
            links: ["https://github.com/jrglomar/eboto"],
          },
          {
            title: "Study Helper System",
            description: `I solo developed this project. Study helper aims to help student to list down their tasks and also track their academic activity progress in every subject. It is a Desktop GUI Application.`,
            stacks: ["Python (Tkinter)", "MySQL"],
            links: ["https://github.com/jrglomar/studyhelpersystem"],
          },
          {
            title: "Asset Information Management System",
            description: `It is a web app that handles assets information such as school equipments.`,
            stacks: [
							"Laravel (API, EloquentORM, Database Migration, Seeding)",
              "MySQL",
              "Javascript (jQuery)",
              "Bootstrap",
              "Git",
					],
            links: ["https://github.com/jrglomar/aims"],
          },
          {
            title: "PSUCCESS",
            description: `I maintained and update the design of PSUCCESS.`,
            stacks: ["Wordpress"],
            links: ["https://psuccess.ph/"],
          },
          {
            title: "Forget-Me-Not",
            description: `This project is a task management system with email notification.`,
            stacks: [
              "PHP (CodeIgniter)",
              "MSSQL",
              "jQuery",
              "Bootstrap",
              "Git",
            ],
            links: ["https://github.com/jrglomar/forgetmenot"],
          },
					{
            title: "GTV Dayo",
            description: `This project is a online basketball game appointment.`,
            stacks: [
              "PHP (CodeIgniter)",
              "MSSQL",
              "jQuery",
              "Bootstrap",
              "Git",
            ],
            links: ["https://github.com/jrglomar/gtvdayo"],
          },
					
					{
            title: "Payroll Management System",
            description: `This project is a GUI payroll management system made with VBA and use Excel as a database.`,
            stacks: [
              "VBA Excel",
            ],
            links: ["https://github.com/jrglomar/VBA-PMS"],
          },
					{
            title: "Library System",
            description: `This is a C++ Program that handles a Student Record with CRUD functionality and Library System with CRUD functionality of Books, Logs of Borrowed Books and List of Available Books.`,
            stacks: [
              "C++",
            ],
            links: ["https://github.com/jrglomar/librarysystem"],
          },
					
        ],
      },
    };
  },
  components: { ProjectList },
};
</script>

<style scoped>
.card-title {
  font-size: 25px;
}

.card-container {
  width: 100%;
  padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.card-body {
  color: white;
	width: 50%;
	font-size: 15px;
}

/* TEXT RESIZE ON SCREEN SIZE 700px */
@media screen and (min-width: 0px) and (max-width: 700px) {
  .card-body {
    font-size: 12px;
		width: 100%;
  }
}
</style>
