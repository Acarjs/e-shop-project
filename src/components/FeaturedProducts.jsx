import React from 'react'
import styled from 'styled-components'
import { useProductContext } from '../context/product_context'
import Loading from './Loading.jsx'
import Error from './Error.jsx'
import Product from './Product.jsx'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductContext()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <Wrapper className="section">
      <div>
        <h3 className="title">Featured Products</h3>
      </div>
      <div className="section-center featured">
        {featured.map((product) => {
          console.log(product)
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 2rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 400px;
    }
  }
  /* .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  } */
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts

//  background: var(--primary-200);

//   h3 {
//     text-align: center;
//   }

//   .featured {
//     margin: 3rem auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2rem;
//     img {
//       height: 300px;
//     }

//     @media (max-width: 576px) {
//       .featured {
//         display: flex;
//         flex-direction: column !important;
//       }
//     }
//   }
