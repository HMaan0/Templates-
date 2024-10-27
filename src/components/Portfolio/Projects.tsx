import Button from "../Button";

const projectData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills, built with Next.js and Tailwind CSS.",
    liveLink: "https://www.example.com/portfolio",
    codeLink: "https://github.com/username/portfolio",
  },
  {
    title: "E-commerce App",
    description:
      "An e-commerce platform featuring product listings, shopping cart, and payment integration using React and Stripe.",
    liveLink: "https://www.example.com/ecommerce",
    codeLink: "https://github.com/username/ecommerce-app",
  },
  {
    title: "Task Manager",
    description:
      "A task management app with features like task categorization, reminders, and real-time collaboration built using Node.js and React.",
    liveLink: "https://www.example.com/taskmanager",
    codeLink: "https://github.com/username/task-manager",
  },
];

const Projects = () => {
  return (
    <div className="">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        My Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="p-6 dark:bg-Primary_dark bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
          >
            <p className="text-xl sm:text-2xl font-semibold mb-2">
              {project.title}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button> Link</Button>
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Code</Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
