<template>
  <div class="h-screen w-full flex items-stretch">
    <seat-list class="m-4 w-11/12 xl:w-2/5 mx-auto" :type="type"></seat-list>
  </div>
</template>

<script>
import SeatList from "@/components/seat/SeatList.vue";

export default {
  components: {
    SeatList,
  },
  data() {
    return {
      type: "mp",
      query: "",
    };
  },
  methods: {
    setQuery(query) {
      console.log(query);
    },
  },
};
</script>
