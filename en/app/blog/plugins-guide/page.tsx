import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Must-Have Plugins for Cursor Editor',
  description: 'Discover the essential plugins and extensions that will enhance your Cursor Editor experience and boost your productivity.'
}

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'productivity', title: 'Productivity Plugins', level: 2 },
  { id: 'language', title: 'Language Support', level: 2 },
  { id: 'formatting', title: 'Code Formatting', level: 2 },
  { id: 'themes', title: 'Themes and UI', level: 2 },
  { id: 'git', title: 'Git Integration', level: 2 },
  { id: 'testing', title: 'Testing Tools', level: 2 },
  { id: 'debugging', title: 'Debugging Extensions', level: 2 }
]

export default function PluginsGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Must-Have Plugins for Cursor Editor"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              While Cursor comes with powerful built-in features, the right plugins can significantly
              enhance your development experience. This guide covers the most useful extensions
              compatible with Cursor Editor.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> Cursor supports most VS Code extensions, making it easy to
                enhance your editor with thousands of available plugins.
              </p>
            </div>
          </section>

          <section id="productivity">
            <h2 className="text-2xl font-bold mb-4">Productivity Plugins</h2>
            <p className="mb-4">
              Essential extensions to boost your coding efficiency:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Path Intellisense</h3>
                <p className="mb-2">Autocompletes filenames in your code.</p>
                <ul className="list-disc pl-6">
                  <li>Supports relative paths</li>
                  <li>Works with imports and requires</li>
                  <li>Customizable file associations</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Auto Rename Tag</h3>
                <p className="mb-2">Automatically renames paired HTML/XML tags.</p>
                <ul className="list-disc pl-6">
                  <li>Works in JSX/TSX files</li>
                  <li>Supports custom tag pairs</li>
                  <li>Real-time tag updating</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Code Snippets</h3>
                <p className="mb-2">Collection of useful code snippets for various languages.</p>
                <ul className="list-disc pl-6">
                  <li>Language-specific snippets</li>
                  <li>Customizable templates</li>
                  <li>Framework-specific collections</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="language">
            <h2 className="text-2xl font-bold mb-4">Language Support</h2>
            <p className="mb-4">
              Enhance your coding experience with language-specific extensions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">JavaScript/TypeScript</h3>
                <ul className="list-disc pl-6">
                  <li>ESLint</li>
                  <li>TypeScript Hero</li>
                  <li>Import Cost</li>
                  <li>JavaScript (ES6) code snippets</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Python</h3>
                <ul className="list-disc pl-6">
                  <li>Python</li>
                  <li>Pylance</li>
                  <li>Python Docstring Generator</li>
                  <li>Python Test Explorer</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="formatting">
            <h2 className="text-2xl font-bold mb-4">Code Formatting</h2>
            <p className="mb-4">
              Keep your code clean and consistent:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Prettier</h3>
                <p className="mb-2">Opinionated code formatter with broad language support.</p>
                <ul className="list-disc pl-6">
                  <li>Supports multiple languages</li>
                  <li>Configurable rules</li>
                  <li>Format on save option</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">EditorConfig</h3>
                <p className="mb-2">Maintain consistent coding styles across editors.</p>
                <ul className="list-disc pl-6">
                  <li>Project-wide settings</li>
                  <li>Cross-editor compatibility</li>
                  <li>Easy configuration</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="themes">
            <h2 className="text-2xl font-bold mb-4">Themes and UI</h2>
            <p className="mb-4">
              Customize your editor&apos;s appearance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Popular Themes</h3>
                <ul className="list-disc pl-6">
                  <li>One Dark Pro</li>
                  <li>Material Theme</li>
                  <li>Night Owl</li>
                  <li>Dracula Official</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Icon Packs</h3>
                <ul className="list-disc pl-6">
                  <li>Material Icon Theme</li>
                  <li>vscode-icons</li>
                  <li>Simple Icons</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="git">
            <h2 className="text-2xl font-bold mb-4">Git Integration</h2>
            <p className="mb-4">
              Enhance your version control workflow:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">GitLens</h3>
                <p className="mb-2">Supercharge Git capabilities within Cursor.</p>
                <ul className="list-disc pl-6">
                  <li>Inline blame annotations</li>
                  <li>File and line history</li>
                  <li>Branch visualization</li>
                  <li>Advanced comparison tools</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Git Graph</h3>
                <p className="mb-2">View your Git history as a graph.</p>
                <ul className="list-disc pl-6">
                  <li>Visual commit history</li>
                  <li>Branch management</li>
                  <li>Repository analysis</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="testing">
            <h2 className="text-2xl font-bold mb-4">Testing Tools</h2>
            <p className="mb-4">
              Improve your testing workflow:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Test Explorer UI</h3>
                <ul className="list-disc pl-6">
                  <li>Visual test runner</li>
                  <li>Test debugging</li>
                  <li>Coverage visualization</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Jest Runner</h3>
                <ul className="list-disc pl-6">
                  <li>Run individual tests</li>
                  <li>Debug tests</li>
                  <li>Coverage reporting</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="debugging">
            <h2 className="text-2xl font-bold mb-4">Debugging Extensions</h2>
            <p className="mb-4">
              Essential tools for debugging:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Debug Visualizer</h3>
                <p className="mb-2">Visualize data structures while debugging.</p>
                <ul className="list-disc pl-6">
                  <li>Custom visualization rules</li>
                  <li>Support for complex data structures</li>
                  <li>Real-time updates</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Live Share</h3>
                <p className="mb-2">Collaborative debugging sessions.</p>
                <ul className="list-disc pl-6">
                  <li>Real-time collaboration</li>
                  <li>Shared debugging sessions</li>
                  <li>Terminal sharing</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-sm">
                <strong>Tip:</strong> Most debugging extensions work seamlessly with Cursor&apos;s
                built-in debugging capabilities.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 