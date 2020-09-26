const _findItem = (items, item) => items.find(i => i.id === item.id)
const _removeItem = (items, item) => items.filter(i => i.id !== item.id)

export const addItemToCart = (existingItems, newItem) => {
  const exists = _findItem(existingItems, newItem)
  if (exists) {
    return existingItems.map(item =>
      item.id === newItem.id
        ? {...item, quantity: item.quantity + 1}
        : item
    )
  }
  return [...existingItems, {...newItem, quantity: 1}]
}


export const removeItemsFromCart = (existingItems, itemToRemove) => {
  const existingCartItem = _findItem(existingItems, itemToRemove)
  if (existingCartItem && existingCartItem.quantity === 1) {
    return _removeItem(existingItems, itemToRemove)
  }
  return existingItems.map(item =>
    item.id === itemToRemove.id
      ? {...item, quantity: item.quantity - 1}
      : item
  )
}
