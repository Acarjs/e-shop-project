import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './product_context'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-highest',
  filters: {
    searchInput: '',
    brand: 'all',
    category: 'all',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
}

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState) // I cannot add products into the state here directly. That's not gonna work.

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort])

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  const updateSort = (e) => {
    const name = e.target.name // it is <select name"sort"></select> from sort component,
    const value = e.target.value // <option value="[whatever value is here]">price (highest)</option> from sort component,
    // console.log(name, value) // sort, price-highest
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  const updateFilters = () => {}

  const clearFilters = () => {}

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
