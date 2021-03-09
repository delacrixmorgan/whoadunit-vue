<template>
  <div class="bg-white rounded-xl shadow-md p-4">
    <div class="bg-white">
      <input
        class="w-full focus:outline-none focus:ring focus:border-blue-300 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-3 pl-5"
        type="text"
        @input="updateSearchQuery"
        placeholder="Search by name or seat number"
        v-model.trim="searchQuery"
      />
    </div>

    <div class="mt-3 flex space-x-2">
      <button
        @click="isMpFilterActive = !isMpFilterActive; updateFilterType()"
        :class="[isMpFilterActive ? 'active' : '']"
        class="filter-item-link"
      >
        Members of Parliament
      </button>
      <button
        @click="isAdunFilterActive = !isAdunFilterActive; updateFilterType()"
        :class="[isAdunFilterActive ? 'active' : '']"
        class="filter-item-link"
      >
        ADUN
      </button>
      <div class="relative inline-block text-left">
        <div>
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            @click="isDropdownExpanded = !isDropdownExpanded"
            aria-expanded="true"
            aria-haspopup="true"
          >
            2018
            <svg
              class="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          class="origin-top-left absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          :class="[isDropdownExpanded ? '' : 'hidden']"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="py-1" role="none">
            <a
              @click="isDropdownExpanded = !isDropdownExpanded"
              class="block select-none px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              >2018</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      isMpFilterActive: false,
      isAdunFilterActive: false,
      isDropdownExpanded: false,
    };
  },
  emits: ["search-query", "filter-type"],
  methods: {
    updateSearchQuery() {
      this.$emit("search-query", this.searchQuery);
    },
    updateFilterType() {
      let filters = [];
      if (this.isMpFilterActive) {
        filters.push("mp");
      }
      if (this.isAdunFilterActive) {
        filters.push("adun");
      }
      this.$emit("filter-type", filters);
    },
  },
};
</script>

<style scoped>
.active.filter-item-link {
  @apply rounded-full px-6 py-2 bg-purple-700 hover:bg-purple-700 hover:text-white text-purple-50 text-sm;
}

.filter-item-link {
  @apply rounded-full px-6 py-2 bg-purple-50 hover:bg-purple-500 hover:text-white text-purple-700 text-sm;
}
</style>
