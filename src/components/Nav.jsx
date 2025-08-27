function Nav() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-14 flex justify-evenly items-center  z-50 
      bg-black/50 backdrop-blur-md shadow-md">
      <button onClick={() => handleScroll("About")} className="text-white text-xl hover:text-yellow-400 transition-colors duration-200">
        About
      </button>
      <button onClick={() => handleScroll("Projects")} className="text-white text-xl hover:text-yellow-400 transition-colors duration-200">
        Projects
      </button>
      <button onClick={() => handleScroll("Contact")} className="text-white text-xl hover:text-yellow-400 transition-colors duration-200">
        Contact
      </button>
    </nav>
  );
}

export default Nav;
