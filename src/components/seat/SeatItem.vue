<template>
  <tr @click="gotToSeatDetails()">
    <th scope="row">{{ code }}</th>
    <td class="text-left">{{ state }}</td>
    <td class="text-left">{{ name }}</td>
    <td class="text-left">{{ person.name }}</td>
  </tr>
</template>

<script>
export default {
  props: ["name", "code", "level", "state", "seat", "person"],
  methods: {
    gotToSeatDetails() {
      let levelPath = "";

      if (this.level == "Federal") {
        levelPath = "mp";
      }
      if (this.level == "State") {
        levelPath = "adun";
      }

      this.$router.push({
        path: `${levelPath}/${this.state.toLowerCase()}/${this.code}`,
      });
    }
  },
};
</script>