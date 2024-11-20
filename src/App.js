import "./styles/main.css"

import Navigationbar from "./components/navigationbar/Navigationbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">

        <Navigationbar/>

        {/* <Home/> */}
        <Projects/>

        <Footer/>

    </div>
  );
}

export default App;