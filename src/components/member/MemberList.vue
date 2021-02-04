<template>
  <div>
    <form class="mx-auto search-viewgroup">
      <input
        class="w-full focus:outline-none focus:ring focus:border-blue-300 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-3 pl-5"
        type="text"
        placeholder="Search..."
        v-model.trim="searchQuery"
      />
    </form>
    <table class="mx-auto seat-list-viewgroup table table-hover">
      <thead>
        <tr>
          <th scope="col" class="col-1">Code</th>
          <th scope="col" class="col-1">Level</th>
          <th scope="col" class="col-auto text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        <seat-item
          v-for="seat in filteredSeats"
          :key="seat.id"
          :code="seat.code"
          :level="seat.level"
          :name="seat.name"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import SeatItem from "@/components/seat/SeatItem";

export default {
  components: {
    SeatItem,
  },
  props: ["type"],
  data() {
    return {
      isLoading: false,
      searchQuery: "",
      getterEndpoint: "",
    };
  },
  computed: {
    filteredSeats() {
      const seats = this.$store.getters[this.getterEndpoint];
      const query = this.searchQuery.toLowerCase();
      return seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          seat.code.toLowerCase().includes(query) ||
          seat.level.toLowerCase().includes(query)
      );
    },
  },
  created() {
    if (this.type == "adun") {
      this.getterEndpoint = "adunSeats";
    }
    if (this.type == "mp") {
      this.getterEndpoint = "mpSeats";
    }
  },
  methods: {},
};
</script>
<style scoped>
.search-viewgroup {
  width: 80%;
  margin-top: 32px;
}

.seat-list-viewgroup {
  width: 80%;
  margin-top: 16px;
}
</style>