import { IoLogoNodejs, IoLogoReact, IoLogoSass } from 'react-icons/io5';
import {
    SiAmazonaws,
    SiAwslambda,
    SiBun,
    SiExpress,
    SiFlask,
    SiGnubash,
    SiGo,
    SiMongodb,
    SiPostgresql,
    SiPython,
    SiRust,
    SiTypescript,
} from 'react-icons/si';

const icons = {
    node: (
        <IoLogoNodejs key="node">
            <span class="tooltiptext" style={{ width: '10px', height: '10px' }}>
                Tooltip text
            </span>
        </IoLogoNodejs>
    ),
    react: <IoLogoReact key="react" />,
    sass: <IoLogoSass key="sass" />,
    'aws-s3': <SiAmazonaws key="aws-s3" />,
    'aws-lambda': <SiAwslambda key="aws-lambda" />,
    express: <SiExpress key="express" />,
    mongo: <SiMongodb key="mongo" />,
    postgres: <SiPostgresql key="postgres" />,
    typescript: <SiTypescript key="typescript" />,
    python: <SiPython key="SiPython" />,
    go: <SiGo key="SiGo" />,
    rust: <SiRust key="SiRust" />,
    bash: <SiGnubash key="SiGnubash" />,
    flask: <SiFlask key="SiFlask" />,
};

export default icons;
