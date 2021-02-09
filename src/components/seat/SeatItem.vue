<template>
  <tr @click="gotToSeatDetails()">
    <th scope="row">{{ code }}</th>
    <td>{{ level }}</td>
    <td class="text-left">{{ name }}</td>
  </tr>
</template>

<script>
export default {
  props: ["name", "code", "level", "state"],
  methods: {
    gotToSeatDetails() {
      let levelPath = "";

      if (this.level == "Federal") {
        levelPath = "mp";
      }
      if (this.level == "State") {
        levelPath = "adun";
      }

      this.$router.push({ path: `${levelPath}/${this.state.toLowerCase()}/${this.code}` });
    },
  },
};
</script>