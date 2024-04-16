import { Fragment } from "react"
import AvailableMeals from "../AvailableMeals"

const HotelList = ({single_hotel})=>{
  return (
    <Fragment>
      <h1>{single_hotel.hotel}</h1>
      <p>We've everything you want</p>
      <AvailableMeals
      key= {single_hotel._id}
      id = {single_hotel._id}
      meals = {single_hotel.meals}
      ></AvailableMeals>
    </Fragment>
  )
}
export default HotelList