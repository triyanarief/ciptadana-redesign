import React, { useState, useEffect } from 'react';
import './Ciptadana.css';
export const business = [{
  id: 'securities',
  name: 'Securities',
  audience: 'For investors',
  desc: 'Brokerage services for individual and institutional investors.',
  services: ['Individual brokerage', 'Institutional brokerage'],
  cta: 'Open an Account',
  destination: 'open-account',
  site: 'https://ciptadana-sekuritas-asia.com'
}, {
  id: 'asset-management',
  name: 'Asset Management',
  audience: 'For investors',
  desc: 'Indonesian equity and fixed income mutual funds, with structured fund management services.',
  services: ['Equity mutual funds', 'Fixed income mutual funds', 'Structured fund management'],
  cta: 'Open an Account',
  destination: 'open-account',
  site: 'https://ciptadana-am.com'
}, {
  id: 'personal-finance',
  name: 'Personal Finance',
  audience: 'For investors',
  desc: 'Financial guidance for your investment, portfolio and personal financing needs.',
  services: ['Personal financing', 'Capital markets', 'Managed investments', 'Portfolio management', 'Estate planning'],
  cta: 'Talk to Our Team',
  destination: 'talk-to-team'
}, {
  id: 'investment-banking',
  name: 'Investment Banking',
  audience: 'For companies',
  desc: 'Financial advice and capital solutions for businesses at important moments of growth.',
  services: ['Capital Raising', 'Mergers and Acquisitions', 'Private Placements', 'Alternative Funding'],
  cta: 'Talk to Our Team',
  destination: 'talk-to-team'
}, {
  id: 'multifinance',
  name: 'Multifinance',
  audience: 'For companies',
  desc: 'Factoring and operating lease services for businesses, from small enterprises to corporations.',
  services: ['Factoring', 'Operating leases'],
  cta: 'Talk to Our Team',
  destination: 'talk-to-team',
  site: 'https://ciptadana-mf.com'
}, {
  id: 'private-equity',
  name: 'Private Equity & Mezzanine Investment',
  audience: 'For companies',
  desc: 'Connect with our team to discuss Private Equity & Mezzanine Investment.',
  services: [],
  cta: 'Talk to Our Team',
  destination: 'talk-to-team'
}];
const leaders = [{
  name: 'Santo Nuradi Sutanto',
  role: 'Director',
  image: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/10c1aa48cbb7eaa299b98f07c7daccf2379a96966f6a89e204dc9ca4b96233dd.jpg"
}, {
  name: 'Adrian Suherman',
  role: 'President Commissioner',
  image: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/b2fa3b6dda1679adb166cd96225b20ad407e5660cc3a8367beeeacd6ba3bc001.jpg"
}, {
  name: 'Catherine G. Hambali',
  role: 'Commissioner',
  image: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/1ac7568f17ed603be8f182a1dd9a19c07e4336718cf37f746e4b7b25359f1599.jpg"
}, {
  name: 'Tirtadjaja Hambali',
  role: 'Commissioner',
  image: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/bbb799e792d5445ebd000f47124a9c0343b1c710bdff09267cb7a7cdec71a6a5.jpeg"
}, {
  name: 'Fendi Santoso',
  role: 'Commissioner',
  image: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/e954f50854bd4dba718916daeae04944478963dfcb2d3cc3963781b5ed1d2f9b.jpg"
}, {
  name: 'Agus Arismunandar',
  role: 'Commissioner',
  image: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/d2b3c252b227c69ba95f92d98aa4b3f0464af01e02d2e7bef514857c04678d55.jpg"
}];
const documents = [{
  "name": "Securities account opening \u2014 Individual",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/001/original/AOF_-_2017_-_Individu_-_update_0318_-_update_1.pdf?1522655814",
  "business": "Securities"
}, {
  "name": "Securities account opening \u2014 Institution",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/002/original/AOF_-_2017_-_Corporate_-_update_0318_-_update_1.pdf?1522655824",
  "business": "Securities"
}, {
  "name": "BCA RDN account \u2014 Individual",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/008/original/BCA_Formulir_Pembukaan_Rekening_Settlement_Investor_-_Individu_%28dual_bahasa%29.pdf?1522656270",
  "business": "Securities"
}, {
  "name": "BCA RDN account \u2014 Institution",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/009/original/BCA_Formulir_Pembukaan_Rekening_Settlement_Investor_-_Institusi_%28dual_bahasa%29.pdf?1522656292",
  "business": "Securities"
}, {
  "name": "CIMB Niaga RDN account \u2014 Individual",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/010/original/CIMB_Niaga_Individu_-_AOF_-_ver_Indonesia_%28with_sign%29.pdf?1522656437",
  "business": "Securities"
}, {
  "name": "CIMB Niaga RDN account \u2014 Institution",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/011/original/CIMB_Niaga_Institusi_-_AOF_-_2018-TB_1__%28with_sign%29.pdf?1522656451",
  "business": "Securities"
}, {
  "name": "NOBU RDN account \u2014 Individual",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/012/original/Aplikasi_Pembukaan_Nobu_RDN_%28individu_Sept_akhir_2016%29.pdf?1522656405",
  "business": "Securities"
}, {
  "name": "NOBU RDN account \u2014 Institution",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/013/original/Aplikasi_Pembukaan_Nobu_RDN_%28institusi_Sept_akhir_2016%29.pdf?1522656424",
  "business": "Securities"
}, {
  "name": "Mutual fund account opening",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/003/original/Form_3.pdf?1457687134",
  "business": "Asset Management"
}, {
  "name": "IGF / IIFL master account opening",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/004/original/Form_6.pdf?1457687134",
  "business": "Asset Management"
}, {
  "name": "IGF / IIFL redemption",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/005/original/Form_7.pdf?1457687134",
  "business": "Asset Management"
}, {
  "name": "IGF / IIFL application",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/006/original/Form_8.pdf?1457687134",
  "business": "Asset Management"
}, {
  "name": "Consumer finance form (KPR)",
  "url": "https://www.ciptadana.com/system/downloads/files/000/000/007/original/Form_9.pdf?1457687134",
  "business": "Multifinance"
}];
const media = {
  skyline: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458536697802678272/62d0f429d573d389d2eebdca333df07ab0e9bdfabb73157beda1d5e3f2b3bec1.jpg",
  trading: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458536697802678272/08f12a7b7cd2e3401a0b0988d45a5b1e710a6521258c20cfdc4ac08b36ce8eb6.jpg",
  inflation: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458536697802678272/ff0736e530adcf0477a8bf727229ea438685b21e40411f34e93f0e7de47947ca.jpg",
  artHanafi: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458536697802678272/9bbfb508156e3ed22c1f04e0cf1d947b280baeb321a314e8132205dd92aa5893.jpg",
  artSunaryo: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458536697802678272/822314cf40b4f43624662acf0ed82c7be27e874527450c506de02edbddf75daa.jpg",
  whiteLogo: "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458536697802678272/cbf8665379429ba23f2768fb19b5bf06f2e8033cd4e83060305733f549dd6379.png"
};
const aboutPages = ['Company Profile', 'Leadership', 'Milestones', 'Technology', 'Governance', 'Community'];
const slug = (s: string) => s.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
const routes = ['home', 'businesses', ...business.map(b => b.id), 'insights', 'article', 'article-inflation', 'video', 'about', ...aboutPages.map(slug), 'become-client', 'open-account', 'talk-to-team', 'forms', 'careers', 'contact', 'login', 'terms', 'privacy', 'risk', 'sitemap', 'search'];
const types = ['All content', 'Research', 'Fund Performance', 'News & Updates', 'Videos', 'Online Market Info'];
const insights = [{
  id: 'article',
  type: 'Research',
  line: 'Securities',
  date: '11 March 2026',
  title: 'FX reserves review: reserves shrink, while the Rupiah slightly appreciates',
  summary: 'Explore the published Economic Update from Ciptadana Securities.',
  url: 'https://www.ciptadana.com/news/1292'
}, {
  id: 'article-inflation',
  type: 'Research',
  line: 'Securities',
  date: '05 March 2026',
  title: 'Inflation review: inflation spikes at the start of Ramadan',
  summary: 'Read the source publication for the complete market analysis.',
  url: 'https://www.ciptadana.com/news/1291'
}, {
  id: 'video',
  type: 'Videos',
  line: 'Securities',
  date: '12 March 2020',
  title: 'Oil commodities down, CPO & Coal up',
  summary: 'From the Ciptadana video archive.',
  url: 'https://www.ciptadana.com/videos/1068'
}, {
  id: 'https://www.ciptadana.com/news/1110',
  type: 'Fund Performance',
  line: 'Asset Management',
  date: '28 November 2025',
  title: 'Asset Management Fund Performance',
  summary: 'Read the dated source publication from Ciptadana Asset Management.',
  url: 'https://www.ciptadana.com/news/1110'
}];
type Props = {
  initialPage?: string;
  reviewMode?: boolean;
};
export function CiptadanaSite({
  initialPage = 'home',
  reviewMode = false
}: Props) {
  const [careerFilter, setCareerFilter] = useState('All opportunities');
  const [page, setPage] = useState(initialPage),
    [menu, setMenu] = useState(''),
    [mobile, setMobile] = useState(false),
    [filter, setFilter] = useState('All content'),
    [line, setLine] = useState('All businesses'),
    [query, setQuery] = useState(''),
    [siteQuery, setSiteQuery] = useState(''),
    [topic, setTopic] = useState('General enquiry'),
    [person, setPerson] = useState('Individual'),
    [accountLine, setAccountLine] = useState('Securities'),
    [form, setForm] = useState({
      name: '',
      email: '',
      company: '',
      message: '',
      consent: false
    }),
    [stage, setStage] = useState('edit');
  useEffect(() => {
    if (reviewMode) return;
    const h = () => {
      const requested = location.hash.startsWith('#/') ? location.hash.slice(2) : 'home';
      setPage(routes.includes(requested) ? requested : 'home');
      setMenu('');
      setMobile(false);
      setStage('edit');
    };
    h();
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, [reviewMode]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = stage === 'edit' ? document.querySelector<HTMLElement>('#cp-main h1') : document.querySelector<HTMLElement>('#cp-main .cp-form-panel h2');
      if (target) {
        target.tabIndex = -1;
        target.focus({
          preventScroll: true
        });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [page, stage]);
  const go = (p: string, preTopic?: string) => {
    setPage(p);
    setMenu('');
    setMobile(false);
    setStage('edit');
    if (preTopic) {
      setTopic(preTopic);
      if (preTopic === 'Securities' || preTopic === 'Asset Management') setAccountLine(preTopic);
    }
    ;
    if (!reviewMode) {
      location.hash = '/' + p;
      window.scrollTo({
        top: 0,
        behavior: 'instant' as ScrollBehavior
      });
    }
  };
  const Link = ({
    to,
    children,
    className = '',
    preTopic,
    preFilter
  }: any) => <a target={to.startsWith('https://') ? '_blank' : undefined} rel={to.startsWith('https://') ? 'noreferrer' : undefined} href={to.startsWith('https://') ? to : '#/' + to} className={className} onClick={e => {
    if (to.startsWith('https://')) return;
    e.preventDefault();
    if (preFilter) {
      setFilter(preFilter);
      setLine("All businesses");
      setQuery("");
    }
    go(to, preTopic);
  }}>{children}</a>;
  const Arrow = () => <span aria-hidden="true">↗</span>;
  const btn = (to: string, text: string, secondary = false, preTopic?: string) => <Link to={to} preTopic={preTopic} className={'cp-button ' + (secondary ? 'secondary' : '')}>{text}<span aria-hidden="true">→</span></Link>;
  const intro = (eyebrow: string, title: string, desc: string) => <section className="cp-intro cp-wrap"><div className="cp-eyebrow">{eyebrow}</div><h1>{title}</h1><p className="cp-lead">{desc}</p></section>;
  const chooser = (isHome = false) => <section className={'cp-wrap cp-section ' + (isHome ? 'cp-business-section' : '')}><div className="cp-section-head"><div><div className="cp-eyebrow">OUR BUSINESSES</div><h2>Expertise for your next chapter.</h2></div><p>Find the right team for your financial needs.</p></div><div className="cp-business-columns">{['For investors', 'For companies'].map((group, i) => <div key={group}><figure className="cp-pathway-image"><img src={i === 0 ? media.trading : media.skyline} alt={i === 0 ? "Capital-market screens from Ciptadana’s published research" : "Jakarta skyline from Ciptadana’s original website"} loading="lazy" /></figure><div className="cp-group-head"><span>0{i + 1}</span><h3>{group}</h3><p>{i === 0 ? 'Invest, plan and manage your wealth.' : 'Raise capital and move your business forward.'}</p></div><div>{business.filter(b => b.audience === group).map(b => <Link to={b.id} className="cp-business-row" key={b.id}><div><h4>{b.name}</h4><p>{b.desc}</p></div><Arrow /></Link>)}</div></div>)}</div></section>;
  const closing = (title = 'Let’s start a conversation.', description = 'Find the right financial service for your goals.', destination = 'become-client', action = 'Become a Client', preTopic?: string) => <section className="cp-closing"><div className="cp-wrap"><div><div className="cp-eyebrow">YOUR NEXT STEP</div><h2>{title}</h2><p>{description}</p></div>{btn(destination, action, false, preTopic)}</div></section>;
  const InsightCard = ({
    item
  }: any) => <Link to={item.id} className="cp-insight">{item.id !== "video" && <img className="cp-insight-image" src={item.id === "article" ? media.trading : item.id === "article-inflation" ? media.inflation : media.skyline} alt={item.id === "article" ? "Market screens from the original Ciptadana FX reserves publication" : item.id === "article-inflation" ? "Image from the original Ciptadana inflation publication" : "Jakarta skyline from Ciptadana’s original website"} loading="lazy" />}<div className="cp-meta">{item.line} <span>{item.type}</span></div><h3>{item.title}</h3><p>{item.summary}</p><div className="cp-card-bottom"><time>{item.date}</time><Arrow /></div></Link>;
  const insightSection = (b?: string) => <section className="cp-wrap cp-section"><div className="cp-section-head"><div><div className="cp-eyebrow">PERSPECTIVES</div><h2>Ideas to inform your decisions.</h2></div><Link to="insights" className="cp-text-link">Explore Insights →</Link></div><div className="cp-insight-grid">{(b ? insights.filter(x => x.line === b) : [insights[0], insights[3], insights[2]]).slice(0, 3).map((x, i) => <InsightCard key={i} item={x} />)}{b && !insights.some(x => x.line === b) && <div className="cp-empty"><h3>Explore our perspectives.</h3><p>Browse research, news and videos from across Ciptadana.</p><Link to="insights" className="cp-text-link">View all Insights →</Link></div>}</div></section>;
  const articleItem = page === 'article-inflation' ? insights[1] : insights[0];
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (menu || mobile)) {
        const trigger = document.querySelector<HTMLElement>(mobile ? '.cp-mobile-toggle' : '[data-cp-menu="' + menu + '"]');
        setMenu('');
        setMobile(false);
        trigger?.focus();
      }
    };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [menu, mobile]);
  const searchPages = [{
    id: 'about',
    name: 'About Ciptadana'
  }, {
    id: 'insights',
    name: 'Insights'
  }, {
    id: 'careers',
    name: 'Careers'
  }, {
    id: 'contact',
    name: 'Contact Us'
  }, {
    id: 'forms',
    name: 'Forms & Documents'
  }, {
    id: 'become-client',
    name: 'Become a Client'
  }, {
    id: 'open-account',
    name: 'Open an Account'
  }, {
    id: 'talk-to-team',
    name: 'Talk to Our Team'
  }, ...aboutPages.map(n => ({
    id: slug(n),
    name: n
  }))];
  const b = business.find(x => x.id === page);
  const enquiry = page === 'talk-to-team' || page === 'contact';
  const renderForm = () => stage === 'review' ? <section className="cp-form-panel"><div className="cp-eyebrow">REVIEW YOUR ENQUIRY</div><h2>Check the details.</h2><dl>{[['Name', form.name], ['Email', form.email], ['Company', form.company || '—'], ['Topic', topic], ['Message', form.message]].map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><div className="cp-actions"><button className="cp-button secondary" onClick={() => setStage('edit')}>Edit details</button><button className="cp-button" onClick={() => setStage('success')}>Confirm enquiry →</button></div><p className="cp-small">Design preview: no enquiry is sent from this prototype.</p></section> : stage === 'success' ? <section className="cp-form-panel" role="status"><div className="cp-eyebrow">PREVIEW COMPLETE</div><h2>Your enquiry is ready.</h2><p>This design preview has not sent your details. On the live website, this screen would confirm successful delivery to the selected team.</p><button className="cp-button" onClick={() => setStage('edit')}>Return to enquiry</button></section> : <form className="cp-form-panel" onSubmit={e => {
    e.preventDefault();
    setStage('review');
  }}><h2>Tell us how we can help.</h2><div className="cp-field-grid"><label>Full name<input required autoComplete="name" value={form.name} onChange={e => setForm({
          ...form,
          name: e.target.value
        })} /></label><label>Email address<input required type="email" autoComplete="email" value={form.email} onChange={e => setForm({
          ...form,
          email: e.target.value
        })} /></label></div><label>Company <span className="cp-muted">(optional)</span><input autoComplete="organization" value={form.company} onChange={e => setForm({
        ...form,
        company: e.target.value
      })} /></label><label>Enquiry topic<select value={topic} onChange={e => setTopic(e.target.value)}>{['General enquiry', ...business.map(b => b.name)].map(x => <option key={x}>{x}</option>)}</select>{topic === "Private Equity & Mezzanine Investment" && <span className="cp-selected-value">Selected: {topic}</span>}</label><label>Your message<textarea required rows={5} value={form.message} onChange={e => setForm({
        ...form,
        message: e.target.value
      })} /></label><label className="cp-check"><input required type="checkbox" checked={form.consent} onChange={e => setForm({
        ...form,
        consent: e.target.checked
      })} /><span>I have read the <Link to="privacy">Privacy Policy</Link> and consent to being contacted about my enquiry.</span></label><button className="cp-button" type="submit" onClick={e => {
      if (e.currentTarget.form?.reportValidity()) setStage("review");
    }}>Review enquiry →</button><p className="cp-small">Please do not include account passwords or sensitive financial information.</p></form>;
  const aboutId = aboutPages.find(x => slug(x) === page);
  return <div className="cp-site"><a className="cp-skip" href="#cp-main" onClick={e => {
      e.preventDefault();
      const main = document.getElementById('cp-main');
      main?.focus();
      main?.scrollIntoView();
    }}>Skip to content</a><header className="cp-header"><div className="cp-utility cp-wrap"><Link to="careers">Careers</Link><Link to="contact">Contact Us</Link><Link to="login">Client Login ↗</Link></div><div className="cp-nav cp-wrap"><Link to="home" className="cp-logo"><img src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458505938098331649/b2cc119558aa5f3e0d4b322a0f71530ed64504be37bb6a3faeb3a72e282a3a9f.png" alt="Ciptadana" /><span>CAPITAL</span></Link><nav className="cp-desktop-nav" aria-label="Main navigation"><button data-cp-menu="Businesses" aria-expanded={menu === 'Businesses'} onClick={() => setMenu(menu === 'Businesses' ? '' : 'Businesses')}>Businesses <span>⌄</span></button><Link to="insights">Insights</Link><button data-cp-menu="About" aria-expanded={menu === 'About'} onClick={() => setMenu(menu === 'About' ? '' : 'About')}>About <span>⌄</span></button>{btn('become-client', 'Become a Client')}</nav><button className="cp-mobile-toggle" aria-label={mobile ? 'Close navigation' : 'Open navigation'} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? '✕' : '☰'}</button></div>{menu && <div className="cp-mega"><div className="cp-wrap"><div className="cp-mega-intro"><div className="cp-eyebrow">{menu}</div><h2>{menu === 'Businesses' ? 'Find your financial partner.' : 'Get to know Ciptadana.'}</h2><Link to={menu === 'Businesses' ? 'businesses' : 'about'} className="cp-text-link">View overview →</Link><button onClick={() => setMenu('')} className="cp-close" aria-label="Close menu">✕</button></div>{menu === 'Businesses' ? ['For investors', 'For companies'].map(g => <div key={g}><h3>{g}</h3>{business.filter(b => b.audience === g).map(b => <Link key={b.id} to={b.id} className="cp-menu-link">{b.name}<span>→</span></Link>)}</div>) : <div className="cp-about-menu">{aboutPages.map(x => <Link to={slug(x)} key={x} className="cp-menu-link">{x} →</Link>)}</div>}</div></div>}{mobile && <nav className="cp-mobile-nav" aria-label="Mobile navigation"><Link to="businesses">Businesses →</Link><div className="cp-mobile-sub">{business.map(b => <Link to={b.id} key={b.id}>{b.name}</Link>)}</div><Link to="insights">Insights →</Link><Link to="about">About →</Link><div className="cp-mobile-sub">{aboutPages.map(x => <Link to={slug(x)} key={x}>{x}</Link>)}</div><Link to="become-client">Become a Client →</Link><Link to="careers">Careers</Link><Link to="contact">Contact Us</Link><Link to="login">Client Login ↗</Link></nav>}</header>
 <main id="cp-main" tabIndex={-1}>
 {page === 'home' ? <><section className="cp-hero"><div className="cp-wrap"><div className="cp-eyebrow">CIPTADANA CAPITAL · ESTABLISHED 1990</div><div className="cp-hero-grid"><h1>A financial partner.<br /><em>A broader perspective.</em></h1><div className="cp-hero-copy"><p>Investment expertise and financial services for individuals, institutions and businesses in Indonesia.</p>{btn('businesses', 'Explore Our Businesses')}<Link to="become-client" className="cp-light-link">Become a Client →</Link></div></div><figure className="cp-hero-media"><img src={media.skyline} alt="Jakarta skyline from the original Ciptadana website" /><figcaption>Jakarta · Original Ciptadana imagery</figcaption></figure><div className="cp-hero-foot"><span>Built around your ambitions.</span><span>INVEST · ADVISE · FINANCE</span></div></div></section>{chooser(true)}<section className="cp-about-strip cp-wrap"><div className="cp-about-image"><img src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458505938098331649/df93dff8fc3481ee4f20131318a2f950a739d581f89ba097856001cb74a0a7e2.jpg" alt="Ciptadana office signage" loading="lazy" /></div><div><div className="cp-eyebrow">ABOUT CIPTADANA</div><h2>A long-term view.<br />Since 1990.</h2><p>Founded by Irene and Catherine Hambali, Ciptadana brings together financial services to help people build businesses, manage assets and pursue their financial goals.</p><Link to="company-profile" className="cp-text-link">Our company →</Link></div></section>{insightSection()}<section className="cp-wrap cp-section cp-home-client"><div className="cp-section-head"><div><div className="cp-eyebrow">BECOME A CLIENT</div><h2>Your next step starts here.</h2></div><p>Choose an account path or speak with the relevant team.</p></div><div className="cp-path-grid"><div><div className="cp-eyebrow">FOR INVESTORS</div><h3>Open an Account</h3><p>Explore Securities and Asset Management account options for individuals and institutions.</p>{btn('open-account', 'Explore Account Options')}</div><div><div className="cp-eyebrow">FOR COMPANIES & INDIVIDUALS</div><h3>Talk to Our Team</h3><p>Discuss financing, advisory or investment needs with Ciptadana.</p>{btn('talk-to-team', 'Start a Conversation')}</div></div><Link to="forms" className="cp-text-link">Forms &amp; Documents →</Link></section><section className="cp-wrap cp-section cp-home-trust"><div className="cp-home-trust-copy"><div className="cp-eyebrow">PEOPLE, HERITAGE & COMMUNITY</div><h2>A broader view of Ciptadana.</h2><p>Explore the people behind the company and its support for the arts.</p><div className="cp-trust-links"><Link to="leadership" className="cp-text-link">Meet our leadership →</Link><Link to="milestones" className="cp-text-link">Company milestones →</Link><Link to="governance" className="cp-text-link">Governance →</Link><Link to="technology" className="cp-text-link">Technology →</Link><Link to="community" className="cp-text-link">Art Program &amp; Art Space →</Link></div></div><figure><img src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/00fba7d44d229c56ea0bc3b9d3220a073df812252b2dbce2f1d1816107ce222c.jpg" alt="Artwork from Ciptadana’s original Art Program collection" loading="lazy" /><figcaption>Ciptadana Art Program · Original website photograph</figcaption></figure></section>{closing()}</> : page === 'businesses' ? <>{intro('OUR BUSINESSES', 'Six areas of expertise. One place to begin.', 'Choose your path as an investor or a company. Each business page explains the services and connects you with the relevant team.')}{chooser()}{closing()}</> : b ? <>{intro('BUSINESSES / ' + b.audience.toUpperCase(), b.name, b.desc)}<section className="cp-wrap cp-business-detail"><figure className="cp-business-media"><img src={b.audience === "For companies" ? media.skyline : media.trading} alt={b.audience === "For companies" ? "Jakarta skyline from Ciptadana’s original corporate imagery" : "Financial market screens from Ciptadana’s original publication"} loading="lazy" /><figcaption>Original Ciptadana website imagery · {b.audience === "For companies" ? "Jakarta" : "Capital markets"}</figcaption></figure><div className="cp-detail-action">{btn(b.destination, b.cta, false, b.name)}{b.site && <a href={b.site} target="_blank" rel="noreferrer" className="cp-text-link">Visit {b.name} website ↗</a>}</div><section className="cp-for-whom"><div className="cp-eyebrow">FOR WHOM</div><h2>{b.audience === 'For investors' ? 'For individual and institutional investors.' : 'For companies and corporate partners.'}</h2><p>{b.desc}</p></section><><div className="cp-section-head"><h2>Services &amp; products</h2><p>{b.audience === 'For investors' ? 'For individuals and institutions.' : 'For businesses and corporate partners.'}</p></div>{b.services.length === 0 && <p>Contact the team to discuss {b.name}.</p>}<div className="cp-service-grid">{b.services.map((s, i) => <div className="cp-service" key={s}><span>0{i + 1}</span><h3>{s}</h3><Link to={b.destination} preTopic={b.name} className="cp-text-link">Discuss your needs →</Link></div>)}</div><div className="cp-section cp-start"><div><div className="cp-eyebrow">HOW TO BEGIN</div><h2>Your next step, made clear.</h2></div><ol><li><strong>Explore the services</strong><p>Find the business line that matches your needs.</p></li><li><strong>{b.destination === 'open-account' ? 'Choose your account path' : 'Share your enquiry'}</strong><p>{b.destination === 'open-account' ? 'Select the business and individual or institutional route.' : 'Tell us which service you are interested in.'}</p></li><li><strong>Continue with the right team</strong><p>Access the relevant Ciptadana service or team.</p></li></ol></div></>{!['investment-banking', 'asset-management'].includes(b.id) && <section className="cp-proof"><div className="cp-eyebrow">PUBLISHED BACKGROUND</div><h2>Explore the original business information.</h2><p>Read Ciptadana’s published background for this business and discuss further information with the team.</p><a href={b.site || 'https://www.ciptadana.com/' + b.id} target="_blank" rel="noreferrer" className="cp-text-link">View published background ↗</a></section>}{b.id === 'investment-banking' && <section className="cp-proof"><div className="cp-eyebrow">EXPERIENCE</div><h2>Capital raising and corporate finance.</h2><p>Explore Ciptadana’s published Investment Banking capabilities and transaction history.</p><a href="https://www.ciptadana.com/investment-banking" target="_blank" rel="noreferrer" className="cp-text-link">View published background ↗</a></section>}{b.id === 'asset-management' && <section className="cp-proof"><h2>Understand your investment.</h2><p>Find product documents and fund information from Ciptadana Asset Management.</p><a href={b.site} target="_blank" rel="noreferrer" className="cp-text-link">Explore official fund information ↗</a></section>}</section>{insightSection(b.name)}<section className="cp-wrap cp-risk-note"><div className="cp-eyebrow">BEFORE YOU PROCEED</div><h2>Make an informed next step.</h2><p>Speak with the relevant Ciptadana business about service requirements, product information and applicable risks.</p><Link to="risk" className="cp-text-link">Risk Disclaimer →</Link><Link to="forms" className="cp-text-link">Forms &amp; Documents →</Link></section>{closing(b.cta === 'Open an Account' ? 'Ready to explore your investment options?' : 'Discuss your next step with our team.', b.desc, b.destination, b.cta, b.name)}</> : page === 'insights' ? <>{intro('INSIGHTS', 'Perspectives, in one place.', 'Explore research, fund information, news and videos. Filter by content type and business to find what matters to you.')}<section className="cp-wrap cp-section"><div className="cp-filter-row" role="group" aria-label="Content type">{types.map(t => <button key={t} aria-pressed={filter === t} className={filter === t ? 'active' : ''} onClick={() => setFilter(t)}>{t}</button>)}</div><div className="cp-search-row"><label>Business<select value={line} onChange={e => setLine(e.target.value)}>{['All businesses', ...business.map(b => b.name)].map(x => <option key={x}>{x}</option>)}</select></label><label>Search Insights<input type="search" placeholder="Search a topic" value={query} onChange={e => setQuery(e.target.value)} /></label></div><div className="cp-insight-grid">{insights.filter(x => (filter === 'All content' || x.type === filter) && (line === 'All businesses' || x.line === line) && x.title.toLowerCase().includes(query.toLowerCase())).map((x, i) => <InsightCard key={i} item={x} />)}</div>{!insights.some(x => (filter === 'All content' || x.type === filter) && (line === 'All businesses' || x.line === line) && x.title.toLowerCase().includes(query.toLowerCase())) && <div className="cp-empty"><h2>No content matches these filters.</h2><p>Try another business or browse all Insights.</p><button className="cp-button secondary" onClick={() => {
              setFilter('All content');
              setLine('All businesses');
              setQuery('');
            }}>Reset filters →</button>{filter === 'Fund Performance' && <a href="https://ciptadana-am.com" className="cp-text-link">View official fund information ↗</a>}</div>}</section>{closing()}</> : page === 'article' || page === 'article-inflation' || page === 'video' ? <>{intro('INSIGHTS / ' + (page === 'video' ? 'VIDEO ARCHIVE' : 'RESEARCH'), page === 'video' ? insights[2].title : articleItem.title, 'Ciptadana Securities · ' + (page === 'video' ? insights[2].date : articleItem.date))}<section className="cp-wrap cp-reading">{page !== "video" && <img className="cp-editorial-image" src={page === "article" ? media.trading : media.inflation} alt={page === "article" ? "Market screens in the original FX reserves publication" : "Original photograph in the Ramadan inflation publication"} />}{page === 'video' && <div className="cp-video-frame"><span aria-hidden="true">▷</span><p>View the original published video</p></div>}<h2>{page === 'video' ? 'From the video archive.' : 'Read the published analysis.'}</h2><p>{page === 'video' ? insights[2].summary : articleItem.summary} Open the original publication for the complete source content.</p><a className="cp-button" target="_blank" rel="noreferrer" href={page === 'video' ? insights[2].url : articleItem.url}>View original publication ↗</a><Link to="insights" className="cp-text-link">Back to Insights →</Link></section>{insightSection()}</> : page === 'about' ? <>{intro('ABOUT CIPTADANA', 'A financial partner, since 1990.', 'Learn about the people, heritage and capabilities behind Ciptadana Capital.')}<section className="cp-wrap cp-section"><div className="cp-about-grid">{aboutPages.map((x, i) => <Link to={slug(x)} className="cp-about-card" key={x}>{["Company Profile", "Leadership", "Technology", "Community"].includes(x) && <img className="cp-about-card-image" src={x === "Company Profile" ? "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458505938098331649/df93dff8fc3481ee4f20131318a2f950a739d581f89ba097856001cb74a0a7e2.jpg" : x === "Leadership" ? leaders[0].image : x === "Technology" ? "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/7c8022ebe71e050cf2791e5c08de936b392f38f044b2c1f220168215afaf6f15.jpg" : "https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/00fba7d44d229c56ea0bc3b9d3220a073df812252b2dbce2f1d1816107ce222c.jpg"} alt={x === "Leadership" ? leaders[0].name : x + " · original Ciptadana photograph"} loading="lazy" />}<span>0{i + 1}</span><h2>{x}</h2><Arrow /></Link>)}</div></section>{closing()}</> : aboutId ? <>{intro('ABOUT / ' + aboutId.toUpperCase(), aboutId, aboutId === 'Company Profile' ? 'Founded in 1990, with a broad range of financial services for individuals, institutions and companies.' : aboutId === 'Technology' ? 'Connecting financial services with the opportunities of the digital era.' : aboutId === 'Community' ? 'Supporting the arts through Ciptadana’s Art Program and Art Space.' : aboutId === 'Leadership' ? 'Meet the people behind Ciptadana.' : aboutId === 'Milestones' ? 'Explore the heritage of Ciptadana.' : 'Information about how Ciptadana is governed.')}<section className="cp-wrap cp-reading">{aboutId === 'Company Profile' ? <><img className="cp-editorial-image" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458505938098331649/df93dff8fc3481ee4f20131318a2f950a739d581f89ba097856001cb74a0a7e2.jpg" alt="Ciptadana office branding" /><h2>Built on a long-term perspective.</h2><p>Founded by Irene and Catherine Hambali in 1990, Ciptadana’s businesses span Securities, Asset Management, Personal Finance, Investment Banking, Multifinance, and Private Equity & Mezzanine Investment.</p>{btn('businesses', 'Explore Our Businesses')}</> : aboutId === 'Technology' ? <><img className="cp-editorial-image" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/7c8022ebe71e050cf2791e5c08de936b392f38f044b2c1f220168215afaf6f15.jpg" alt="Hands using a laptop in Ciptadana’s published Technology photograph" /><h2>Financial services in a digital era.</h2><p>Ciptadana describes its approach as reshaping client offerings and improving operational efficiency through digital solutions.</p>{btn('contact', 'Contact Us')}</> : aboutId === 'Community' ? <><img className="cp-editorial-image" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/458505938098331648/458507564880121856/00fba7d44d229c56ea0bc3b9d3220a073df812252b2dbce2f1d1816107ce222c.jpg" alt="Artwork from Ciptadana’s Art Program" /><h2>Art Program & Art Space</h2><p>Discover Ciptadana’s published community activities and support for the arts.</p><div className="cp-community-stories">{[{
                year: "2012",
                name: "Sunaryo",
                image: media.artSunaryo
              }, {
                year: "2011",
                name: "Hanafi",
                image: media.artHanafi
              }].map(story => <article key={story.year}><img src={story.image} alt={story.name + " Art Program · original gallery photograph"} loading="lazy" /><div className="cp-eyebrow">ART PROGRAM · {story.year}</div><h3>{story.name}</h3><a href={"https://www.ciptadana.com/art-program/" + story.year} target="_blank" rel="noreferrer" className="cp-text-link">Explore the published story ↗</a></article>)}</div></> : aboutId === 'Milestones' ? <><div className="cp-timeline"><span>1990</span><h2>Ciptadana is founded.</h2><p>Founded by Irene and Catherine Hambali.</p></div><p>Further milestones will be added after the company confirms its publishable history.</p></> : aboutId === 'Governance' ? <><h2>Corporate information</h2><p>For company and governance information, please contact the Ciptadana team.</p>{btn('contact', 'Contact Us')}</> : <><div className="cp-leadership-grid">{leaders.map(l => <article key={l.name}><img src={l.image} alt={l.name} /><h3>{l.name}</h3><p>{l.role}</p><a href="https://www.ciptadana.com/about#first-section" target="_blank" rel="noreferrer" className="cp-text-link">Read published biography ↗</a></article>)}</div></>}</section>{closing()}</> : page === 'become-client' ? <>{intro('BECOME A CLIENT', 'The right service. The right next step.', 'Start an investment account or connect with a team about your financial needs.')}<section className="cp-wrap cp-section cp-path-grid"><div><div className="cp-eyebrow">FOR INVESTORS</div><h2>Open an Account</h2><p>Choose Securities or Asset Management, then continue with the relevant business.</p>{btn('open-account', 'Explore Account Options')}</div><div><div className="cp-eyebrow">FOR COMPANIES & INDIVIDUALS</div><h2>Talk to Our Team</h2><p>Discuss advisory, financing or investment needs with the relevant Ciptadana team.</p>{btn('talk-to-team', 'Start a Conversation')}</div><div className="cp-path-docs"><h3>Forms & Documents</h3><p>Find the documents for your Ciptadana business.</p><Link to="forms" className="cp-text-link">Browse documents →</Link></div></section></> : page === 'open-account' ? <>{intro('BECOME A CLIENT / OPEN AN ACCOUNT', 'Choose your investment path.', 'Select a business and account type. Registration continues through the existing Ciptadana service.')}<section className="cp-wrap cp-section cp-account"><div><label>Business<select value={accountLine} onChange={e => setAccountLine(e.target.value)}><option>Securities</option><option>Asset Management</option></select></label><div className="cp-eyebrow">ACCOUNT TYPE</div><div className="cp-segment">{['Individual', 'Institutional'].map(p => <button aria-pressed={person === p} key={p} className={person === p ? 'active' : ''} onClick={() => setPerson(p)}>{p}</button>)}</div></div><div className="cp-form-panel"><h2>{person} {accountLine} account</h2><p>Continue to {accountLine} to review account requirements and the registration process.</p><a href={accountLine === 'Securities' ? 'https://ciptadana-sekuritas-asia.com' : 'https://ciptadana-am.com'} target="_blank" rel="noreferrer" className="cp-button">Continue to {accountLine} ↗</a><p className="cp-small">You are leaving the Ciptadana Capital corporate website.</p></div></section></> : enquiry ? <>{intro(page === 'contact' ? 'CONTACT US' : 'BECOME A CLIENT / TALK TO OUR TEAM', page === 'contact' ? 'We’re here to help.' : 'Let’s discuss your ambitions.', 'Choose an enquiry topic so we can guide you to the right team.')}<section className="cp-wrap cp-enquiry"><aside><div className="cp-eyebrow">CIPTADANA CAPITAL</div><h2>A place to begin.</h2><p>Questions about our services? Tell us what you are looking for.</p><address>Plaza ASIA Office Park Unit 2<br />Jl. Jend. Sudirman Kav. 59<br />Jakarta 12190, Indonesia<br /><a href="tel:+622125574800">+62 21 2557 4800</a><br /><a href="tel:+622125574900">+62 21 2557 4900</a></address><Link to="businesses" className="cp-text-link">Explore our businesses →</Link></aside>{renderForm()}</section></> : page === 'forms' ? <>{intro('BECOME A CLIENT / FORMS & DOCUMENTS', 'Documents, without the guesswork.', 'Select the business you need. View the existing published forms and their requirements.')}<section className="cp-wrap cp-section">{['Securities', 'Asset Management', 'Multifinance'].map(x => <div className="cp-document" key={x}><div><h2>{x}</h2><div className="cp-document-list">{documents.filter(d => d.business === x).map(d => <a key={d.name} href={d.url} target="_blank" rel="noreferrer">{d.name}<span>PDF ↗</span></a>)}</div></div></div>)}</section></> : page === 'careers' ? <>{intro('CAREERS', 'Build your next chapter with us.', 'Explore opportunities across Ciptadana’s businesses.')}<section className="cp-wrap cp-section"><div className="cp-filter-row">{['All opportunities', 'Students & Graduates', 'Experienced Professionals'].map(x => <button aria-pressed={careerFilter === x} className={careerFilter === x ? 'active' : ''} key={x} onClick={() => setCareerFilter(x)}>{x}</button>)}</div>{careerFilter !== 'Students & Graduates' && <div className="cp-vacancy-list">{['Legal Assistant Manager', 'Marketing Staff', 'Financial & Credit Analyst'].map(n => <a key={n} href="https://www.ciptadana.com/vacancies" target="_blank" rel="noreferrer" className="cp-business-row"><div><h3>{n}</h3><p>Published Ciptadana careers listing · check availability</p></div><Arrow /></a>)}</div>}<div className="cp-empty"><h2>{careerFilter === 'Students & Graduates' ? 'Explore early-career opportunities.' : 'Explore published vacancies.'}</h2><p>Visit Ciptadana’s published careers listing to confirm availability and application details.</p><a href="https://www.ciptadana.com/vacancies" target="_blank" rel="noreferrer" className="cp-button">View published opportunities ↗</a></div></section></> : page === 'login' ? <>{intro('CLIENT LOGIN', 'Continue to your client service.', 'Access the existing Ciptadana client area. New clients can explore account options separately.')}<section className="cp-wrap cp-section cp-account"><div className="cp-form-panel"><h2>Client area</h2><p>Log in securely through the existing Ciptadana service.</p><a href="https://www.ciptadana.com/client" target="_blank" rel="noreferrer" className="cp-button">Continue to Client Login ↗</a><p className="cp-small">This design preview never collects passwords.</p></div><div><h2>New to Ciptadana?</h2><p>Find the right service before beginning your registration.</p>{btn('open-account', 'Open an Account', true)}</div></section></> : page === 'sitemap' ? <>{intro('SITEMAP', 'Find your way.', 'All areas of the Ciptadana corporate website.')}<section className="cp-wrap cp-section cp-sitemap">{[['Home', 'home'], ['Businesses', 'businesses'], ['Insights', 'insights'], ['About', 'about', ...aboutPages.map(slug)], ['Become a Client', 'become-client', 'open-account', 'talk-to-team', 'forms'], ['Utility', 'careers', 'contact', 'login'], ['Footer', 'terms', 'privacy', 'risk', 'sitemap', 'search']].map(([t, ...ids]) => <div key={t}><h2>{t}</h2>{ids.map(id => <Link to={id} key={id}>{business.find(b => b.id === id)?.name || aboutPages.find(x => slug(x) === id) || ({
                'home': 'Home',
                'sitemap': 'Sitemap',
                'businesses': 'Overview',
                'about': 'Overview',
                'become-client': 'Overview',
                'open-account': 'Open an Account',
                'talk-to-team': 'Talk to Our Team',
                'forms': 'Forms & Documents',
                'login': 'Client Login',
                'privacy': 'Privacy Policy',
                'risk': 'Risk Disclaimer',
                'terms': 'Terms of Use',
                'contact': 'Contact Us',
                'insights': 'Overview',
                'careers': 'Careers',
                'search': 'Search'
              } as any)[id]}</Link>)}{t === "Businesses" && ["For investors", "For companies"].map(group => <div key={group} className="cp-sitemap-audience"><h3>{group}</h3>{business.filter(b => b.audience === group).map(b => <Link key={b.id} to={b.id}>{b.name}</Link>)}</div>)}{t === "Insights" && types.slice(1).map(type => <Link key={type} to="insights" preFilter={type}>{type}</Link>)}</div>)}</section></> : page === 'search' ? <>{intro('SEARCH', 'What are you looking for?', 'Search business services and key website pages.')}<section className="cp-wrap cp-section"><label>Search the website<input type="search" value={siteQuery} placeholder="Try investment banking" onChange={e => setSiteQuery(e.target.value)} /></label><div className="cp-section">{business.filter(b => (b.name + ' ' + b.desc).toLowerCase().includes(siteQuery.toLowerCase())).map(b => <Link to={b.id} key={b.id} className="cp-business-row"><div><h2>{b.name}</h2><p>{b.desc}</p></div><Arrow /></Link>)}</div>{searchPages.filter(p => p.name.toLowerCase().includes(siteQuery.toLowerCase())).map(p => <Link to={p.id} key={p.id} className="cp-business-row"><h2>{p.name}</h2><Arrow /></Link>)}{!business.some(b => (b.name + ' ' + b.desc).toLowerCase().includes(siteQuery.toLowerCase())) && !searchPages.some(p => p.name.toLowerCase().includes(siteQuery.toLowerCase())) && <div className="cp-empty"><h2>No matching page found.</h2><p>Try a broader search or explore all businesses.</p>{btn('businesses', 'Explore Businesses')}</div>}</section></> : ['terms', 'privacy', 'risk'].includes(page) ? <>{intro('WEBSITE INFORMATION', page === 'terms' ? 'Terms of Use' : page === 'privacy' ? 'Privacy Policy' : 'Risk Disclaimer', 'Information to help you use this website and our services responsibly.')}<section className="cp-wrap cp-reading"><h2>{page === 'risk' ? 'Understand the risks.' : 'Read the published policy.'}</h2><p>{page === 'risk' ? 'Please speak with the relevant Ciptadana business about the risks, terms and suitability of a financial product or service before proceeding.' : 'The complete published policy is available on the existing Ciptadana website.'}</p>{page !== 'risk' ? <a href={'https://www.ciptadana.com/' + (page === 'terms' ? 'terms-of-use' : 'privacy-policy')} target="_blank" rel="noreferrer" className="cp-button">View published {page === 'terms' ? 'Terms of Use' : 'Privacy Policy'} ↗</a> : btn('contact', 'Contact Us')}<p className="cp-small">Final policy and regulatory statements require confirmation by Ciptadana.</p></section></> : null}
 </main><footer className="cp-footer"><div className="cp-wrap"><div className="cp-footer-top"><Link to="home" className="cp-logo"><img src={media.whiteLogo} alt="Ciptadana" /><span>CAPITAL</span></Link><p>A broader perspective.<br />Since 1990.</p><Link to="search" className="cp-text-link">Search the website ↗</Link></div><div className="cp-footer-nav"><div><h3>Businesses</h3>{business.map(b => <Link to={b.id} key={b.id}>{b.name}</Link>)}</div><div><h3>Company</h3><Link to="about">About Ciptadana</Link><Link to="insights">Insights</Link><Link to="careers">Careers</Link><Link to="contact">Contact Us</Link></div><div><h3>Your next step</h3><Link to="become-client">Become a Client</Link><Link to="open-account">Open an Account</Link><Link to="talk-to-team">Talk to Our Team</Link><Link to="forms">Forms & Documents</Link><Link to="login">Client Login ↗</Link></div></div><div className="cp-footer-bottom"><span>© {new Date().getFullYear()} Ciptadana. All rights reserved.</span><div><Link to="terms">Terms of Use</Link><Link to="privacy">Privacy Policy</Link><Link to="risk">Risk Disclaimer</Link><Link to="sitemap">Sitemap</Link></div></div></div></footer></div>;
}
export const CiptadanaResponsiveWebsiteRouteSystem = () => <CiptadanaSite />;