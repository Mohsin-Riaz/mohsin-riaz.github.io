import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ToTop = (props) => {
    const { scrollPosition } = props;
    const [mouseEnter, setMouseEnter] = useState(false);

    function onClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function onMouseEnter() {
        setMouseEnter(true);
    }

    function onMouseLeave() {
        setMouseEnter(false);
    }

    const buttonStyle = {
        opacity: mouseEnter ? '100%' : scrollPosition > 100 ? '70%' : '5%',
    };

    return (
        <button
            onClick={onClick}
            className="to-top dr-shadow"
            style={buttonStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <FaArrowUp></FaArrowUp>
        </button>
    );
};
export default ToTop;
