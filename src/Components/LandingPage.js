import Button from 'react-bootstrap/Button'
import { useState } from 'react';

//import {useDispatch, useSelector} from 'react-redux';
//import projectTypeSlice, { selectProjectType } from '../reducers/projectTypeSlice';


function LandingPage() {
    
   // const [projectType, setProjectType] = useState("")
    //const projectType = useSelector((state)=> state.selectedValue.value)
    //const dispatch=useDispatch()
  
  
    return (
      <div>
        
         <h1> Knitting Pattern Generator </h1>
          <p>
            Eventually, this tool will grow into on that can generate pattens for hats, 
            mittens, gloves, cowls, shawls, scarves, sweaters, pants, skirts, geometric shapes--
            anything your heart desires. We're just starting and we have to start somewhere, so 
            we're starting with hats. 
          </p>
  
          <h2> I'd like to make a...</h2> 
        
      </div>
    );
  }

  export default LandingPage
  