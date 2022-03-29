import MainHeader from './components/MainHeader';
import Home from './components/Home';
import Create from './components/Create';
import Login from './components/Login';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import { Container } from 'react-bootstrap';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const background = new URL('./components/bankpic.jpeg',import.meta.url)
const { UserContext } = require('./components/validation');
function App() {
  return (
<section className="background">
    <Router>

      <Container>
        <MainHeader />
        <UserContext.Provider value={{currentUserIndex:null},{ users: [{ name: 'Peter', email: 'ParkerP@Gmail.com', password: 'GreenM0nster', balance: '25' }] }}>
          <Routes>
            <Route path=""                element={<Home />} />
            <Route path="/home"           element={<Home />} />
            <Route exact path="/Create"   element={<Create />} />
            <Route path="/login"          element={<Login />} />
            <Route exact path="/deposit"  element={<Deposit />} />
            <Route path="/withdraw"       element={<Withdraw />} />
            <Route path="/alldata"        element={<AllData />} />
          </Routes>
        </UserContext.Provider>
      </Container>
    </Router>
</section>


  );
}

export default App;
