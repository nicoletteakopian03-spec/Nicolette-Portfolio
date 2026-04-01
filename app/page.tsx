'use client';
import { useMemo, useState } from 'react';

const ArrowRight = () => <span aria-hidden="true">→</span>;
const Mail = () => <span aria-hidden="true" className="text-2xl text-rose-300">✉</span>;
const Phone = () => <span aria-hidden="true" className="text-2xl text-rose-300">☎</span>;
const Linkedin = () => <span aria-hidden="true" className="text-2xl text-rose-300 font-medium">in</span>;

const ToolIcon = ({ name }: { name: string }) => {
  const common = 'h-5 w-5 shrink-0';

  switch (name) {
    case 'Canva':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <defs>
            <linearGradient id="canvaGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="12" fill="url(#canvaGrad)" />
          <text x="12" y="14.2" textAnchor="middle" fontSize="8" fontStyle="italic" fontFamily="cursive" fill="white">C</text>
        </svg>
      );
    case 'Photoshop':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="#001e36" />
          <text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="sans-serif" fill="#31a8ff">Ps</text>
        </svg>
      );
    case 'Figma':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect x="4" y="2" width="8" height="8" rx="4" fill="#f24e1e" />
          <rect x="12" y="2" width="8" height="8" rx="4" fill="#ff7262" />
          <rect x="4" y="10" width="8" height="8" rx="4" fill="#a259ff" />
          <circle cx="16" cy="14" r="4" fill="#1abcfe" />
          <rect x="4" y="18" width="8" height="4" rx="2" fill="#0acf83" />
        </svg>
      );
    case 'Instagram Insights':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <defs>
            <linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="12" fill="url(#igGrad)" />
          <rect x="6" y="11" width="2.2" height="6" fill="white" rx="1" />
          <rect x="10.1" y="8" width="2.2" height="9" fill="white" rx="1" />
          <rect x="14.2" y="5.5" width="2.2" height="11.5" fill="white" rx="1" />
          <circle cx="15.8" cy="15.8" r="2.7" fill="none" stroke="white" strokeWidth="1.5" />
          <line x1="17.8" y1="17.8" x2="20" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'Muck Rack':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#334155" />
          <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif" fill="#bae6fd">MR</text>
        </svg>
      );
    case 'Klear':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="#ffffff" />
          <path d="M5 7.5 9.5 12 5 16.5" fill="#2dd4bf" />
          <path d="M10 7l7-1.2L12.2 12 17 18l-7-1.2L7.2 12 10 7Z" fill="#2dd4bf" />
        </svg>
      );
    case 'Microsoft Office':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="#d83b01" />
          <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="sans-serif" fill="white">MS</text>
        </svg>
      );
    case 'Google Suite':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="#ffffff" />
          <text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="sans-serif" fill="#4285F4">G</text>
        </svg>
      );
    case 'Tableau':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="#ffffff" />
          <g fill="#e97627">
            <rect x="11" y="4" width="2" height="16" rx="1" />
            <rect x="4" y="11" width="16" height="2" rx="1" />
          </g>
          <g fill="#2563eb">
            <rect x="7" y="7" width="2" height="2" rx="1" />
            <rect x="15" y="7" width="2" height="2" rx="1" />
            <rect x="7" y="15" width="2" height="2" rx="1" />
            <rect x="15" y="15" width="2" height="2" rx="1" />
          </g>
        </svg>
      );
    case 'Launchmetrics':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="#111827" />
          <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="sans-serif" fill="white">LM</text>
        </svg>
      );
    case 'Notion':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="white" stroke="black" strokeWidth="1.5" />
          <text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="serif" fill="black">N</text>
        </svg>
      );
    case 'Asana':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <circle cx="12" cy="6.5" r="3" fill="#f06a6a" />
          <circle cx="7.5" cy="15.5" r="3" fill="#f06a6a" />
          <circle cx="16.5" cy="15.5" r="3" fill="#f06a6a" />
        </svg>
      );
    case 'Slack':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <rect x="10" y="2" width="4" height="8" rx="2" fill="#36C5F0" />
          <rect x="14" y="10" width="8" height="4" rx="2" fill="#2EB67D" />
          <rect x="10" y="14" width="4" height="8" rx="2" fill="#ECB22E" />
          <rect x="2" y="10" width="8" height="4" rx="2" fill="#E01E5A" />
        </svg>
      );
    default:
      return null;
  }
};

