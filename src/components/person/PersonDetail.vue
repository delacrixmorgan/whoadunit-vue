<template>
  <div class="w-4/5 mx-auto flex space-x-4">
    <div>
      <img
        class="object-cover h-96 rounded-xl shadow-md"
        src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
    </div>

    <div class="p-8 text-left space-y">
      <p class="text-lg text-black font-semibold mb-1">
        {{ person.name }}
      </p>
      <div class="flex items-center mb-4">
        <p class="text-xs py-1 px-4 rounded-lg bg-purple-600 text-white mr-1">
          {{ getSeatType() }}
        </p>
        <p class="text-xs py-1 px-4 rounded-lg bg-purple-600 text-white mr-1">
          {{ seat.name }}
        </p>
      </div>
      <p class="mb-2">
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
      <div class="flex space-x-2 mt-4">
        <a
          v-show="person.facebook"
          :href="person.facebook"
          class="flex-none flex items-center py-2 px-4 justify-center bg-purple-50 text-purple-700 hover:text-purple-50 hover:bg-purple-600 rounded-full"
          type="button"
          target="_blank"
        >
          <button @click="goToPersonSocials()">Facebook</button>
        </a>
        <a
          v-show="person.twitter"
          :href="person.twitter"
          class="flex-none flex items-center py-2 px-4 justify-center bg-purple-50 text-purple-700 hover:text-purple-50 hover:bg-purple-600 rounded-full"
          type="button"
          target="_blank"
        >
          <button>Twitter</button>
        </a>
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
  },
};
</script>
<style scoped></style>
