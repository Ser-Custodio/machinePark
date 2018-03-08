<template>
    <div>
        <h1><b>Liste de Machines</b></h1>
        <h3 class="red" v-if="errors && errors.length">{{ errorMsg }}</h3>
        <h1 class="green" v-if="loading">Loading<br>
          <i class="green fa fa-circle-o-notch fa-spin fa-2x"></i>
        </h1>
        <machine v-for="machine in machines" :key="machine.id" :name="machine.name" :status="machine.status" :checkedAt="machine.checkedAt"></machine>
    </div>
</template>

<script>
    import machine from './Machine.vue';
    import axios from 'axios';

    export default {
        components:{machine},
        name: "machinelist",
        data() {
            return {
              msg: 'List de Machines',
              machines: [],
              loading: true,
              errors: [],
              errorMsg: 'An error has occurred'
            }
        },
      created(){
        axios.get('https://machine-api-campus.herokuapp.com/api/machines').then(response => {
          this.machines = response.data;
          this.loading = false;
        })
          .catch(e =>{
            this.loading = false;
            this.errors.push(e)
          })
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
</style>
