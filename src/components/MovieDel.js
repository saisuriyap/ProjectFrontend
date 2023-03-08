import React from 'react';  
import { Link } from "react-router-dom";   
import axios from 'axios';  
class Remove extends React.Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(movie)
    {
        axios.delete('http://127.0.0.1:8080/del/'+movie,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.movie}>
            <td className="text-left">{Expense.movie}</td>
            <td className="text-left">{Expense.director}</td>
            <td className="text-left">{Expense.duration}</td>
            <td className="text-left">{Expense.production}</td>
            <td className="text-left">{Expense.release_year}</td>
            
            <td><button class="button button8"  onClick={() => this.remove(Expense.movie)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div>
             <Link to="/">
            <button class="button button5" style={{padding:20}}>
                 Home
            </button>
            </Link>
        <div class="table-title">
        <h3 align="center">Data Table</h3>
        </div>
        <table  class="table-fill" align="center">
        <thead>
        <tr>
        <th class="text-left">Movie</th>
        <th class="text-left">Director</th>
        <th class="text-left">Duration</th>
        <th class="text-left">Production</th>
        <th class="text-left">Year</th>
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Remove;