import * as React from 'react';
 import './style.css';

 export const Dashboard: React.FC= () => {

    return (
        //    <p>Society Details</p>
        <div className="society-details">
            <label className="society">Society Type </label>
            <select id="buildings">
                <option value="apartment">Apartment</option>
                <option value="building">Building</option>
                <option value="independent-house">Independent House</option>
            </select>
            <div className="perimeter-fencing">
                <p>Perimeter/Fencing?:
                    <label className="radio-inline">
                        <input type="radio" name="optradio" id="yes" />Yes
                        </label>
                    <label className="radio-inline">
                        <input type="radio" name="optradio" id="no" />No
                        </label></p>
            </div>
            <div className="guard-gatekeeper">
                <p>Does society have Guard/GateKeeper?
                    <label className="radio-inline">
                        <input type="radio" name="optradio1" id="yes" />Yes
                        </label>
                    <label className="radio-inline">
                        <input type="radio" name="optradio1" id="no" />No
                        </label></p>
            </div>
            <div className="button-class">
                <button type="button">Next</button>
            </div>
        </div>
        );




 };