import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Advanced Debugging Guide for Cursor',
  description: 'Master debugging techniques in Cursor Editor - from basic debugging to advanced AI-assisted troubleshooting.'
}

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'basics', title: 'Debugging Basics', level: 2 },
  { id: 'breakpoints', title: 'Working with Breakpoints', level: 2 },
  { id: 'variables', title: 'Variable Inspection', level: 2 },
  { id: 'console', title: 'Console Debugging', level: 2 },
  { id: 'ai-debugging', title: 'AI-Assisted Debugging', level: 2 },
  { id: 'advanced', title: 'Advanced Techniques', level: 2 },
  { id: 'best-practices', title: 'Best Practices', level: 2 }
]

export default function DebuggingGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Advanced Debugging Guide for Cursor"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Effective debugging is crucial for software development. Cursor Editor combines
              traditional debugging capabilities with AI-powered assistance to make debugging
              more efficient and intuitive.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> This guide covers both built-in debugging features and
                AI-assisted debugging techniques unique to Cursor.
              </p>
            </div>
          </section>

          <section id="basics">
            <h2 className="text-2xl font-bold mb-4">Debugging Basics</h2>
            <p className="mb-4">
              Essential debugging concepts and tools in Cursor:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Debug Configuration</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Current File",
      "program": "\${file}"
    }
  ]
}`}
                </code>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Debug Commands</h3>
                <ul className="list-disc pl-6">
                  <li><code>F5</code> - Start/Continue debugging</li>
                  <li><code>F10</code> - Step over</li>
                  <li><code>F11</code> - Step into</li>
                  <li><code>Shift+F11</code> - Step out</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="breakpoints">
            <h2 className="text-2xl font-bold mb-4">Working with Breakpoints</h2>
            <p className="mb-4">
              Master breakpoint usage for effective debugging:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Breakpoint Types</h3>
                <ul className="list-disc pl-6">
                  <li>Line breakpoints</li>
                  <li>Conditional breakpoints</li>
                  <li>Function breakpoints</li>
                  <li>Data breakpoints</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Advanced Features</h3>
                <ul className="list-disc pl-6">
                  <li>Hit count conditions</li>
                  <li>Expression evaluation</li>
                  <li>Log points</li>
                  <li>Temporary breakpoints</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="variables">
            <h2 className="text-2xl font-bold mb-4">Variable Inspection</h2>
            <p className="mb-4">
              Techniques for inspecting and monitoring variables:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Watch Expressions</h3>
                <ul className="list-disc pl-6">
                  <li>Add watch expressions</li>
                  <li>Monitor variable changes</li>
                  <li>Evaluate expressions</li>
                  <li>Format display</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Variable Features</h3>
                <ul className="list-disc pl-6">
                  <li>Data tooltips</li>
                  <li>Object inspection</li>
                  <li>Array visualization</li>
                  <li>Type information</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="console">
            <h2 className="text-2xl font-bold mb-4">Console Debugging</h2>
            <p className="mb-4">
              Effective use of the debug console:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Console Commands</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`// Debug console commands
debug> help           // Show all commands
debug> variables      // List variables
debug> threads       // Show threads
debug> breakpoints   // List breakpoints`}
                </code>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Console Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Use console.log strategically</li>
                  <li>Group related logs</li>
                  <li>Format output</li>
                  <li>Clear console when needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="ai-debugging">
            <h2 className="text-2xl font-bold mb-4">AI-Assisted Debugging</h2>
            <p className="mb-4">
              Leverage Cursor&apos;s AI capabilities for debugging:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">AI Features</h3>
                <ul className="list-disc pl-6">
                  <li>Error analysis</li>
                  <li>Code suggestions</li>
                  <li>Bug pattern recognition</li>
                  <li>Solution recommendations</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Usage Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Provide error context</li>
                  <li>Ask specific questions</li>
                  <li>Review suggestions carefully</li>
                  <li>Learn from explanations</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="advanced">
            <h2 className="text-2xl font-bold mb-4">Advanced Techniques</h2>
            <p className="mb-4">
              Advanced debugging features and strategies:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Remote Debugging</h3>
                <ul className="list-disc pl-6">
                  <li>Setup remote connections</li>
                  <li>Configure SSH tunnels</li>
                  <li>Debug cloud applications</li>
                  <li>Network inspection</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Performance Debugging</h3>
                <ul className="list-disc pl-6">
                  <li>CPU profiling</li>
                  <li>Memory analysis</li>
                  <li>Network monitoring</li>
                  <li>Timeline recording</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="best-practices">
            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <p className="mb-4">
              Tips for effective debugging:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">General Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Start with a hypothesis</li>
                  <li>Use systematic approach</li>
                  <li>Document findings</li>
                  <li>Test fixes thoroughly</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Common Pitfalls</h3>
                <ul className="list-disc pl-6">
                  <li>Assuming too much</li>
                  <li>Ignoring error messages</li>
                  <li>Random changes</li>
                  <li>Incomplete testing</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Combine traditional debugging techniques with
                Cursor&apos;s AI capabilities for the most effective debugging experience.
                The AI can often spot patterns and suggest solutions that might be missed
                through conventional debugging alone.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 