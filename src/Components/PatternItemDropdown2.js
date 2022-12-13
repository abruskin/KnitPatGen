
import { useState } from "react";

import HatStyleSelector from "./HatStyleSelector";

function DropdownForm() {

    const options = ["Choose something", "Hat", "Not a Hat"];
    const [selected, setSelected] = useState(options[0])

    
    
    return(
        <div> 
        <form> 
        <select
        value={selected}
        onChange={e => setSelected(e.target.value)}> 
        {options.map((value) => (
            <option value={value} key={value}>{value}</option>
        ))}
        </select>
        
        </form>

        {selected === "Hat" ? <HatStyleSelector /> :<div />}

        </div>
    )
}

export default DropdownForm