<template>
  <div>
    <landing-page></landing-page>
    <tutorial-page class="w-full h-auto"></tutorial-page>
    <div class="h-screen sm:grid-cols-1 md:grid-cols-2 lg:w-4/5 gap-4 mx-auto mt-12  p-4 full grid ">
      <seat-auto-complete-search type="mp" />
      <seat-auto-complete-search type="adun" />
    </div>
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";
import TutorialPage from "@/components/TutorialPage.vue";
import SeatAutoCompleteSearch from "@/components/seat/SeatAutoCompleteSearch";

export default {
  name: "Home",
  components: {
    LandingPage,
    TutorialPage,
    SeatAutoCompleteSearch,
  },
};
</script>