import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const Projects = (props) => {
    const { projects } = props;
    return (
        <section className="main">
            <div className="projects-wrapper">
                {projects.map((v, index) => (
                    <ProjectCard key={index} {...v} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
