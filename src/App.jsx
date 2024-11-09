import axios from 'axios';
import { useEffect, useState } from 'react';
import eng from '../src/projects/eng.json';
import projects from '../src/projects/projects.json';
import Eng from './components/Eng.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import ToTop from './components/ToTop.jsx';

function App() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [projectState, setProjectState] = useState(projects);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!projectState) {
        return <h3>Loading</h3>;
    }
    return (
        <>
            <Header scrollPosition={scrollPosition}></Header>
            <Projects projects={projects} style={{ paddingTop: '255px' }} />
            <span className="divider">
                <div>Engineering Projects</div>
            </span>
            <Eng projects={eng} />
            <ToTop scrollPosition={scrollPosition}></ToTop>
        </>
    );
}

export default App;
