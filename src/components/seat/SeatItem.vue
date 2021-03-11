<template>
  <tr @click="gotToSeatDetails()">
    <td class="text-left select-none">{{ seat.level }}</td>
    <td class="text-left select-none">{{ getSeatCode() }}</td>
    <td class="text-left select-none">{{ seat.state }}</td>
    <td class="text-left select-none">{{ seat.name }}</td>
    <td class="text-left select-none">{{ seat.person.name }}</td>
  </tr>
</template>

<script>
export default {
  props: ["seat"],
  methods: {
    getSeatCode() {
      if (this.seat.level.toLowerCase() == "federal") {
        return this.seat.federalseatcode;
      }
      if (this.seat.level.toLowerCase() == "state") {
        return this.seat.stateseatcode;
      }
    },
    gotToSeatDetails() {
      this.$router.push({
        path: `person/${this.seat.person.id}`,
      });
    },
  },
};
</script>
