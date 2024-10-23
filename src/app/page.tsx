export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-700 to-teal-600 py-20 text-center text-white shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-wide">Welcome to DiagnosCode</h1>
        <p className="mt-6 text-xl font-medium">Pioneering AI-Driven Solutions for Healthcare Efficiency</p>
      </header>

      {/* About Us Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-indigo-800 mb-6">About DiagnosCode</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At DiagnosCode, we are redefining the future of healthcare technology by leveraging cutting-edge artificial intelligence to streamline and optimize medical coding processes. Our mission is to empower healthcare providers with seamless automation, reducing administrative burdens and ensuring compliance with the latest industry standards.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-700 mb-6">Our Expertise</h2>
          <p className="text-lg text-gray-700 mb-8">
            We provide comprehensive AI-driven solutions tailored to meet the specific needs of healthcare organizations. Our services include:
          </p>
          <ul className="space-y-4 text-lg text-gray-600">
            <li>⚡ Advanced AI-Powered Medical Coding Automation</li>
            <li>⚡ Seamless Electronic Health Record (EHR) Integration</li>
            <li>⚡ Robust Data Analytics & Compliance Reporting</li>
          </ul>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-indigo-800 mb-6">Connect With Us</h2>
        <p className="text-lg text-gray-700">
          Discover how DiagnosCode can transform your healthcare operations with unparalleled accuracy and efficiency.
          Contact us today to learn more about our solutions:
        </p>
        <a href="mailto:contact@diagnoscode.com" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full mt-4 hover:bg-teal-700 transition">
          Contact Us
        </a>
      </section>

      {/* Testimonials Section
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-700 mb-6">What Our Clients Say</h2>
          <div className="space-y-8">
            <blockquote className="text-lg text-gray-700 italic">
              "DiagnosCode has significantly streamlined our billing process. Their AI-powered solutions are a game-changer for efficiency!"
              <span className="block mt-4 font-semibold text-indigo-700">- John Doe, CEO of HealthTech Corp</span>
            </blockquote>
            <blockquote className="text-lg text-gray-700 italic">
              "With DiagnosCode, we saw a 30% improvement in claim accuracy. We couldn’t be happier with their services."
              <span className="block mt-4 font-semibold text-indigo-700">- Sarah Smith, Director of Medical Coding, MedPro Systems</span>
            </blockquote>
          </div>
        </div>
      </section> */}


      {/* Footer */}
      <footer className="bg-indigo-700 py-8 text-center text-white">
        <p className="text-lg">&copy; 2024 DiagnosCode. Innovating Healthcare with AI.</p>
      </footer>
    </div>
  );
}
