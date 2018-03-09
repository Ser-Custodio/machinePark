<template>
    <div>
      <br><br>
      <form action="">
        Name: <input type="text" required><br><br>
        Status:<br> <input type="radio" name="status" value=true required>OK<br>
                <input type="radio" name="status" value=false required>KO<br><br>
        Checked at: <input type="date" name="date" required><br><br>
        Position:<br>
        Latitude: <input type="number" required><br><br>
        Longitude: <input type="number" required><br>
        <input type="submit">
      </form>
    </div>
</template>

<script>
    export default {
        name: "formulaire"
    }
</script>

<style scoped>
div{
  text-align: left;
}
</style>
