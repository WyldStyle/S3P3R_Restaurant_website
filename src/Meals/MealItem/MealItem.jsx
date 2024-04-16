import { useContext,useRef } from "react";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import { RestaurantContext } from "../../Store/context_restaurant";

const MealItem = ({ key,single_meal}) => {

  // const currentVal = useRef(1);

  console.log('in Meal Item',single_meal);
  const priceInRupees = `$${Number(single_meal.price).toFixed(2)}`;

  const { addItemToCart } = useContext(RestaurantContext)
  const addToCartHandler = amount => {
    addItemToCart({
      ...single_meal,
      amount: amount
    })
  }
  return (
    <div>
      <div><h3>{single_meal.meal_name}</h3></div>
      <div><h3>{single_meal.meal_price}</h3></div>
      <div><h3>{single_meal.meal_ethnicity}</h3></div>
      <div>
        <MealItemForm 
        id={key}
        addToCartHandler = {addToCartHandler}
         ></MealItemForm>
      </div>
    </div>
  )
}
export default MealItem





