import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
            {/* SwishBot Name and Meteor Logo */}
            <i className='bx bxs-meteor text-white-500 text-8xl reflection-text text-transparent neon-text mb-3'></i>
                
            <h1
                className="text-6xl md:text-6xl font-bold mb-15 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent neon-text reflection-text"
                data-text="SwishBot"
                >
                 SwishBot
            </h1>


                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Hello, I'm James aka Swishy, an aspiring IT professional who loves web designing, front-end development, and creating cool stuff with code.
            </p>
            <div className="flex justify-center space-x-4">

            {/* Button Shortcuts */}
            <a
                href="#projects"
                className="neon-button bg-blue-900 text-white px-6 py-3 rounded font-medium relative overflow-hidden"
                >
                View Projects
                </a>

                <a
                href="#contact"
                className="neon-button border border-blue-500 text-blue-500 px-6 py-3 rounded font-medium bg-black bg-opacity-5"
                >
                Contact Me
                </a>
            </div>

            </div>
        </RevealOnScroll>

       
    </section>
};