const _findItemFromItems = (existingItems, itemID) =>
  existingItems.find(item => item.id === itemID)

const _removeItemFromItems = (existingItems, itemID) =>
  existingItems.filter(item => item.id !== itemID)

export const addItemToCart = (existingItems, newItem) => {
  const exists = existingItems.find(item => item.id === newItem.id)

  if (exists) {
    return existingItems.map(item =>
      item.id === newItem.id
        ? {...item, quantity: item.quantity + 1}
        : item
    )
  }
  return [...existingItems, {...newItem, quantity: 1}]
}


export const removeItemsFromCart = (existingItems, itemID) => {
  const exists = existingItems.find(item => item.id === itemID)
  if (exists) {
    return _removeItemFromItems(existingItems, itemID)
  }
  return [...existingItems]
}

export const decreaseQuantityOrRemoveItem = (existingItems, currentItem) => {
  const exists = existingItems.find(item => item.id === currentItem.id)
  if (exists.quantity === 1) {
    return _removeItemFromItems(existingItems, exists.id)
  }
  return existingItems.map(item =>
    item.id === currentItem.id
      ? {...item, quantity: item.quantity - 1}
      : item
  )
}

