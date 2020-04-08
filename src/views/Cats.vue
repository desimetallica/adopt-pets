<template>
  <div>
    <!-- Here we use the component PetTable insted
    to import all the table inside this code file (like Dogs.vue) -->
    <petTable species="cats" :pets="cats" /> <!-- here we are pulling from computed mapState the cats array variable so we need the ':' v-bind -->
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
      'cats' // the cats array
    ])
  }
}
</script>
