<template>
  <div>
    <h3>Person Detail</h3>
    <p>{{ person.name }}</p>
  </div>
</template>
<script>
// import PersonCard from "../../components/person/PersonCard.vue";
export default {
//   components: { PersonCard },
  props: ["id", "person"],
  created() {
    this.findPersonById()
  },
  methods: {
    findPersonById() {
      this.$store
        .dispatch("findPersonById", {
          id: this.id,
        })
        .then((response) => {
          this.person = response;
        });
    },
  },
};
</script>