<template>
    <h1 class="listmach">{{ msg }}</h1>
</template>

<script>
    export default {
        name: "machinelist",
        data() {
            return {
                msg: 'List de Machines',
            }
        }
    }
</script>

<style scoped>
.listmach{
    display: none;
}
</style>