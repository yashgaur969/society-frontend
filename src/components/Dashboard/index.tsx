import * as React from 'react';
import './style.css';
import axios from 'axios';

import { Link } from 'react-router-dom';


export default class Dashboard extends React.Component{
    state = {
        societyData: []
    };
    componentDidMount(){
        axios.get("http://127.0.0.1:5000/societyDetails")
        .then(res => {
            const societyData = res.data;
            // console.log(societyData)
            this.setState({societyData:societyData.data});
        });
    }
    
    render(){

        console.log(this.state.societyData)
        
        return (
            <div>
     <button type="submit" className="button-class" value="next"><Link to="/societyDetails">Add Society</Link></button>
     <button type="submit" className="button-class" value="next"><Link to="/login">logout</Link></button>
     

            <ul>
                {this.state.societyData.map((s:any) => <div><hr/><h1><strong>Society: {s.society_type}</strong>
                            </h1><br></br><strong>Fenced?:</strong> {s.is_fenced}<br></br> 
                            <strong>Guarded? :</strong>{s.is_guarded}<br></br><br></br><hr/></div>)}
            </ul>
            </div>
    
        )
    }
}