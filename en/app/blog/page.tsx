import { NavigationCard } from '../components/NavigationCard'

export const metadata = {
  title: 'Cursor Editor Blog - Tips, Tutorials and Updates',
  description: 'Explore articles about Cursor Editor features, best practices, and tips for improving your development workflow.'
}

const articles = [
  {
    title: 'Getting Started with Cursor AI Features',
    description: 'Learn how to effectively use Cursor\'s AI capabilities to boost your coding productivity.',
    href: '/blog/ai-features'
  },
  {
    title: 'Essential Keyboard Shortcuts in Cursor',
    description: 'Master the most important keyboard shortcuts to speed up your development workflow.',
    href: '/blog/keyboard-shortcuts'
  },
  {
    title: 'Migrating from VS Code to Cursor',
    description: 'A comprehensive guide to transitioning from VS Code to Cursor Editor seamlessly.',
    href: '/blog/vscode-migration'
  },
  {
    title: 'Must-Have Plugins for Cursor',
    description: 'Discover the essential plugins that will enhance your Cursor Editor experience.',
    href: '/blog/plugins-guide'
  },
  {
    title: 'Advanced Coding Tips with Cursor',
    description: 'Learn advanced techniques and tips to maximize your productivity with Cursor.',
    href: '/blog/coding-tips'
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Cursor Editor Blog</h1>
        <p className="text-xl text-gray-600">
          Discover tips, tutorials, and best practices for using Cursor Editor effectively.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <NavigationCard
            key={article.href}
            title={article.title}
            description={article.description}
            href={article.href}
          />
        ))}
      </div>
    </div>
  )
} 