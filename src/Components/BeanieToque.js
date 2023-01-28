import { useState } from 'react'
import FetchService from '../service/fetch'

function BeanieToque() {


    return (
        <div>
        <h1> Beanie/Toque</h1>
        <p> Categories of hats are kind of mushy and elastic. For our purposes, 
        a beanie or toque is a hat that fits close to the head length-wise--in other words, 
        the hat ends at the top of the skull. </p>
        
<h1> Style & Sizing Decisions</h1>
<form> 
<label>Which option best matches the head circumference of the intended recipient ?
<select> 
<option value="12-13">preemie (12-13 in / 30-33 cm)</option>
<option value="13-14">newborn-3 months ( 13-14 in / 33-36 cm)</option>
<option value="14-15"> 3-6 months ( 14-15 in / 36-40.5 cm) </option>
<option value="16-17"> 6-12 months (16-17 in / 40.5-43.5 cm)</option>
<option value="17-18">12-24 months ( 17-18 in / 43.5-46 cm)</option>
<option value="18-19"> toddler ( 18-19 in / 46-48.5 cm)</option>
<option value="19-20">child ( 19-20 in / 48.5-51 cm)</option>
<option value="20-21"> adult small (20-21 in / 51-53.5cm) </option>
<option value="22"> adult medium (22 in / 56 cm) </option>
<option value="23"> adult large (23 in / 59 cm)</option>
</select>
</label>

<label> What kind of edge would you like?
<select>
<option value="ribbed">Ribbed</option>
<option value="rolled">Rolled</option>
<option value="hemmed">Hemmed</option>
</select> </label>
<button>Submit</button>
</form>
       
        
        </div>
    )
}

export default BeanieToque