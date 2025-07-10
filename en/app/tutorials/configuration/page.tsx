import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'First-Time Configuration Guide for Cursor Editor',
  description: 'Learn how to configure Cursor Editor for optimal performance and personalized experience with our comprehensive setup guide.'
}

const tocItems = [
  { id: 'initial-setup', title: 'Initial Setup', level: 1 },
  { id: 'editor-preferences', title: 'Editor Preferences', level: 2 },
  { id: 'ai-configuration', title: 'AI Configuration', level: 2 },
  { id: 'keyboard-shortcuts', title: 'Keyboard Shortcuts', level: 2 },
  { id: 'workspace-setup', title: 'Workspace Setup', level: 2 },
  { id: 'extensions', title: 'Essential Extensions', level: 2 }
]

export default function ConfigurationGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="First-Time Configuration Guide"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="initial-setup">
            <h2 className="text-2xl font-bold mb-4">Initial Setup</h2>
            <p className="mb-4">
              After installing Cursor Editor, follow these steps to set up your environment:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Launch Cursor Editor for the first time</li>
              <li className="mb-2">Sign in with your account (recommended for AI features)</li>
              <li className="mb-2">Choose your preferred color theme</li>
              <li>Select your primary programming language</li>
            </ol>
          </section>

          <section id="editor-preferences">
            <h2 className="text-2xl font-bold mb-4">Editor Preferences</h2>
            <p className="mb-4">
              Customize your editor settings for the best experience:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Font Settings:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Choose a programming font (e.g., JetBrains Mono, Fira Code)</li>
                  <li>Set font size and line height</li>
                  <li>Enable/disable font ligatures</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Editor Appearance:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Enable/disable minimap</li>
                  <li>Configure line numbers</li>
                  <li>Set indent guides preferences</li>
                </ul>
              </li>
              <li>
                <strong>Code Style:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Tab size and indentation</li>
                  <li>Format on save options</li>
                  <li>Word wrap settings</li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="ai-configuration">
            <h2 className="text-2xl font-bold mb-4">AI Configuration</h2>
            <p className="mb-4">
              Configure Cursor&apos;s AI features for optimal performance:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>AI Completions:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Set completion trigger characters</li>
                  <li>Adjust suggestion delay</li>
                  <li>Configure completion style preferences</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Chat Interface:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Choose chat window position</li>
                  <li>Set default AI model</li>
                  <li>Configure context inclusion settings</li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="keyboard-shortcuts">
            <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
            <p className="mb-4">
              Essential keyboard shortcuts to customize:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>AI Features:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Chat window toggle</li>
                  <li>Code completion trigger</li>
                  <li>Code explanation command</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Navigation:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>File switching</li>
                  <li>Symbol search</li>
                  <li>Command palette</li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="workspace-setup">
            <h2 className="text-2xl font-bold mb-4">Workspace Setup</h2>
            <p className="mb-4">
              Configure your workspace for better productivity:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>File Explorer:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Configure excluded files and folders</li>
                  <li>Set file associations</li>
                  <li>Customize file icons</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Integrated Terminal:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Choose default shell</li>
                  <li>Set terminal font and colors</li>
                  <li>Configure terminal split behavior</li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="extensions">
            <h2 className="text-2xl font-bold mb-4">Essential Extensions</h2>
            <p className="mb-4">
              Recommended extensions to install:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Language Support:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Language-specific extensions</li>
                  <li>Syntax highlighting packs</li>
                  <li>Code snippets collections</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Productivity Tools:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Git integration</li>
                  <li>Code formatting tools</li>
                  <li>Project management extensions</li>
                </ul>
              </li>
            </ul>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 