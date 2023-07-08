import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((item) => item.price)
    maxPrice = Math.max(...maxPrice)
    // console.log(maxPrice)

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
    }
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    }
  }

  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    }
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let productsArray = [...filtered_products]

    if (sort === 'price-lowest') {
      productsArray = productsArray.sort(
        (currentProduct, nextProduct) =>
          currentProduct.price - nextProduct.price
      )
    }

    if (sort === 'price-highest') {
      productsArray = productsArray.sort(
        (currentProduct, nextProduct) =>
          nextProduct.price - currentProduct.price
      )
    }

    if (sort === 'name-a-z') {
      //localeCompare()
      productsArray = productsArray.sort((currentProduct, nextProduct) => {
        return currentProduct.name.localeCompare(nextProduct.name)
      })
    }

    if (sort === 'name-z-a') {
      //localeCompare()
      productsArray = productsArray.sort((currentProduct, nextProduct) => {
        return nextProduct.name.localeCompare(currentProduct.name)
      })
    }
    return {
      ...state,
      filtered_products: productsArray,
    }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    }
  }

  if (action.type === FILTER_PRODUCTS) {
    // console.log('filtering products')
    return state
  }

  throw new Error(`No action matching with ${action.type}`)
}

export default filter_reducer
