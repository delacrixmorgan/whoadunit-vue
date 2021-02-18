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
    <table class="w-4/5 mx-auto mt-16 person-list-viewgroup table table-hover">
      <thead>
        <tr>
          <th scope="col" class="col-1" @click="onSort(getSeatColumn())">
            Seat
            <span v-if="sortType == 'ASC' && sortColumn == getSeatColumn()"
              >🔺</span
            >
            <span
              v-else-if="sortType == 'DESC' && sortColumn == getSeatColumn()"
              >🔻</span
            >
          </th>
          <th scope="col" class="col-1 text-left">Status</th>
          <th
            scope="col"
            class="col-3 text-left select-none"
            @click="onSort('name')"
          >
            Name
            <span v-if="sortType == 'ASC' && sortColumn == 'name'">🔺</span>
            <span v-else-if="sortType == 'DESC' && sortColumn == 'name'"
              >🔻</span
            >
          </th>
          <th scope="col" class="col-1 text-left">Email</th>
          <th scope="col" class="col-1">Facebook</th>
          <th scope="col" class="col-1">Twitter</th>
        </tr>
      </thead>
      <tbody>
        <person-item
          v-for="person in filteredPersons"
          :key="person.id"
          :person="person"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import PersonItem from "@/components/person/PersonItem";

export default {
  components: {
    PersonItem,
  },
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
    filteredPersons() {
      const persons = this.$store.getters["persons"];
      const query = this.searchQuery.toLowerCase();
      const filteredPersons = persons.filter(
        (person) =>
          person.name.toLowerCase().includes(query) ||
          person.federalseatcode.toLowerCase().includes(query)
      );

      if (this.sortType != "") {
        return filteredPersons.sort((a, b) => {
          let modifier = 1;
          if (this.sortType === "DESC") modifier = -1;
          if (a[this.sortColumn] < b[this.sortColumn]) return -1 * modifier;
          if (a[this.sortColumn] > b[this.sortColumn]) return 1 * modifier;
          return 0;
        });
      }
      return filteredPersons;
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
    getSeatColumn() {
      return "federalseatcode";
    },
  },
};
</script>