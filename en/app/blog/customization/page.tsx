import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Customizing Your Cursor Editor Experience',
  description: 'Learn how to personalize Cursor Editor with custom settings, themes, keybindings, and more to create your ideal development environment.'
}

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'settings', title: 'Basic Settings', level: 2 },
  { id: 'themes', title: 'Themes and Colors', level: 2 },
  { id: 'keybindings', title: 'Custom Keybindings', level: 2 },
  { id: 'snippets', title: 'Code Snippets', level: 2 },
  { id: 'workspace', title: 'Workspace Settings', level: 2 },
  { id: 'ai-customization', title: 'AI Customization', level: 2 },
  { id: 'advanced', title: 'Advanced Configuration', level: 2 }
]

export default function CustomizationGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Customizing Your Cursor Editor Experience"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Cursor Editor is highly customizable, allowing you to create a development environment
              that perfectly matches your preferences and workflow. This guide covers everything
              from basic settings to advanced customizations.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> All customizations are stored in user settings files and
                can be synced across different machines using Settings Sync.
              </p>
            </div>
          </section>

          <section id="settings">
            <h2 className="text-2xl font-bold mb-4">Basic Settings</h2>
            <p className="mb-4">
              Essential settings to customize your editor:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Editor Settings</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`{
  "editor.fontSize": 14,
  "editor.fontFamily": "Fira Code",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": true,
  "editor.renderWhitespace": "all"
}`}
                </code>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">File Settings</h3>
                <ul className="list-disc pl-6">
                  <li>Auto save configuration</li>
                  <li>File associations</li>
                  <li>Exclude patterns</li>
                  <li>Encoding settings</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="themes">
            <h2 className="text-2xl font-bold mb-4">Themes and Colors</h2>
            <p className="mb-4">
              Customize the visual appearance of your editor:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Color Themes</h3>
                <ul className="list-disc pl-6">
                  <li>Dark themes</li>
                  <li>Light themes</li>
                  <li>High contrast themes</li>
                  <li>Custom themes</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Custom Colors</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`{
  "workbench.colorCustomizations": {
    "editor.background": "#1E1E1E",
    "editor.foreground": "#D4D4D4",
    "activityBar.background": "#333333"
  }
}`}
                </code>
              </div>
            </div>
          </section>

          <section id="keybindings">
            <h2 className="text-2xl font-bold mb-4">Custom Keybindings</h2>
            <p className="mb-4">
              Personalize keyboard shortcuts:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Common Customizations</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`// keybindings.json
[
  {
    "key": "ctrl+shift+/",
    "command": "editor.action.blockComment"
  },
  {
    "key": "ctrl+alt+up",
    "command": "editor.action.insertCursorAbove"
  }
]`}
                </code>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Key Binding Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Use intuitive combinations</li>
                  <li>Avoid conflicts</li>
                  <li>Document custom bindings</li>
                  <li>Consider ergonomics</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="snippets">
            <h2 className="text-2xl font-bold mb-4">Code Snippets</h2>
            <p className="mb-4">
              Create and customize code snippets:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Custom Snippets</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`{
  "React Function Component": {
    "prefix": "rfc",
    "body": [
      "export default function \${1:ComponentName}() {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  )",
      "}"
    ]
  }
}`}
                </code>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Snippet Features</h3>
                <ul className="list-disc pl-6">
                  <li>Tab stops</li>
                  <li>Placeholders</li>
                  <li>Variables</li>
                  <li>Transformations</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="workspace">
            <h2 className="text-2xl font-bold mb-4">Workspace Settings</h2>
            <p className="mb-4">
              Configure project-specific settings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Workspace Config</h3>
                <ul className="list-disc pl-6">
                  <li>Project-specific settings</li>
                  <li>Language settings</li>
                  <li>Task configurations</li>
                  <li>Debug configurations</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Best Practices</h3>
                <ul className="list-disc pl-6">
                  <li>Use .vscode folder</li>
                  <li>Share configurations</li>
                  <li>Document settings</li>
                  <li>Version control</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="ai-customization">
            <h2 className="text-2xl font-bold mb-4">AI Customization</h2>
            <p className="mb-4">
              Customize Cursor&apos;s AI features:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">AI Settings</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`{
  "cursor.ai.completionDelay": 200,
  "cursor.ai.contextLength": 1000,
  "cursor.ai.suggestThreshold": 0.8,
  "cursor.ai.enabledLanguages": [
    "javascript",
    "typescript",
    "python"
  ]
}`}
                </code>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Custom Prompts</h3>
                <ul className="list-disc pl-6">
                  <li>Define prompt templates</li>
                  <li>Set context rules</li>
                  <li>Configure response format</li>
                  <li>Adjust token limits</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="advanced">
            <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
            <p className="mb-4">
              Advanced customization options:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Advanced Settings</h3>
                <ul className="list-disc pl-6">
                  <li>Custom CSS modifications</li>
                  <li>Extension API usage</li>
                  <li>Command line arguments</li>
                  <li>Performance tweaks</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Configuration Files</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`// cursor-flags.conf
--enable-proposed-api
--max-memory=8192
--disable-gpu
--enable-logging`}
                </code>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Use Settings Sync to keep your customizations
                consistent across different machines. This includes settings, keybindings,
                snippets, and extensions.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 