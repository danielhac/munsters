import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super()

    // uses key (unique id) to identify each elemenet (for possible changes in the future)
    this.state = {
      munsters: [],
      searchField: ''
    }
  }

  // Life cycle method
  // After/when component mounts (renders onto the web page)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ munsters: users }))
      
  }

  // Using arrow func binds this to where it was defined, which is within this App Component
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { munsters, searchField } = this.state
    const filteredMunsters = munsters.filter(munster =>
      munster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBox
          placeholder='search munsters'
          handleChange={this.handleChange }
        />
        <CardList munsters={filteredMunsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
