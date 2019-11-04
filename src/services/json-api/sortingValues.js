export const BEST_MATCH = 0
export const NEWEST = 1
export const RATINGAVERAGE = 2
export const DISTANCE = 3
export const POPULARITY = 4
export const AVERAGE_PRODUCT_PRICE = 5
export const DELIVERY_COSTS = 6
export const MIN_COST = 7
export const TOP_RESTAURANTS = 8

export default {
  [BEST_MATCH]: {
    key: 'bestMatch',
    description: 'Best Match',
    order: 'desc',
  },
  [NEWEST]: {
    key: 'newest',
    description: 'Newest',
    order: 'desc',
  },
  [RATINGAVERAGE]: {
    key: 'ratingAverage',
    description: 'Rating Average',
    order: 'desc',
  },
  [DISTANCE]: {
    key: 'distance',
    description: 'Distance',
    order: 'asc',
  },
  [POPULARITY]: {
    key: 'popularity',
    description: 'Popularity',
    order: 'desc',
  },
  [AVERAGE_PRODUCT_PRICE]: {
    key: 'averageProductPrice',
    description: 'Average Product Price',
    order: 'asc',
  },
  [DELIVERY_COSTS]: {
    key: 'deliveryCosts',
    description: 'Delivery Costs',
    order: 'asc',
  },
  [MIN_COST]: {
    key: 'minCost',
    description: 'Min Cost',
    order: 'asc',
  },
  [TOP_RESTAURANTS]: {
    key: 'topRestaurants',
    description: 'Top Restaurants',
    order: 'desc',
  },
}