export default function NicolettePortfolio() {
  const [page, setPage] = useState('home');

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const experience = [
    {
      company: 'INFAMOUS PR',
      role: 'Publicity Intern',
      location: 'Los Angeles, CA',
      dates: 'Feb 2026 – Apr 2026',
      category: 'Publicity / Media Strategy',
      points: [
        'Built 100+ media contact lists per campaign across digital, print, radio, and DSPs, shaping targeted launch outreach at both national and regional levels.',
        'Directed DSP outreach to Spotify, Apple Music, Amazon Music, and TIDAL, sharpening platform-specific messaging and audience alignment.',
        'Produced press releases and 25+ tailored media pitches per campaign, translating campaign ideas into compelling external-facing narratives.',
        'Tracked 100+ editorial and social placements and compiled performance summaries, strengthening my reporting and campaign analysis skills.'
      ]
    },
    {
      company: 'A-List Me',
      role: 'Influencer Talent Management Intern',
      location: 'Remote',
      dates: 'Jan 2026 – Apr 2026',
      category: 'Influencer / Brand Partnerships',
      points: [
        'Scouted and evaluated 50+ influencers per campaign across TikTok, Instagram, and YouTube based on aesthetic alignment, audience quality, and engagement.',
        'Built databases of 200+ creators with pricing, audience demographics, and brand fit data, improving outreach turnaround by 30%.',
        'Supported outreach, partnership logistics, and campaign coordination, gaining exposure to how creators are positioned within broader brand initiatives.',
        'Matched creator identity and content style with campaign KPIs, reinforcing a consumer-first approach to brand storytelling.'
      ]
    },
    {
      company: 'CLD PR',
      role: 'Public Relations Intern',
      location: 'Los Angeles, CA',
      dates: 'Aug 2025 – Dec 2025',
      category: 'PR Campaign Support',
      points: [
        'Supported PR campaigns across fashion, beauty, and lifestyle clients, contributing to brand visibility through media organization and relationship support.',
        'Coordinated 100+ gifting packages and tracked influencer content, ensuring campaign execution stayed aligned with brand image and timing.',
        'Facilitated White Fox activations and monitored post-event coverage for 200+ attendees, bridging live experiences with post-campaign visibility.',
        'Used Muck Rack and Launchmetrics to research contacts, track results, and maintain structured reporting systems for teams and clients.'
      ]
    },
    {
      company: 'Gluteology',
      role: 'Marketing Assistant',
      location: 'Glendale, CA',
      dates: 'May 2024 – Feb 2026',
      category: 'Growth / Brand Marketing',
      points: [
        'Managed social media accounts and increased engagement by 50% across Instagram and TikTok through more strategic content planning.',
        'Analyzed audience and campaign data to reduce customer acquisition costs by 20%, linking creative decisions with measurable business impact.',
        'Assessed 50+ monthly social posts to improve conversion efficiency, helping refine messaging, timing, and content direction.'
      ]
    },
    {
      company: 'AAR',
      role: 'Billing Manager',
      location: 'North Hollywood, CA',
      dates: 'Feb 2022 – Aug 2025',
      category: 'Operations / Analytical Foundation',
      points: [
        'Managed and processed 500+ customer invoices per month with 98% accuracy, building a strong operational and detail-oriented foundation.',
        'Reconciled weekly financial records and improved cash flow by 15%, strengthening my analytical discipline and reporting confidence.',
        'Oversaw $500K+ in accounts receivable annually and reduced overdue balances by 20% through structured follow-up systems.'
      ]
    }
  ];

  const skills = {
    'Campaign Thinking': ['Brand storytelling', 'Influencer strategy', 'Media outreach', 'Campaign coordination', 'Reporting'],
    'Creative & Marketing Tools': ['Canva', 'Photoshop', 'Figma', 'Instagram Insights', 'Muck Rack', 'Klear'],
    'Analytics & Workflow': ['Microsoft Office', 'Google Suite', 'Tableau', 'Launchmetrics', 'Notion', 'Asana', 'Slack']
  };

  const certifications = [
    'Google Ads – Measurement Certification',
    'HubSpot – Social Media Marketing Certification',
    'LinkedIn Learning – Influencer Marketing Foundations',
    'Stukent – Market Research Simternship'
  ];

  const focusAreas = [
    {
      title: 'Brand Campaign Thinking',
      text: 'Although my experience began in PR and influencer support, I am intentionally building toward in-house campaign marketing roles where brand storytelling, cultural relevance, and strategic execution come together.'
    },
    {
      title: 'Beauty + Lifestyle Brand Fit',
      text: 'I’m especially drawn to brands that combine strong visual identity with consumer intimacy and elevated storytelling—similar to the level of polish seen in modern beauty, wellness, and fashion companies.'
    },
    {
      title: 'Creative Meets Analytical',
      text: 'My background allows me to think beyond aesthetics alone. I care about performance, audience alignment, brand positioning, and the details that make campaigns feel both beautiful and effective.'
    }
  ];

  const pageContent = useMemo(() => {
    switch (page) {
      case 'about':
        return (
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionIntro eyebrow="About" title="A PR foundation evolving into in-house campaign marketing." centered />
            <Card className="p-8 md:p-10">
              <div className="space-y-6 text-[15px] leading-8 text-stone-700 md:text-base">
                <p>
                  I’m a marketing student at California State University, Northridge with experience across publicity, influencer strategy, media outreach, and campaign support. My background has given me a strong understanding of how brands build visibility externally, but my long-term direction is in-house campaign marketing.
                </p>
                <p>
                  I’m especially interested in companies that treat brand as both a visual language and a strategic system—where campaign ideas are culturally aware, creatively distinct, and backed by real audience understanding. That is the kind of work I want to grow into.
                </p>
                <p>
                  I bring a mix of structured thinking, aesthetic sensitivity, and executional discipline. I’m drawn to modern beauty, lifestyle, and fashion brands that feel elevated, intentional, and emotionally resonant.
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-10 lg:col-span-2">
              <div className="grid gap-6 md:grid-cols-3">
                {focusAreas.map((item) => (
                  <div key={item.title} className="rounded-[1.75rem] border border-[rgba(214,195,176,0.55)] bg-[linear-gradient(180deg,rgba(255,252,248,0.92),rgba(244,237,229,0.80))] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                    <h4 className="text-2xl font-medium tracking-tight text-stone-900">{item.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-stone-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );
      case 'experience':
        return (
          <div>
            <Card className="p-8 md:p-10 flex items-center justify-center text-center">
              <p className="text-2xl md:text-4xl font-medium tracking-[0.2em] text-stone-700">EXPERIENCE</p>
            </Card>
            <div className="mt-6 space-y-6">
              {experience.map((job) => (
                <Card key={job.company} className="p-8 md:p-10">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{job.category}</p>
                      <h3 className="mt-3 text-2xl font-medium tracking-tight text-stone-900 md:text-3xl">{job.role}</h3>
                      <p className="mt-2 text-sm text-stone-600">{job.company} • {job.location}</p>
                    </div>
                    <p className="text-sm text-stone-500">{job.dates}</p>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {job.points.map((point) => (
                      <div key={point} className="rounded-[1.5rem] border border-[rgba(214,195,176,0.48)] bg-[linear-gradient(180deg,rgba(255,252,249,0.94),rgba(244,237,229,0.74))] p-5 text-sm leading-7 text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                        {point}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-6">
            <Card className="p-8 md:p-10 flex items-center justify-center text-center">
              <p className="text-2xl md:text-4xl font-medium tracking-[0.2em] text-stone-700">SKILLS</p>
            </Card>
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Campaign Thinking */}
              <Card className="p-8 md:p-10">
                <h4 className="text-sm uppercase tracking-[0.28em] text-stone-500">Campaign Thinking</h4>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {skills['Campaign Thinking'].map((item) => (
                    <span key={item} className="rounded-full border border-[rgba(214,195,176,0.55)] bg-[linear-gradient(180deg,rgba(255,252,249,0.95),rgba(244,237,229,0.88))] px-3.5 py-2 text-sm text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Creative & Marketing Tools */}
              <Card className="p-8 md:p-10">
                <h4 className="text-sm uppercase tracking-[0.28em] text-stone-500">Creative & Marketing Tools</h4>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {skills['Creative & Marketing Tools'].map((item) => (
                    <span key={item} className="flex items-center gap-2 rounded-full border border-[rgba(214,195,176,0.55)] bg-[linear-gradient(180deg,rgba(255,252,249,0.95),rgba(244,237,229,0.88))] px-3.5 py-2 text-sm text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      <ToolIcon name={item} /> {item}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Analytics & Workflow */}
              <Card className="p-8 md:p-10">
                <h4 className="text-sm uppercase tracking-[0.28em] text-stone-500">Analytics & Workflow</h4>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {skills['Analytics & Workflow'].map((item) => (
                    <span key={item} className="flex items-center gap-2 rounded-full border border-[rgba(214,195,176,0.55)] bg-[linear-gradient(180deg,rgba(255,252,249,0.95),rgba(244,237,229,0.88))] px-3.5 py-2 text-sm text-stone-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      <ToolIcon name={item} /> {item}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Certifications */}
              <Card className="p-8 md:p-10">
                <h4 className="text-sm uppercase tracking-[0.28em] text-stone-500">Certifications</h4>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {certifications.map((item) => (
                    <div key={item} className="rounded-[1.25rem] border border-[rgba(214,195,176,0.5)] bg-[linear-gradient(180deg,rgba(255,252,249,0.92),rgba(244,237,229,0.74))] p-4 text-sm leading-7 text-stone-700">
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="mx-auto max-w-3xl">
            <Card className="p-10 md:p-14">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-stone-500">Contact</p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-stone-900 md:text-5xl">Looking forward to connecting!</h2>
              </div>
              <div className="mt-10 grid gap-5">
                <a href="mailto:nicolette.akopian03@gmail.com" className="flex flex-col items-center justify-center rounded-[1.75rem] border border-[rgba(214,195,176,0.55)] bg-[linear-gradient(180deg,rgba(255,252,249,0.95),rgba(244,237,229,0.82))] px-6 py-6 text-center text-stone-800 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_24px_rgba(120,98,79,0.08)]">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50/80">
                    <Mail />
                  </div>
                  <span className="text-base md:text-lg">nicolette.akopian03@gmail.com</span>
                </a>
                <a href="tel:7472738386" className="flex flex-col items-center justify-center rounded-[1.75rem] border border-[rgba(214,195,176,0.55)] bg-[linear-gradient(180deg,rgba(255,252,249,0.95),rgba(244,237,229,0.82))] px-6 py-6 text-center text-stone-800 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_24px_rgba(120,98,79,0.08)]">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50/80">
                    <Phone />
                  </div>
                  <span className="text-base md:text-lg">747-273-8386</span>
                </a>
                <a href="https://www.linkedin.com/in/nicolette-akopian" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center rounded-[1.75rem] border border-[rgba(214,195,176,0.55)] bg-[linear-gradient(180deg,rgba(255,252,249,0.95),rgba(244,237,229,0.82))] px-6 py-6 text-center text-stone-800 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_24px_rgba(120,98,79,0.08)]">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50/80">
                    <Linkedin />
                  </div>
                  <span className="text-base md:text-lg">LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Card className="overflow-hidden border-[rgba(215,200,186,0.7)] bg-[linear-gradient(180deg,rgba(255,255,255,0.50),rgba(250,246,241,0.42))] p-8 md:p-12">
                <div className="relative z-10">
                  <h1
                    className="max-w-4xl text-5xl tracking-tight text-stone-950 md:text-7xl md:leading-[1.02]"
                    style={{ fontFamily: '"Snell Roundhand", "Brush Script MT", "Apple Chancery", cursive' }}
                  >
                    Nicolette Akopian
                  </h1>
                  <p className="mt-5 text-lg italic text-stone-600 md:text-xl">
                    PR-informed, brand-minded, and building toward in-house campaign marketing.
                  </p>
                  <p className="mt-8 max-w-2xl text-[15px] leading-8 text-stone-700 md:text-base">
                    I’m building a career at the intersection of beauty, culture, influencer strategy, and brand storytelling. My experience is rooted in publicity and partnership support, but my direction is clear: I want to help shape elevated in-house campaigns for brands with strong identity, taste, and consumer connection.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <div className="mb-3 w-full">
                      <div className="h-px w-24 bg-[linear-gradient(90deg,rgba(170,132,99,0.8),rgba(170,132,99,0))]" />
                    </div>
                    <button onClick={() => setPage('about')} className="rounded-full bg-[linear-gradient(135deg,#e9c4cf_0%,#ddb5c3_48%,#d3a9bc_100%)] px-5 py-3 text-sm font-medium text-stone-900 shadow-[0_14px_28px_rgba(211,169,188,0.24)] transition hover:-translate-y-0.5">
                      Explore portfolio
                    </button>
                    <button onClick={() => setPage('contact')} className="rounded-full border border-[rgba(186,160,136,0.55)] bg-white/70 px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-white hover:shadow-sm">
                      Contact me
                    </button>
                  </div>
                </div>
              </Card>

              <div className="grid gap-6">
                <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(219,204,190,0.78)] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(250,246,241,0.72))] p-8 shadow-[0_18px_50px_rgba(120,98,79,0.07)]">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(202,178,220,0.18),transparent_65%)]" />
                  <h3 className="relative text-2xl font-medium tracking-tight text-stone-900">Targeting modern beauty and lifestyle brands.</h3>
                  <p className="relative mt-4 text-sm leading-7 text-stone-700">
                    Especially interested in in-house marketing environments that feel polished, creative, consumer-aware, and strategically rigorous.
                  </p>
                </div>
                <Card className="p-8">
                  <div className="mt-1 grid grid-cols-2 gap-4">
                    {[
                      ['100+', 'media contacts per campaign'],
                      ['200+', 'creator profiles structured'],
                      ['50%', 'social engagement growth'],
                      ['30%', 'faster outreach turnaround']
                    ].map(([number, label]) => (
                      <div key={label} className="rounded-[1.35rem] border border-[rgba(214,195,176,0.55)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,244,239,0.82))] p-4">
                        <p className="text-2xl font-medium text-stone-950">{number}</p>
                        <p className="mt-1 text-sm leading-6 text-stone-600">{label}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
              {focusAreas.map((item) => (
                <Card key={item.title} className="p-8 text-center transition hover:-translate-y-0.5">
                  <h3 className="text-2xl font-medium tracking-tight text-stone-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-700">{item.text}</p>
                </Card>
              ))}
            </section>
          </div>
        );
    }
  }, [page]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8f5f0_0%,#f3ede6_48%,#f7f4ef_100%)] text-stone-900 selection:bg-stone-900 selection:text-white">
      <SiteBackgroundAnimation />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-6 md:px-8 lg:px-10">
        <header className="sticky top-0 z-30 mb-6 rounded-full border border-white/70 bg-[rgba(255,250,245,0.72)] px-4 py-3 shadow-[0_10px_40px_rgba(120,98,79,0.10)] backdrop-blur-md">
          <div className="flex justify-center md:justify-end">
            <nav className="flex flex-wrap gap-2">
              {navigation.map((item) => {
                const active = item.id === page;
                return (
                  <button
                    key={item.id}
                    onClick={() => setPage(item.id)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      active
                        ? 'bg-[linear-gradient(135deg,#1c1917_0%,#3b2f2a_100%)] text-white shadow-[0_10px_24px_rgba(28,25,23,0.18)]'
                        : 'bg-white/65 text-stone-700 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        <main className="pb-8">{pageContent}</main>
      </div>
    </div>
  );
}

function SiteBackgroundAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="pink" cx="30%" cy="30%" r="40%">
            <stop offset="0%" stopColor="rgba(255,170,200,0.9)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="purple" cx="70%" cy="30%" r="40%">
            <stop offset="0%" stopColor="rgba(200,180,255,0.8)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="peach" cx="50%" cy="80%" r="40%">
            <stop offset="0%" stopColor="rgba(255,220,190,0.8)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <circle cx="30" cy="30" r="30" fill="url(#pink)">
          <animate attributeName="cx" values="30;40;30" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30;20;30" dur="8s" repeatCount="indefinite" />
        </circle>

        <circle cx="70" cy="30" r="30" fill="url(#purple)">
          <animate attributeName="cx" values="70;60;70" dur="9s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30;40;30" dur="9s" repeatCount="indefinite" />
        </circle>

        <circle cx="50" cy="80" r="30" fill="url(#peach)">
          <animate attributeName="cy" values="80;70;80" dur="7s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

function Card({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div
      className={`relative rounded-[2rem] border border-[rgba(219,204,190,0.78)] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(250,246,241,0.72))] shadow-[0_18px_50px_rgba(120,98,79,0.07)] backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function SectionIntro({ eyebrow, title, centered = false, largeTitle = false }) {
  return (
    <Card className={`overflow-hidden p-8 md:p-10 ${centered ? 'flex min-h-[220px] items-center justify-center text-center' : ''}`}>
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(205,176,149,0.16),transparent_68%)]" />
      <div className="relative">
        {eyebrow && (<p className="text-xs uppercase tracking-[0.32em] text-stone-500">{eyebrow}</p>)}
        <h2 className={`mt-4 max-w-2xl font-medium tracking-tight text-stone-950 ${largeTitle ? 'text-5xl md:text-7xl tracking-[0.25em]' : 'text-3xl md:text-5xl md:leading-tight'}`}>
          {title}
        </h2>
      </div>
    </Card>
  );
}
