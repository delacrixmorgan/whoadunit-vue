<template>
  <div class="p-4">
    <h1 class="text-2xl font-extrabold">Person</h1>
    <person-list></person-list>
  </div>
</template>
<script>
import PersonList from "../../components/person/PersonList.vue";
export default {
  components: { PersonList }
};
</script>