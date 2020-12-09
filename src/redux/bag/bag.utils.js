export const addItemToBag = (bagItems, bagItemToAdd) => {
  const existingBagItem = bagItems.find(
    bagItem => bagItem.productId === bagItemToAdd.productId
  )

  if (existingBagItem) {
    return bagItems.map(bagItem =>
      bagItem.productId === bagItemToAdd.productId
        ? { ...bagItem, quantity: bagItem.quantity + 1 }
        : bagItem
    )
  }

  return [...bagItems, { ...bagItemToAdd, quantity: 1 }]
}

export const removeItemFromBag = (bagItems, bagItemToRemove) => {
  const existingBagItem = bagItems.find(
    bagItem => bagItem.productId === bagItemToRemove.productId
  )

  if (existingBagItem.quantity === 1) {
    return bagItems.filter(
      bagItem => bagItem.productId !== bagItemToRemove.productId
    )
  }

  return bagItems.map(bagItem =>
    bagItem.productId === bagItemToRemove.productId
      ? { ...bagItem, quantity: bagItem.quantity - 1 }
      : bagItem
  )
}
