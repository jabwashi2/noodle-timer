import './App.css';
import {Timer} from './Timer.js'
import { Link } from "react-router-dom";

function App() {
  /*
  * there will be four buttons for different timers:
  *   - pasta
  *   - udon
  *   - ramen
  *   - custom
  * when the user selects the button they want, they can click a select button at the bottom of the page
  * the button will redirect to a page with the correct timer on it
  */


  return (
    <div className="App">
      <div><Link to={"/Timer/" + "pasta"}>Pasta</Link></div>
      <div><Link to={"Timer/" + "udon"}>Udon</Link></div>
      <div>Ramen</div>
      {/* <div>Custom</div> */}
      {/* <Timer hours={0} minutes={2} seconds={0}/> */}
    </div>
  );
}

export default App;
