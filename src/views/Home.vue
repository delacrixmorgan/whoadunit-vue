<template>
  <div>
    <landing-page></landing-page>
    <div class="h-screen md:min-h-full row mx-auto w-4/5 mt-2">
      <seat-auto-complete-search class="col-sm search-viewgroup" type="mp" />
      <seat-auto-complete-search class="col-sm search-viewgroup" type="adun" />
    </div>
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";
import SeatAutoCompleteSearch from "@/components/seat/SeatAutoCompleteSearch";

export default {
  name: "Home",
  components: {
    LandingPage,
    SeatAutoCompleteSearch,
  },
};
</script>
<style scoped>
.search-viewgroup {
  width: 80%;
  margin-top: 32px;
}
</style>