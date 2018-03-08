<template>
  <div>
    <h1 class="mapsmach">{{ msg }}</h1>
    <gmap-map class="mapsMach" :center="{lat:45.1885, lng:5.7245}" :zoom="13">
      <gmap-marker v-for="marker in markers" :key="marker.id" :position="marker.position" :clickable="true" @click="center=marker.position"></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>

  export default {
    name: "machinemap",
    data() {
      return {
        msg: 'Carte des Machines',

        markers: [{
          id: 1,
          position: {lat: 45.1885, lng: 5.725}
        },
          {id:2,
            position: {lat: 45.2, lng: 5.75}
        }]
      }
    }
  }
</script>

<style scoped>
  .mapsMach {
    border: 5px solid blue;
    margin: auto;
    width: 80%;
    height: 600px;
    margin-bottom: 15px;
  }
</style>
