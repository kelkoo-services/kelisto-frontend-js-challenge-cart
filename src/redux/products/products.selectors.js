import { createSelector } from 'reselect'

const selectProducts = state => state.products

export const selectProductsData = createSelector(
  [selectProducts],
  data => data.products
)
