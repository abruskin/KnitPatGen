import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import PatternItemDropdown from './PatternItemDropdown';


function LandingPage() {
    const options = [
      {value: "Hat", label: "Hat"},
      {value: "Not a Hat", label: "Not a Hat"}
    ]
   // const [projectType, setProjectType] = useState("")
    
    
  
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
          <PatternItemDropdown placeHolder="Choose a thing..." options={options}></PatternItemDropdown>
          <Button variant="warning" > Next </Button>
  
 
      </div>
    );
  }

  export default LandingPage
  