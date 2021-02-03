<template>
  <div>
    <div class="row mx-auto search-viewgroup">
      <seat-auto-complete-search class="col-sm search-viewgroup" type="mp" />
      <seat-auto-complete-search class="col-sm search-viewgroup" type="adun" />
    </div>
    <form class="mx-auto search-viewgroup">
      <input
        class="search-box"
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
import SeatAutoCompleteSearch from "@/components/seat/SeatAutoCompleteSearch";

export default {
  components: {
    SeatItem,
    SeatAutoCompleteSearch,
  },
  data() {
    return {
      isLoading: false,
      searchQuery: "",
    };
  },
  computed: {
    filteredSeats() {
      const seats = this.$store.getters["mpSeats"];
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
    // this.loadSeats(false);
  },
  methods: {
    // async loadSeats(refresh = false) {
    //   refresh;
    // },
  },
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

.search-box {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>