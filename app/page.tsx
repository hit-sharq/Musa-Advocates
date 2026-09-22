import Image from 'next/image'
import { ArrowUpRight, Check, ChevronRight, Mail, MapPin, Phone, Scale, ShieldCheck } from 'lucide-react'
import { ArticleCard } from '@/components/ui/article-card'
import { MobileNavigation } from '@/components/mobile-navigation'
import { practices, insights } from '@/components/site-chrome'

const values = [
  ['01', 'Clarity first', 'Straightforward legal advice, honest communication and a clear view of your options.'],
  ['02', 'Advocacy with purpose', 'We prepare thoroughly and pursue every matter with discipline, courage and care.'],
  ['03', 'Built on trust', 'Professional conduct and enduring client relationships guide every decision we make.'],
]

export default function Page() {
  return (
    <main>
      <div className="topbar"><div className="shell topbar-inner"><span>Trusted legal counsel in Kenya</span><span className="topbar-contact">Mon – Fri · 8:00 AM – 5:00 PM <a href="tel:+254758251399">+254 758 251 399</a></span></div></div>
      <header className="site-header"><div className="shell nav-wrap">
        <a className="brand" href="#top" aria-label="Musa and Musa Advocates home"><Image src="/images/logo.png" width={56} height={56} alt="Musa and Musa Advocates crest" /><span><strong>Musa &amp; Musa</strong><small>ADVOCATES</small></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="/about">About</a><a href="/practice-areas">Practice Areas</a><a href="/team">Our Team</a><a href="/insights">Insights</a><a href="/contact">Contact</a></nav>
        <a className="button button-dark nav-cta" href="https://www.musadvocates.co.ke/contact">Book a consultation <ArrowUpRight size={16} /></a>
        <MobileNavigation />
      </div></header>

      <section className="hero" id="top"><div className="shell hero-grid">
        <div className="hero-copy"><p className="eyebrow">EXCELLENCE IN LEGAL PRACTICE</p><h1>Duty, trust, and precision <em>in every matter.</em></h1><p className="hero-lead">Musa &amp; Musa Advocates is a Nairobi-based law firm helping individuals, families and businesses navigate complex legal matters with confidence.</p><div className="hero-actions"><a className="button button-blue" href="https://www.musadvocates.co.ke/contact">Speak with an advocate <ArrowUpRight size={17} /></a><a className="text-link" href="/practice-areas">Explore our practice areas <ChevronRight size={16} /></a></div><div className="hero-proof"><span><ShieldCheck size={18} /> Client-focused</span><span><Scale size={18} /> Kenyan law</span><span><Check size={18} /> Professional</span></div></div>
        <div className="hero-visual"><div className="hero-image"><Image src="/images/musa-advocate.jpg" fill priority alt="Musa and Musa Advocates legal professional" sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="hero-card"><Image src="/images/logo.png" width={46} height={46} alt="" /><p>Legal counsel shaped by integrity, preparation and a commitment to justice.</p><span>— Musa &amp; Musa Advocates</span></div></div>
      </div></section>

      <section className="intro section" id="about"><div className="shell intro-grid"><div><p className="eyebrow">A FIRM YOU CAN RELY ON</p><h2>Legal work with a human point of view.</h2></div><div><p className="section-lead">The law can feel complicated. Our role is to make it clearer, more considered and more manageable.</p><p>We combine sound legal strategy with attentive service to protect what matters to you. Whether you are resolving a dispute, building a business or seeking compensation after an accident, you can expect responsive advice and purposeful representation.</p><a className="text-link" href="https://www.musadvocates.co.ke/contact">Learn more about our approach <ChevronRight size={16} /></a></div></div></section>

      <section className="practice section" id="practice"><div className="shell"><div className="section-heading"><div><p className="eyebrow">OUR EXPERTISE</p><h2>Comprehensive legal services</h2></div><p>Practical counsel across the areas of law that shape everyday life and business in Kenya.</p></div><div className="practice-grid">{practices.map(([number,title,description,url])=><article className="practice-card" key={title}><span className="practice-card-number">{number}</span><h3>{title}</h3><p>{description}</p><a className="practice-card-link" href={url}>View area <ArrowUpRight size={14}/></a></article>)}</div></div></section>

      <section className="values section" id="team"><div className="shell"><div className="section-heading narrow"><div><p className="eyebrow">WHY MUSA &amp; MUSA</p><h2>Professional standards. Personal attention.</h2></div><p>We believe excellent advocacy begins with listening carefully and ends with acting decisively.</p></div><div className="values-grid">{values.map(([number, title, description]) => <article className="value-card" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="insight-band section" id="insights"><div className="shell insight-grid"><div><p className="eyebrow">FROM OUR INSIGHTS</p><h2>Useful legal perspective, made accessible.</h2><p>Explore practical explainers and updates on Kenyan law, rights, business and justice.</p><a className="button button-light" href="/insights">Visit legal insights <ArrowUpRight size={16} /></a></div><div className="insight-card"><span className="insight-tag">LEGAL GUIDE · 06 MIN READ</span><h3>What to do after a road traffic accident in Kenya</h3><p>The first steps can affect your claim. Here is a clear starting point for protecting your rights.</p><a href="/insights">Read the guide <ChevronRight size={15} /></a></div></div></section>

      <section className="articles section" id="articles"><div className="shell"><div className="section-heading"><div><p className="eyebrow">LATEST ARTICLES</p><h2>Insights you can act on.</h2></div><p>Read our latest legal guides and updates.</p></div><div className="article-grid">{insights.slice(0, 3).map((item) => <ArticleCard key={item.slug} slug={item.slug} title={item.title} tag={item.tag} text={item.text} image={item.image} />)}</div></div></section>

      <section className="contact section" id="contact"><div className="shell contact-box"><div><p className="eyebrow">START A CONVERSATION</p><h2>Let us discuss what matters to you.</h2><p>Share a little about your legal matter and our team will get back to you with the next step.</p></div><div className="contact-details"><a href="mailto:info@musadvocates.co.ke"><Mail size={19} /> info@musadvocates.co.ke</a><a href="tel:+254758251399"><Phone size={19} /> +254 758 251 399</a><span><MapPin size={19} /> 6076 Rhapta Road, Nairobi</span><a className="button button-blue" href="https://www.musadvocates.co.ke/contact">Request a consultation <ArrowUpRight size={16} /></a></div></div></section>

      <footer className="footer"><div className="shell footer-grid"><div className="footer-brand"><a className="brand" href="#top"><Image src="/images/logo.png" width={52} height={52} alt="Musa and Musa Advocates crest" /><span><strong>Musa &amp; Musa</strong><small>ADVOCATES</small></span></a><p>Exceptional legal services with integrity, professionalism and an unwavering dedication to justice.</p></div><div><h4>Explore</h4><a href="/about">About the firm</a><a href="/practice-areas">Practice areas</a><a href="/team">Our approach</a><a href="/insights">Legal insights</a></div><div><h4>Contact</h4><a href="mailto:info@musadvocates.co.ke">info@musadvocates.co.ke</a><a href="tel:+254758251399">+254 758 251 399</a><span>6076 Rhapta Road<br />Nairobi, Kenya</span></div></div><div className="shell footer-bottom"><span>© 2026 Musa &amp; Musa Advocates. All rights reserved.</span><span>Licensed to practise law in Kenya</span><span className="footer-legal"><a href="#">Privacy</a><a href="#">Terms</a></span></div></footer>
    </main>
  )
}
