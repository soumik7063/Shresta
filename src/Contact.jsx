import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 font-sans leading-normal tracking-normal">

      {/* Navbar */}
      <nav className="bg-blue-700 p-6 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
          <a href="#" className="text-3xl font-extrabold text-white hover:text-gray-300 transition-colors duration-300">
            Shresta
          </a>
          <ul className="flex space-x-8 text-lg ml-auto">
            <li>
              <a href="/" className="hover:text-gray-300 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="container mx-auto px-8 py-16 max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
        </h1>

        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-16 text-center space-y-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Connect with Me</h2>

          <p className="text-lg text-gray-700 mb-8">
            I would love to hear from you! Feel free to connect with me on the platforms below:
          </p>

          <div className="space-y-6">
            {/* GitHub Link */}
            <a
              href="https://github.com/sailaja-adapa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white py-4 px-10 rounded-full shadow-xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              GitHub
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/sailaja-adapa/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white py-4 px-10 rounded-full shadow-xl hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Shresta. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Contact;
