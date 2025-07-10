import Link from 'next/link'

const aiTools = [
  {
    id: 'v0',
    name: 'V0',
    description: 'V0 is a powerful AI-assisted development tool that helps developers write, understand, and refactor code faster.',
    image: '/images/ai-tools/v0.png',
    category: 'IDE & Coding Assistant',
    features: ['AI Code Completion', 'Natural Language Programming', 'Code Refactoring', 'Smart Debugging'],
    url: 'https://v0.dev'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'GitHub Copilot is an AI programming assistant developed by GitHub and OpenAI that provides contextual code suggestions.',
    image: '/images/ai-tools/github-copilot.png',
    category: 'IDE & Coding Assistant',
    features: ['Real-time Code Suggestions', 'Natural Language to Code', 'Multi-language Support', 'Smart Test Generation'],
    url: 'https://github.com/features/copilot'
  },
  {
    id: 'anthropic-claude',
    name: 'Claude',
    description: 'Claude is an advanced AI assistant by Anthropic, offering accurate and reliable programming support and technical consultation.',
    image: '/images/ai-tools/claude.png',
    category: 'AI Assistant',
    features: ['Code Explanation', 'Technical Documentation', 'Problem Diagnosis', 'Best Practices'],
    url: 'https://anthropic.com/claude'
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit',
    description: 'Replit\'s AI programming assistant that provides real-time code suggestions and autocompletion.',
    image: '/images/ai-tools/replit.png',
    category: 'IDE & Coding Assistant',
    features: ['Code Generation', 'Code Explanation', 'Error Fixing', 'Unit Test Generation'],
    url: 'https://replit.com'
  },
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'Lovable is an AI-powered code review assistant that helps teams maintain high code quality and consistent standards.',
    image: '/images/ai-tools/lovable.png',
    category: 'Code Review & Quality',
    features: ['Automated Code Review', 'Quality Metrics', 'Security Scanning', 'Performance Analysis'],
    url: 'https://lovable.dev/'
  },
  {
    id: 'augment',
    name: 'Augment',
    description: 'Augment is an AI development platform that enhances developer productivity through intelligent automation and workflow optimization.',
    image: '/images/ai-tools/augment.png',
    category: 'Development Platform',
    features: ['Workflow Automation', 'Code Generation', 'Documentation Assistant', 'Integration Hub'],
    url: 'https://augmentcode.com/'
  },
  {
    id: 'bolt',
    name: 'Bolt',
    description: 'Bolt is an AI-powered development acceleration platform that helps developers write, test, and deploy code faster with built-in best practices.',
    image: '/images/ai-tools/bolt.png',
    category: 'Development Platform',
    features: ['Smart Code Intelligence', 'Automated Testing', 'CI/CD Optimization', 'Performance Monitoring'],
    url: 'https://bolt.new'
  }
]

export default function AITools() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI Development Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTools.map((tool) => (
          <div key={tool.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* <div className="aspect-w-16 aspect-h-9 bg-gray-100"> */}
              {/* Tool image */}
              {/* <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">{tool.name}</span>
              </div> */}
            {/* </div> */}
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{tool.name}</h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {tool.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{tool.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Key Features:</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Link
                  href={`/ai-tools/${tool.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 