<template>
  <div>
    <h1> {{ animal.name }} ({{ animal.color }})</h1>
    <p> {{ animal.age }} </p>
    <p> {{ animal.breed }} </p>
  </div>

</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    // ... spread operator
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    /* Is brakets notation is the same to do: this.cat and pass it as this['cats'] */
    this.animal = this[this.$route.params.species][this.$route.params.id]
    // this.animal = animal
  },
  methods: {
    pet () {
      /* Is brakets notation is the same to do: this.cat and pass it as this['cats'] */
      this.animal = this[this.$route.params.species][this.$route.params.id]
      // this.animal = animal
    },
    test () {
      return console.log(this)
    }
  }
}

</script>
