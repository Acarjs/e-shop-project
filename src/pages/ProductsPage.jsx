import React from 'react'
import PageSection from '../components/PageSection'
import styled from 'styled-components'
import { Filters, Sort, ProductList } from '../components'

const ProductPage = () => {
  return (
    <main>
      <PageSection title="products" />
      <Wrapper className="page">
        <div>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section``

export default ProductPage
