import './App.css';
import Footer from './comps/footer';
import Header from './comps/header';
import Search from './comps/search';

function App(props) {
  return (
    <div className="container">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
