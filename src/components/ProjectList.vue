<template>
  <li v-for="item in projects" v-bind:key="item.id">
		<h3 class="project-title">{{ item.title }}</h3>
    <div class="project-body">
      <p class="project-description">{{ item.description }}</p>
      <span class="project-title"
        >Stacks: <br />
        <div
          class="project-stack"
          v-for="stack in item.stacks"
          v-bind:key="stack.id"
        >
          <span>- {{ stack }}</span
          ><br />
        </div>
      </span>
      <span>
        <span class="project-title">Project Link/s: </span>
        <div
          class="project-stack"
          v-for="link in item.links"
          v-bind:key="link.id"
        >
          <a :href=link target="_blank"> {{ link }}</a>
        </div>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProjectList",
  props: {
    projects: Object,
  },
};
</script>

<style>
.project-description {
  width: 100%;
}

.project-body {
	margin-left: 20px;
}

.project-title {
  color: #f4e06d;
}

.project-stack {
  margin-left: 20px;
  color: white;
}

</style>
