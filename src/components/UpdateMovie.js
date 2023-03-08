import axios from "axios";
import React, { Component } from "react";
class UpdateValues extends Component {
    constructor(props){
        super(props);
        this.state={
          movie:" ",
          director:" ",
          duration:" ",
          production:" ",
          release_year:" ",
        }
    }
handleMovieChange = (event) => {
    this.setState({ movie:event.target.value});
}

handleDirectorChange = (event) => {
    this.setState({ director:event.target.value});
}
handleDurationChange = (event) => {
    this.setState({ duration:event.target.value});
}
handleProductionChange = (event) => {
    this.setState({ production:event.target.value});
}
handleReleaseYearChange = (event) => {
    this.setState({ release_year:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
      movie : this.state.movie,
      director:this.state.director,
      duration:this.state.duration,
      production:this.state.production,
      release_year:this.state.release_year,         
    }
    axios.put('http://127.0.0.1:8080/put',data)
};
render(){
  return ( 
      <div className="gel">
      <form onSubmit={this.handleSubmit} className="login-form" align="center">
          <label className="login-label">Movie:</label><br/>
          <input
              className="login-input" 
              type="text" 
              value={this.state.movie}
              onChange ={this.handleMovieChange}
          /><br/><br/>

          <label className="login-label">Director:</label><br/>
          <input 
              className="login-input" 
              type="text" 
              value={this.state.director}
              onChange ={this.handleDirectorChange}
          /><br/><br/>

          <label className="login-label">Duration</label><br/>
          <input 
              className="login-input" 
              type="text" 
              value={this.state.duration}
              onChange ={this.handleDurationChange}
          /><br/><br/>

          <label className="login-label">Production</label><br/>
          <input
              className="login-input" 
              type="text" 
              value={this.state.production}
              onChange ={this.handleProductionChange}
          /><br/><br/>

          <label className="login-label">Year</label><br/>
          <input 
              className="login-input" 
              type="text" 
              value={this.state.release_year}
              onChange ={this.handleReleaseYearChange}
          /><br/><br/>
          <button className="login-button" type="submit" style={{padding:10,color:"blue"}} > Submit </button>
      </form>
      </div>
  );
}
}

export default UpdateValues;