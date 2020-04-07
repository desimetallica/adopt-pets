<template>
  <div>
    <!-- Here we use the component PetTable insted
    to import all the table inside this code file -->
    <petTable species="Cats" :pets="cats" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import petTable from '@/components/PetTable.vue'

export default {
  components: {
    petTable
  },
  data () {
    return {}
  },
  computed: {
    // ... spread operator
    ...mapState([
      'cats'
    ])
  }
}
</script>
