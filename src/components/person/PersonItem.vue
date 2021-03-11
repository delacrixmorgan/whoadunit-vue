<template>
  <tr @click="gotToPersonDetails()">
    <th class="text-left select-none">{{ person.name }}</th>
    <td class="text-left select-none">{{ person.status }}</td>
    <td class="text-center">
      <svg
        v-if="person.email"
        class="flex-shrink-0 h-5 w-5 text-green-500 mx-auto"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    </td>
    <td class="text-center">
      <svg
        v-if="person.facebook"
        class="flex-shrink-0 h-5 w-5 text-green-500 mx-auto"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    </td>
    <td class="">
      <svg
        v-if="person.twitter"
        class="flex-shrink-0 h-5 w-5 text-green-500 mx-auto"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["person"],
  created() {
    // console.log(this.person);
  },
  methods: {
    gotToPersonDetails() {
      this.$router.push({
        path: `person/${this.person.id}`,
      });
    },
  },
};
</script>