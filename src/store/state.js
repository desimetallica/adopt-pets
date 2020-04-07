import cats from '@/data/cats'
import dogs from '@/data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs] // this is like to have [[], []] like nested arrays
}
