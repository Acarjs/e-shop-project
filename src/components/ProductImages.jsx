import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [mainImage, setMainImage] = useState(images[0])
  console.log(images)
  return (
    <Wrapper>
      <img src={mainImage.url} alt="main image" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          console.log(image)
          return <img src={image.url} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .gallery {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

    img {
      width: 25%;
      height: 200px;
      cursor: pointer;
      border: 2px solid var(--red-999);
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 120px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 150px;
      }
    }
  }
`

export default ProductImages
