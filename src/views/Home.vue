<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <landing-page></landing-page>
    <div class="row mx-auto search-viewgroup">
      <seat-auto-complete-search class="col-sm search-viewgroup" type="mp" />
      <seat-auto-complete-search class="col-sm search-viewgroup" type="adun" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'
import SeatAutoCompleteSearch from "@/components/seat/SeatAutoCompleteSearch";

export default {
  name: 'Home',
  components: {
    LandingPage, SeatAutoCompleteSearch
  }
}
</script>
<style scoped>
.search-viewgroup {
  width: 80%;
  margin-top: 32px;
}
</style>