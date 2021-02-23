<template>
  <div class="p-8" v-if="person != null && seat != null">
    <person-detail :person="person" :seat="seat"></person-detail>
  </div>
</template>
<script>
import PersonDetail from "../../components/person/PersonDetail.vue";
export default {
  components: { PersonDetail },
  props: ["state", "federalCode", "stateCode"],
  data() {
    return {
      person: null,
      seat: null,
    };
  },
  created() {
    this.findSeat();
    this.findPersonBySeat();
  },
  methods: {
    findSeat() {
      this.$store
        .dispatch("findSeatByCode", {
          federalSeatCode: this.federalCode,
          stateSeatCode: this.stateCode,
        })
        .then((response) => {
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
          this.person = response;
        });
    },
  },
};
</script>