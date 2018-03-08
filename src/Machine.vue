<template>
    <div>
        <h1>Machine {{ machine.name }}</h1>
        <h3 class="green" v-if="machine.status === 'true'">Status OK</h3>
        <h3 class="red" v-else>Status KO</h3>
        <h5><b>Last time checked:</b> {{ machine.checkedAt }}</h5>
    </div>
</template>

<script>
    export default {
        name: "machine",
        props:['machine'],
        data() {
            return {

           }
         }
    }
</script>

<style scoped>
    .red {
        color: red;
        font-weight: bold;
    }

    .green {
        color: green;
        font-weight: bold;
    }
    div{
        border: 2px solid black;
        margin: auto;
        width: 90%;
        margin-bottom: 15px;
    }
</style>
