'use client'

import Image from 'next/image'
import { ChevronRight, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ArticleCardProps {
  slug: string
  title: string
  tag: string
  text: string
  readTime?: string
  image?: string
  className?: string
}

function ShareButton({ slug, title }: { slug: string; title: string }) {
  const handleShare = async () => {
    const url = `${window.location.origin}/blog/${slug}`
    const data = { title, text: '', url }
    try {
      if (navigator.share) {
        await navigator.share(data)
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url)
      }
    } catch {
      /* noop */
    }
  }

  return (
    <button
      onClick={handleShare}
      className="share-btn"
      aria-label={`Share ${title}`}
      type="button"
    >
      <Share2 size={14} />
      <span>Share</span>
    </button>
  )
}

export function ArticleCard({ slug, title, tag, text, readTime, image, className }: ArticleCardProps) {
  return (
    <article className={cn('article-card', className)}>
      <div className="article-card-top">
        <span className="insight-tag">{tag}</span>
        {image && (
          <div className="article-card-img">
            <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 400px" />
          </div>
        )}
      </div>
      <div className="article-card-body">
        <h3>{title}</h3>
        <p>{text}</p>
        {readTime && <span className="article-card-readtime">{readTime}</span>}
      </div>
      <div className="article-card-footer">
        <a href={`/insights/${slug}`} className="article-card-readmore">
          Read More <ChevronRight size={14} />
        </a>
        <ShareButton slug={slug} title={title} />
      </div>
    </article>
  )
}
