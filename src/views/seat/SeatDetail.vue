<template>
  <div class="p-8">
    <person-detail :person="person" :seat="seat"></person-detail>
  </div>
</template>
<script>
export default {
  props: ["state", "federalCode", "stateCode"],
  data() {
    return {
      person: null,
      seat: null,
    };
  },
  created() {
    // this.findSeat();
    // this.findPersonBySeat();
  },
  methods: {
    findSeat() {
      this.$store
        .dispatch("findSeatByCode", {
          federalSeatCode: this.federalCode,
          stateSeatCode: this.stateCode,
        })
        .then((response) => {
          console.log(response);
          this.seat = response;
        });
    },
    findPersonBySeat() {
      this.$store
        .dispatch("findPersonBySeat", {
          federalSeatCode: this.federalCode,
          stateSeatCode: this.stateCode,
        })
        .then((response) => {
          console.log(response);
          this.person = response;
        });
    },
  },
};
</script>