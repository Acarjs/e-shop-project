import React from 'react'
import PageSection from '../components/PageSection'
import styled from 'styled-components'

const ProductPage = () => {
  return (
    <main>
      <PageSection title="products" />
      <Wrapper className="page">
        <h3>Products Page</h3>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section``

export default ProductPage
