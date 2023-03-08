import axios from "axios";
import React,{Component} from "react";
class GetValues extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/get').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <table border={1} align="center" className="g">
                <thead>
                    <tr>
                        <th>movie</th>
                        <th>director</th>
                        <th>duration</th>
                        <th>production</th>
                        <th>release_year</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.movie}</td>
                            <td>{user.director}</td>
                            <td>{user.duration}</td>
                            <td>{user.production}</td>
                            <td>{user.release_year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
      }
}
export default GetValues;