import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues } from '../utils/helpers'

const Filters = () => {
  const {
    filters: {
      searchInput,
      brand,
      category,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const brands = getUniqueValues(all_products, 'brand')

  return (
    <Wrapper>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="searchInput"
              placeholder="search"
              className="search-input"
              value={searchInput}
              onChange={updateFilters}
            />
          </div>
          {/* Category */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((categoryItem, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    name="category"
                    onClick={updateFilters}
                    className={`${category === categoryItem ? 'active' : null}`}
                  >
                    {categoryItem}
                  </button>
                )
              })}
            </div>
          </div>
          {/* End of category */}
          {/* Company */}
          <div className="form-control">
            <h5>brand</h5>
            <div>
              <select
                name="brand"
                id=""
                onChange={updateFilters}
                className="brand"
              >
                {brands.map((brandItem, index) => {
                  return <option key={index}>{brandItem}</option>
                })}
              </select>
            </div>
          </div>
          {/* End of Company */}
          {/* Price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price"> € {price}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
              className="price-input"
            />
          </div>
          {/* End ofPrice */}
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    input.price-input {
      cursor: pointer;
    }
  }

  .search-input {
    padding: 0.5rem;
    background: var(--primary-100);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }

  .search-input:focus {
    outline-width: 0;
  }

  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--primary-500);
    cursor: pointer;
  }

  .active {
    color: var(--red-900);
    border-color: var(--red-900);
    font-weight: 700;
  }

  .brand {
    background: var(--primary-999);
    color: var(--primary-100);
    text-transform: capitalize;
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.5rem;
    /* text-align: center; */
  }

  .brand:focus {
    outline-width: 0;
  }

  .price {
    color: var(--red-999);
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    font-weight: 400;
  }
`

export default Filters
