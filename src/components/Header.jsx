import { React, useState } from 'react';
import { FaSquareGithub } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

const Header = (props) => {
    const { scrollPosition } = props;
    const mobileWidth = window.innerWidth <= 570;

    const scrollPositionLarge = scrollPosition >= 125;
    const scrollPositionSmall = scrollPosition <= 125;

    const header = {
        padding: scrollPositionSmall ? '25px 10px 10px 10px' : '0px',
        height: scrollPositionSmall ? 250 - scrollPosition + 'px' : '50px',
    };

    const header_contents = {
        flexDirection: scrollPositionSmall ? 'column' : 'row',
    };

    const header_contents__info = {
        display: scrollPositionSmall ? 'grid' : mobileWidth ? 'grid' : 'flex',
        gridTemplateColumns: scrollPositionLarge
            ? '15% auto'
            : mobileWidth
            ? null
            : '15% auto',
        flexDirection: mobileWidth ? 'column' : null,
        placeItems: mobileWidth ? 'center' : null,
    };

    const header_contents__name = {
        fontSize: mobileWidth
            ? '1.5em'
            : `calc(clamp(-75px,${
                  scrollPosition * 0.25 - 75 + 'px'
              },-25px)*-1)`,
        margin: 'auto',
    };

    const img = {
        width: scrollPositionLarge
            ? '25px'
            : `calc(clamp(-75px,${
                  scrollPosition * 0.25 - 75 + 'px'
              },-25px)*-1)`,

        boxSizing: 'border-box',
        objectFit: 'cover',
        borderRadius: '50%',
        border: '2px solid white',
        aspectRatio: '1/1',
        minWidth: '20px',
        margin: 'auto',
    };

    const imgShadow = {
        boxSizing: 'border-box',
        objectFit: 'cover',
        minWidth: '20px',
        width: scrollPositionLarge
            ? '25px'
            : `calc(clamp(-75px,${
                  scrollPosition * 0.25 - 75 + 'px'
              },-25px)*-1)`,
        margin: 'auto',
    };

    const header_contents__tech = {
        boxSizing: 'border-box',
        color: 'white',
        fontStyle: 'italic',
        display: scrollPosition <= 100 ? 'flex' : 'none',
        gap: '5px',
        flexWrap: 'wrap',
        placeContent: 'center',
        userSelect: 'none',
        fontSize: mobileWidth ? '0.65em' : '1.25em',
    };

    const header_contents__links_link = {
        boxSizing: 'border-box',
        display: 'inline-flex',
        marginInline: '0.5em',
        padding: scrollPositionSmall ? '0' : '0.35em',
        gap: '0.25em',
    };

    const link_text = {
        boxSizing: 'border-box',
        paddingBottom: scrollPositionSmall ? '.2em' : null,
        display: mobileWidth ? 'none' : scrollPositionSmall ? null : 'none',
    };

    return (
        <header className="header" style={header}>
            <div className="header_contents" style={header_contents}>
                <div
                    className="header_contents__info"
                    style={header_contents__info}
                >
                    <div className="image_wrapper">
                        <div className="shadow" style={imgShadow}></div>
                        <img
                            style={img}
                            src="/images/profile-pic.jpg"
                            alt="Mohsin Riaz"
                        />
                    </div>
                    <div
                        className="header_contents__name"
                        style={header_contents__name}
                    >
                        Mohsin Riaz
                    </div>
                </div>
                <div
                    className="header_contents__tech"
                    style={header_contents__tech}
                >
                    <div>NodeJS</div>
                    <div>•</div>
                    <div>MongoDB</div>
                    <div>•</div>

                    <div>ExpressJS</div>
                    <div>•</div>

                    <div>ReactJS</div>
                    <div>•</div>

                    <div>PostgreSQL</div>
                    <div>•</div>

                    <div>SASS</div>
                    <div>•</div>

                    <div>AWS</div>
                    <div>•</div>

                    <div>Python</div>
                </div>
                <div className="header_contents__links">
                    <a
                        href="mailto:riaz.mohsin@gmail.com"
                        className="header_contents__links_link tr-fast"
                        style={header_contents__links_link}
                    >
                        <HiOutlineMail className="icon" />
                        <p style={link_text}>riaz.mohsin@gmail.com</p>
                    </a>
                    <a
                        href="https://github.com/Mohsin-Riaz/"
                        className="header_contents__links_link tr-fast"
                        style={header_contents__links_link}
                    >
                        <FaSquareGithub className="icon" />
                        <p style={link_text}>github/Mohsin-Riaz</p>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
