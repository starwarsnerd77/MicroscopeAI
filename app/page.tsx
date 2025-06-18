"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function RiskLensPage() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<string[]>([])
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (input.trim().length === 0) {
      setError("Please enter a feature description")
      return
    }

    setLoading(true)
    setError("")
    setResults([])

    try {
      // API call placeholder - replace with your actual endpoint
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

      const data = await response.json()

      // Assuming the API returns { edgeCases: string[] }
      // Adjust this based on your actual API response structure
      setResults(data.edgeCases || [])
    } catch (err) {
      console.error("Error generating edge cases:", err)
      setError("Failed to generate edge cases. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const isInputValid = input.trim().length > 0 && input.length <= 1000

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">Microscope AI</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Find hidden risks in your code before they break things.
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors"
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
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
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
            <ul className="space-y-3">
              {results.map((edgeCase, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 leading-relaxed">{edgeCase}</p>
                </li>
              ))}
            </ul>
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
  )
}
