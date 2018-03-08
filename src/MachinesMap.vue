<template>
  <div>
    <h1 class="mapsmach">{{ msg }}</h1>
    <h2 class="red" v-if="errors && errors.length">Error loading!</h2>
    <h2 v-show="loading" class="green">Loading<br><i class="fa fa-circle-o-notch fa-spin fa-2x"></i></h2>
    <machine v-if="infoMachine" :machine="infoMachine"></machine>
    <gmap-map class="mapsMach"
              v-show="!loading && !errors.length"
              :center="{lat:45.1885, lng:5.7245}"
              :zoom="13">
      <gmap-marker v-for="machine in machines"
                   :key="machine.id"
                   :position="{lat: Number(machine.latitude), lng: Number(machine.longitude)}"
                   :clickable="true"
                   @click="affiche(machine)">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
 import Machine from "./Machine.vue";
  export default {
    name: "machinemap",
    components : {Machine},
    props: ['machines', 'loading','errors'],
    data() {
      return {
        msg: 'Carte des Machines',
        infoMachine: ''
      }
    },
    methods:{
      affiche: function(objectMachine){
        this.infoMachine = objectMachine;
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
  .red{
    color: red;
    font-weight: bold;
  }
  .green {
    color: green;
    font-weight: bold;
  }
</style>
