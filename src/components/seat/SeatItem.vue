<template>
  <tr @click="gotToMemberDetails()">
    <th scope="row">{{ code }}</th>
    <td>{{ level }}</td>
    <td class="text-left">{{ name }}</td>
  </tr>
</template>

<script>
export default {
  props: ["name", "code", "level"],
  methods: {
    gotToMemberDetails() {
      this.$router.push({ path: `/seat/${this.code}` })
    },
  },
};
</script>