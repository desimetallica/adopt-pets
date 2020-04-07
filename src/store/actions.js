export default {
  /* action is where we put the API calls
  action updates direclty my state,
  and it get the modification by mutation
  Actions are similar to mutations, the differences being that:
  Instead of mutating the state, actions commit mutations.
  Actions can contain arbitrary asynchronous operations.

  vue give me a contex object here and then
  i can use argument whei i call this function
  (like pet or payload). I can use commit that will cause a
  mutation for me. I will call a mutation that i call appendPet
  This is generally not used, usually commit is passed as object
  addPet: (context, pet) => {
    context.commit('appendPet', pet)

  Since the tutorial is an old version of Vue, now u have to pass
  commit not the context and call direclty it in the action
  } */

  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }

}
