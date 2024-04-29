
import {Restaurant} from "../Restaurant.ts";

type Props = {
    restaurant : Restaurant,

}


function RestaurantCard( props : Props) {
    return (
        <div className={"restaurantcard"}>
            <ul>
             <li> {props.restaurant.name}</li>
                <li>{props.restaurant.location }</li>
                <li> {props.restaurant.kitchen}</li>
                <li>{props.restaurant.review}</li>




            </ul>

        </div>
    )
}

export default RestaurantCard;