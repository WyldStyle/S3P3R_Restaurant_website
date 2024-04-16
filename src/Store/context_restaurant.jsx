import { useEffect, useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const RestaurantContext = createContext({
  url: '',
  available_hotels: [],
  set_available_hotels:()=>{},
  cartArrState: [],
  dispatchCartAction:()=>{},
  addItemToCart: () => { },
  deleteItemInCart: () => { }
})

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'Add': {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }
    case 'Delete': {
      return {

      }
    }
    default:
      return defaultCartState;
  }
}
const RestaurantContextProvider = ({ children }) => {

  const url = "http://localhost:3001/restaurant/meals"

  const [available_hotels, set_available_hotels] = useState([
    {

      id: '1',
      "hotel": "Sneh",
      "meals": [
        {
          meal_name: 'Butter Paneer',
          meal_price: '120',
          meal_ethnicity: 'North Indian'
        }
      ]
    }
  ]);


  // const [cartArr, setCartArr] = useState([]);
  const [cartArrState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    dispatchCartAction({ type: 'Add', item: item })
  }

  const deleteItemInCart = (item) => {
    dispatchCartAction({ type: 'Delete', item: item })
  }


  const [repaint, setRepaint] = useState(false)

  useEffect(() => {
    axios.get(`${url}/findAll`)
      .then((response) => {
        if (response.data.data) {
          set_available_hotels(response.data.data);
        }
      })
  }, [repaint])

  return (
    <RestaurantContext.Provider
      value={
        {
          available_hotels,
          set_available_hotels,
          setRepaint,
          cartArrState,
          dispatchCartAction,
          addItemToCart,
          deleteItemInCart,
        }
      }
    >
      {children}
    </RestaurantContext.Provider>
  )
}
export default RestaurantContextProvider