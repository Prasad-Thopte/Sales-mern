import './App.css';
import { Homepage } from './Components/Homepage/Homepage';
import { Login } from './Components/Pages/Login';
import { Register } from './Components/Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Pages/Header';
import AddSales from './Components/Pages/AddSales';
import Top from './Components/Pages/Top';
import Revenue from './Components/Pages/Revenue';
import {Logout} from './Components/Pages/Logout';
import Home from './Components/Pages/Home';
import Error from './Components/Pages/Error';



function App() {

  const [loginUser, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/" exact element={loginUser && loginUser._id ? <Homepage setLoginUser={setLoginUser} /> : <Home setLoginUser={setLoginUser} />}>
          <Route path="/Login" exact element={<Login setLoginUser={setLoginUser} />}/>
          <Route path="/Register" exact element={<Register />}/>
          <Route path="/Error" exact element={<Error />}/>
          </Route>
        
        

            <Route path="/" exact element= { <Header  />}   >
            <Route path="/AddSales" exact element= {<AddSales  />}/>


            <Route path="/Top" exact element={<Top />}/>
            <Route path="/Revenue" exact element={<Revenue /> }/>
           
            
            <Route path="/Logout" exact element= <Logout setLoginUser={setLoginUser} /> />
</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
