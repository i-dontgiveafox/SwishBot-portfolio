import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    {/* Array Mapping */}
    const frontendSkills = ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"];

    const backendSkills = ["Node.js", "PHP", "C#", "Java", "Python"];

    return (
    <section 
    id="about" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        
        <div className="max-w-3xl mx-auto px-4">
            {/* <div className="mb-4 rounded-lg overflow-hidden">
                <img src={PFP} alt="Web-Based School Uniform POS" className="w-48 h-auto object-cover rounded-lg" />
            </div>*/}
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center neon-text reflection-text">About Us</h2>

            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all text-justify mb-10">
            
                <div className="flex flex-col md:flex-row gap-6 items-center">

                    {/* Icon Section */}
                    <div className="p-6 flex-shrink-0 flex justify-center">
                    <i className='neon-text reflection-text bx bxs-meteor text-white-500 text-8xl'></i>
                    </div>

                    {/* Paragraph Section */}
                    <div className="p-6">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SwishBot was founded as a dynamic solo project, driven by a passion for design, functionality, and innovation. Inspired by the precision and adaptability of both gaming and development, SwishBot embodies a commitment to crafting seamless digital experiences.
                    </p>
                    </div>
                    

                </div>
            </div>


            {/* Mission and Vision */}
            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all text-justify">
                <p className="text-gray-300 mb-6">
                <h3 className="text-xl font-bold mb-4">Mission</h3>
                &nbsp;&nbsp;&nbsp;&nbsp;SwishBot is dedicated to crafting seamless, visually engaging, and highly functional digital experiences. Rooted in a passion for design and development, we strive to bridge creativity with technology, ensuring that every project delivers precision, adaptability, and user-centric solutions.
                </p>

                <p className="text-gray-300 mb-6">
                <h3 className="text-xl font-bold mb-4">Vision</h3>
                &nbsp;&nbsp;&nbsp;&nbsp;To become a pioneering digital brand that seamlessly integrates gaming-inspired aesthetics with cutting-edge web development, shaping interactive experiences that captivate, empower, and inspire.
                </p>

            </div>
            
            {/* Milestone */}
            <div className="flex justify-center gap-16 text-white mt-10">
                <div className="text-center">
                <h3 className="text-3xl font-bold neon-text reflection-text">5+</h3>
                <p className="text-gray-400">Projects Launched</p>
                </div>
                <div className="text-center">
                <h3 className="text-3xl font-bold neon-text reflection-text">5+</h3>
                <p className="text-gray-400">Tech Stacks Mastered</p>
                </div>
                <div className="text-center">
                <h3 className="text-3xl font-bold neon-text reflection-text">100%</h3>
                <p className="text-gray-400">Commitment</p>
                </div>
            </div>

            {/* SVG Horizontal Divider with icon */}
            <div className="relative flex items-center justify-center w-full my-15 ">
                    <hr className="w-120 h-1 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />
                    <div className="absolute px-4 -translate-x-1/2 bg-black left-1/2">
                        <svg
                        className="w-4 h-4 text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                        aria-hidden="true"
                        >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                        </svg>
                    </div>

                </div>
                <p className="text-gray-300 mb-6 text-center items-center justify-center">
                    "When a moth emerges from its chrysalis, does it remember its life as a caterpillar?"
                </p>

        </div>
        </RevealOnScroll>


    </section>
    );
};

