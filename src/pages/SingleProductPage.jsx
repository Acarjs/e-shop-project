import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()
  console.log(id)
  return <h4>Single Product Page</h4>
}

export default SingleProductPage
