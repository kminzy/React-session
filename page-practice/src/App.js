import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/detail" component={Detail} />
      </Router>
    </div>
  );
}

export default App;
