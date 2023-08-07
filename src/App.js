import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import RouterComponent from './Router/Router';
function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
        <Header />
        <RouterComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
