import { useState } from 'react';
import './App.css'
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/Searchbar/SearchBar';
import Yelp from './util/Yelp';


function App() { 
  const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bordertown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };

  const [businesses, setbusinesses] = useState([business])
  
  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term,location, sortBy).then(businesses => {
      setbusinesses(businesses)
    })
  }
  return (
    <>
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp = {searchYelp}/>
      <BusinessList businesses = {businesses}/>
    </div>

    </>
  );
}

export default App;
