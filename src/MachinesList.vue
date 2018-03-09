<template>
    <div>
        <h1><b>Liste de Machines</b></h1>
      <h2>Filter the machines</h2>
      <div class="row bout">
          <button class="btn btn-info col-sm-2 col-offset-sm-1" @click="allMachines">All Machines</button>
          <button class="btn btn-success col-offset-sm-1 col-sm-2" @click="okMachines">Machines OK</button>
          <button class="btn btn-danger col-offset-sm-1 col-sm-2" @click="koMachines">Machines KO</button>
      </div>
        <h3 class="red" v-if="errors && errors.length">Error Loading</h3>
        <h1 class="green" v-if="loading">Loading<br>
          <i class="green fa fa-circle-o-notch fa-spin fa-2x"></i>
        </h1>
        <machine v-for="machine in machineFiltered" :key="machine.id" :machine="machine" ></machine>
    </div>
</template>

<script>
    import machine from './Machine.vue';

    export default {
        components:{machine},
        name: "machinelist",
        props: ['machines', 'loading', 'errors'],
        data() {
            return {
              msg: 'List de Machines',
              myMachine: '',
            }
        },
        methods:{
          okMachines: function(){
            this.myMachine = 'true';
            console.log(this.myMachine);
          },
          koMachines: function(){
            this.myMachine = 'false';
            console.log(this.myMachine);
          },
          allMachines: function(){
            this.myMachine = '';
            console.log(this.myMachine);
          }
        },
      computed:{
          machineFiltered: function(){
            if(this.myMachine === '') {
              return this.machines;
            }
            return this.machines.filter(machine => machine.status === this.myMachine);
          }
      }

    }
</script>

<style scoped>
.red{
  color: red;
  font-weight: bold;
}
.green {
  color: green;
  font-weight: bold;
}
  .bout{
    text-align: center;
  }
</style>
