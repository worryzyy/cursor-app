interface TableOfContentsProps {
  items: {
    id: string
    title: string
    level: number
  }[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="toc">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
            className="hover:text-blue-600"
          >
            <a href={`#${item.id}`} className="block py-1">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 