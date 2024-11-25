import styles from "./projects.module.scss";
import Project from "./components/Project";
import { projects } from "./constants/projects";

function Projects() {
  const projectItems = projects.map((project) => <Project {...project} />);
  return <div className={styles.projects}>{projectItems}</div>;
}

export default Projects;
