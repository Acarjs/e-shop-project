import React, { useState } from 'react'
import styled from 'styled-components'

const AddToCart = ({ product }) => {
  const { id, stock, sizes } = product

  const [mainSize, setMainSize] = useState(sizes[0])

  return (
    <Wrapper>
      <div className="sizes">
        <span> Sizes: </span>
        <div>
          {sizes.map((size, index) => {
            return <button key={index}> {size} </button>
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .sizes {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items : center
    margin-bottom : 1rem;
    span {
      font-weight: 700;
    }
    div {
      display: flex;
      gap: 1rem;
      button {
        width:40px;
      }  
    }

  }
`

export default AddToCart
