function Projects() {
  const projects = [
    {
      img: "/Photos/Eco.png",
      title: "Eco Project",
      desc: "An e-commerce platform for sustainable products."
    },
    {
      img: "/Photos/Todo.png",
      title: "Todo App",
      desc: "A responsive task management application built with React."
    },
    {
      img: "/Photos/Marvel.png",
      title: "Marvel Website",
      desc: "Helps users watch Marvel movies and series in the correct order."
    }
  ];

  return (
    <section className="h-auto ml-20 py-8 px-4 md:px-0">
      <h1 className="text-white text-5xl md:text-7xl mb-12 md:mb-24 text-center md:text-left">
        My Projects
      </h1>

      <div
        id="Projects"
        className="flex flex-col md:flex-row md:justify-around gap-8 items-center "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full md:w-[320px] h-auto overflow-hidden rounded-t-[80px] bg-gray-900 shadow-lg"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 md:h-[350px] object-cover"
            />
            <div className="p-4 text-white">
              <h2 className="font-bold text-xl">{project.title}</h2>
              <p className="mt-2 text-sm md:text-base">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Wide centered divider */}
      <hr className="mt-16 border-t-2 border-white w-4/5 mx-auto" />
    </section>
  );
}

export default Projects;
