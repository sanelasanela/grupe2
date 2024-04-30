import {Login} from './components/Login.tsx';
import Navbar from "./components/Navbar.tsx";
import RestaurantCard from "./components/RestaurantCard.tsx";
import "./Restaurant.ts"
import {useEffect, useState} from "react";
import axios from 'axios';
import {Restaurant} from "./Restaurant.ts";


/*
import './assets/components/LoginCSS.css';
*/



function App() {
  Login();
  Navbar();
    const [restaurant, setRestaurant] = useState<Restaurant[]>()

    useEffect(() => {
        axios.get("/Restaurant/allRestaurants")
            .then(response => {
                setRestaurant(response.data)
            })

    }, []
    )

if(!restaurant){
    return "Lade..."
}

  return (
      <>

      <div>
        <div className="top-text">
          <h1>MY FAVORITE RESTAURANT </h1>
        </div>

        <Login></Login>
      <Navbar></Navbar>
      </div>
          <div>

              {
                  restaurant.map(element=> <RestaurantCard restaurant={element}/>)
              }

          </div>


      </>

  )
}


export default App;
