import { useContext } from "react"
import { RestaurantContext } from "../../Store/context_restaurant"
import HotelList from "./HotelList";

const Hotel = () => {
  const { available_hotels } = useContext(RestaurantContext);
  const hotelList = available_hotels.map((single_hotel) => (
    <HotelList
      single_hotel={single_hotel}
    ></HotelList>
  ))
  return (
    <div>
      {hotelList}
    </div>
  )
}
export default Hotel