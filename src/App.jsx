import axios from 'axios';
import { useEffect, useState } from 'react';
import projects from '../public/projects.json';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import ToTop from './components/ToTop.jsx';

function App() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [projectsState, setProjectsState] = useState(projects);

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

    // useEffect(() => {
    //     const jsonURL = import.meta.env.VITE_PROJECTS_JSON;
    //     (async () => {
    //         const resp = await axios.get(jsonURL);
    //         if (resp.status === 200 || resp.statusText === 'OK') {
    //             setProjectsState(resp.data);
    //         }
    //     })();
    // }, []);

    if (!projectsState) {
        return <h3>Loading</h3>;
    }
    return (
        <>
            <Header scrollPosition={scrollPosition}></Header>
            <Projects projects={projects}></Projects>
            <ToTop scrollPosition={scrollPosition}></ToTop>
        </>
    );
}

export default App;
