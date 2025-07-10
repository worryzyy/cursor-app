import React from 'react'

interface ArticleLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
  date?: string
  author?: string
}

export function ArticleLayout({ title, description, children, date, author }: ArticleLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {(date || author) && (
          <div className="text-gray-600">
            {date && <span className="mr-4">{date}</span>}
            {author && <span>By {author}</span>}
          </div>
        )}
      </header>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </article>
  )
} 