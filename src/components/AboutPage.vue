<template>
  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl "
  >
    <div>
      <img
        class="object-cover max-h-64 w-full"
        src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />

      <div class="p-4">
        <p class="text-lg text-black font-semibold mb-1">
          Hello there
        </p>
        <p class="text-base mt-2">
          My name is <b>Morgan Koh</b>, I'm a software engineer from 🇲🇾.<br />I build
          Android apps for a living.<br /><br />
          This is my first foray into web technologies. I've build this website
          using <b>VueJS</b> and <b>Tailwind CSS</b>.<br /><br />
          I will continue to update this website as I learn more along the
          way.<br />(Yes, it ain't pretty yet.)<br /><br />
        </p>
        <p class="text-base"><b>Here's my own wishlist for Whoadunit</b></p>
        <ul class="list-disc space-y-2 mt-4">
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-6">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">Mobile Friendly Layout with Better Design</p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-6">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">
              Add More States and Build Backend (Perhaps even an API)
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-6">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">
              Allows people to suggest edits to update the Person contacts
            </p>
          </li>
        </ul>
        <p class="text-base my-4">
          In the meantime, checkout my GitHub and Android apps I've
          published.<br />That's it then, stay tuned.
        </p>

        <a
          href="https://github.com/delacrixmorgan"
          target="_blank"
          class="flex-none flex items-center py-2 px-4 justify-center bg-purple-100 text-purple-700 hover:text-purple-50 hover:bg-purple-600 rounded-full"
          type="button"
        >
          <button>Awesome Stuff</button>
        </a>
      </div>
    </div>
  </div>
</template>
