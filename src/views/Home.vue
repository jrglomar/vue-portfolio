<template>
  <Header :isSecondHeader="isSecondHeader" />
  <Modal :modalData="modalData" />
  <div class="container">
    <div class="main-content">
      <MainContent />
    </div>
    <div class="secondary-content">
      <SecondContent />
    </div>

    <div class="secondary-content">
      <ThirdContent @modalTitleTrigger="getModalTitle" />
    </div>

  </div>
</template>

<script>
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SecondContent from "../components/SecondContent";
import ThirdContent from "../components/ThirdContent";
import FourthContent from "../components/FourthContent";
import Modal from "../components/Modal";

export default {
  name: "Home",
  components: {
    Header,
    MainContent,
    ThirdContent,
    MainContent,
    SecondContent,
    FourthContent,
    Modal,
    FourthContent,
  },
  data() {
    return {
      isSecondHeader: false,
      modalData: {},
    };
  },
  methods: {
    // This function is for revealing the content when reach the exact height
    // reveal(e) {
    //   var testwindowHeight = window.innerHeight;
    //   var reveals = document.querySelectorAll(".reveal");
    //   var header = document.querySelectorAll("header");
    //   for (var i = 0; i < reveals.length; i++) {
    //     var windowHeight = window.innerHeight;
    //     var elementTop = reveals[i].getBoundingClientRect().top;
    //     var elementVisible = 100;
    //     console.log(windowHeight);
    //     console.log(elementTop);
    //     console.log(elementVisible);
    //     if (elementTop < windowHeight - elementVisible) {
    //       reveals[i].classList.add("active");
    //       this.isSecondHeader = true;
    //     } else if (elementTop < windowHeight) {
    //       this.isSecondHeader = false;
    //     } else {
    //       reveals[i].classList.remove("active");
    //     }
    //   }
    // },
    // Passing modal data
    getModalTitle(value) {
      this.modalData = value;
    },
  },
  created() {
    window.addEventListener("scroll", this.reveal);
  },
};
</script>

<style>
</style>
