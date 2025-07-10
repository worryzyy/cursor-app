import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Cursor Editor Customization Tutorial',
  description: 'Step-by-step guide to customizing your Cursor Editor - from basic settings to advanced configurations.'
}

const tocItems = [
  { id: 'getting-started', title: 'Getting Started', level: 1 },
  { id: 'basic-settings', title: 'Basic Settings', level: 2 },
  { id: 'appearance', title: 'Customizing Appearance', level: 2 },
  { id: 'keyboard', title: 'Keyboard Shortcuts', level: 2 },
  { id: 'snippets', title: 'Creating Snippets', level: 2 },
  { id: 'workspace', title: 'Workspace Configuration', level: 2 },
  { id: 'ai-settings', title: 'AI Features Setup', level: 2 },
  { id: 'advanced', title: 'Advanced Customization', level: 2 }
]

export default function CustomizationTutorial() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Cursor Editor Customization Tutorial"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="getting-started">
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="mb-4">
              Welcome to the Cursor Editor customization tutorial! In this step-by-step guide,
              you&apos;ll learn how to personalize your editor for maximum productivity.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Prerequisites:</strong> Make sure you have Cursor Editor installed and
                running on your system.
              </p>
            </div>
          </section>

          <section id="basic-settings">
            <h2 className="text-2xl font-bold mb-4">Basic Settings</h2>
            <p className="mb-4">
              Let&apos;s start by configuring the essential editor settings:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 1: Open Settings</h3>
                <p className="mb-2">Press <code>Ctrl+,</code> (Windows/Linux) or <code>Cmd+,</code> (Mac) to open settings.</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 2: Configure Basic Options</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`{
  "editor.fontSize": 14,
  "editor.fontFamily": "Fira Code",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": true
}`}
                </code>
                <p className="mt-2 text-sm">Copy these settings to your settings.json file.</p>
              </div>
            </div>
          </section>

          <section id="appearance">
            <h2 className="text-2xl font-bold mb-4">Customizing Appearance</h2>
            <p className="mb-4">
              Make your editor visually appealing and comfortable to use:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 1: Choose a Theme</h3>
                <p className="mb-2">Press <code>Ctrl+K Ctrl+T</code> to open the theme selector.</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 2: Customize Colors</h3>
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

          <section id="keyboard">
            <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
            <p className="mb-4">
              Customize keyboard shortcuts for faster coding:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 1: Open Keyboard Shortcuts</h3>
                <p className="mb-2">Press <code>Ctrl+K Ctrl+S</code> to open keyboard shortcuts.</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 2: Add Custom Shortcuts</h3>
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
            </div>
          </section>

          <section id="snippets">
            <h2 className="text-2xl font-bold mb-4">Creating Snippets</h2>
            <p className="mb-4">
              Create custom code snippets to speed up your coding:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 1: Create Snippets File</h3>
                <p className="mb-2">Command Palette → Configure User Snippets → New Global Snippets file</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 2: Add Custom Snippets</h3>
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
            </div>
          </section>

          <section id="workspace">
            <h2 className="text-2xl font-bold mb-4">Workspace Configuration</h2>
            <p className="mb-4">
              Set up project-specific configurations:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 1: Create Workspace Settings</h3>
                <p className="mb-2">Create a .vscode folder in your project root.</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 2: Configure Settings</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.semi": false,
  "prettier.singleQuote": true
}`}
                </code>
              </div>
            </div>
          </section>

          <section id="ai-settings">
            <h2 className="text-2xl font-bold mb-4">AI Features Setup</h2>
            <p className="mb-4">
              Configure Cursor&apos;s AI capabilities:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 1: Enable AI Features</h3>
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
                <h3 className="font-bold mb-2">Step 2: Configure Prompts</h3>
                <ul className="list-disc pl-6">
                  <li>Open Command Palette</li>
                  <li>Search for &apos;Configure AI Prompts&apos;</li>
                  <li>Customize prompt templates</li>
                  <li>Set response preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="advanced">
            <h2 className="text-2xl font-bold mb-4">Advanced Customization</h2>
            <p className="mb-4">
              Explore advanced configuration options:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 1: Advanced Settings</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`// cursor-flags.conf
--enable-proposed-api
--max-memory=8192
--disable-gpu
--enable-logging`}
                </code>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Step 2: Custom CSS</h3>
                <p className="mb-2">Create a style.css file in your .cursor folder:</p>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`.editor-container {
  font-feature-settings: &quot;liga&quot; 1;
}

.suggestion-widget {
  opacity: 0.95;
}`}
                </code>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Use Settings Sync to keep your customizations
                consistent across different machines. Enable it from the Command Palette
                with &quot;Settings Sync: Turn On&quot;.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 