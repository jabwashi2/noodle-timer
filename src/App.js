import './App.css';
import {Timer} from './Timer.js'

function App() {
  /*
  * there will be four buttons for different timers:
  *   - pasta
  *   - udon
  *   - ramen
  *   - custom
  * when the user selects the button they want, they can click a select button at the bottom of the page
  * 
  */
  return (
    <div className="App">
      <Timer hours={0} minutes={2} seconds={0}/>
    </div>
  );
}

export default App;
