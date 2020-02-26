import * as React from 'react';
import './style.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

// export const Dashboard: React.FC = () =>{
//     return (
//         <div><button className="add-society"><Link to="/societyDetails">Add Society</Link></button></div>
//     )
// }
// export const Dashboard: React.FC= () =>{
//     const [societyData, setSocietyData] = React.useState([])
//     React.useEffect(()=>{
//         fetch("http://127.0.0.1:5000/societyDetails").then(response => 
//         response.json().then(data =>{
//             setSocietyData(data.societyData)        
//         }))

//     },[])

//     return (
//         <div><button className="add-society"><Link to="/societyDetails">Add Society</Link></button></div>
//     )
// }

export default class Dashboard extends React.Component{
    state = {
        societyData: []
    };
    componentDidMount(){
        axios.get("http://127.0.0.1:5000/societyDetails")
        .then(res => {
            const societyData = res.data;
            console.log(societyData)
            this.setState({societyData:societyData.data});
        });
    }
    
    render(){

        console.log(this.state.societyData)
        
        return (
            
            <ul>
                {this.state.societyData.map((s:any) => <div><h1><strong>{s.society_type}</strong></h1><br></br>{s.is_fenced} {s.is_guarded}<br></br><br></br></div>)}
            </ul>
            
    
        )
    }
}