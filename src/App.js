
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import { useState } from 'react';

import LandingPage from './Components/LandingPage';

import HatStyleSelector from './Components/HatStyleSelector';
import DropdownForm from './Components/PatternItemDropdown2';

function App() {
  
// {selectedValue === "Hat" ? <HatStyleSelector /> :<div />}



  return (
    <Container>
   
       <LandingPage/>
       
       <DropdownForm />


     
    </Container>
  );
}


export default App