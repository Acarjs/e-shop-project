import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

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
`

export default Filters
