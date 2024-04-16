import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onClick}>
      <CartIcon></CartIcon>
      Your Cart</button>
  )
}
export default HeaderCartButton
