import "./styles/main.css"

import Navigationbar from "./components/navigationbar/Navigationbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
//переход по страницам делается с помощью React Router. Ctrl + C остановить раюоту
function App() {
  return (
    <div className="App">

        <Navigationbar/>

        {/* <Home/> */}
        {/* <Projects /> */}
        <Project/>
        {/* <Contacts/> */}
        <Footer/>

    </div>
  );
}

export default App;