<template>
  <div>
    <h1 class="mapsmach">{{ msg }}</h1>
    <gmap-map class="mapsMach" :center="{lat:45, lng:5}" :zoom="7"></gmap-map>
  </div>
</template>

<script>
  export default {
    name: "machinemap",
    data() {
      return {
        msg: 'Carte des Machines',
      }
    }
  }
</script>

<style scoped>
  .mapsMach {
    width: 100%;
    height: 800px;
  }
</style>
