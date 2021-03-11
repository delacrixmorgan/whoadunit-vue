<template>
  <div>
    <bottom-search-bar
      @search-query="setQuery"
      @filter-type="setFilter"
    ></bottom-search-bar>

    <table class="mt-8 table table-hover">
      <thead>
        <tr>
          <th scope="col" class="col-auto text-left select-none">
            Seat
          </th>
          <th
            scope="col"
            class="col-auto text-left select-none"
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
          <th
            scope="col"
            class="col-auto text-left select-none"
            @click="onSort('state')"
          >
            State
            <span v-if="sortType == 'ASC' && sortColumn == 'state'">🔺</span>
            <span v-else-if="sortType == 'DESC' && sortColumn == 'state'"
              >🔻</span
            >
          </th>
          <th
            scope="col"
            class="col-auto text-left select-none"
            @click="onSort('name')"
          >
            Seat Name
            <span v-if="sortType == 'ASC' && sortColumn == 'name'">🔺</span>
            <span v-else-if="sortType == 'DESC' && sortColumn == 'name'"
              >🔻</span
            >
          </th>
          <th scope="col" class="col-auto text-left select-none">
            Incumbent Name
          </th>
        </tr>
      </thead>
      <tbody>
        <seat-item v-for="seat in filteredSeats" :key="seat.id" :seat="seat" />
      </tbody>
    </table>
  </div>
</template>
<script>
import SeatItem from "@/components/seat/SeatItem";
import BottomSearchBar from "@/components/search/BottomSearchBar";

export default {
  components: {
    SeatItem,
    BottomSearchBar,
  },
  props: ["type"],
  data() {
    return {
      seats: [],
      persons: [],
      filters: [],
      isLoading: false,
      searchQuery: "",
      seatCode: "",
      getterEndpoint: "",
      sortColumn: "",
      sortType: "",
    };
  },
  created() {
    this.seats = this.$store.getters["seats"];
    this.persons = this.$store.getters["persons"];

    for (let index = 0; index < this.seats.length; index++) {
      const seat = this.seats[index];
      const federalSeatCode = seat.federalseatcode;
      const stateSeatCode = seat.stateseatcode;

      const filteredPerson = this.persons.filter(
        (person) =>
          person.federalseatcode == federalSeatCode &&
          person.stateseatcode == stateSeatCode
      );

      if (filteredPerson.length > 0) {
        seat.person = filteredPerson[0];
      } else {
        seat.person = null;
      }
    }
    this.seats = this.seats.filter((seat) => seat.person != null);
  },
  computed: {
    filteredSeats() {
      const filteredSeats = this.filter(this.searchQuery.toLowerCase());

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
  methods: {
    filter(query) {
      let filteredSeats = this.seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          seat.state.toLowerCase().includes(query) ||
          seat.federalseatcode.toLowerCase().includes(query) ||
          seat.person.name.toLowerCase().includes(query)
      );

      if (this.filters.length == 1) {
        if (this.filters.includes("mp")) {
          filteredSeats = filteredSeats.filter(
            (seat) => seat.level.toLowerCase() == "federal"
          );
        }

        if (this.filters.includes("adun")) {
          filteredSeats = filteredSeats.filter(
            (seat) => seat.level.toLowerCase() == "state"
          );
        }
      }
      return filteredSeats;
    },
    getPersonBySeat(seat) {
      const filteredPerson = this.persons.filter(
        (person) =>
          person.federalseatcode == seat.federalSeatCode &&
          person.stateseatcode == seat.stateSeatCode
      );
      return filteredPerson[0];
    },
    setQuery(query) {
      this.searchQuery = query;
    },
    setFilter(filters) {
      this.filters = filters;
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
