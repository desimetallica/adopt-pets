export default {
  /* mutation updates state for me. Here we have 2 parameters first
  is application state and the second is the payload to pass to function
  we can update the state. We need to pass species inside the funciont
  from action */
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
