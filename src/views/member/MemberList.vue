<template>
  <div>
    <h3>Member List</h3>
    <member-list :type = type></member-list>
  </div>
</template>
<script>
import MemberList from "../../components/member/MemberList.vue";
export default {
  components: { MemberList },
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