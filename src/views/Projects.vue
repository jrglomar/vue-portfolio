<template>
  <Header />
  <div class="container">
    <div class="main-container">
      <h1>Projects</h1>
      <div class="project-content">
        <ProjectContent />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ProjectContent from "../components/ProjectContent";

export default {
  name: "Projects",
  components: {
    Header,
    ProjectContent,
  },
};
</script>
