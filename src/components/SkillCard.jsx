

function SkillCard({title,text}){
    return(
         <div className="space-y-4">
            <div className="w-12 h-12 bg-radial from-gray-700  to-black rounded-lg flex items-center justify-center">
            </div>
            <h3 className="text-xl md:text-2xl font-semibold leading-tight dm">
                {title}
            </h3>
            <p className=" text-sm md:text-base leading-relaxed">
                {text}
            </p>
        </div>
    )
}

export default SkillCard