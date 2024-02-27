import { React, useState } from 'react';
import { FaSquareGithub } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

const Header = (props) => {
    const { scrollPosition } = props;
    const mobileWidth = window.innerWidth <= 570;

    const header = {
        padding: scrollPosition <= 175 ? '25px 10px 10px 10px' : '0px',
        height: scrollPosition <= 175 ? 250 - scrollPosition + 'px' : '50px',
        // boxSizing: 'border-box',
        // position: 'fixed',
        // backgroundColor: `#342d50`,
        //     borderBottom: 'white',
        //     width: '95dvw',
        //     top: 0,
        //     zIndex: 99,
        //     minHeight: '50px',
        //     alignItems: 'center',
        //     display: 'flex',
    };

    const header_contents = {
        flexDirection: scrollPosition <= 175 ? 'column' : 'row',
        // display: 'flex',
        // alignItems: 'center',
        // flexGrow: 1,
        // placeContent: 'center space-between',
        // marginInline: '1.5em',
    };

    const header_contents__info = {
        display: scrollPosition >= 175 ? 'grid' : mobileWidth ? 'grid' : 'flex',
        gridTemplateColumns:
            scrollPosition >= 175
                ? '15% auto'
                : mobileWidth
                ? null
                : '15% auto',
        flexDirection: mobileWidth ? 'column' : null,
        placeItems: mobileWidth ? 'center' : null,
        // height: '100%',
        // gap: '0.25em',
        // color: 'white',
        // userSelect: 'none',
    };

    const header_contents__name = {
        fontSize: mobileWidth
            ? '1.5em'
            : `calc(clamp(-75px,${
                  scrollPosition * 0.25 - 75 + 'px'
              },-25px)*-1)`,
        margin: 'auto',
    };

    // const image_wrapper = {
    //     boxSizing: 'border-box',
    //     display: 'flex',
    //     placeContent: 'center',
    //     justifyItems: 'center',
    //     placeItems: 'center',
    //     width: 'fit-content',
    // };

    const img = {
        width: `calc(clamp(-75px,${
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
        width: `calc(clamp(-75px,${
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
    };

    const header_contents__links_link = {
        boxSizing: 'border-box',
        display: 'inline-flex',
        marginInline: '0.5em',
        padding: scrollPosition <= 175 ? '0' : '0.35em',
        gap: '0.25em',
    };

    const link_text = {
        boxSizing: 'border-box',
        paddingBottom: scrollPosition <= 175 ? '.2em' : null,
        display: mobileWidth ? 'none' : scrollPosition <= 175 ? null : 'none',
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
                            src="src/assets/images/profile-pic.jpg"
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
