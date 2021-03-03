<template>
  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl mb-4 transform transition duration-700 ease-in-out hover:scale-105"
  >
    <div>
      <div class="md:flex-shrink-0">
        <img
          class="object-cover max-h-64 w-full"
          src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        />
      </div>
      <div class="relative pt-4 pb-4 pl-8 pr-8">
        <div class="flex-col text-left">
          <p class="text-lg text-black font-semibold mb-1">
            {{ person.name }}
          </p>
          <div class="flex items-center mb-2">
            <p
              class="text-xs py-1 px-4 rounded-lg bg-purple-600 text-white mr-1"
            >
              {{ getSeatType() }}
            </p>
            <p
              class="text-xs py-1 px-4 rounded-lg bg-purple-600 text-white mr-1"
            >
              {{ seat.name }}
            </p>
          </div>
          <p class="text-base mb-2 h-20">
            {{ seat.address }}
          </p>
          <figcaption class="mb-2">
            <a
              :href="linkMailToPersonEmail()"
              class="no-underline hover:underline"
              >{{ person.email }}</a
            >
            <br />
            +{{ seat.phonenumber }}
          </figcaption>
        </div>
        <div class="flex items-center">
          <a
            class="flex-none flex items-center py-2 px-4 justify-center bg-purple-100 text-purple-700 hover:text-purple-50 hover:bg-purple-600 rounded-full"
            type="button"
          >
            <button @click="gotToPersonDetails()">View Details</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["person", "seat"],
  methods: {
    getSeatType() {
      if (
        this.seat.federalseatcode != null &&
        this.seat.stateseatcode == null
      ) {
        return "MP";
      }

      if (
        this.seat.federalseatcode != null &&
        this.seat.stateseatcode != null
      ) {
        return "ADUN";
      }
    },
    linkMailToPersonEmail() {
      return "mailto:" + this.person.email;
    },
    gotToPersonDetails() {
      this.$router.push({
        path: `person/${this.person.id}`,
      });
    },
  },
};
</script>
<style scoped></style>
