import { useState } from 'react'
import FetchService from '../service/fetch'

function BeanieToque() {
// then set the gauge submit button to send data to the backend
const [swatchunits, setSwatchunits] = useState("inches")
const [stitchesInSwatch, setStitchesInSwatch] = useState("")
const [swatchWidth, setSwatchWidth] = useState("")
const [rowsInSwatch, setRowsInSwatch] = useState("")
const [swatchLength, setSwatchLength] = useState("")

let handleGaugeSubmit = async (e) => {
    e.preventDefault();
    try {
        let res = await fetch("http://127.0.0.1:8000/gauge", {
            method: "POST",
            //adding content-type header fixed the cors error
            //it tells the backend that we're dealing with json
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                swatchunits: swatchunits,
                stitchesInSwatch: stitchesInSwatch,
                swatchWidth: swatchWidth,
                rowsInSwatch: rowsInSwatch,
                swatchLength: swatchLength,
            
            })
        });
        console.log(res)
        let resJson = await res.json();
        if (res.status === 200) {
            console.log('yay! sent to server')
        } else {
            console.log('oops')
        }
    } catch (err) {
        console.log(err)
    } 
    
} 

    return (
        <div>
        <h1> Beanie/Toque</h1>
        <p> Categories of hats are kind of mushy and elastic. For our purposes, 
        a beanie or toque is a hat that fits close to the head length-wise--in other words, 
        the hat ends at the top of the skull. </p>
        
<h1> Style & Sizing Decisions</h1>
<form> 
<label>What size would you like your hat to be?
<select> 
<option value="15">preemie (15 in / 38 cm)</option>
<option value="16.5">0-6 months ( 16.5 in / 42 cm)</option>
<option value="18.5">6-18 months ( 18.5 in / 47 cm)</option>
<option value="20">18 months - 4 years ( 20 in / 51 cm)</option>
<option value="21">4 years - adult small ( 21 in / 53.5 cm)</option>
<option value="23"> adult medium/large (23 in / 58.5 cm)</option>
</select>
</label>

<label> What kind of edge would you like?
<select>
<option value="ribbed">Ribbed</option>
<option value="rolled">Ribbed</option>
<option value="hemmed">Ribbed</option>
</select> </label>
<button>Submit</button>
</form>
        <div>
        <h2> About your swatch</h2>
        <p> You did a swatch, right? If you did, tell us about it. If you didn't, 
        go make one. We'll wait. </p>
       <form className="swatchgauge">
       
       <label>Measured in: 
            <select onChange={(e)=>setSwatchunits(e.target.value)}> 
            <option value="inches">in</option>
            <option value="centimeters">cm</option></select>
            </label> <br />
            <label>Stitches: 
            <input type="number" name="stitchesInSwatch" onChange={(e)=>setStitchesInSwatch(e.target.value)}/>
            </label>
            <label>Width: 
            <input type="number" name="swatchWidth" onChange={(e)=>setSwatchWidth(e.target.value)}/>
            </label> 
            
            <br />
            <label>Rows: 
            <input type="number" name="rowsInSwatch" onChange={(e)=>setRowsInSwatch(e.target.value)}/>
            </label>
            <label>Length: 
            <input type="number" name="swatchLength" onChange={(e)=>setSwatchLength(e.target.value)}/>
            </label>   
            
            <button onClick={handleGaugeSubmit}>Calculate Gauge </button>
       </form>
        </div>
        
        </div>
    )
}

export default BeanieToque