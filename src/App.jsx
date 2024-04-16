import Header from "./Layout/Header"
import Meals from "./Meals/Meals"
import RestaurantContextProvider from "./Store/context_restaurant"
import Cart from "./Cart/Cart"
import { useState } from "react"

export default function App() {
  // console.log('app',Meals());
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler =()=>{
    console.log('cart is shown');
    setCartIsShown(true);
  }
  const hideCartHandler = ()=>{
    console.log('cart is hidden');
    setCartIsShown(false);
  }
  return (
    <RestaurantContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
        <Header onShowCart = {showCartHandler}></Header>
        <Meals></Meals>
    </RestaurantContextProvider>
  )
}