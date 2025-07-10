import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'AI Prompt Writing Guide for Cursor Editor',
  description: 'Master the art of writing effective AI prompts in Cursor Editor to get better results from AI-assisted coding features.'
}

const tocItems = [
  { id: 'basics', title: 'Prompt Writing Basics', level: 1 },
  { id: 'structure', title: 'Prompt Structure', level: 2 },
  { id: 'context', title: 'Providing Context', level: 2 },
  { id: 'examples', title: 'Example Prompts', level: 2 },
  { id: 'common-tasks', title: 'Common Tasks', level: 2 },
  { id: 'best-practices', title: 'Best Practices', level: 2 },
  { id: 'troubleshooting', title: 'Troubleshooting', level: 2 }
]

export default function AIPromptsGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="AI Prompt Writing Guide"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="basics">
            <h2 className="text-2xl font-bold mb-4">Prompt Writing Basics</h2>
            <p className="mb-4">
              Writing effective prompts is key to getting the best results from Cursor&apos;s AI features.
              A good prompt should be:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Clear and specific</li>
              <li className="mb-2">Contextually relevant</li>
              <li className="mb-2">Properly formatted</li>
              <li>Focused on a single task</li>
            </ul>
          </section>

          <section id="structure">
            <h2 className="text-2xl font-bold mb-4">Prompt Structure</h2>
            <p className="mb-4">
              An effective prompt typically includes these components:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <pre className="whitespace-pre-wrap">
{`1. Task Description
   - What you want to accomplish
   - Specific requirements or constraints

2. Context
   - Relevant code or background information
   - Programming language or framework

3. Expected Output
   - Format of the desired result
   - Any specific requirements

4. Additional Parameters
   - Performance considerations
   - Style preferences
   - Error handling requirements`}
              </pre>
            </div>
          </section>

          <section id="context">
            <h2 className="text-2xl font-bold mb-4">Providing Context</h2>
            <p className="mb-4">
              Help the AI understand your codebase by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Including relevant code:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Function definitions</li>
                  <li>Related classes or modules</li>
                  <li>Important dependencies</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Specifying technical details:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Programming language version</li>
                  <li>Framework constraints</li>
                  <li>Platform requirements</li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="examples">
            <h2 className="text-2xl font-bold mb-4">Example Prompts</h2>
            <p className="mb-4">Here are some effective prompt examples:</p>
            
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Code Explanation Request:</h3>
                <pre className="whitespace-pre-wrap">
{`"Explain this React useEffect hook:
[code block]
Focus on:
1. Dependencies array usage
2. Cleanup function
3. Potential side effects"`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Code Generation Request:</h3>
                <pre className="whitespace-pre-wrap">
{`"Create a TypeScript function that:
- Validates an email address
- Returns a strongly typed result
- Includes error messages for invalid cases
- Uses regular expressions
- Has JSDoc documentation"`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Refactoring Request:</h3>
                <pre className="whitespace-pre-wrap">
{`"Refactor this function for better performance:
[code block]
Requirements:
- Reduce time complexity
- Maintain readability
- Add error handling
- Keep existing functionality"`}
                </pre>
              </div>
            </div>
          </section>

          <section id="common-tasks">
            <h2 className="text-2xl font-bold mb-4">Common Tasks</h2>
            <p className="mb-4">
              Effective prompts for common development tasks:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Debugging:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Include error messages</li>
                  <li>Describe expected behavior</li>
                  <li>List attempted solutions</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Testing:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Specify test framework</li>
                  <li>Define test cases</li>
                  <li>Include edge cases</li>
                </ul>
              </li>
              <li>
                <strong>Documentation:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Specify documentation style</li>
                  <li>List required sections</li>
                  <li>Include example usage</li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="best-practices">
            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <p className="mb-4">
              Follow these guidelines for better results:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Be specific and clear in your requests</li>
              <li className="mb-2">Break down complex tasks into smaller parts</li>
              <li className="mb-2">Provide relevant context and constraints</li>
              <li className="mb-2">Use appropriate technical terminology</li>
              <li className="mb-2">Specify output format preferences</li>
              <li>Review and iterate on responses</li>
            </ul>
          </section>

          <section id="troubleshooting">
            <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
            <p className="mb-4">
              If you&apos;re not getting the desired results:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Unclear Responses:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Add more specific requirements</li>
                  <li>Break down the request into steps</li>
                  <li>Provide examples of desired output</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Incorrect Solutions:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Check if all context is provided</li>
                  <li>Verify technical requirements</li>
                  <li>Clarify constraints and limitations</li>
                </ul>
              </li>
              <li>
                <strong>Performance Issues:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Reduce prompt complexity</li>
                  <li>Focus on specific aspects</li>
                  <li>Use step-by-step approach</li>
                </ul>
              </li>
            </ul>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 