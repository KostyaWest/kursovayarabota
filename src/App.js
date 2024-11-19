import "./styles/main.css"

import Navigationbar from "./components/navigationbar/Navigationbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">

        <Navigationbar/>

        <Home/>

        <Footer/>

    </div>
  );
}

export default App;