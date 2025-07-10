import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Migrating from VS Code to Cursor - Complete Guide',
  description: 'Learn how to seamlessly transition from Visual Studio Code to Cursor Editor while keeping your productivity and workflow intact.'
}

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'preparation', title: 'Preparation', level: 2 },
  { id: 'settings-transfer', title: 'Transferring Settings', level: 2 },
  { id: 'extensions', title: 'Extension Compatibility', level: 2 },
  { id: 'shortcuts', title: 'Keyboard Shortcuts', level: 2 },
  { id: 'workspace', title: 'Workspace Setup', level: 2 },
  { id: 'ai-features', title: 'AI Features', level: 2 },
  { id: 'tips', title: 'Tips and Tricks', level: 2 }
]

export default function VSCodeMigrationGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Migrating from VS Code to Cursor"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Transitioning from Visual Studio Code to Cursor Editor is a straightforward process,
              as Cursor is built on top of VS Code&apos;s core. This guide will help you migrate
              your settings, extensions, and workflow while introducing you to Cursor&apos;s
              powerful AI features.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> Cursor maintains compatibility with most VS Code features
                while adding AI capabilities that enhance your development experience.
              </p>
            </div>
          </section>

          <section id="preparation">
            <h2 className="text-2xl font-bold mb-4">Preparation</h2>
            <p className="mb-4">
              Before migrating, take these preparatory steps:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">
                <strong>Backup VS Code Settings:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Export your VS Code settings.json</li>
                  <li>Save your keybindings.json</li>
                  <li>List your installed extensions</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Review Current Workflow:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Document frequently used commands</li>
                  <li>Note essential extensions</li>
                  <li>List custom snippets</li>
                </ul>
              </li>
            </ol>
          </section>

          <section id="settings-transfer">
            <h2 className="text-2xl font-bold mb-4">Transferring Settings</h2>
            <p className="mb-4">
              Most VS Code settings work directly in Cursor:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <h3 className="font-bold mb-2">Settings Location:</h3>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <strong>Windows:</strong>
                  <code className="block mt-1">%APPDATA%\Cursor\User\settings.json</code>
                </li>
                <li className="mb-2">
                  <strong>macOS:</strong>
                  <code className="block mt-1">~/Library/Application Support/Cursor/User/settings.json</code>
                </li>
                <li>
                  <strong>Linux:</strong>
                  <code className="block mt-1">~/.config/Cursor/User/settings.json</code>
                </li>
              </ul>
            </div>
            <p className="mb-4">
              Key settings to transfer:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Editor preferences (font, theme, etc.)</li>
              <li>Formatting options</li>
              <li>Language-specific settings</li>
              <li>Workspace configurations</li>
            </ul>
          </section>

          <section id="extensions">
            <h2 className="text-2xl font-bold mb-4">Extension Compatibility</h2>
            <p className="mb-4">
              Cursor supports most VS Code extensions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Fully Compatible</h3>
                <ul className="list-disc pl-6">
                  <li>Language support extensions</li>
                  <li>Themes and icons</li>
                  <li>Snippets</li>
                  <li>Formatters</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">May Need Alternatives</h3>
                <ul className="list-disc pl-6">
                  <li>AI-related extensions</li>
                  <li>Custom UI modifications</li>
                  <li>VS Code-specific tools</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="shortcuts">
            <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
            <p className="mb-4">
              Most VS Code shortcuts work identically in Cursor, with some additions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Common VS Code Shortcuts</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+P</code> - Quick Open</li>
                  <li><code>Ctrl+Shift+P</code> - Command Palette</li>
                  <li><code>Ctrl+B</code> - Toggle Sidebar</li>
                  <li><code>Ctrl+,</code> - Settings</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">New Cursor AI Shortcuts</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+K</code> - AI Chat</li>
                  <li><code>Ctrl+Shift+I</code> - Explain Code</li>
                  <li><code>Alt+/</code> - AI Completion</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="workspace">
            <h2 className="text-2xl font-bold mb-4">Workspace Setup</h2>
            <p className="mb-4">
              Transfer your workspace configuration:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Copy .vscode folder to your project</li>
              <li className="mb-2">Update workspace-specific settings</li>
              <li className="mb-2">Configure debugging settings</li>
              <li>Set up task runners</li>
            </ol>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Tip:</strong> Cursor uses the same workspace format as VS Code,
                so your existing workspace files should work without modification.
              </p>
            </div>
          </section>

          <section id="ai-features">
            <h2 className="text-2xl font-bold mb-4">AI Features</h2>
            <p className="mb-4">
              Explore Cursor&apos;s unique AI capabilities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Code Understanding</h3>
                <ul className="list-disc pl-6">
                  <li>Contextual code explanations</li>
                  <li>Function documentation</li>
                  <li>Code review suggestions</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Code Generation</h3>
                <ul className="list-disc pl-6">
                  <li>Smart code completion</li>
                  <li>Test generation</li>
                  <li>Refactoring assistance</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="tips">
            <h2 className="text-2xl font-bold mb-4">Tips and Tricks</h2>
            <p className="mb-4">
              Make your transition smoother with these tips:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Gradual Migration:</strong>
                <p className="mt-1">Start with a small project to get familiar with Cursor&apos;s features.</p>
              </li>
              <li className="mb-2">
                <strong>Keep Both Editors:</strong>
                <p className="mt-1">Initially maintain both editors while transitioning your workflow.</p>
              </li>
              <li className="mb-2">
                <strong>Learn AI Features:</strong>
                <p className="mt-1">Invest time in learning Cursor&apos;s AI capabilities to enhance productivity.</p>
              </li>
              <li>
                <strong>Community Resources:</strong>
                <p className="mt-1">Join the Cursor community for tips and support during migration.</p>
              </li>
            </ul>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Use Cursor&apos;s AI chat to ask questions about VS Code features
                and their Cursor equivalents during your transition.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 