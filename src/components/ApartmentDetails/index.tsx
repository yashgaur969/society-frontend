import * as React from 'react';
import './style.css';


export const ApartmentDetails: React.FC= (props: any) => {
    const [Wing, setWing] = React.useState('');
    const [Floor, setFloor] = React.useState('');
    const [Flat, setFlat] = React.useState('');
    const [Total, setTotal] = React.useState('');
    
    const onWingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWing(event.target.value);
    };

    const onFloorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFloor(event.target.value);
    };

    const onFlatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFlat(event.target.value);
    };

    const onAddAction = (event: any) =>{
        let x = Number(Floor);
        let y = Number(Flat);
        let w = Number(Wing);
        let z = x*y*w;
        let ans = ''+z;
        setTotal(ans); 
    };

    const postApartmentData = (event: any)=>{
        event.preventDefault();
        console.log('error')
        let wings = Wing;
        let floors = Floor;
        let flats = Flat;
        let totals = Total;
        const data = {no_of_wings:wings, no_of_floors:floors, no_of_flats:flats, total_flats:totals}
        fetch("http://127.0.0.1:5000/apartmentDetails", {
            method: 'POST',
            body:JSON.stringify(data),
            headers : { 'Content-Type': 'application/json' } 
         }).then(res => console.log(res))
         .catch(error => console.error('Error:', error))
         .then(response => console.log('Success:', response)); 

         
        }


    return (
        <form onSubmit= {postApartmentData} >
            <div className="main-container">
                <h1><strong>Apartment Details</strong></h1>
                <label>number of wings<input type="number" name="Wings" value={Wing} onChange={onWingChange}/></label><br></br><br></br>
               <label>number of floors<input type="number" name="floors" value={Floor} onChange={onFloorChange}/></label><br></br><br></br>
                <label>number of flats<input type="number" name="flats" value={Flat} onChange={onFlatChange}/></label><br></br><br></br>
                <hr/>
                <div><label>total No.of flats<input type='text' value={Total}/></label></div>
                <hr/>
                <input type="submit" className="button-class" value="Next" onClick={onAddAction}/>
            </div>
        </form>
    );
};