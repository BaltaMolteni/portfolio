import SkillCard from "./SkillCard";

function SkillsSection () {
    return (
        <div className="card-wrapper animate-border-spin h-[650px] min-w-3/5 mt-5 ">
            <div className="card-content flex items-center justify-center text-xs">
                <div className="w-full h-full pt-20 mx-auto px-6 md:px-12">
                    <div className="mb-16 ">
                        <h1 className="text-5xl md:text-5xl lg:text-6xl tracking-tight dm">SKILLS</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12  text-[#a1a1a1] ;">
                       <SkillCard title={"React"} text={"Hola se react"}/>
                       <SkillCard title={"React"} text={"Hola se react"}/>
                       <SkillCard title={"React"} text={"Hola se react"}/>
                       <SkillCard title={"React"} text={"Hola se react"}/>
                       <SkillCard title={"React"} text={"Hola se react"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;


//     <div className="p-6 bg-neutral-900 rounded-lg flex flex-col space-y-4">
                //icono de react 
            //         <div className={`
            //             ${isSmallIcon ? 'w-8 h-8 p-1.5' : 'w-10 h-10 p-2'}
            //             rounded-full flex items-center justify-center
            //             text-red-500 bg-neutral-800
            //         `}>
            //             {icon}
            //         </div>

//         <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
//         <p className="text-neutral-400 text-sm">{description}</p>
//     </div>

