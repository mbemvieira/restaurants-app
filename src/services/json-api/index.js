import restaurants from './restaurants'
// import options from '../../models/options'

const restaurantList = restaurants.map((restaurant, index) => {
  const item = Object.assign({}, restaurant)
  item.id = index + 1
  item.favorite = false

  item.sortingValues = Object.assign({}, restaurant.sortingValues)

  return item
})

const statusPriority = {
  'open': 0,
  'order ahead': 1,
  'closed': 2
}

const get = (sortBy, onSuccess, onFailure) => {
  try {
    if (!restaurantList) throw new Error()

    let response = restaurantList.sort((a, b) => {
      if (!!a.favorite && !b.favorite) return -1
      if (!a.favorite && !!b.favorite) return 1

      if (statusPriority[a.status] > statusPriority[b.status]) return 1
      if (statusPriority[a.status] < statusPriority[b.status]) return -1

      return a.sortingValues[sortBy] - b.sortingValues[sortBy]
    })
      .filter(() => true)

    onSuccess(response)
  } catch(error) {
    onFailure()
  }
}

const toggleFavorite = (id, onSuccess, onFailure) => {
  try {
    const restaurant = restaurantList.filter(el => el.id == id)

    if (restaurant.length == 0) throw new Error()

    restaurant.favorite = !restaurant.favorite

    onSuccess(restaurant)
  } catch(error) {
    onFailure()
  }
}

export default {
  get,
  toggleFavorite
}
