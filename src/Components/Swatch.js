import { useState } from 'react'
import FetchService from '../service/fetch'

function Swatch() {
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
        
        
    )
}

export default Swatch