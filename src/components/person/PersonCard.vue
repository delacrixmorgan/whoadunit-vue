<template>
  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl mb-4 transform transition duration-700 ease-in-out hover:scale-105"
  >
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="max-h-md object-cover md:w-48"
          src="https://tailwindcss.com/_next/static/media/kids-jumper.47a06f045002a3e6ba595351a36a46eb.jpg"
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
          <p class="text-base mb-2">
            Pusat Khidmat Dun Bandar Baru Klang<br />LG-4, 1E Jalan Pekan Baru
            34<br />41010 Klang, Selangor
          </p>
          <figcaption class="mb-2">
            <a
              href="mailto:khim@selangor.gov.my"
              class="no-underline hover:underline"
              >{{ person.email }}</a
            >
            <br />
            +{{ person.phonenumber }}
          </figcaption>
        </div>
        <div class="flex items-center">
          <a
            class="flex-none flex mr-2 items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700 hover:text-purple-50 hover:bg-purple-600"
            type="button"
            href="https://www.google.com"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </a>
          <a
            class="flex-none flex mr-2 items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700 hover:text-purple-50 hover:bg-purple-600"
            type="button"
            href="https://www.google.com"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </a>
          <a
            class="flex-none flex mr-2 items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700 hover:text-purple-50 hover:bg-purple-600"
            type="button"
            href="https://www.google.com"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
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
        console.log(this.seat)
        console.log(this.seat.federalseatcode)
      if (this.seat.federalseatcode != null && this.seat.stateseatcode == null) {
        return "MP";
      }

      if (this.seat.federalseatcode != null && this.seat.stateseatcode != null) {
        return "ADUN";
      }
    },
  },
};
</script>
<style scoped>
</style>