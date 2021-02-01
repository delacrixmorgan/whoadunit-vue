<template>
  <li>
    <h3>{{ code }} - {{ name }}</h3>
    <h3>{{ level }}</h3>
    <!-- <router-link :to="pokemonDetailsLink"><button>View Details</button></router-link> -->
  </li>
</template>

<script>
export default {
  props: ["name", "code", "level"],
  computed:{
    // pokemonDetailsLink(){
    //   const urlParameters = this.url.split("/");
    //   const id = urlParameters[urlParameters.length-2];

    //   return '/pokemon/'+id;
    // }
  }
};
</script>