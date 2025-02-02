import './App.css';
import {Timer} from './Timer.js'

function App() {
  return (
    <div className="App">
      <Timer hours={0} minutes={2} seconds={0}/>
    </div>
  );
}

export default App;
