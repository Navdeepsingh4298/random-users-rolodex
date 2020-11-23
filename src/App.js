import React from "react";
import CardList from './components/card-list/card-list.component';
import SetNo from './components/select-set/setno.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
      searchField: '',
      set: '5'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ people: users }));
  }

  render() {
    const { people, searchField, set } = this.state;
    const filteredpeople = people.filter(person =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1> Random Users Rolodex </h1>
        <SetNo
          placeholder="Select set"
          handleSetNo={e => this.setState({ set: e.target.value })}
        />
        <SearchBox
          placeholder="Search Here"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList people={filteredpeople} set={set} />
      </div >
    );
  }
}

export default App; 
