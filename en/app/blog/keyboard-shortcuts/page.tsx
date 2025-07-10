import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Essential Keyboard Shortcuts in Cursor Editor',
  description: 'Master the most important keyboard shortcuts in Cursor Editor to speed up your development workflow.'
}

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'ai-shortcuts', title: 'AI Feature Shortcuts', level: 2 },
  { id: 'navigation', title: 'Navigation Shortcuts', level: 2 },
  { id: 'editing', title: 'Editing Shortcuts', level: 2 },
  { id: 'selection', title: 'Selection Shortcuts', level: 2 },
  { id: 'search', title: 'Search Shortcuts', level: 2 },
  { id: 'terminal', title: 'Terminal Shortcuts', level: 2 },
  { id: 'customization', title: 'Customizing Shortcuts', level: 2 }
]

export default function KeyboardShortcutsGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Essential Keyboard Shortcuts in Cursor Editor"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Mastering keyboard shortcuts is essential for maximizing your productivity in Cursor Editor.
              This guide covers the most important shortcuts you need to know, organized by category.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> On macOS, replace <code>Ctrl</code> with <code>Cmd</code> for most shortcuts.
              </p>
            </div>
          </section>

          <section id="ai-shortcuts">
            <h2 className="text-2xl font-bold mb-4">AI Feature Shortcuts</h2>
            <p className="mb-4">
              Cursor&apos;s AI features are at your fingertips with these shortcuts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Chat Interface</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+K</code> - Open chat window</li>
                  <li><code>Ctrl+L</code> - Focus chat input</li>
                  <li><code>Esc</code> - Close chat window</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Code Operations</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+Shift+I</code> - Explain code</li>
                  <li><code>Alt+/</code> - AI code completion</li>
                  <li><code>Ctrl+Shift+R</code> - Refactor code</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="navigation">
            <h2 className="text-2xl font-bold mb-4">Navigation Shortcuts</h2>
            <p className="mb-4">
              Move around your codebase efficiently:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">File Navigation</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+P</code> - Quick file open</li>
                  <li><code>Ctrl+Tab</code> - Switch between files</li>
                  <li><code>Ctrl+\</code> - Split editor</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Code Navigation</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+G</code> - Go to line</li>
                  <li><code>F12</code> - Go to definition</li>
                  <li><code>Alt+F12</code> - Peek definition</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="editing">
            <h2 className="text-2xl font-bold mb-4">Editing Shortcuts</h2>
            <p className="mb-4">
              Essential shortcuts for code editing:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Basic Editing</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+X</code> - Cut line</li>
                  <li><code>Ctrl+C</code> - Copy line</li>
                  <li><code>Ctrl+V</code> - Paste</li>
                  <li><code>Ctrl+/</code> - Toggle comment</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Advanced Editing</h3>
                <ul className="space-y-2">
                  <li><code>Alt+↑/↓</code> - Move line up/down</li>
                  <li><code>Ctrl+Shift+K</code> - Delete line</li>
                  <li><code>Ctrl+Enter</code> - Insert line below</li>
                  <li><code>Ctrl+Shift+Enter</code> - Insert line above</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="selection">
            <h2 className="text-2xl font-bold mb-4">Selection Shortcuts</h2>
            <p className="mb-4">
              Efficiently select and manipulate code:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Basic Selection</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+L</code> - Select current line</li>
                  <li><code>Ctrl+D</code> - Select next occurrence</li>
                  <li><code>Ctrl+U</code> - Undo last selection</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Advanced Selection</h3>
                <ul className="space-y-2">
                  <li><code>Alt+Click</code> - Add cursor</li>
                  <li><code>Ctrl+Alt+↑/↓</code> - Add cursor above/below</li>
                  <li><code>Ctrl+Shift+L</code> - Select all occurrences</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="search">
            <h2 className="text-2xl font-bold mb-4">Search Shortcuts</h2>
            <p className="mb-4">
              Find what you need quickly:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">File Search</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+F</code> - Find in file</li>
                  <li><code>Ctrl+H</code> - Replace in file</li>
                  <li><code>F3</code> - Find next</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Global Search</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+Shift+F</code> - Find in workspace</li>
                  <li><code>Ctrl+Shift+H</code> - Replace in workspace</li>
                  <li><code>Ctrl+T</code> - Search symbols</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="terminal">
            <h2 className="text-2xl font-bold mb-4">Terminal Shortcuts</h2>
            <p className="mb-4">
              Control the integrated terminal:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Terminal Control</h3>
                <ul className="space-y-2">
                  <li><code>Ctrl+`</code> - Toggle terminal</li>
                  <li><code>Ctrl+Shift+`</code> - New terminal</li>
                  <li><code>Ctrl+Shift+5</code> - Split terminal</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Terminal Navigation</h3>
                <ul className="space-y-2">
                  <li><code>Alt+←/→</code> - Switch terminal tabs</li>
                  <li><code>Ctrl+PageUp/Down</code> - Scroll terminal</li>
                  <li><code>Ctrl+Home/End</code> - Scroll to top/bottom</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="customization">
            <h2 className="text-2xl font-bold mb-4">Customizing Shortcuts</h2>
            <p className="mb-4">
              Make Cursor work your way:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Open Command Palette (<code>Ctrl+Shift+P</code>)</li>
              <li className="mb-2">Type &quot;Keyboard Shortcuts&quot;</li>
              <li className="mb-2">Find the command you want to customize</li>
              <li className="mb-2">Click the edit icon</li>
              <li>Press your desired key combination</li>
            </ol>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm">
                <strong>Tip:</strong> You can also edit the <code>keybindings.json</code> file directly for more advanced customization.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 