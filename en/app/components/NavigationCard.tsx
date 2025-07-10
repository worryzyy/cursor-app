import Link from 'next/link'

interface NavigationCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
}

export function NavigationCard({ title, description, href, icon }: NavigationCardProps) {
  return (
    <Link 
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex items-start">
        {icon && <div className="mr-4">{icon}</div>}
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
} 