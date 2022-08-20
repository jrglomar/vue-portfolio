<template>
  <div class="border">
    <p
      class="table-title"
      :style="{ backgroundColor: skillSets.border_color }"
      style="width: 100%"
    >
      {{ skillSets.obj_title }}
    </p>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody v-for="item in skillSets.data" v-bind:key="item.id">
      <tr>
        <td class="td-title">
          <li>{{ item.title }}</li>
        </td>
        <td class="td-rating">
          <div class="star_icon" :style="{ color: skillSets.border_color }">
            <div v-if="item.rating === 4.5">
              <span v-for="n in 4" v-bind:key="n.id">
                <font-awesome-icon icon="fa-solid fa-star" />
              </span>
              <span>
                <font-awesome-icon icon="fa-regular fa-star-half-stroke" />
              </span>
            </div>
            <div v-else>
              <span v-for="n in item.rating" v-bind:key="n.id">
                <font-awesome-icon icon="fa-solid fa-star" />
              </span>
              <span v-for="n in 5 - item.rating" v-bind:key="n.id">
                <font-awesome-icon icon="fa-regular fa-star" />
              </span>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SkillTable",
  props: {
    skillSets: Object,
  },
};
</script>

<style scoped>
.star_icon {
  color: #fac213;
}
.table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  vertical-align: top;
}

.table th,
td {
  overflow: hidden;
  vertical-align: top;
}
.table th {
  color: #e7f6f2;
  font-weight: 500;
  font-size: 20px;
  padding: 10px;
}
.table tbody,
td {
  color: #e7f6f2;
  font-weight: 100;
}
.table tbody,
td,
p {
  padding: 0px;
  margin: 0px;
  gap: 0px;
}

.border {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
}
.table-title {
  color: #2c3333;
  width: 100%;
  display: flex;
  flex-shrink: initial;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
}
.td-title {
  text-align: left;
  padding-left: 5%;
}
.td-rating {
  text-align: right;
  padding-right: 5%;
}
li {
  list-style-position: inside;
  text-indent: -1.4em;
  padding-left: 1em;
}

/* TEXT RESIZE ON SCREEN SIZE 700px */
@media screen and (min-width: 0px) and (max-width: 700px){
  .table {
    font-size: 8px;
  }
  .table-title {
    font-size: 10px;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    white-space: no-wrap;
  }
  .border {
    height: 15px;
  }
}


</style>