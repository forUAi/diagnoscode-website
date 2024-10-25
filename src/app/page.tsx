"use client"; // Ensure the component is a client component
import Head from 'next/head';
import { useState } from 'react';

// Define the possible widget names as a TypeScript type
type WidgetName = 'about' | 'what' | 'impact';

export default function Home() {
  // State to track the expanded state of each widget individually
  const [expandedWidget, setExpandedWidget] = useState<{ about: boolean; what: boolean; impact: boolean }>({
    about: false,
    what: false,
    impact: false,
  });

  // State to track whether the email is shown in the contact section
  const [showEmail, setShowEmail] = useState(false);

  // Function to handle expanding/collapsing a widget
  const toggleExpand = (widget: WidgetName) => {
    setExpandedWidget((prevState) => ({
      ...prevState,
      [widget]: !prevState[widget],
    }));
  };

  // Function to show the email in the contact section
  const handleContactClick = () => {
    setShowEmail(true);
  };

  return (
    <>
      <Head>
        <title>DiagnosCode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-700">DiagnosCode</h1>
            <a href="#contact" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
              Contact Us
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-gray-900 to-blue-500 py-24 text-center text-white mt-16">
          <h1 className="text-5xl font-extrabold tracking-wide">Welcome to DiagnosCode</h1>
          <p className="mt-6 text-xl font-medium">Pioneering AI-Driven Solutions for Healthcare Efficiency</p>
        </header>

        {/* Widgets Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Widget */}
          <div onClick={() => toggleExpand('about')} className="bg-white p-6 shadow-lg rounded-lg cursor-pointer">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">About Us</h2>
            <p className="text-gray-700">
              At DiagnosCode, we specialize in AI-powered medical coding solutions...
            </p>
            {expandedWidget.about && (
              <div className="mt-4 text-gray-600">
                <p>
                  Our mission is to revolutionize healthcare through advanced technology, improving accuracy and efficiency across medical coding processes. We ensure compliance and streamline operations for healthcare providers globally.
                </p>
                <a href="/about" className="text-teal-600 mt-4 block hover:underline">Learn More</a>
              </div>
            )}
          </div>

          {/* What We Do Widget */}
          <div onClick={() => toggleExpand('what')} className="bg-white p-6 shadow-lg rounded-lg cursor-pointer">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">What We Do</h2>
            <p className="text-gray-700">
              We provide advanced AI-driven solutions for medical coding automation...
            </p>
            {expandedWidget.what && (
              <div className="mt-4 text-gray-600">
                <p>
                  Our services include coding automation, seamless EHR integration, and real-time analytics. We help healthcare providers reduce human errors, improve claim accuracy, and optimize revenue cycles.
                </p>
                <a href="/services" className="text-teal-600 mt-4 block hover:underline">Learn More</a>
              </div>
            )}
          </div>

          {/* Our Impact Widget */}
          <div onClick={() => toggleExpand('impact')} className="bg-white p-6 shadow-lg rounded-lg cursor-pointer">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Our Impact</h2>
            <p className="text-gray-700">
              Our AI-powered solutions have reduced coding errors by 30%...
            </p>
            {expandedWidget.impact && (
              <div className="mt-4 text-gray-600">
                <p>
                  DiagnosCode has helped healthcare organizations achieve faster claim processing and improved financial outcomes. Our impact is measurable across the board, with 95% customer satisfaction.
                </p>
                <a href="/impact" className="text-teal-600 mt-4 block hover:underline">Learn More</a>
              </div>
            )}
          </div>
        </section>

        {/* Careers Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-teal-700 mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            At DiagnosCode, we are always looking for passionate individuals to join our team. If you are interested in working at the intersection of AI and healthcare, explore our career opportunities.
          </p>
          <a href="/careers" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
            Explore Careers
          </a>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">Connect With Us</h2>
          <p className="text-lg text-gray-700">
            Discover how DiagnosCode can transform your healthcare operations with unparalleled accuracy and efficiency.
            Contact us today to learn more about our solutions:
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full mt-4 hover:bg-teal-700 transition"
          >
            Contact Us
          </button>

          {showEmail && (
            <p className="mt-4 text-lg text-gray-800">
              You can reach us at: <a href="mailto:contact@diagnoscode.org" className="text-teal-600 hover:underline">contact@diagnoscode.org</a>
            </p>
          )}
        </section>

        {/* Footer */}
        <footer className="bg-indigo-700 py-8 text-center text-white">
          <p className="text-lg">&copy; 2024 DiagnosCode. Innovating Healthcare with AI.</p>
        </footer>
      </div>
    </>
  );
}
