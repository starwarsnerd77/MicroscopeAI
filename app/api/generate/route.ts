import { type NextRequest, NextResponse } from "next/server"
import { OpenAI } from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(request: NextRequest) {
  try {
    const { description } = await request.json()

    if (!description || typeof description !== "string") {
      return NextResponse.json({ error: "Description is required" }, { status: 400 })
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a senior QA engineer with deep experience in risk analysis. Based on the following software feature description, list 10 edge cases or potential failure points. Organize the output by risk type (e.g., input validation, performance, security, etc.) and provide a brief description of how each could be tested. Please format your response as Markdown capable of being parsed by the ReactMarkdown library.',
        },
        {
          role: 'user',
          content: description,
        },
      ],
    });

    const result = completion.choices[0]?.message?.content || 'No result.';
    return NextResponse.json({ edgeCases: result });


    // TODO: Replace this with your actual AI/ML service call
    // This is a placeholder that returns mock data

    // Simulate API delay
    // await new Promise((resolve) => setTimeout(resolve, 2000))

    // // Mock edge cases - replace with actual AI-generated content
    // const mockEdgeCases = [
    //   "What happens when the input data exceeds expected size limits?",
    //   "How does the system behave with malformed or corrupted input?",
    //   "What occurs during network timeouts or connection failures?",
    //   "How are concurrent user requests handled to prevent race conditions?",
    //   "What happens when external dependencies are unavailable?",
    //   "How does the system handle edge cases in user permissions or authentication?",
    //   "What occurs with unexpected data types or null values?",
    //   "How does the feature perform under high load or stress conditions?",
    // ]

    // // Randomly select 4-6 edge cases for variety
    // const selectedCases = mockEdgeCases.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 4)

    // return NextResponse.json({
    //   edgeCases: selectedCases,
    // })
  } catch (error) {
    console.error("Error in /api/generate:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
