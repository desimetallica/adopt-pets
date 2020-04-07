<template>
  <div class="home-view-container">
    <h1> Best pet for adoption</h1>
    {{getAllCats.length}}
    <button class="btn btn-primary" @click="togglePetForm"> Add New Pet </button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          type="text"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// this works in the same way as mapState
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAllCats'
    ])
  },
  methods: {
    /* We watching for changin for state  and not to the static method.
    to get state updated */
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      // this is to pull of the data from my form
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: { name, age }
      }
      // this call the Action in the action.js
      this.addPet(payload)

      // reset the form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  components: {

  }
}
</script>
