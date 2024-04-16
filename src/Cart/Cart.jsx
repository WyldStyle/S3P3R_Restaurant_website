import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import { RestaurantContext } from '../Store/context_restaurant'

const Cart = (props) => {

const {cartArrState} = useContext(RestaurantContext);

  const cartItems = <ul>
    {
      cartArrState.items.map((item) => (<li>{item.name}</li>)
      )
    }
  </ul>

  return (
    <Modal>
      {
        cartItems
      }
      <div>
        <span>Total Amount</span>
        <span>{cartArrState.totalAmount }</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  )
}
export default Cart