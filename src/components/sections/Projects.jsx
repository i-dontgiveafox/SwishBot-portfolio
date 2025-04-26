import { RevealOnScroll } from "../RevealOnScroll";
import POS from "../../assets/POS.jpg";
import Arduino from "../../assets/Arduino.jpg";
import Twitter from "../../assets/Twitter.png";
import Booking from "../../assets/Travel Booking.png";

export const Projects = () => {
    return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center neon-text reflection-text">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Border w/ Hover Effect */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    
                    {/* Project Image 1 */}
                    <div className="mb-4 rounded-lg overflow-hidden">
                        <img src={Arduino} alt="Web-Based School Uniform POS" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Arduino-Based Smart Growing Plant</h3>
                    <p className="text-gray-400 mb-4">An Arduino-based Smart Growing Plant system automates plant care by monitoring conditions and adjusting resources for optimal growth.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Arduino", "C++"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                            ))}
                    </div>

                    
                </div>
                
                {/* Border w/ Hover Effect */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {/*  Project Image 2 */}
                    <div className="mb-4 rounded-lg overflow-hidden">
                        <img src={POS} alt="Web-Based School Uniform POS" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Web-Based School Uniform POS</h3>
                    <p className="text-gray-400 mb-4">A web-based school uniform POS with inventory system and queueing management feature for hassle free transactions.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "Bootstrap", "PHP", "MySQL"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                            ))}
                    </div>

                   
                </div>

                {/* Border w/ Hover Effect */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {/*  Project Image 3 */}
                    <div className="mb-4 rounded-lg overflow-hidden">
                        <img src={Twitter} alt="Web-Based School Uniform POS" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Twitter - Prototype</h3>
                    <p className="text-gray-400 mb-4">A web design activity aimed to test our basic HTML and CSS skills by creating a social media design from scratch (No copyright intended).</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                            ))}
                    </div>

                    
                </div>
                
                {/* Border w/ Hover Effect */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {/*  Project Image 4 */}
                    <div className="mb-4 rounded-lg overflow-hidden">
                        <img src={Booking} alt="Web-Based School Uniform POS" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Online Travel Booking Website</h3>
                    <p className="text-gray-400 mb-4">An online travel booking site designed to showcase the wonders of the Philippines and help users book their travels ahead.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["PHP", "JavaScript", "Bootstrap", "MySQL"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                            ))}
                    </div>

                    {/*<div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors mt-4"> View Project → </a>
                    </div>*/}
                </div>

            </div>
        </div>
        </RevealOnScroll>

    </section>
    );
};