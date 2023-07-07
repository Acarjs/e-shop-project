import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const Filters = () => {
  const {
    filters: { text, brand, category, minPrice, maxPrice, price, shipping },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  return <h4>Filters</h4>
}

export default Filters
