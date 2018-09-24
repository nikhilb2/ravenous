import React from 'react';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList.js';
import SearchBar from '../src/components/SearchBar/SearchBar.js'
import Yelp from './util/Yelp.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      business:[

      ]
    }
    this.searchYelp=this.searchYelp.bind(this);
  }
  searchYelp(term,location,sortBy) {
    Yelp.search(term,location,sortBy).then(businesses=> {
      this.setState({
        businesses:businesses
      })
    })

  }
  render() {
    return <div className="App">
  <h1>ravenous</h1>
  <SearchBar searchYelp={this.searchYelp} />
  <BusinessList businessesProp={this.state.businesses}/>
</div>
    ;
  }
}
export default App;
