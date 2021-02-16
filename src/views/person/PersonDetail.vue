<template>
  <div class="p-8">
    <person-detail :person="person" :seat="seat"></person-detail>
  </div>
</template>
<script>
import PersonDetail from "../../components/person/PersonDetail.vue";
export default {
  components: { PersonDetail },
  props: ["id"],
  data() {
    return {
      person: null,
      seat: null,
    };
  },
  created() {
    this.findPersonById();
  },
  methods: {
    findPersonById() {
      this.$store
        .dispatch("findPersonById", {
          id: this.id,
        })
        .then((response) => {
          this.person = response;
          this.findSeat();
        });
    },
    findSeat() {
      this.$store
        .dispatch("findSeatByCode", {
          federalSeatCode: this.person.federalseatcode,
          stateSeatCode: this.person.stateseatcode,
        })
        .then((response) => {
          this.seat = response;
        });
    },
  },
};
</script>