<template>
  <div id="app">
    <h1 class="pageTitle">{{ msg }}</h1>
    <img src="http://vuejs.org/images/logo.png">
    <h1>Que voulez vous faire?</h1>
    <div class="container">
      <div class="row">
          <router-link to="/list"><button class="machListe btn btn-info col-sm-offset-2 col-sm-3">Liste de Machines</button></router-link>
          <router-link to="/map"><button class="btn btn-info col-sm-offset-1 col-sm-3">Voir la carte</button></router-link>
      </div>
        <!--<router-link to="/list"></router-link>-->
          <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import Machinelist from "./MachinesList.vue"
    import Machinemap from "./MachinesMap.vue";
    import Machine from "./Machine.vue";

export default {
     components: {
         Machinemap,
         Machinelist,
         Machine},
    name: 'app',
  data () {
    return {
      msg: 'Machine Park',
    }
  },
  methods: {
      listMachines: function(){

          alert("consulter la liste des machines"); //afficher un message lorsqu'on click sur le bouton "liste machines"
    },
      mapMachines: function(){
      alert("consulter la carte"); //afficher un message lorsqu'on click sur le bouton "carte"
    }
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pageTitle {
  font-size: 5em;
}
img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
   margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
