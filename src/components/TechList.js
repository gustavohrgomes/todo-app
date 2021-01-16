import React, { Component } from 'react';

class TechList extends Component {
  
  // jeito convencional de se criar estados dentro de um class component
  
  // constructor() {
  //   this.state = {
  //     techs: [
  //       'NodeJS',
  //       'ReactJS',
  //       'React Native'
  //     ]
  //   }
  // }

  state = {
    newTech: '',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native'
    ]
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
      
    );
  }
}

export default TechList;