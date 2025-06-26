"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Loader2 } from "lucide-react"
import ReactMarkdown from 'react-markdown';
import Link from "next/link";


export default function RiskLensPage() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<string>("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (input.trim().length === 0) {
      setError("Please enter a feature description")
      return
    }

    setLoading(true)
    setError("")
    setResults("")

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: input.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const countResponse = await fetch("/api/sendPrompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!countResponse.ok) {
        throw new Error(`HTTP error! status: ${countResponse.status}`)
      }

      const data = await response.json()

      // Assuming the API returns { edgeCases: string }
      // Adjust this based on your actual API response structure
      setResults(data.edgeCases || "")
    } catch (err) {
      console.error("Error generating edge cases:", err)
      setError("Failed to generate edge cases. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const isInputValid = input.trim().length > 0 && input.length <= 1000

  return (
    <div className="min-h-screen bg-slate-50 ">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
              <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Microscope AI
              </h1>
          </div>
          </div>
      </div>
      </nav>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent sm:text-5xl md:text-6xl">
                Microscope AI
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Examine your code under the microscope to discover hidden risks and edge cases.
            </p>
            </div>

            {/* Input Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="feature-description" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your software feature
                </label>
                <textarea
                    id="feature-description"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a detailed description of your software feature or functionality..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none transition-colors"
                    rows={4}
                    maxLength={1000}
                    required
                    />
                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-500">Minimum 3 lines recommended for better results</p>
                    <p className="text-sm text-gray-500">{input.length}/1000</p>
                </div>
                </div>

                {error && (
                    <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md p-3">{error}</div>
                )}

                <button
                type="submit"
                disabled={loading || !isInputValid}
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                >
                {loading ? (
                    <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Generating Edge Cases...
                    </>
                ) : (
                    "Generate Edge Cases"
                    )}
                </button>
            </form>
            </div>

            {/* Results Section */}
            {results.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Potential Edge Cases & Risks</h2>
                <ReactMarkdown
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4 first:mt-0">{children}</h1>
                        ),
                        h2: ({ children }) => (
                            <h2 className="text-xl font-semibold text-gray-800 mt-5 mb-3 first:mt-0">{children}</h2>
                        ),
                        h3: ({ children }) => (
                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2 first:mt-0">{children}</h3>
                        ),
                        p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="space-y-2 mb-4 last:mb-0">{children}</ul>,
                        ol: ({ children }) => (
                            <ol className="space-y-2 mb-4 last:mb-0 list-decimal list-inside">{children}</ol>
                        ),
                        li: ({ children }) => (
                            <li className="flex items-start ml-10">
                        <div className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                        <div className="text-gray-700 leading-relaxed">{children}</div>
                    </li>
                    ),
                    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
                    code: ({ children }) => (
                        <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">{children}</code>
                    ),
                    pre: ({ children }) => (
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 last:mb-0">
                        <code className="text-sm font-mono text-gray-800">{children}</code>
                    </pre>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50 text-gray-700 mb-4 last:mb-0">
                        {children}
                    </blockquote>
                    ),
                }}
                >{results}</ReactMarkdown>
            </div>
            )}

            {/* Empty State */}
            {!loading && results.length === 0 && !error && (
                <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
                </div>
                <p className="text-gray-500">
                Enter a feature description above to generate potential edge cases and risks.
                </p>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}
