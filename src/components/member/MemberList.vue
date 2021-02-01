<template>
  <div>
    <ul>
      <member-item v-for="member in members" :key="member.id" />
    </ul>
  </div>
</template>

<script>
import MemberItem from "@/components/member/MemberItem.vue";

export default {
  components: {
    MemberItem,
  },
};
</script>