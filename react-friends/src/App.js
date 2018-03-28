import React, { Component } from 'react';

import './App.css';
import {people} from './people.js';
import {PeopleList} from './PeopleList.js';


class App extends Component {
  constructor() {
    super(); 
      this.state = {
        People: []
      };
  }

  componentDidMount(){
     this.setState({People: people})

  }

//   Create your PeopleList as a function component and import it in as: import {PeopleList} from './PeopleList'.
// Pass your People data down to PeopleList and render out the People List <PeopleList people={this.state.People} />.
// For each person in PeopleList render out the first_name and last_name and email.
  render() {
    return(
    <div className="App">
        <h1> Hello React App</h1>
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;
