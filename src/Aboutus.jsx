import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 font-sans leading-normal tracking-normal">
     {/* Navbar */}
<nav className="bg-blue-700 p-6 text-white shadow-lg">
  <div className="container mx-auto flex justify-between items-center max-w-7xl">
    {/* Shresta Logo on the Left */}
    <a href="#" className="text-3xl font-extrabold text-white hover:text-gray-300 transition-colors duration-300">
      Shresta
    </a>

    {/* Navigation Items on the Right */}
    <ul className="flex space-x-8 text-lg">
      <li>
        <a href="/" className="hover:text-gray-300 transition-colors duration-300">
          Home
        </a>
      </li>
      <li>
        <a href="/contact" className="hover:text-gray-300 transition-colors duration-300">
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>


      {/* About Us Section */}
      <section className="container mx-auto px-8 py-16 max-w-7xl">
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-16 transform hover:scale-105 transition-all duration-500 ease-in-out">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At <span className="font-semibold text-blue-600">Shresta</span>, we aim to make cities cleaner and safer by empowering citizens to directly report issues like garbage or litter to local authorities. Our platform connects the public with municipal services for fast, effective resolution of problems.
          </p>

          <h2 className="text-3xl font-semibold text-blue-600 mb-6">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-6">
            <li>
              <span className="font-semibold text-blue-600">Spot an Issue:</span> See garbage or any public nuisance on the road? Take a photo of the problem.
            </li>
            <li>
              <span className="font-semibold text-blue-600">Submit a Complaint:</span> Upload the photo on our website along with a short description and location details.
            </li>
            <li>
              <span className="font-semibold text-blue-600">OTP Verification:</span> Verify your identity with an OTP sent to your mobile number.
            </li>
            <li>
              <span className="font-semibold text-blue-600">Forward to Authorities:</span> Your complaint is sent directly to the municipal office for action.
            </li>
            <li>
              <span className="font-semibold text-blue-600">Issue Resolved:</span> Once resolved, you'll receive an SMS notification confirming that your complaint has been addressed.
            </li>
          </ol>

          <div className="mt-10 text-center">
            <a
              href="#"
              className="bg-blue-700 text-white py-3 px-8 rounded-lg shadow-xl hover:bg-blue-800 transition duration-300 ease-in-out"
            >
              Get Started
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

export default AboutUs;
