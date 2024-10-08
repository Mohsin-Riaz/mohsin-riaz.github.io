import React, { useEffect, useState } from 'react';
import { HiCode } from 'react-icons/hi';
import { LuMonitorDown } from 'react-icons/lu';
import icons from './icons';

const ProjectCard = (props) => {
    const [onHover, setOnHover] = useState(false);
    if (!props.title) {
        return;
    }

    return (
        <div
            key={props.id}
            className={onHover ? 'project-card bx-active' : 'project-card bx'}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
        >
            <div className="project-card_image">
                <div className="project-card_image_wrapper">
                    <div className="shadow-2"></div>
                    <img
                        className="tr-fast"
                        src={props.images[0] || '/images/placeholder.png'}
                        style={{
                            transform: onHover ? 'scale(1.01)' : null,
                        }}
                        alt="IMAGE"
                    />
                </div>
            </div>
            <div className="project-card_info">
                <h3 className="project-card_header">{props.title}</h3>
                <p className="project-card_text">{props.description}</p>
                <div className="project-card_footer">
                    <div className="tech-icons">
                        {props.tech.sort().map((tech) => (
                            <div className="tech-icon" key={tech}>
                                {icons[tech]}
                            </div>
                        ))}
                    </div>
                    <div className="project-card_footer_buttons">
                        {!!props.link && (
                            <a
                                className="link_button link_demo "
                                href={props.link}
                            >
                                <LuMonitorDown className="icon" />
                                Demo
                            </a>
                        )}
                        <a
                            className="link_button link_code"
                            href={props.github}
                        >
                            <HiCode className="icon" />
                            Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
