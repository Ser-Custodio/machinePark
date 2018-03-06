<template>
    <div>
        <h1><b>Liste de Machines</b></h1>
        <machine v-for="machine in machines" :key="machine.id" :name="machine.name" :status="machine.status" :checkedAt="machine.checkedAt"></machine>
    </div>
</template>

<script>
    import machine from './Machine.vue';

    export default {
        components:{machine},
        name: "machinelist",
        data() {
            return {
                msg: 'List de Machines',
                machines: [{
                    id: 1,
                    name: 'What else ?',
                    status: true,
                    checkedAt: new Date(),
                }, {
                    id: 2,
                    name: 'Broken',
                    status: false,
                    checkedAt: new Date(),
                }]
            }
        }
    }
</script>

<style scoped>

</style>