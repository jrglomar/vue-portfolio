<template>
  <div class="modal" @click="closeModal">
    <div class="modal-dialog">
      <div class="modal-content" @click.stop="">
        <div class="modal-title">
          <button class="close" @click="closeModal">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
          <h1>{{ modalData.title }}</h1>
        </div>
        <div class="modal-body">
          <h2>
            <span style="white-space: pre-wrap">{{ modalData.body }}</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  methods: {
    closeModal(e) {
      var modal = document.querySelector(".modal");
      modal.style.display = "none";
    },
  },
  props: {
    modalData: Object,
  },
};
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-dialog {
  overflow-y: initial !important;
}
.modal-content {
  background-color: #fefefe;
  margin: 10%;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 20px;
  width: 80%;
  height: 100%;
}
.modal-content h2 {
  margin-block-start: 0em;
}
.modal-title {
  background-color: #fefefe;
  margin: 20px;
  font-size: 15px;
}
.modal-title h1 {
  color: var(--header-bg);
  text-shadow: 0px 0px 1px black;
  font-weight: 800;
}
.modal-body {
  background-color: #fefefe;
  margin: 20px;
  font-size: 12px;
  height: 60vh;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  line-height: 300%;
}
.close {
  background-color: transparent;
  border: transparent;
  color: #aaa;
  float: right;
  font-size: 18px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
  .modal-body {
    font-size: 6px;
    padding-left: 2px;
  }
  .modal-title {
  background-color: #fefefe;
  margin: 20px;
  font-size: 8px;
}
}
</style>