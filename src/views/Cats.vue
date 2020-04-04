<template>
  <div>
    <h1>Cats for adoption </h1>
    <b-table striped hover :items="cats">
      <!-- `data.value` is the value after formatted by the Formatter -->
      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pets/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'

export default {
  data () {
    return {
      cats
    }
  }
}
</script>
