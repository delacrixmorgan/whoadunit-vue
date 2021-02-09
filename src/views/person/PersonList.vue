<template>
  <div class="p-4">
    <h3>Person List</h3>
    <person-list></person-list>
  </div>
</template>
<script>
import PersonList from "../../components/person/PersonList.vue";
export default {
  components: { PersonList }
};
</script>