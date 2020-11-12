import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddKid from './components/AddKid';
import KidList from './components/KidList';

//WHY IS IT STARTING ON ADD KID?

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Route exact path="/" component={KidList}>
          <KidList />
        </Route>

        <Route exact path="/add-kid" component={AddKid}>
          <AddKid />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
