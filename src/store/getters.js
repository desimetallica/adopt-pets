export default {
  getAllCats: (state) => {
    /* filter method takes a function each pet 1 per time and
    return jsut the pet we want in an array */
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
