import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';

const PatternItemDropdown = ({placeHolder}) => {
  const options = [
    {value: "Hat", label: "Hat"},
    {value: "Not a Hat", label: "Not a Hat"}
  ]
  const [selectedValue, setSelectedValue] = useState(null);
 
  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder
  }

  const onItemClick = (option) => {
    setSelectedValue(option)
  }

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value ===option.value;
  }


  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic" >{getDisplay()}
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
       {options.map((option) => (
        <div 
        onClick={() => onItemClick(option)}
        key={option.value} className={`dropdown-item ${isSelected(option) && "selected"}`}
        > 
        {option.label}
        </div>
       ))}
      </Dropdown.Menu>
    </Dropdown>

  )}

  export default PatternItemDropdown;