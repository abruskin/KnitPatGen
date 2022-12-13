

function BeanieToque() {
//TODO make the backend, connect the backend, then set the gauge submit button to send data to the backend


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
<option value="23"> adult medium/large (23 in / 58.5 cm</option>
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
       <form>
       <label>Stitches: 
       <label>Measured in: 
            <select> 
            <option value="inches">in</option>
            <option value="centimeters">cm</option></select>
            </label> <br />

            <input type="number" name="stitchesInSwatch" />
            </label>
            <label>Width: 
            <input type="number" name="swatchWidth" />
            </label> 
            
            <br />
            <label>Rows: 
            <input type="number" name="rowsInSwatch" />
            </label>
            <label>Length: 
            <input type="number" name="swatchLength" />
            </label>   
            
            
            <button>Submit</button>
       </form>
        </div>
        
        </div>
    )
}

export default BeanieToque