import React from 'react';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList.js';
import SearchBar from '../src/components/SearchBar/SearchBar.js'
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}
const business2 = {
  imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
name: 'Pizzeria2',
address: '1010 Pdsadaddington Way',
city: 'Flavortdsadown',
state: 'NY',
zipCode: '10333101',
category: 'Italiewan',
rating: 4.5,
reviewCount: 930
}
const businesses = [business,business2,business,business,business,business];
class App extends React.Component {
  render() {
    return <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList businessesProp={businesses}/>
</div>
    ;
  }
}

export default App;
