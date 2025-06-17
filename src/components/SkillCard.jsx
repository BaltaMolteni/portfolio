function SkillCard({title,icon}){
    return(
        <div className="card-wrapper animate-border-spin h-40 w-40">
            <div className="card-content flex items-center justify-center">
                <div className="space-y-4 items-center justify-center">
                    <div className="w-20 h-20 bg-radial from-gray-900  to-black rounded-lg flex items-center justify-center">
                        {icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight dm">
                        {title}
                    </h3>
                    {/* <p className=" text-sm md:text-base leading-relaxed text-[#a1a1a1]">
                        {text}
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default SkillCard