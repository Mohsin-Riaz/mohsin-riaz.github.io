import React from 'react';
import EngProjectCard from './EngProjectCard.jsx';

const Eng = (props) => {
    const { projects } = props;
    return (
        <div className="projects-wrapper">
            {projects.map((v, index) => (
                <EngProjectCard key={index} {...v} />
            ))}
        </div>
    );
};

export default Eng;
