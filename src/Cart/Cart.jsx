import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import { RestaurantContext } from '../Store/context_restaurant'

const Cart = (props) => {

const {cartArrState} = useContext(RestaurantContext);

// console.log('Cart',cartArrState);

  const cartItems = <ul>
    {
      cartArrState.items.map((item) => {
        // console.log('item si',item);
        return (<li>{item.meal_name}</li>)}
      )
    }
  </ul>
// console.log('Cart map',cartItems);
const hasItems = cartArrState.items.length > 0
  return (
    <Modal>
      {
        cartItems
      }
      <div>
        <span>Total Amount</span>
        <span>{cartArrState.totalAmount.toFixed(2) }</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        {hasItems && <button>Order</button>}
      </div>
    </Modal>
  )
}
export default Cart