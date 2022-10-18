import React , {Component} from 'react';
import './App.css';
import Footer from './comps/footer';
import Header from './comps/header';
import Search from './comps/search';

class  App extends Component{
  render(){
     return (
    <div className="container">
      <Header />
      <Search />
      <Footer />
    </div>
  );
  }
 
}

export default App;
