import * as React from 'react';
import './style.css';
import { ManagementDetails } from '../ManagementDetails';


export const BuildingDetails: React.FC= (props: any) => {

    const [Floor, setFloor] = React.useState('');
    const [Flat, setFlat] = React.useState('');
    const [Total, setTotal] = React.useState('');

    const onFloorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFloor(event.target.value);
    };
    const onFlatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFlat(event.target.value);
    };
    const onAddAction = (event: any) =>{
        let x = Number(Floor);
        let y = Number(Flat);
        let z = x*y;
        let ans = ''+z;
        setTotal(ans); 
    };

    const postBuildingData = (event: any)=>{
        event.preventDefault();
        console.log('error')
        let floors = Floor;
        let flats = Flat;
        let totals = Total;
        const data = {number_of_floors:floors, number_of_flats:flats, total_flats:totals}
        fetch("http://127.0.0.1:5000/buildingDetails", {
            method: 'POST',
            body:JSON.stringify(data),
            headers : { 'Content-Type': 'application/json' } 
         }).then(res => console.log(res))
         .catch(error => console.error('Error:', error))
         .then(response => console.log('Success:', response)); 

         
        }
    
    return (
        <form onSubmit= {postBuildingData} >
            <div className="main-container">
                <h1><strong>Building Details</strong></h1>
               <label>number of floors<input type="number" name="floors" value={Floor} onChange={onFloorChange}/></label><br></br><br></br>
                <label>number of flats<input type="number" name="flats" value={Flat} onChange={onFlatChange}/></label><br></br><br></br>
                <hr/>
                <div><label>total No.of flats<input type='text' value={Total}/></label></div>
                <hr/>
                <input type="submit" className="button-class" value="Next" onClick={onAddAction}/>
            </div>
            <div>
                {
                        <ManagementDetails />
                }
            </div>
        </form>
    );
};