<template>
  <div class="page-title">
    <h1>My Knowledge</h1>
  </div>
  <div class="knowledge-container">
    <div class="table-box prog">
      <SkillTable :skillSets="prog_languages" />
    </div>
    <div class="table-box framework">
      <SkillTable :skillSets="frameworks" />
    </div>
  </div>
  <div class="knowledge-container">
    <div class="table-box skills">
      <SkillTable :skillSets="technicals" />
    </div>
    <div class="table-box others">
      <SkillTable :skillSets="softs" />
    </div>
  </div>
</template>

<script>
import SkillTable from "./SkillTable";

export default {
  name: "TechStack",
  components: {
    SkillTable,
  },
  data() {
    return {
      // prog_languages
      prog_languages: {
        obj_title: "Languages",
        border_color: "#FFE61B",
        data: [
          {
            title: "Javascript",
            rating: 4.5,
          },
          {
            title: "HTML",
            rating: 4.5,
          },
          {
            title: "CSS",
            rating: 4.5,
          },
          {
            title: "PHP",
            rating: 4,
          },
          {
            title: "Python",
            rating: 4,
          },
          {
            title: "SQL",
            rating: 4,
          },
          {
            title: "C++",
            rating: 3,
          },
          {
            title: "Java",
            rating: 3,
          },
          {
            title: "VBA",
            rating: 3,
          },
        ],
      },
      // frameworks
      frameworks: {
        obj_title: "Frameworks",
        border_color: "#F7F7F7",
        data: [
          {
            title: "Laravel",
            rating: 4.5,
          },
          {
            title: "jQuery",
            rating: 4.5,
          },
          {
            title: "CodeIgniter",
            rating: 4.5,
          },
          {
            title: "Bootstrap",
            rating: 4.5,
          },
          {
            title: "VueJS",
            rating: 4,
          },
          {
            title: "FastAPI",
            rating: 4,
          },
          {
            title: "Sequelize",
            rating: 3,
          },
          {
            title: "ExpressJS",
            rating: 3,
          },
        ],
      },
      // Other data
      technicals: {
        obj_title: "Technical",
        border_color: "#B5FE83",
        data: [
          {
            title: "Version Control - Git",
            rating: 5,
          },
          {
            title: "API Documentation - Postman",
            rating: 4.5,
          },
          {
            title: "Project Management - Trello",
            rating: 4.5,
          },
          {
            title: "Styling HTML from Scratch - CSS",
            rating: 4,
          },
          {
            title: "SDLC Approach - Waterfall, Agile",
            rating: 4,
          },
          {
            title: "Software Framework Pattern - MVC, MVVM",
            rating: 4,
          },
          {
            title: "DB Management - MySQL, MSSQL",
            rating: 4,
          },
          {
            title: "ORM Technique - Sequelize, Laravel, SQLAlchemy",
            rating: 4,
          },
          {
            title: "DB Migration & Seeder Scripting - Laravel, SQLAlchemy",
            rating: 4,
          },
          {
            title: "Graphic Designing Tools - Photoshop",
            rating: 4,
          },
        ],
      },
      softs: {
        obj_title: "Soft Skills",
        border_color: "#FFB72B",
        data: [
          {
            title: "Analytical and Problem Solving",
            rating: 4.5,
          },
          {
            title: "Self-learning",
            rating: 4.5,
          },
          {
            title: "Time management",
            rating: 4.5,
          },
          {
            title: "Collaboration",
            rating: 4.5,
          },
          {
            title: "Debugging",
            rating: 4.5,
          },
          {
            title: "Communication",
            rating: 4,
          },
          {
            title: "Code Documentation",
            rating: 4,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.text-span {
  color: var(--main-text);
}
.knowledge-container {
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
}
.table-box {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>