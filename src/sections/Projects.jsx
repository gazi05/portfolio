function Projects() {
  const projects = [
    {
      img: "/Photos/Eco.png",
      title: "Eco Project",
      desc: "An e-commerce platform for sustainable products.",
      link: "https://e-commerce-website-0lr5.onrender.com/",
    },
    {
      img: "/Photos/Todo.png",
      title: "Todo App",
      desc: "A responsive task management application built with React.",
      link: "https://to-do-list-app-6a3y.onrender.com/",
    },
    {
      img: "/Photos/Marvel.png",
      title: "Marvel Website",
      desc: "Helps users watch Marvel movies and series in the correct order.",
      link: "https://marvel-watch-order.onrender.com/",
    },
  ];

  return (
    <section className="h-auto ml-4 md:ml-20 py-8 px-4 md:px-0">
      <h1 className="text-white text-5xl md:text-7xl mb-12 md:mb-24 text-center md:text-left">
        My Projects
      </h1>

      <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-around items-center">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-[320px] h-auto overflow-hidden rounded-t-lg bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 md:h-[350px] object-cover"
            />
            <div className="p-4 text-white text-center md:text-left">
              <h2 className="font-bold text-xl mb-2">{project.title}</h2>
              <p className="text-sm md:text-base">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <hr className="mt-16 border-t-2 border-white w-4/5 mx-auto" />
    </section>
  );
}

export default Projects;
