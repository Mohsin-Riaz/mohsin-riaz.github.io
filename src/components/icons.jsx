import { FaJava } from 'react-icons/fa';
import {
    SiAmazonaws,
    SiAwslambda,
    SiExpress,
    SiFlask,
    SiGithubactions,
    SiGithubpages,
    SiGnubash,
    SiGo,
    SiGrafana,
    SiLinux,
    SiMongodb,
    SiNodedotjs,
    SiOpentelemetry,
    SiPostgresql,
    SiPrometheus,
    SiPython,
    SiReact,
    SiRedhatopenshift,
    SiRedux,
    SiRust,
    SiSass,
    SiServerless,
    SiSpringboot,
    SiTypescript,
} from 'react-icons/si';

const icons = {
    java: <FaJava key="java" title="Java" />,
    node: <SiNodedotjs key="node" title="NodeJS" />,
    react: <SiReact key="react" title="React" />,
    sass: <SiSass key="sass" title="SASS" />,
    'aws-s3': <SiAmazonaws key="aws-s3" title="AWS S3" />,
    'aws-lambda': <SiAwslambda key="aws-lambda" title="AWS Lambda" />,
    express: <SiExpress key="express" title="ExpressJS" />,
    mongo: <SiMongodb key="mongo" title="MongoDB" />,
    postgres: <SiPostgresql key="postgres" title="PostgreSQL" />,
    typescript: <SiTypescript key="typescript" title="Typescript" />,
    python: <SiPython key="SiPython" title="Python" />,
    go: <SiGo key="SiGo" title="GO" />,
    rust: <SiRust key="SiRust" title="RUST" />,
    bash: <SiGnubash key="SiGnubash" title="Bash" />,
    flask: <SiFlask key="SiFlask" title="Flask" />,
    openshift: <SiRedhatopenshift key="openshift" title="OpenShift" />,
    serverless: <SiServerless key="serverless" title="Serverless" />,
    opentelemetry: (
        <SiOpentelemetry key="SiOpentelemetry" title="OpenTelemetry" />
    ),
    grafana: <SiGrafana key="SiGrafana " title="Grafana" />,
    prometheus: <SiPrometheus key="SiPrometheus" title="Prometheus" />,
    redux: <SiRedux key="redux" title="Redux" />,
    linux: <SiLinux key="linux" title="Linux" />,
    springboot: <SiSpringboot key="springboot" title="SpringBoot" />,
    githubpages: <SiGithubpages key="githubpages" title="GitHub Pages" />,
    githubactions: (
        <SiGithubactions key="githubactions" title="GitHub Actions" />
    ),
};

export default icons;
