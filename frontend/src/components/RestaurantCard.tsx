import "./RestaurantCSS.css"
import {Restaurant} from "../Restaurant.ts";

type Props = {
    restaurant : Restaurant,

}




function RestaurantCard( props : Props) {

    return (
        <div className="restaurantcard">
              <p>
                  Restaurant = {props.restaurant.name}
              </p>
             <p>
                 Ort = {props.restaurant.location }
             </p>
            <p>
                Küche = {props.restaurant.kitchen}
            </p>
            <p>
                Bewertung = {props.restaurant.review}/5
            </p>

        </div>
    )
}

export default RestaurantCard;