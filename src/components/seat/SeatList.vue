<template>
  <div>
    <form class="w-4/5 mx-auto search-viewgroup mt-8">
      <input
        class="w-full focus:outline-none focus:ring focus:border-blue-300 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-3 pl-5"
        type="text"
        placeholder="Search..."
        v-model.trim="searchQuery"
      />
    </form>
    <table class="w-4/5 mx-auto mt-16 table table-hover">
      <thead>
        <tr>
          <th
            scope="col"
            class="col-1 select-none"
            @click="onSort(getSeatColumn())"
          >
            Code
            <span v-if="sortType == 'ASC' && sortColumn == getSeatColumn()"
              >🔺</span
            >
            <span
              v-else-if="sortType == 'DESC' && sortColumn == getSeatColumn()"
              >🔻</span
            >
          </th>
          <th scope="col" class="col-1">Level</th>
          <th
            scope="col"
            class="col-auto text-left select-none"
            @click="onSort('name')"
          >
            Name
            <span v-if="sortType == 'ASC' && sortColumn == 'name'">🔺</span>
            <span v-else-if="sortType == 'DESC' && sortColumn == 'name'"
              >🔻</span
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <seat-item
          v-for="seat in filteredSeats"
          :key="seat.id"
          :code="getSeatCode(seat)"
          :level="seat.level"
          :name="seat.name"
          :state="seat.state"
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
      seatCode: "",
      getterEndpoint: "",
      sortColumn: "",
      sortType: "",
    };
  },
  computed: {
    filteredSeats() {
      const seats = this.$store.getters[this.getterEndpoint];
      const query = this.searchQuery.toLowerCase();
      const filteredSeats = seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          this.getSeatCode(seat).toLowerCase().includes(query) ||
          seat.level.toLowerCase().includes(query)
      );

      if (this.sortType != "") {
        return filteredSeats.sort((a, b) => {
          let modifier = 1;
          if (this.sortType === "DESC") modifier = -1;
          if (
            this.sortColumn == "stateseatcode" ||
            this.sortColumn == "federalseatcode"
          ) {
            if (a[this.sortColumn].localeCompare(b[this.sortColumn])) {
              return 1 * modifier;
            }
          } else {
            if (a[this.sortColumn] < b[this.sortColumn]) return -1 * modifier;
            if (a[this.sortColumn] > b[this.sortColumn]) return 1 * modifier;
          }
          return 0;
        });
      }

      return filteredSeats;
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
  methods: {
    getSeatCode(seat) {
      if (this.type == "adun") {
        return seat.stateseatcode;
      }
      if (this.type == "mp") {
        return seat.federalseatcode;
      }
    },
    getSeatColumn() {
      if (this.type == "adun") {
        return "stateseatcode";
      }
      if (this.type == "mp") {
        return "federalseatcode";
      }
    },
    onSort(column) {
      if (column != this.sortColumn) {
        this.sortType = "";
      }

      if (this.sortType == "") {
        this.sortType = "ASC";
      } else if (this.sortType == "ASC") {
        this.sortType = "DESC";
      } else {
        this.sortType = "";
      }

      this.sortColumn = column;
    },
  },
};
</script>