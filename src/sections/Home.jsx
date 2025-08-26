function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-20 px-8 md:px-20">
      {/* Text */}
      <div className="max-w-lg mb-10 md:mb-0">
        <h1 className="text-5xl md:text-7xl text-white font-bold leading-snug mb-6">
          Welcome to My Portfolio
        </h1>
        <h2 className="text-white bg-black border-2  px-6 py-3 rounded-full inline-block text-2xl mt-6">
          Ghazi Alqmmaz / Front-End
        </h2>
      </div>

      {/* Image */}
      <img
        src="/Photos/me.jpg"
        alt="Ghazi"
        className="w-72 md:w-96 h-72 md:h-96 rounded-full object-cover shadow-2xl"
      />
    </section>
  );
}

export default Home;
