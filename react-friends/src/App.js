import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {people} from './people.js';
import PeopleList from './PeopleList.js';

class App extends Component {
  constructor() {
    super(); 
      this.state = {
        people: []
      };
  }

  componentDidMount(){
    const {peopleData} = people;
    this.setState({people: peopleData})

  }

//   Create your PeopleList as a function component and import it in as: import {PeopleList} from './PeopleList'.
// Pass your People data down to PeopleList and render out the People List <PeopleList people={this.state.People} />.
// For each person in PeopleList render out the first_name and last_name and email.
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PeopleList people={this.state.People} />
      </div>;
  }
}

export default App;
