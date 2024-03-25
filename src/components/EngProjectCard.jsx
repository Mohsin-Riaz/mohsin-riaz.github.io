import React, { useEffect, useState } from 'react';
import { HiCode } from 'react-icons/hi';
import { LuMonitorDown } from 'react-icons/lu';
import icons from '../../public/icons';

const EngProjectCard = (props) => {
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
                        src={props.images[0] || 'src/images/placeholder.png'}
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
                        {props.tech.map((tech) => (
                            <div className="tech-icon" key={tech}>
                                {icons[tech]}
                            </div>
                        ))}
                    </div>
                    <div className="project-card_footer_buttons">
                        <a
                            className="link_button link_demo "
                            href={props.link}
                            style={{
                                paddingLeft: '.75em',
                                paddingRight: '.75em',
                            }}
                        >
                            <LuMonitorDown className="icon" />
                            Info
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngProjectCard;
