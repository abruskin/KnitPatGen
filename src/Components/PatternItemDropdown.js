import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

import { Button, Container } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import HatStyleSelector from './HatStyleSelector';

const PatternItemDropdown = ({placeHolder}) => {
 
  const [selectedValue, setSelectedValue] = useState(null);
  
  const options = [
    {label:"Hat", value: "Hat"},
    {label:"Not a hat", value: "Not a Hat"}
  ]


  const getDisplay = () => {
    if (selectedValue) {
      console.log('changing placeholder value')
      return selectedValue.label;
    }
    return placeHolder
  }

  const onItemClick = (option) => {
    setSelectedValue(option)
    console.log(selectedValue)
  }

  
  return (
    <Container> 
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic" 
      onChange={e => setSelectedValue(e.target.value)}
      >{getDisplay()}
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
       {options.map((option) => (
        <div 
        onClick={() => onItemClick(option)}
        key={option.value} 
        > 
        {option.label}
        
        </div>
       ))} 
       
      </Dropdown.Menu>
      
      
    </Dropdown>
    {selectedValue === "Hat" ? <HatStyleSelector /> :<div />}
    </Container>

    

  )}

  export default PatternItemDropdown;