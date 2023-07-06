import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { GridView, ListView } from '../components'

const ProductList = () => {
  const { filtered_products: products } = useFilterContext()

  if (products.length < 1) {
    return <h5>no records found for the search criteria entered</h5>
  }

  return <GridView products={products}>Product List</GridView>
}

export default ProductList
