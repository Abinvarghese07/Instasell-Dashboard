import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Hero from './components/Hero';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
