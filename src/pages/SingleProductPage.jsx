import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/product_context'
import { single_product_url as url } from '../utils/constants'

const SingleProductPage = () => {
  const { id } = useParams()

  const {
    singleProductLoading: loading,
    singleProductError: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}.json`)
    console.log(product)
  }, [id])

  return <h4>{product.name}</h4>
}

export default SingleProductPage
