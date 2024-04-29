import {Login} from './components/Login.tsx';
import Navbar from "./components/Navbar.tsx";
/*
import './assets/components/LoginCSS.css';
*/



function App() {
  Login();

  return (
      <>

      <div>
        <div className="top-text">
          <h1>MY FAVORITE RESTAURANT </h1>
        </div>


        <Login></Login>
          <Navbar></Navbar>
      </div>
      </>

  )
}


export default App;
