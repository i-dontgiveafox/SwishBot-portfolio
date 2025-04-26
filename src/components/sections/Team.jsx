import { RevealOnScroll } from "../RevealOnScroll";
import James1 from "../../assets/James-2.png";

export const Team = () => {

    {/* Array Mapping */}
    const frontendSkills = ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"];

    const backendSkills = ["Node.js", "PHP", "C#", "Java", "Python"];

    const positions = ["Project Manager", "Frontend Developer", "Designer", "QA Tester", "Cat Lover", "Gamer"];

    return (
    <section 
    id="team" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
            
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center neon-text reflection-text">Team Members</h2>

            {/* Border w/ Hover Effect */}
            <div className="glass p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all text-justify mb-10">
            
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    {/* Neon BG for PFP */}
                    <div className="flex-shrink-0 flex justify-end items-right neon-ring animate-neon rounded-[25%] w-64 h-86 rounded-none neon-frame overflow-hidden">
                        <img 
                            src={James1} 
                            alt="James profile" 
                            className="w-full h-full object-cover block"
                        />
                    </div>

                    {/* SwishBot Intro */}
                    <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Hello, there! I'm</h3>
                    <h3 className="text-3xl font-bold"><span className="text-3xl md:text-3xl font-bold mb-15 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent neon-text"
                data-text="SwishBot">James Asperilla</span></h3>
                    <p className="font-bold mb-2 text-white mt-3">Freelancer providing services for programming, social media management, and travel tours!</p>
                    <div className="rounded-xl p-2 hover:-translate-y-1 transition-all mt-5">
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            {positions.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons Section */}
                    <h3 className="text-xl font-bold mt-4">Follow me:</h3>
                    <div className="mt-3 flex justify-center gap-6">
                    <a href="https://github.com/i-dontgiveafox" target="_blank" rel="noopener noreferrer">
                        <i className='neon-text reflection-text bx bxl-github text-5xl hover:scale-110 transition-transform'></i>
                    </a>
                    <a href="https://instagram.com/i.dontgiveafox/" target="_blank" rel="noopener noreferrer">
                        <i className='neon-text reflection-text bx bxl-instagram text-5xl hover:scale-110 transition-transform'></i>
                    </a>
                    <a href="https://facebook.com/james.asperilla/" target="_blank" rel="noopener noreferrer">
                        <i className='neon-text reflection-text bx bxl-facebook-square text-5xl hover:scale-110 transition-transform'></i>
                    </a>
                    <a href="https://discord.com/users/itz.swishy" target="_blank" rel="noopener noreferrer">
                        <i className='neon-text reflection-text bx bxl-discord text-5xl hover:scale-110 transition-transform'></i>
                    </a>
                    </div>


                    </div>

                </div>

                
            </div>

            {/* Border w/ Hover Effect */}
            <div className="glass rounded-xl p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all text-justify mt-10">

                {/* Frontend Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Front End</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                {/* Backend Skills */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Back End</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                
                {/* Border w/ Hover Effect */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {/* Education */}
                    <h3 className="text-xl font-bold mb-4">
                        Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Undergraduate Student of B.S. in Computer Science</strong> - Cavite State University - Imus Campus (2022 - Present)
                        </li>
                        <li>
                            <strong>Philippine Christian University </strong>- Dasmarinas Campus (2018 - 2020)
                        </li>
                        <li>
                            <strong>Imus National High School</strong>- GGH Annex (2015 - 2018)
                        </li>
                    </ul>
                </div>

                {/* Border w/ Hover Effect */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {/* Work Experience */}
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Technical Support & Social Media Specialist</strong> (2021 - 2023): Providing technical expertise and managing social media platforms for a well-known audio brand.
                            </li>
                            <li>
                                <strong>Customer Experience Agent</strong> (2020 - 2021): Managing customer inquiries, sales support, and technical assistance for a US-based client.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
        </RevealOnScroll>


    </section>
    );
};

