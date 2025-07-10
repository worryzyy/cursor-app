import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Performance Optimization Guide for Cursor',
  description: 'Learn how to optimize Cursor Editor performance for better productivity and smoother development experience.'
}

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'system-requirements', title: 'System Requirements', level: 2 },
  { id: 'editor-settings', title: 'Editor Settings', level: 2 },
  { id: 'workspace-optimization', title: 'Workspace Optimization', level: 2 },
  { id: 'extension-management', title: 'Extension Management', level: 2 },
  { id: 'memory-management', title: 'Memory Management', level: 2 },
  { id: 'ai-performance', title: 'AI Performance', level: 2 },
  { id: 'troubleshooting', title: 'Troubleshooting', level: 2 }
]

export default function PerformanceGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Performance Optimization Guide for Cursor"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              While Cursor is designed to be fast and efficient out of the box, there are several
              ways to optimize its performance for your specific needs and system configuration.
              This guide will help you achieve the best possible performance from Cursor Editor.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm">
                <strong>Note:</strong> Performance optimization is an ongoing process. Regularly
                review and adjust these settings as your projects and needs evolve.
              </p>
            </div>
          </section>

          <section id="system-requirements">
            <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
            <p className="mb-4">
              Ensure your system meets these recommended specifications:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Minimum Requirements</h3>
                <ul className="list-disc pl-6">
                  <li>4GB RAM</li>
                  <li>Dual-core processor</li>
                  <li>1GB free disk space</li>
                  <li>Modern OS (Windows 10+, macOS 10.15+, Linux)</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Recommended Specifications</h3>
                <ul className="list-disc pl-6">
                  <li>8GB+ RAM</li>
                  <li>Quad-core processor</li>
                  <li>SSD storage</li>
                  <li>Dedicated GPU</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="editor-settings">
            <h2 className="text-2xl font-bold mb-4">Editor Settings</h2>
            <p className="mb-4">
              Optimize these editor settings for better performance:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">General Settings</h3>
                <ul className="list-disc pl-6">
                  <li>Disable unnecessary animations</li>
                  <li>Reduce auto-save interval</li>
                  <li>Optimize file watching</li>
                  <li>Adjust syntax highlighting</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Performance Settings</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`{
  "editor.maxTokenizationLineLength": 10000,
  "editor.minimap.enabled": false,
  "editor.scrollBeyondLastLine": false,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/node_modules/**": true
  }
}`}
                </code>
              </div>
            </div>
          </section>

          <section id="workspace-optimization">
            <h2 className="text-2xl font-bold mb-4">Workspace Optimization</h2>
            <p className="mb-4">
              Optimize your workspace for better performance:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">File Organization</h3>
                <ul className="list-disc pl-6">
                  <li>Use .gitignore for large files</li>
                  <li>Exclude build directories</li>
                  <li>Organize files logically</li>
                  <li>Split large workspaces</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Search Settings</h3>
                <ul className="list-disc pl-6">
                  <li>Configure search excludes</li>
                  <li>Use workspace search</li>
                  <li>Optimize file filters</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="extension-management">
            <h2 className="text-2xl font-bold mb-4">Extension Management</h2>
            <p className="mb-4">
              Manage extensions for optimal performance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Extension Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Remove unused extensions</li>
                  <li>Disable heavy extensions</li>
                  <li>Update regularly</li>
                  <li>Profile extension impact</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">High-Impact Extensions</h3>
                <ul className="list-disc pl-6">
                  <li>Language servers</li>
                  <li>File watchers</li>
                  <li>Real-time linters</li>
                  <li>Git integrations</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="memory-management">
            <h2 className="text-2xl font-bold mb-4">Memory Management</h2>
            <p className="mb-4">
              Optimize memory usage for better performance:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Memory Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Close unused editors</li>
                  <li>Clear editor history</li>
                  <li>Restart periodically</li>
                  <li>Monitor memory usage</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Advanced Settings</h3>
                <code className="block bg-gray-800 text-white p-4 rounded-md">
                  {`// Add to cursor-flags.conf
--max-memory=4096
--gc-interval=3600`}
                </code>
              </div>
            </div>
          </section>

          <section id="ai-performance">
            <h2 className="text-2xl font-bold mb-4">AI Performance</h2>
            <p className="mb-4">
              Optimize AI features for better performance:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">AI Settings</h3>
                <ul className="list-disc pl-6">
                  <li>Adjust completion delay</li>
                  <li>Configure context length</li>
                  <li>Set response timeout</li>
                  <li>Manage model cache</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Usage Tips</h3>
                <ul className="list-disc pl-6">
                  <li>Use specific prompts</li>
                  <li>Clear chat history</li>
                  <li>Limit context size</li>
                  <li>Focus on relevant files</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="troubleshooting">
            <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
            <p className="mb-4">
              Common performance issues and solutions:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Common Issues</h3>
                <ul className="list-disc pl-6">
                  <li>High CPU usage</li>
                  <li>Memory leaks</li>
                  <li>Slow startup</li>
                  <li>UI lag</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-bold mb-2">Solutions</h3>
                <ul className="list-disc pl-6">
                  <li>Clear workspace cache</li>
                  <li>Reset user settings</li>
                  <li>Update extensions</li>
                  <li>Reinstall Cursor</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-sm">
                <strong>Tip:</strong> If performance issues persist, try running Cursor with
                the <code>--disable-extensions</code> flag to identify problematic extensions.
              </p>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 