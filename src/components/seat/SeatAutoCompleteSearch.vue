<template>
  <div>
    <input
      class="w-full focus:outline-none focus:ring focus:border-blue-300 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-3 pl-5"
      type="text"
      :placeholder="placeholder"
      v-model.trim="searchQuery"
      @click="onChange"
      @input="onChange"
      @keydown.esc="onEsc"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.tab="onEnter"
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
</template>
<script>
export default {
  props: ["type"],
  data() {
    return {
      placeholder: "",
      getterEndpoint: "",
      searchQuery: "",
      selectedSeat: null,
      isOpen: false,
      results: [],
      arrowCounter: -1,
    };
  },
  created() {
    if (this.type == "mp") {
      this.placeholder = "Member of Pariliament";
      this.getterEndpoint = "mpSeats";
    }
    if (this.type == "adun") {
      this.placeholder = "ADUN";
      this.getterEndpoint = "adunSeats";
    }
  },
  methods: {
    onChange() {
      this.isOpen = true;
      const seats = this.$store.getters[this.getterEndpoint];
      const query = this.searchQuery.toLowerCase();

      this.results = seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          seat.code.toLowerCase().includes(query) ||
          seat.level.toLowerCase().includes(query)
      );
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
     onEsc() {
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    onEnter() {
      const seat = this.results[this.arrowCounter];
      if (this.arrowCounter >= 0) {
        this.selectedSeat = seat;
        this.searchQuery = seat.code + " " + seat.name;
      }

      this.isOpen = false;
      this.arrowCounter = -1;
    },
    setResult(seat) {
      this.selectedSeat = seat;
      this.searchQuery = seat.code + " " + seat.name;
      this.isOpen = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
<style scoped>
.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  max-height: 170px;
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