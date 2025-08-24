
import React from "react";
import skills from '../../data/skills.json'
import { getImageUrl } from "../../utils";

export const Skills = () =>{
    return <>
    <section className="py-20 bg-primary-500" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
                <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full mb-8"></div>
                <p className="text-lg text-light-400 max-w-2xl mx-auto">
                    I've worked with a variety of technologies to create amazing web applications
                </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className="group">
                            <div className="flex flex-col items-center space-y-4 p-6 bg-accent-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-secondary-500">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center p-3 group-hover:from-secondary-200 group-hover:to-secondary-300 transition-all duration-300">
                                    <img 
                                        src={getImageUrl(skill.imageSrc)} 
                                        alt={skill.title} 
                                        className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                                    />
                                </div>
                                <p className="text-sm sm:text-base font-medium text-white text-center group-hover:text-light-500 transition-colors duration-200">
                                    {skill.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Additional skills section */}
            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold text-white mb-6">Other Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {['Git', 'REST APIs', 'Responsive Design', 'Performance Optimization', 'Testing', 'Deployment'].map((skill, index) => (
                        <span 
                            key={index}
                            className="px-4 py-2 bg-light-100 text-light-700 rounded-full text-sm font-medium hover:bg-light-200 transition-colors duration-200 border border-light-200"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </section>
    </>
}