import { createSelector } from 'reselect'

const selectBag = state => state.bag

export const selectBagItems = createSelector([selectBag], bag => bag.bagItems)

export const selectBagItemsCount = createSelector([selectBagItems], bagItems =>
  bagItems.reduce((acc, bagItem) => acc + bagItem.quantity, 0)
)

export const selectBagTotal = createSelector([selectBagItems], bagItems =>
  bagItems.reduce((acc, bagItem) => acc + bagItem.quantity * bagItem.price, 0)
)
