export default function Careers() {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold text-teal-700 mb-8">Careers at DiagnosCode</h1>
          <p className="text-lg text-gray-700 mb-8">
            Join our team to shape the future of AI-driven healthcare solutions! We are currently hiring for the following roles:
          </p>
  
          {/* Job Roles */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-indigo-800">Interns</h2>
              <p className="text-gray-700">
                We are looking for enthusiastic interns to join our team. No experience is required, but a passion for AI and healthcare is a must!
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-indigo-800">Full Stack Developers</h2>
              <p className="text-gray-700">
                Requirements: Experience with Node.js, React, and building scalable web applications. Knowledge of databases and API development is a plus.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-indigo-800">Machine Learning Engineers</h2>
              <p className="text-gray-700">
                Requirements: Expertise in machine learning frameworks (TensorFlow, PyTorch), experience with natural language processing, and a passion for solving complex problems in healthcare.
              </p>
            </div>
          </div>
  
          {/* Contact Information for Applying */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-teal-700 mb-6">Apply Now</h3>
            <p className="text-lg text-gray-700 mb-4">
              To apply for any of these roles, please send your resume and a cover letter to:
            </p>
            <a
              href="mailto:careers@diagnoscode.org"
              className="block text-teal-600 text-lg font-semibold hover:underline"
            >
              careers@diagnoscode.org
            </a>
            <p className="text-gray-600 mt-4">
              Make sure to mention the position you&apos;re applying for in the subject line.
            </p>
          </div>
        </div>
      </div>
    );
  }
  