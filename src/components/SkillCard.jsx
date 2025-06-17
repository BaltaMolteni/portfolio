function SkillCard({title,icon, text}){
    return(
        <div className="card-wrapper animate-border-spin h-70 w-70">
           <div className=" w-full h-full">
                <div className="card-content flex flex-col items-center justify-start h-full text-center p-4 space-y-4 bg-black/10 rounded-xl">
                    <div className="w-20 h-20 bg-radial from-gray-900  to-black rounded-lg flex items-center justify-center">
                        {icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight dm">
                        {title}
                    </h3>
                    <p className=" text-sm md:text-base leading-relaxed text-[#a1a1a1]">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard