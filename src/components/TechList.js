import React, { Component } from 'react';

import TechItem from './TechItem';

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

  handleDelete = tech => {
    this.setState({ 
      techs: this.state.techs.filter(t => t !== tech)
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)}/>)}
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