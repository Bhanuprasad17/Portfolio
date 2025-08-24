
import React, { useState, useEffect } from 'react';
import './About.module.css';
import { getImageUrl } from "../../utils";

export const About = () =>{
    return <>
      <section className="py-20 bg-accent-500" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
                <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4 p-6 bg-primary-500 rounded-xl hover:bg-primary-400 transition-colors duration-200 group border border-secondary-500 shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center group-hover:bg-secondary-200 transition-colors duration-200">
                                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor_Icon" className="w-6 h-6"/>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">Frontend Developer</h3>
                                <p className="text-light-400 leading-relaxed">
                                    I'm a frontend developer skilled in creating responsive and user-friendly web interfaces using modern technologies like React, Next.js, and Tailwind CSS.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-6 bg-primary-500 rounded-xl hover:bg-primary-400 transition-colors duration-200 group border border-secondary-500 shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 bg-light-100 rounded-lg flex items-center justify-center group-hover:bg-light-200 transition-colors duration-200">
                                <img src={getImageUrl("about/serverIcon.png")} alt="Server_Icon" className="w-6 h-6"/>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">Backend Developer</h3>
                                <p className="text-light-400 leading-relaxed">
                                    I'm a backend developer experienced in building robust APIs and server-side applications using Node.js, Express, and MongoDB.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-6 bg-primary-500 rounded-xl hover:bg-primary-400 transition-colors duration-200 group border border-secondary-500 shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center group-hover:bg-secondary-200 transition-colors duration-200">
                                <img src={getImageUrl("about/uiIcon.png")} alt="UI_Icon" className="w-6 h-6"/>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">UI/UX Designer</h3>
                                <p className="text-light-400 leading-relaxed">
                                    I focus on creating intuitive and visually appealing user experiences that enhance user engagement and satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full blur-3xl opacity-20"></div>
                        <img 
                            src={getImageUrl("about/aboutImage.png")} 
                            alt="Me sitting with laptop"
                            className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-secondary-500"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
}