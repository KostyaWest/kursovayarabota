import Project from "../components/project/Project";
import img1 from "./../img/projects/01.jpg";
import img2 from "./../img/projects/02.jpg";
import img3 from "./../img/projects/03.jpg";
import img4 from "./../img/projects/04.jpg";
import img5 from "./../img/projects/05.jpg";
import img6 from "./../img/projects/06.jpg";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    
                    <Project/>


                </ul>
            </div>
        </main>
    );
}
 
export default Projects