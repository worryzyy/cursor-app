import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Complete Guide to Cursor AI Features',
  description: 'Master all the AI capabilities in Cursor Editor - from code completion to refactoring, and everything in between.'
}

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'chat', title: 'AI Chat', level: 2 },
  { id: 'completion', title: 'Code Completion', level: 2 },
  { id: 'explain', title: 'Code Explanation', level: 2 },
  { id: 'refactor', title: 'AI Refactoring', level: 2 },
  { id: 'tests', title: 'Test Generation', level: 2 },
  { id: 'docs', title: 'Documentation', level: 2 },
  { id: 'debugging', title: 'AI-Assisted Debugging', level: 2 },
  { id: 'best-practices', title: 'Best Practices', level: 2 }
]

export default function AIFeaturesGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Complete Guide to Cursor AI Features"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Cursor Editor stands out from traditional IDEs with its powerful AI capabilities.
              This comprehensive guide will help you master all of Cursor&apos;s AI features,
              making you more productive and efficient in your development workflow.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> Cursor&apos;s AI features are powered by advanced language
                models and are continuously improving. This guide covers the latest stable features.
              </p>
            </div>
          </section>

          <section id="chat">
            <h2 className="text-2xl font-bold mb-4">AI Chat</h2>
            <p className="mb-4">
              The AI Chat feature is your intelligent coding companion:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Key Features</h3>
                <ul className="list-disc pl-6">
                  <li>Context-aware code discussions</li>
                  <li>Multi-file awareness</li>
                  <li>Code generation suggestions</li>
                  <li>Error resolution assistance</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Usage Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Use <code>Ctrl+K</code> to open chat</li>
                  <li>Highlight code for specific questions</li>
                  <li>Ask for step-by-step explanations</li>
                  <li>Request code examples</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="completion">
            <h2 className="text-2xl font-bold mb-4">Code Completion</h2>
            <p className="mb-4">
              Advanced code completion that understands context:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Features</h3>
                <ul className="list-disc pl-6">
                  <li>Multi-line completion</li>
                  <li>Context-aware suggestions</li>
                  <li>Function completion</li>
                  <li>Import suggestions</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Activation</h3>
                <ul className="list-disc pl-6">
                  <li>Automatic suggestions</li>
                  <li><code>Alt+/</code> for manual trigger</li>
                  <li>Tab to accept suggestions</li>
                  <li>Esc to dismiss</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="explain">
            <h2 className="text-2xl font-bold mb-4">Code Explanation</h2>
            <p className="mb-4">
              Get instant explanations of complex code:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Capabilities</h3>
                <ul className="list-disc pl-6">
                  <li>Line-by-line explanations</li>
                  <li>Function behavior analysis</li>
                  <li>Algorithm breakdowns</li>
                  <li>Variable usage clarification</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">How to Use</h3>
                <ol className="list-decimal pl-6">
                  <li>Highlight code section</li>
                  <li>Press <code>Ctrl+Shift+I</code></li>
                  <li>Review explanation</li>
                  <li>Ask follow-up questions</li>
                </ol>
              </div>
            </div>
          </section>

          <section id="refactor">
            <h2 className="text-2xl font-bold mb-4">AI Refactoring</h2>
            <p className="mb-4">
              Intelligent code refactoring suggestions:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Refactoring Types</h3>
                <ul className="list-disc pl-6">
                  <li>Code optimization</li>
                  <li>Pattern implementation</li>
                  <li>Function extraction</li>
                  <li>Variable renaming</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Best Practices</h3>
                <ul className="list-disc pl-6">
                  <li>Review suggestions carefully</li>
                  <li>Test after refactoring</li>
                  <li>Keep code style consistent</li>
                  <li>Document changes</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="tests">
            <h2 className="text-2xl font-bold mb-4">Test Generation</h2>
            <p className="mb-4">
              Automatically generate test cases:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Test Types</h3>
                <ul className="list-disc pl-6">
                  <li>Unit tests</li>
                  <li>Integration tests</li>
                  <li>Edge cases</li>
                  <li>Mock data</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Framework Support</h3>
                <ul className="list-disc pl-6">
                  <li>Jest</li>
                  <li>Mocha</li>
                  <li>PyTest</li>
                  <li>JUnit</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="docs">
            <h2 className="text-2xl font-bold mb-4">Documentation</h2>
            <p className="mb-4">
              AI-powered documentation generation:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Documentation Types</h3>
                <ul className="list-disc pl-6">
                  <li>Function documentation</li>
                  <li>Class documentation</li>
                  <li>API documentation</li>
                  <li>README generation</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Style Support</h3>
                <ul className="list-disc pl-6">
                  <li>JSDoc</li>
                  <li>Python docstrings</li>
                  <li>XML comments</li>
                  <li>Markdown</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="debugging">
            <h2 className="text-2xl font-bold mb-4">AI-Assisted Debugging</h2>
            <p className="mb-4">
              Smart debugging suggestions and error analysis:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Features</h3>
                <ul className="list-disc pl-6">
                  <li>Error analysis</li>
                  <li>Fix suggestions</li>
                  <li>Runtime debugging</li>
                  <li>Performance optimization</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Usage Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Provide error context</li>
                  <li>Show stack traces</li>
                  <li>Explain expected behavior</li>
                  <li>Test suggested fixes</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="best-practices">
            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <p className="mb-4">
              Tips for getting the most out of Cursor&apos;s AI features:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">General Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Be specific in queries</li>
                  <li>Provide context</li>
                  <li>Review AI suggestions</li>
                  <li>Keep code organized</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Common Pitfalls</h3>
                <ul className="list-disc pl-6">
                  <li>Overreliance on AI</li>
                  <li>Ignoring code standards</li>
                  <li>Skipping code review</li>
                  <li>Not testing AI suggestions</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Combine multiple AI features for the best results.
                For example, use AI Chat to understand code, then use refactoring to improve it.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 