import {Login} from './components/Login.tsx';
import Navbar from "./components/Navbar.tsx";
import RestaurantCard from "./components/RestaurantCard.tsx";
import {Restaurant} from "./Restaurant.ts";

""
/*
import './assets/components/LoginCSS.css';
*/

function App() {
  Login();
  Navbar();

  const restaurant: Restaurant[] = [
      {

      "name": "balkan restaurant",
      "location" : "munchen",
      "kitchen": "balkan",
      "review": 5
  },
      {
          "name": "greek restaurant",
          "location" : "hamburg",
          "kitchen": "greek",
          "review": 4
      }
  ]

  return (
      <div>
          <>
              <h1> RestaurantListe </h1>
              {
               restaurant.map(restaurant=> <RestaurantCard restaurant={restaurant}/>)
              }
          </>


        <div className="top-text">
          <h1>MY FAVORITE RESTAURANT </h1>
        </div>
          <Navbar></Navbar>
        <Login></Login>

      </div>

  )
}


export default App;
