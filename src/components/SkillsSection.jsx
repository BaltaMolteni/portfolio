import SkillCard from "./SkillCard";
import { SiDjango, SiGit, SiReact } from 'react-icons/si';
import PythonIcon from '../assets/svg/python-svgrepo-com.svg?react';
import PostgreSQLIcon from '../assets/svg/postgresql-icon.svg?react';

const reactIcon = <SiReact className="h-10 w-10" color="#61DBFB"/>
const djangoIcon = <SiDjango className="w-10 h-10" color="#2aa976"/>
const pythonIcon = <PythonIcon className="w-10 h-10"/>
const gitIcon = <SiGit className="w-10 h-10" color='#f14e32'/>
const sqlIcon = <PostgreSQLIcon className="w-10 h-10" />


function SkillsSection () {
    return (
        // <div className="card-wrapper animate-border-spin h-[650px] min-w-3/5 mt-5 ">
        //     <div className="card-content flex items-center justify-center text-xs">
        <div className="w-full mb-30 t-20 mx-auto px-6 md:px-12">
            <div className="mb-16 ">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wider">SKILLS</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12  ;">
                <SkillCard title={"React"} icon={reactIcon}/>
                <SkillCard title={"Django"} icon={djangoIcon}/>
                <SkillCard title={"Python"} icon={pythonIcon}/>
                <SkillCard title={"Git"}  icon={gitIcon} />
                <SkillCard title={"PostreSQL"} icon={sqlIcon}/> 
            </div>
        </div>
        //     </div>
        // </div>
    );
};

export default SkillsSection;
