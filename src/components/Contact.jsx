import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <section id="Contact" className="mt-32 px-8 md:px-20 mb-32">
      {/* Section Title */}
      <h1 className="text-5xl md:text-7xl text-white font-bold mb-12 text-center md:text-left">
        Reach Out to Me
      </h1>

      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center md:justify-start items-center">
        {/* Email Card */}
        <a
          href="mailto:gazi.alqmmaz12@gmail.com"
          className="bg-gray-900 p-8 rounded-xl shadow-lg w-full md:w-72 text-center flex flex-col items-center gap-4 hover:shadow-xl transition-shadow duration-300"
        >
          <HiOutlineMail className="text-primary text-4xl" />
          <h2 className="font-bold text-xl text-white">Email</h2>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/962792906012"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-8 rounded-xl shadow-lg w-full md:w-72 text-center flex flex-col items-center gap-4 hover:shadow-xl transition-shadow duration-300"
        >
          <BsWhatsapp className="text-green-500 text-4xl" />
          <h2 className="font-bold text-xl text-white">WhatsApp</h2>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/gazi-alqmmaz-15b963335/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-8 rounded-xl shadow-lg w-full md:w-72 text-center flex flex-col items-center gap-4 hover:shadow-xl transition-shadow duration-300"
        >
          <BsLinkedin className="text-primary text-4xl" />
          <h2 className="font-bold text-xl text-white">LinkedIn</h2>
        </a>

        {/* Instagram Card */}
        <a
          href="https://instagram.com/ghazi.alqmmaz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-8 rounded-xl shadow-lg w-full md:w-72 text-center flex flex-col items-center gap-4 hover:shadow-xl transition-shadow duration-300"
        >
          <BsInstagram className="text-primary text-4xl" />
          <h2 className="font-bold text-xl text-white">Instagram</h2>
        </a>
      </div>
    </section>
  );
}

export default Contact;
