<template>
  <div>
    <landing-page></landing-page>
    <tutorial-page></tutorial-page>
    <div class="h-screen full grid md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto w-4/5 mt-12">
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