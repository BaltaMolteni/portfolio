import React from 'react';
import Contenedor from './Contenedor';


const SkillsSection = () => {
    return (
        <section className="bg-black text-white min-h-screen p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl lg:text-6xl font-bold mb-12">Skills</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Contenedor/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;