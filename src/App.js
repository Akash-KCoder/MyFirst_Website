import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homefile from './component/Homefile';
import HotelKolkata from './component/HotelKolkata';
import Login from './component/Login';
import Loginpage from './component/Loginpage';
import Registration from './component/Registration';









function App() {
  return (
    <div >
        
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Homefile/>}></Route>
          <Route exact path='/HotelKolkata' element={<HotelKolkata/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route exact path='/Loginpage' element={<Loginpage/>}></Route>
          <Route exact path='/Registration' element={<Registration/>}></Route>
          </Routes>


        


      </BrowserRouter>




    </div>

  );
}


export default App;
