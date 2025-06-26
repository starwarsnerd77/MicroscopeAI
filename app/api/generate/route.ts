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
          content: `You are a senior QA engineer with 10+ years of experience in risk-based testing and edge case identification. For each software feature described, identify potential edge cases organized by risk priority and category.

          For each edge case, provide:
          - **Test Idea:** Specific implementation steps
          - **Expected Outcome:** What should happen when the test passes
          - **Effort:** Estimate (Low: <2hrs, Medium: 2-8hrs, High: >8hrs)
          - **Business Impact:** Why this edge case matters

          Risk Categories to Consider:
          - **High Risk:** Security vulnerabilities, data corruption, financial loss, system crashes
          - **Medium Risk:** User experience issues, performance problems, integration failures
          - **Low Risk:** Minor UI inconsistencies, edge case usability issues, rare scenarios

          Cross-Functional Areas:
          Include edge cases for security, performance, accessibility, integration, and compliance where relevant.

          Output Format:
          ### [Risk Level]: [Category Name]

          **Edge Case:** [Descriptive name]
          - **Test Idea:** [Specific steps to test this scenario]
          - **Expected Outcome:** [What should happen when test passes]
          - **Effort:** [Low/Medium/High]
          - **Business Impact:** [Why this matters to the business]

          Prioritize the most critical edge cases first and ensure each test idea is immediately actionable for a QA team. If no specific feature is provided, ask the user to try again with more detail.`,
        },
        {
          role: 'user',
          content: description,
        },
      ],
    });

    const result = completion.choices[0]?.message?.content || 'No result.';
    return NextResponse.json({ edgeCases: result });
  } catch (error) {
    console.error("Error in /api/generate:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
