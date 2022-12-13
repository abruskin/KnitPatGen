
import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import BeanieToque from './BeanieToque'
import BeretTam from './BeretTam'


function HatStyleSelector()  {

    const hatOptions = ["make a selection","beanie/toque", "beret/tam" ]
    const [hatStyle, setHatStyle] = useState(hatOptions[0])

    return ( 
    <Container> 
    <h2> What kind of hat would you like to make?</h2>
     <form> 
        <select
        value={hatStyle}
        onChange={e => setHatStyle(e.target.value)}> 
        {hatOptions.map((value) => (
            <option value={value} key={value}>{value}</option>
        ))}
        </select>
        
        </form>

        {hatStyle === "beanie/toque" ? <BeanieToque /> :<div />}
        {hatStyle === "beret/tam" ? <BeretTam /> : <div />}
    </Container>
    )
}

export default HatStyleSelector