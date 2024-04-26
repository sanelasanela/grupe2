import {Login} from './assets/components/Login.tsx';
/*
import './assets/components/LoginCSS.css';
*/



function App() {
  Login();

  return (
      <div>
        <div className="top-text">
          <h1>MY FAVORITE RESTAURANT </h1>
        </div>

        <Login></Login>
      </div>


  )
}


export default App;
