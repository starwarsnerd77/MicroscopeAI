import Link from "next/link"
import { ArrowRight, Search, Shield, Zap, CheckCircle, Code, Bug, AlertTriangle } from "lucide-react"
import FeedbackForm from "./components/feedback-form"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Microscope AI
              </h1>
            </div>
            <div className="flex items-center space-x-4">
            <Link
                href="#feedback"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Feedback
              </Link>
              <Link
                href="/analyze"
                className="bg-teal-600 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-700 transition-colors"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Microscope AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Examine your code under the microscope to discover hidden risks and edge cases before they break your
            application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analyze"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
            >
              Start Analyzing Code
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {/* <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
              Watch Demo
            </button> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precision Analysis for Better Code</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered microscope examines every aspect of your code to identify potential risks and edge cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Code Analysis</h3>
              <p className="text-gray-600">
                Advanced AI algorithms examine your code structure, logic flows, and potential failure points with
                scientific precision.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Detection</h3>
              <p className="text-gray-600">
                Identify security vulnerabilities, performance bottlenecks, and edge cases that could cause system
                failures.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Results</h3>
              <p className="text-gray-600">
                Get comprehensive analysis results in seconds, formatted in clear, actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Microscope AI Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to comprehensive code analysis</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Describe Your Feature</h3>
              <p className="text-gray-600">
                Simply describe the software feature or functionality you want to analyze in plain English.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI examines your description and generates comprehensive risk scenarios and edge cases.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Results</h3>
              <p className="text-gray-600">
                Receive detailed, actionable insights about potential risks, edge cases, and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prevent Issues Before They Happen</h2>
              <p className="text-xl text-gray-600 mb-8">
                Microscope AI helps development teams identify and address potential problems early in the development
                cycle, saving time and preventing costly production issues.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduce Production Bugs</h3>
                    <p className="text-gray-600">
                      Catch edge cases and potential failures before they reach production.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Improve Code Quality</h3>
                    <p className="text-gray-600">
                      Get insights into potential security vulnerabilities and performance issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Save Development Time</h3>
                    <p className="text-gray-600">
                      Identify issues early to avoid costly debugging and refactoring later.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center text-red-600">
                  <Bug className="h-5 w-5 mr-2" />
                  <span className="font-medium">Potential SQL Injection Risk</span>
                </div>
                <div className="flex items-center text-yellow-600">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Memory Leak in Loop Structure</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Code className="h-5 w-5 mr-2" />
                  <span className="font-medium">Race Condition in Async Operations</span>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  Example of issues Microscope AI can detect in your code descriptions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Help Us Improve Microscope AI</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your feedback is invaluable in making our code analysis more accurate and useful. Share your experience
              and help us build better tools.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <FeedbackForm />
          </div>

          {/* Feedback CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Want to discuss your feedback directly?</h3>
              <p className="text-gray-600 mb-4">
                Schedule a 15-minute call with our team to share detailed feedback and help shape the future of
                Microscope AI.
              </p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Examine Your Code?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join our community of developers who use Microscope AI to build more reliable, secure applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analyze"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              Start Free Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors">
              Learn More
            </button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Microscope AI
            </h3>
            <p className="text-gray-400 mb-8">Precision code analysis powered by artificial intelligence.</p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">© 2025 Microscope AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
