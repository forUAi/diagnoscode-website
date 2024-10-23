export default function Services() {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold text-indigo-800 mb-8">Our Services</h1>
          <p className="text-lg text-gray-700">
            At DiagnosCode, we are redefining healthcare by bringing automation to the forefront of medical coding.
            Our solutions improve efficiency and accuracy, helping healthcare providers focus on patient care while
            we handle the complexities of medical billing.
          </p>
  
          <p className="text-lg text-gray-700 mt-6">
            At DiagnosCode, we deliver cutting-edge AI-driven medical coding solutions that help healthcare organizations
            optimize their operations and reduce administrative overhead. Our advanced technology automates the complex process 
            of translating patient data into accurate billing codes, significantly improving coding accuracy and compliance.
          </p>
  
          <h2 className="text-3xl font-semibold text-teal-700 mt-8 mb-4">Key Offerings</h2>
  
          {/* Key Offerings List */}
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>
              <strong>AI-Powered Medical Coding Automation:</strong> Our proprietary AI algorithms analyze patient records and generate
              precise medical codes, streamlining the billing process and reducing the potential for human error. This leads to
              faster claim submissions, fewer rejections, and improved revenue cycles.
            </li>
            <li>
              <strong>Seamless Integration with Electronic Health Records (EHR):</strong> DiagnosCode&rsquo;s solutions integrate seamlessly
              with existing EHR systems, ensuring a smooth and non-disruptive transition for healthcare providers. This integration
              allows for real-time coding suggestions, reducing the workload for medical staff while maintaining compliance with
              ever-evolving regulations.
            </li>
            <li>
              <strong>Data Analytics and Compliance Reporting:</strong> Our platform provides powerful data analytics capabilities, 
              giving healthcare organizations valuable insights into coding accuracy, claim performance, and compliance risks. 
              With comprehensive reporting tools, DiagnosCode ensures that your organization stays compliant with industry standards
              while improving operational efficiency.
            </li>
          </ul>
        </div>
      </div>
    );
  }
  