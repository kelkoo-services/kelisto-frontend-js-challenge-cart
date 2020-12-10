import { createSelector } from 'reselect'

const selectProducts = state => state.products

export const selectProductsData = createSelector(
  [selectProducts],
  data => data.products
)

// export const selectProductsDataForPreview = createSelector(
//   [selectProductsData],
//   data => Object.keys(data).map(key => data[key])
// );
