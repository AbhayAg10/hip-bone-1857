import logo from './logo.svg';
import './App.css';
import JobPage from './Components/Jobs/JobPage';
import Router from './Components/Jobs/Router';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router/>
     
    </div>
  );
}

export default App;
