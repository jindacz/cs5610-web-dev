import React from "react";
import "./midterm.css"
import math from './math'
import Spreader from "./spreader";
import MapFilterFind from "./mapFilterFind";

class Radios extends React.Component {
    render() {
        return (
            <div>
                <MapFilterFind/>
                <Spreader/>
                <h1>Export/Import</h1>
                <h2>{math.PI}</h2>
                <h2>{math.add(2, 2)}</h2>
                <h2>{math.multiply(2, 3)}</h2>
                <h2>{math.subtract(2, 3)}</h2>

                <h1>Position</h1>
                <div className="position-yellow">
                    column left
                </div>
                {/* style closest to element wins */}
                <div className="position-blue" style={{background: 'green'}}>
                    column center
                </div>
                <div className="position-red">
                    column right
                </div>



                <h1>Float</h1>
                <div style = {{backgroundColor: 'yellow', width: '30%', float: 'left'}}>
                    column left
                </div>
                <div style = {{backgroundColor: 'blue', width: '30%', float: 'left'}}>
                    column center
                </div>
                <div style = {{backgroundColor: 'red', width: '30%', float: 'left'}}>
                    column right
                </div>

                
                <h1>Select elements</h1>
                <select value="FEB" name="month">
                    <option value="JAN">January (01)</option>
                    <option value="FEB" selected>February (02)</option>
                    <option value="MAR">March (03)</option>
                </select>



                <h1>Dates</h1>
                <input type="date" value="2020-02-24" />

                <h1>Input elements attributes</h1>
                <input id="123" name="foo" placeholder="anything" title="Some Hint" />

                <h1>CheckBox</h1>
                <input type="checkbox" name="genre" value="HORROR" />HORROR
                <input type="checkbox" name="genre" value="SCIFI" />SCIFI
                <input type="checkbox" name="genre" value="DRAMA" />DRAMA
                <input type="checkbox" name="color" value="YELLOW" />YELLOW
                <input type="checkbox" name="color" value="BLUE" />BLUE
                <input type="checkbox" name="color" value="RED" />RED




                <h2>Marital Status</h2>
                Married
                {/* first way */}
                <input id="married-yes" name="married" type="radio" />
                <label for="married-yes">Yes</label>
                {/* second way */}
                <label>
                    <input name="married" type="radio" /> No
                </label>
                <input type="radio" /> Maybe



                <h2>Favourite Color</h2>
                <input name="color" type="radio" /> Yellow
                <input name="color" type="radio" /> Blue
                <input name="color" type="radio" /> Red


            </div>
        )
    }
}

export default Radios