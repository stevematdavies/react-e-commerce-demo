import React from "react";
import {connect} from "react-redux";
import {deleteItem, addItem, decreaseQuantityOrRemoveItem} from "../../redux/cart/cart.actions";
import './checkout-item.styles.scss'

const CheckoutItem = ({item, deleteItem, addItem, decreaseQuantityOrRemoveItem}) => {

  const {id, imageUrl, name, quantity, price} = item

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
      <div className="arrow" onClick={() => decreaseQuantityOrRemoveItem(id)}>&#10094;</div>
        <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
    </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(id)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
  decreaseQuantityOrRemoveItem: item => dispatch(decreaseQuantityOrRemoveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
