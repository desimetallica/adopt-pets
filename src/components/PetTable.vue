<template>
  <div>
    <h1>{{ species }} for adoption </h1>
    <!-- custom data rendering https://bootstrap-vue.js.org/docs/components/table/#formatter-callback -->
    <b-table striped hover :items="pets">
      <!-- slots way to pass template code,HTML, components variables or other stuff during the rendering https://vuejs.org/v2/guide/components-slots.html -->
      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pet/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
}
</script>
