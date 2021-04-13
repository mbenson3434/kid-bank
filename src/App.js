import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddKid from './components/AddKid';
import KidList from './components/KidList';

//WHY IS IT STARTING ON ADD KID?

function App() {
  const [kidList, setKidList] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header />
        <h1 className='instructions'>Keep track of your allowance!</h1>
        <h2 className='instructions'>Click ADD to start!</h2>
        <Route exact path="/" component={KidList}>
          <KidList kidList={kidList} setKidList={setKidList} />
        </Route>

        <Route path="/add-kid" component={AddKid}>
          <AddKid kidList={kidList} setKidList={setKidList} />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
