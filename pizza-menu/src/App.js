// import './App.css';
 import './index.css';
import Pizza from './Components/Pizza';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Counter from './Components/Counter';

function App() {
 return(
  <div className="container">
    <Header />
    <Menu />
 <Footer />
 <Counter/>
 </div>
);
}

export default App;
