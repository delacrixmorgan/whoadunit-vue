<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <landing-page></landing-page>
    <seat-list></seat-list>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'
import SeatList from '@/components/seat/SeatList.vue'

export default {
  name: 'Home',
  components: {
    LandingPage, SeatList
  }
}
</script>