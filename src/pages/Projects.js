import p2 from "./../img/projects/02.jpg"
import p3 from "./../img/projects/03.jpg"
import p4 from "./../img/projects/04.jpg"
import p5 from "./../img/projects/05.jpg"
import p6 from "./../img/projects/06.jpg"
import Project from "./../../components/project/Project"

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
 
export default Projects;