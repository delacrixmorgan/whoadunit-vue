<template>
  <div class="p-4">
    <h3>{{ type.toUpperCase() }} List</h3>
    <seat-list :type = type></seat-list>
  </div>
</template>
<script>
import SeatList from "../../components/seat/SeatList.vue";
export default {
  components: { SeatList },
  props: ["state"],
  data() {
    return {
        type: ""
    }
  },
  created() {
    const routeName = this.$router.currentRoute.name;
    if (routeName == "AdunList") {
      this.type = "adun";
    }
    if (routeName == "MpList") {
      this.type = "mp";
    }
  },
};
</script>
<style scoped>
</style>