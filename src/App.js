
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import { useState } from 'react';

import LandingPage from './Components/LandingPage';

import HatStyleSelector from './Components/HatStyleSelector';
import DropdownForm from './Components/PatternItemDropdown2';
import Swatch from './Components/Swatch';
function App() {
  

  return (
    <Container>
   
       <LandingPage/>
       
       <DropdownForm />

       <Swatch/>


     
    </Container>
  );
}


export default App