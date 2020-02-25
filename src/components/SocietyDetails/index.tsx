import * as React from 'react';
 import './style.css';
 import { societyTypes, isGuarded, isFenced } from '../../Constants/constant';
import { Link } from 'react-router-dom';
import { BuildingDetails } from '../BuildingDetails';

 
 export const SocietyDetails: React.FC= () => {

    const [Society, setSociety] = React.useState(societyTypes[0])
    const [Fencing, setFencing] = React.useState(isFenced[0])
    const [Guarded, setGuarded] = React.useState(isGuarded[0])

    const onSocietyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSociety(event.target.value);
    };
    const onFencingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFencing(event.target.value);
    };
    const onGuardedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGuarded(event.target.value);
    };


    const postSocietyData = (event: any)=>{
        event.preventDefault();
        console.log('error')
        let society = Society;
        let fencing = Fencing;
        let guarded = Guarded;
        const data = {society_type:society, is_fenced:fencing, is_guarded:guarded}
        fetch("http://127.0.0.1:5000/societyDetails", {
            method: 'POST',
            body:JSON.stringify(data),
            headers : { 'Content-Type': 'application/json' } 
         }).then(res => res.json())
         .catch(error => console.error('Error:', error))
         .then(response => console.log('Success:', response)); 

         
        }

    return (
        <form onSubmit={postSocietyData} className="main-container">
            <h1><strong>Society Details</strong></h1>
        <div className="society-details">
            <label className="society-input">
                Task Type
                        <select className="society-select" onChange={onSocietyChange} value={Society}>
                    {societyTypes.map((task: string) => (
                        <option key={task} value={task}>
                            {task}
                        </option>
                    ))}
                </select>
            </label><br></br><br></br>
            <label className="fencing-input">
                    Perimeter/Fencing ?
                        <select className="fencing-select" onChange={onFencingChange} value={Fencing}>
                    {isFenced.map((task: string) => (
                        <option key={task} value={task}>
                            {task}
                        </option>
                    ))}
                </select>
            </label><br></br><br></br>
            
            <label className="guarded-input">
                    Does Society have guard/ gatekeeper ?
                        <select className="guarded-select" onChange={onGuardedChange} value={Guarded}>
                    {isGuarded.map((task: string) => (
                        <option key={task} value={task}>
                            {task}
                        </option>
                    ))}
                </select>
            </label><br></br><br></br>
            <div><button type="submit" className="button-class" value="NEXT"><Link to="/buildingDetails">NEXT</Link></button></div>
        </div>
        </form>
        );




 };