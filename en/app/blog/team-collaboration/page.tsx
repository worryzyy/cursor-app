import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Team Collaboration with Cursor Editor',
  description: 'Learn how to effectively use Cursor Editor in a team environment, from setting up shared workspaces to establishing coding standards.'
}

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'setup', title: 'Team Setup', level: 2 },
  { id: 'standards', title: 'Coding Standards', level: 2 },
  { id: 'workflows', title: 'Collaborative Workflows', level: 2 },
  { id: 'sharing', title: 'Code Sharing', level: 2 },
  { id: 'review', title: 'Code Review', level: 2 },
  { id: 'ai-collaboration', title: 'AI-Assisted Collaboration', level: 2 },
  { id: 'best-practices', title: 'Best Practices', level: 2 }
]

export default function TeamCollaborationGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Team Collaboration with Cursor Editor"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Cursor Editor provides powerful features for team collaboration, combining traditional
              version control with AI-powered assistance. This guide will help you set up and
              optimize Cursor for team development.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> Effective team collaboration requires both technical setup
                and established workflows. This guide covers both aspects.
              </p>
            </div>
          </section>

          <section id="setup">
            <h2 className="text-2xl font-bold mb-4">Team Setup</h2>
            <p className="mb-4">
              Essential steps for setting up Cursor in a team environment:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Initial Setup</h3>
                <ul className="list-disc pl-6">
                  <li>Install Cursor on all team machines</li>
                  <li>Configure shared settings</li>
                  <li>Set up version control</li>
                  <li>Establish shared extensions</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Configuration Files</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`// .vscode/team.code-workspace
{
  "folders": [
    { "path": "." }
  ],
  "settings": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "files.autoSave": "onFocusChange"
  },
  "extensions": {
    "recommendations": [
      "esbenp.prettier-vscode",
      "dbaeumer.vscode-eslint"
    ]
  }
}`}
                </code>
              </div>
            </div>
          </section>

          <section id="standards">
            <h2 className="text-2xl font-bold mb-4">Coding Standards</h2>
            <p className="mb-4">
              Establish and maintain consistent coding standards:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Style Guide</h3>
                <ul className="list-disc pl-6">
                  <li>Code formatting rules</li>
                  <li>Naming conventions</li>
                  <li>Documentation standards</li>
                  <li>File organization</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Enforcement Tools</h3>
                <ul className="list-disc pl-6">
                  <li>ESLint configuration</li>
                  <li>Prettier setup</li>
                  <li>EditorConfig</li>
                  <li>Git hooks</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="workflows">
            <h2 className="text-2xl font-bold mb-4">Collaborative Workflows</h2>
            <p className="mb-4">
              Establish efficient team workflows:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Git Workflow</h3>
                <ul className="list-disc pl-6">
                  <li>Branch naming conventions</li>
                  <li>Commit message standards</li>
                  <li>Pull request templates</li>
                  <li>Merge strategies</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Task Management</h3>
                <ul className="list-disc pl-6">
                  <li>Issue tracking integration</li>
                  <li>Project board setup</li>
                  <li>Sprint planning</li>
                  <li>Progress monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="sharing">
            <h2 className="text-2xl font-bold mb-4">Code Sharing</h2>
            <p className="mb-4">
              Effective ways to share code within the team:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Sharing Methods</h3>
                <ul className="list-disc pl-6">
                  <li>Code snippets</li>
                  <li>Live Share sessions</li>
                  <li>Repository templates</li>
                  <li>Documentation sharing</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Best Practices</h3>
                <ul className="list-disc pl-6">
                  <li>Include context</li>
                  <li>Document dependencies</li>
                  <li>Version control</li>
                  <li>Security considerations</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="review">
            <h2 className="text-2xl font-bold mb-4">Code Review</h2>
            <p className="mb-4">
              Streamline the code review process:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Review Process</h3>
                <ul className="list-disc pl-6">
                  <li>Pull request guidelines</li>
                  <li>Review checklist</li>
                  <li>Feedback standards</li>
                  <li>Resolution tracking</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Tools Integration</h3>
                <ul className="list-disc pl-6">
                  <li>GitHub integration</li>
                  <li>GitLens features</li>
                  <li>Code review extensions</li>
                  <li>CI/CD pipelines</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="ai-collaboration">
            <h2 className="text-2xl font-bold mb-4">AI-Assisted Collaboration</h2>
            <p className="mb-4">
              Leverage Cursor&apos;s AI features for team collaboration:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">AI Features</h3>
                <ul className="list-disc pl-6">
                  <li>Code explanation sharing</li>
                  <li>AI-powered code review</li>
                  <li>Documentation generation</li>
                  <li>Problem solving assistance</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Team Guidelines</h3>
                <ul className="list-disc pl-6">
                  <li>AI prompt standards</li>
                  <li>Shared knowledge base</li>
                  <li>Best practices</li>
                  <li>Usage policies</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="best-practices">
            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <p className="mb-4">
              Tips for successful team collaboration:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Communication</h3>
                <ul className="list-disc pl-6">
                  <li>Regular team meetings</li>
                  <li>Clear documentation</li>
                  <li>Knowledge sharing</li>
                  <li>Feedback loops</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Productivity</h3>
                <ul className="list-disc pl-6">
                  <li>Shared snippets</li>
                  <li>Template usage</li>
                  <li>Automation</li>
                  <li>Regular reviews</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Regularly review and update team practices based on
                feedback and changing project needs. Keep documentation up to date and easily
                accessible.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 