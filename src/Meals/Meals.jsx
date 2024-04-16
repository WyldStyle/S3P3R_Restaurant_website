import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import Hotel from "./Hotels/Hotel";

const Meals = ()=>{
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <Hotel></Hotel>
    </Fragment>
  )
}
export default Meals