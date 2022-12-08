
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Counter from './features/counter/Counter'


import LandingPage from './Components/LandingPage';
import PatternItemDropdown from './Components/PatternItemDropdown';
import HatStyleSelector from './Components/HatStyleSelector';

function App() {
  

  return (
    <Container>
   <Counter></Counter>
       <LandingPage/>
       <PatternItemDropdown placeHolder="Choose a thing..." 
       ></PatternItemDropdown>
        {/*{projectType == "a Hat" ? <HatStyleSelector /> :<div />}*/}


     
    </Container>
  );
}


export default App