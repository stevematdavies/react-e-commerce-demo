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
    return existingItems.filter(item => item.id !== itemID)
  }
  return [...existingItems]
}

