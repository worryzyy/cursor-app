import { NavigationCard } from '../components/NavigationCard'

export const metadata = {
  title: 'Cursor Editor Tutorials - Installation, Configuration and Usage Guides',
  description: 'Learn how to install, configure and use Cursor Editor effectively with our comprehensive tutorials.'
}

const tutorials = [
  {
    title: 'Installing Cursor Editor',
    description: 'Step-by-step guide for installing Cursor Editor on Windows, macOS, and Linux.',
    href: '/tutorials/installation'
  },
  {
    title: 'First-Time Configuration',
    description: 'Essential settings and configurations for getting started with Cursor Editor.',
    href: '/tutorials/configuration'
  },
  {
    title: 'AI Prompt Writing Guide',
    description: 'Learn how to write effective prompts to get the best results from Cursor&apos;s AI features.',
    href: '/tutorials/ai-prompts'
  },
  {
    title: 'Customizing Your Editor',
    description: 'Personalize your Cursor Editor with themes, keybindings, and extensions.',
    href: '/tutorials/customization'
  }
]

export default function TutorialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Cursor Editor Tutorials</h1>
        <p className="text-xl text-gray-600">
          Learn how to use Cursor Editor like a pro with our comprehensive tutorials.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {tutorials.map((tutorial) => (
          <NavigationCard
            key={tutorial.href}
            title={tutorial.title}
            description={tutorial.description}
            href={tutorial.href}
          />
        ))}
      </div>
    </div>
  )
} 