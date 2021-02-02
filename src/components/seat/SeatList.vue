<template>
  <div>
    <div class="row mx-auto search-viewgroup">
      <div class="col-sm search-viewgroup">
        <input
          class="search-box"
          type="text"
          placeholder="P110 Klang"
          v-model.trim="mpSearchQuery"
          @input="onChange"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter="onEnter"
        />
        <ul v-show="isOpen" class="autocomplete-results">
          <li
            v-for="(seat, index) in results"
            class="autocomplete-result"
            :class="{ 'is-active': index === arrowCounter }"
            :key="seat.id"
            @click="setResult(seat)"
          >
            {{ seat.code }} {{ seat.name }}
          </li>
        </ul>
      </div>
      <div class="col-sm search-viewgroup">
        <input
          class="search-box"
          type="text"
          placeholder="N45 Bandar Baru Klang"
          v-model.trim="adunSearchQuery"
          @input="onChange"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter="onEnter"
        />
        <ul v-show="isOpen" class="autocomplete-results">
          <li
            v-for="(seat, index) in results"
            class="autocomplete-result"
            :class="{ 'is-active': index === arrowCounter }"
            :key="seat.id"
            @click="setResult(seat)"
          >
            {{ seat.code }} {{ seat.name }}
          </li>
        </ul>
      </div>
    </div>
    <form class="mx-auto search-viewgroup" v-on:submit="filteredSeats">
      <input
        class="search-box"
        type="text"
        placeholder="Search..."
        v-model.trim="searchQuery"
        v-on:keyup="filteredSeats"
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
  data() {
    return {
      isLoading: false,
      isOpen: false,
      results: [],
      searchQuery: "",
      mpSearchQuery: "",
      adunSearchQuery: "",
      arrowCounter: 0,
    };
  },
  computed: {
    filteredSeats() {
      const seats = this.$store.getters["seats"];
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
    this.loadSeats(false);
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    async loadSeats(refresh = false) {
      refresh;
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter = this.arrowCounter + 1;
      } else {
        this.arrowCounter = 0;
      }
    },
    onArrowUp() {
      if (this.arrowCounter >= 1) {
        this.arrowCounter = this.arrowCounter - 1;
      } else {
        this.arrowCounter = this.results.length - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    onChange() {
      this.isOpen = true;
      const seats = this.$store.getters["seats"];
      const query = this.mpSearchQuery.toLowerCase();

      this.results = seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          seat.code.toLowerCase().includes(query) ||
          seat.level.toLowerCase().includes(query)
      );
    },
    setResult(seat) {
      this.search = seat;
      this.mpSearchQuery = seat.code + " " + seat.name;
      this.isOpen = false;
    },
    handleClickOutside(event) {
      const path =
        event.path || (event.composedPath ? event.composedPath() : undefined);

      if (path && !path.includes(this.em)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
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

.search-view-group {
  display: flex;
  justify-content: space-between;
}
.autocomplete {
  position: relative;
  width: 130px;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 270px;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 12px 20px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>