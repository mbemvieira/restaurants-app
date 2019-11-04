import restaurants from './restaurants'
import sortingValues from './sortingValues'

const copyRestaurant = restaurant => {
  const restaurantCopy = Object.assign({}, restaurant)
  restaurantCopy.sortingValues = Object.assign({}, restaurant.sortingValues)
  return restaurantCopy
}

const optionList = Object.values(sortingValues).map(sortingValue => Object.assign({}, sortingValue))

const restaurantList = restaurants.map((restaurant, index) => {
  const restaurantCopy = copyRestaurant(restaurant)

  restaurantCopy.id = index + 1
  restaurantCopy.favorite = false
  restaurantCopy.sortingValues.topRestaurants = 
    (restaurantCopy.sortingValues.distance * restaurantCopy.sortingValues.distance)
    + restaurantCopy.sortingValues.ratingAverage

  return restaurantCopy
})

// TODO: Show user friendly strings
const statusPriority = {
  'open': 0,
  'order ahead': 1,
  'closed': 2
}

const get = ({sortBy = null, search = null}, onSuccess, onFailure) => {
  try {
    if (!restaurantList) throw new Error()

    const sortKey = sortBy || optionList[0].key || null

    let response = restaurantList.map(restaurant => copyRestaurant(restaurant))
      .filter(restaurant => {
        if (search == null) return true
        return restaurant.name.search(new RegExp(search, 'i')) >= 0
      })
      .sort((a, b) => {
        if (!!a.favorite && !b.favorite) return -1
        if (!a.favorite && !!b.favorite) return 1

        if (statusPriority[a.status] > statusPriority[b.status]) return 1
        if (statusPriority[a.status] < statusPriority[b.status]) return -1

        const option = optionList.find(el => sortKey === el.key)

        if (option == null) return 0

        return option.order == 'asc'
          ? a.sortingValues[sortKey] - b.sortingValues[sortKey]
          : b.sortingValues[sortKey] - a.sortingValues[sortKey]
      })

    onSuccess(response)
  } catch(error) {
    onFailure()
  }
}

const getOptions = (onSuccess, onFailure) => {
  try {
    onSuccess(optionList)
  } catch(error) {
    onFailure()
  }
}

const toggleFavorite = (id, onSuccess, onFailure) => {
  try {
    const restaurant = restaurantList.find(el => el.id == id)

    if (restaurant == null) throw new Error()

    restaurant.favorite = !restaurant.favorite

    onSuccess()
  } catch(error) {
    onFailure()
  }
}

export default {
  get,
  getOptions,
  toggleFavorite,
}
