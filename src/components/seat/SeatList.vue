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
          <th scope="col" class="col-auto text-left select-none" @click="onSort('state')">
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
          <th scope="col" class="col-auto text-left select-none">Name</th>
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
          :person="seat.person"
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
      seats: null,
      persons: null,
      isLoading: false,
      searchQuery: "",
      seatCode: "",
      getterEndpoint: "",
      sortColumn: "",
      sortType: "",
    };
  },
  created() {
    if (this.type == "adun") {
      this.getterEndpoint = "adunSeats";
    }
    if (this.type == "mp") {
      this.getterEndpoint = "mpSeats";
    }
    this.seats = this.$store.getters[this.getterEndpoint];
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
        seat.person = "";
      }
    }
  },
  computed: {
    filteredSeats() {
      const query = this.searchQuery.toLowerCase();
      const filteredSeats = this.seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          this.getSeatCode(seat).toLowerCase().includes(query) ||
          seat.level.toLowerCase().includes(query) ||
          seat.state.toLowerCase().includes(query) ||
          seat.person.name.toLowerCase().includes(query)
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
  methods: {
    getSeatCode(seat) {
      if (this.type == "adun") {
        return seat.federalseatcode + "/" +seat.stateseatcode;
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