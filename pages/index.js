// pages/index.js

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero / Banner Section with subtle parallax */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg"
          alt="Hero Banner (Dummy)"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
            Empower Rural Communities
          </h1>
          <p className="text-white max-w-xl mb-4 text-lg md:text-xl">
            Building brighter futures through inclusive growth
          </p>
          <a
            href="#intro"
            className="bg-white text-gray-800 px-6 py-2 text-lg font-bold rounded shadow hover:scale-105 transition-transform"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section
        id="intro"
        className="container mx-auto px-4 py-8 text-center animate-fadeIn"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-pulse">
          Our Mission
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          At SRINI Foundation, we strive to uplift rural communities by promoting
          education, healthcare, and sustainable development. We harness the
          power of technology and inclusive programs to ensure every individual
          has an opportunity to thrive.
        </p>
      </section>

      {/* Featured Initiatives with hover animations */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Featured Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded shadow hover:shadow-xl transition-shadow p-4 transform hover:-translate-y-2 hover:scale-105 duration-300">
            <Image
              src="https://images.pexels.com/photos/4205505/pexels-photo-4205505.jpeg"
              alt="Initiative 1"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Education Program</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded shadow hover:shadow-xl transition-shadow p-4 transform hover:-translate-y-2 hover:scale-105 duration-300">
            <Image
              src="https://images.pexels.com/photos/3055657/pexels-photo-3055657.jpeg"
              alt="Initiative 2"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Healthcare Camps</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Etiam laoreet, nulla et interdum eleifend, justo velit.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded shadow hover:shadow-xl transition-shadow p-4 transform hover:-translate-y-2 hover:scale-105 duration-300">
            <Image
              src="https://images.pexels.com/photos/1154793/pexels-photo-1154793.jpeg"
              alt="Initiative 3"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Skill Development</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Duis porttitor ex at tellus ultrices, convallis lacus.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section with bounce animation on the heading */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10 text-center">
        <h2 className="text-3xl font-extrabold mb-4 animate-bounce">
          Ready to Make a Difference?
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Join us in empowering rural communities. Volunteer, donate, or spread
          the word.
        </p>
        <button className="bg-white text-indigo-700 font-bold px-6 py-2 rounded shadow hover:bg-gray-50 hover:scale-105 transition-transform duration-300">
          Donate Now
        </button>
      </section>
    </div>
  );
}
