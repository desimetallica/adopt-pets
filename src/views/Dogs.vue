<template>
  <div>
    <h1>Dogs for adoption </h1>
    <!-- custom data rendering https://bootstrap-vue.js.org/docs/components/table/#formatter-callback -->
    <b-table striped hover :items="dogs">
      <!-- slots way to pass template code,HTML, components variables or other stuff during the rendering https://vuejs.org/v2/guide/components-slots.html -->
      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pet/dogs/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    // ... spread operator
    ...mapState([
      'dogs'
    ])
  }
}
</script>
