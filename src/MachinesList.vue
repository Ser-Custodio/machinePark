<template>
    <div>
        <h1><b>Liste de Machines</b></h1>
        <h3 class="red" v-if="errors && errors.length">Error Loading</h3>
        <h1 class="green" v-if="loading">Loading<br>
          <i class="green fa fa-circle-o-notch fa-spin fa-2x"></i>
        </h1>
        <machine v-for="machine in machines" :key="machine.id" :machine="machine" ></machine>
    </div>
</template>

<script>
    import machine from './Machine.vue';
    import axios from 'axios';

    export default {
        components:{machine},
        name: "machinelist",
      props: ['machines', 'loading', 'errors'],
        data() {
            return {
              msg: 'List de Machines',
              // machines: [],
              // loading: true,
              // errors: [],
            }
        },
      // created(){
      //   axios.get('https://machine-api-campus.herokuapp.com/api/machines').then(response => {
      //     this.machines = response.data;
      //     this.loading = false;
      //   })
      //     .catch(e =>{
      //       this.loading = false;
      //       this.errors.push(e)
      //     })
      // }
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
</style>
