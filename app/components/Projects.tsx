import GlobeTrotter from "../assets/Globe Trotter.jpg";
import Portfolio from "../assets/Portfolio V.2.jpg";
import { PiGithubLogoThin } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";

const projects = [
  {
    name: "Game Hub",
    description: "Game Hub is an app built with the RAWG API, providing access to a vast database of games across various platforms and genres.",
    tools: ["React","Vite", "Chakra UI", "Rawg API"],
    link: "https://github.com/wendddyh/game-hub",
    externalLink: "https://gamingrepo.netlify.app/",
    backgroundImage: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    name: "Globe Trotter",
    description: "A web that lets you travel the world virtually and explore countries, flags, and fun facts from the comfort of your screen",
    tools: ["React","Vite", "Tailwind CSS", "REST Countries API"],
    link: "https://github.com/wendddyh/globetrotter",
    externalLink: "https://gamingrepo.netlify.app/",
    backgroundImage: GlobeTrotter ,
  },
  {
    name: "Portfolio V.2",
    description: "Game Hub is an app built with the RAWG API, providing access to a vast database of games across various platforms and genres.",
    tools: ["React","Vite", "Material UI"],
    link: "https://github.com/wendddyh/whcode",
    externalLink: "https://wendddyh.github.io/whcode/",
    backgroundImage: Portfolio,
  },
  {
    name: "Game Hub",
    description: "Game Hub is an app built with the RAWG API, providing access to a vast database of games across various platforms and genres.",
    tools: ["React","Vite", "Chakra UI", "Rawg API"],
    link: "https://github.com/wendddyh/game-hub",
    externalLink: "https://gamingrepo.netlify.app/",
    backgroundImage: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    name: "Game Hub",
    description: "Game Hub is an app built with the RAWG API, providing access to a vast database of games across various platforms and genres.",
    tools: ["React","Vite", "Chakra UI", "Rawg API"],
    link: "https://github.com/wendddyh/game-hub",
    externalLink: "https://gamingrepo.netlify.app/",
    backgroundImage: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
  {
    name: "Game Hub",
    description: "Game Hub is an app built with the RAWG API, providing access to a vast database of games across various platforms and genres.",
    tools: ["React","Vite", "Chakra UI", "Rawg API"],
    link: "https://github.com/wendddyh/game-hub",
    externalLink: "https://gamingrepo.netlify.app/",
    backgroundImage: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
  },
]
const Projects = () => {
  return (
    <>
    <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2 md:grid-cols-3 justify-center p-40">
      {projects.map((project, index) => (
        <div key ={index} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg sm:w-72 md:w-full">
          <div className="h-100 m-2.5 overflow-hidden text-white rounded-md">
            <img src={project.backgroundImage} alt="card-image" className="w-full h-full object-cover  hover:bg-slate-300" />
          </div>

          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold flex justify-between pr-4">
              {project.name}
              <div className="flex flex-wrap gap-2">
                {project.link && ( <a href = {project.link} target="_blank" className="hover:text-slate-600"><PiGithubLogoThin /></a> )}
                {project.externalLink && ( <a href = {project.link} target="_blank"><GoLinkExternal /></a> )}
              </div>
            </h6>
            <p className="text-slate-600 leading-normal text-sm font-medium mb-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 p-2 mb-4">
            {project.tools.map((tool, index) => (
              <div key={index} className="rounded-full bg-slate-100 py-1 px-3 border border-transparent text-sm text-slate-600 transition-all shadow-sm">
                {tool}
              </div>
            ))}
          </div>

        </div>
      ))}
      </div>
    </>
  )
}

export default Projects
