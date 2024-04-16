import classes from './AvailableMeals.module.css'
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

const AvailableMeals = ({ key, meals }) => {
console.log('in AvailableMeals',meals);
  const mealsList = meals.map((singleMeal) => (
    <MealItem
    key={key}
    single_meal={singleMeal}
    ></MealItem>
  ))
  return (
    <Card>
      {mealsList}
    </Card>
  )
}
export default AvailableMeals