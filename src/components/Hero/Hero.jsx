

import React from "react";
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return <>
     <section className="relative min-h-screen flex items-center justify-center bg-primary-500 overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Hi, I'm <span className="text-light-500">Bhanuprasad</span>
                </h1>
                <p className="text-lg sm:text-xl text-light-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    I'm a passionate <span className="font-semibold text-secondary-500">MERN stack developer</span> eager to contribute to both frontend and backend projects. 
                    Reach out if you'd like to know more about my skills and projects!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="mailto:bhanuprasadsuram0018@gmail.com" className="inline-flex items-center px-8 py-4 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                        Contact Me
                    </a>
                    <a href="#projects" className="inline-flex items-center px-8 py-4 border-2 border-light-500 text-light-500 font-semibold rounded-lg hover:bg-light-500 hover:text-primary-500 transition-all duration-200">
                        View Projects
                    </a>
                </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <img 
                        src={getImageUrl('hero/pic.jpg')} 
                        alt="hero Image of Me" 
                        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-secondary-500 shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-light-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow animation-delay-2000"></div>
     </section>
    </>
}