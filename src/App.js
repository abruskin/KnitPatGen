
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Counter from './features/counter/Counter'
import { useState } from 'react';

import LandingPage from './Components/LandingPage';
import PatternItemDropdown from './Components/PatternItemDropdown';
import HatStyleSelector from './Components/HatStyleSelector';
import DropdownForm from './Components/PatternItemDropdown2';

function App() {
  
// {selectedValue === "Hat" ? <HatStyleSelector /> :<div />}



  return (
    <Container>
   <Counter></Counter>
       <LandingPage/>
       
       <DropdownForm />


     
    </Container>
  );
}


export default App