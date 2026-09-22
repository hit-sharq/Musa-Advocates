'use client'

import { Share2 } from 'lucide-react'

export default function ShareArticle({ slug, title }: { slug: string; title: string }) {
  const handleShare = async () => {
    const url = `https://blog.musadvocates.co.ke/insights/${slug}`
    try {
      if (navigator.share) { await navigator.share({ title, url }) }
      else if (navigator.clipboard) { await navigator.clipboard.writeText(url) }
    } catch { /* noop */ }
  }
  return <button onClick={handleShare} className="share-btn-share" type="button"><Share2 size={16} /> Share this article</button>
}
