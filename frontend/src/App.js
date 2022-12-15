import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from "./Components/Routes/AllRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <AllRoutes />
      </div>
    </Provider>
  );
}

export default App;
