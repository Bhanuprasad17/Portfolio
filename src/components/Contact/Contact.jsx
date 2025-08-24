
import React from "react";
import { getImageUrl } from "../../utils";

export const Contact = () =>{
    return <>
    <footer id="contact" className="py-20 bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-light-400 max-w-2xl mx-auto">
            Feel free to reach out! I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors duration-200">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
            <a 
              href="mailto:bhanuprasadsuram0018@gmail.com"
              className="text-light-400 hover:text-light-300 transition-colors duration-200 break-all"
            >
              bhanuprasadsuram0018@gmail.com
            </a>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-light-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-light-400 transition-colors duration-200">
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/bhanuprasad-suram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-400 hover:text-light-300 transition-colors duration-200"
            >
              linkedin.com/bhanuprasad-suram
            </a>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors duration-200">
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">GitHub</h3>
            <a 
              href="https://github.com/Bhanuprasad17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-400 hover:text-light-300 transition-colors duration-200"
            >
              github.com/Bhanuprasad17
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="w-full max-w-md mx-auto">
            <a 
              href="mailto:bhanuprasadsuram0018@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-light-500 text-primary-500 font-semibold rounded-lg hover:bg-light-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Message
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-accent-500 text-center">
          <p className="text-light-400">
            © 2024 Bhanuprasad Suram. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
    </>
}