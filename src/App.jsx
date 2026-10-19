import React, {useEffect, useState} from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronUp,
  Code2, Download, ExternalLink, FileText, Github, GraduationCap,
  Linkedin, Mail, MapPin, Menu, Moon, Sparkles, Sun, X
} from 'lucide-react';
import {profile, featuredProjects, otherProjects, certificates, skillGroups, education, experience} from './data';

const navigation = [
  ['Work', '#work'], ['About', '#about'], ['Skills', '#skills'],
  ['Journey', '#journey'], ['Certificates', '#certificates'], ['Contact', '#contact'],
];

function IconLink({href, title, children}) {
  return <a href={href} title={title} aria-label={title} target="_blank" rel="noopener noreferrer" className="social-icon">{children}</a>;
}

function NavBar({light, setLight}) {
  const [isOpen,setIsOpen] = useState(false);
  return <header className="navbar">
    <a className="logo" href="#home" aria-label="Back to home">marwa<span>.</span></a>
    <nav className={isOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Site navigation">
      {navigation.map(([name,href]) => <a href={href} key={name} onClick={() => setIsOpen(false)}>{name}</a>)}
    </nav>
    <div className="nav-actions">
      <button className="theme-btn" type="button" onClick={() => setLight(!light)} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'} title="Toggle color theme">{light ? <Moon size={17}/> : <Sun size={17}/>}</button>
      <a className="nav-contact" href={'mailto:' + profile.email}>Let's connect <ArrowUpRight size={15}/></a>
      <button className="menu-btn" aria-label={isOpen?'Close menu':'Open menu'} aria-expanded={isOpen} type="button" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={23}/> : <Menu size={23}/>}</button>
    </div>
  </header>;
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-noise" aria-hidden="true"/>
    <div className="hero-gradient" aria-hidden="true"/>
    <div className="hero-content">
      <div className="availability"><span className="green-dot"/> {profile.availability}</div>
      <div className="hero-overline"><span className="line"/> HELLO, I'M</div>
      <h1>Marwa<br/><span>Naikkhwah</span><i>.</i></h1>
      <h2>{profile.role}</h2>
      <p className="hero-description">{profile.intro}</p>
      <div className="hero-buttons">
        <a className="btn btn-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
        <a className="btn btn-ghost" href={'mailto:'+profile.email}>Contact me <ArrowRight size={16}/></a>
        <a className="cv-inline" href="/resume/Marwa_Naikkhwah_Resume.pdf" download>Resume <Download size={14}/></a>
      </div>
      <div className="hero-tech" aria-label="Technologies">{['React', 'JavaScript', 'HTML / CSS', 'Bootstrap', 'Git & GitHub'].map(t=><span key={t}>{t}</span>)}</div>
    </div>
    <div className="hero-visual" aria-hidden="true">
      <div className="code-window">
        <div className="window-header"><span/><span/><span/><small>marwa.dev / welcome.jsx</small></div>
        <div className="code-lines">
          <div><b>01</b><span className="purple">const</span> <span className="white">developer</span> = {'{'}</div>
          <div><b>02</b>&nbsp; name: <span className="mint">'Marwa'</span>,</div>
          <div><b>03</b>&nbsp; passion: <span className="mint">'Frontend'</span>,</div>
          <div><b>04</b>&nbsp; mindset: <span className="mint">'Always learning'</span>,</div>
          <div><b>05</b>&nbsp; location: <span className="mint">'Kabul'</span></div>
          <div><b>06</b>{'}'};</div>
          <div><b>07</b></div>
          <div><b>08</b><span className="purple">export default</span> developer<span className="caret">▌</span></div>
        </div>
        <div className="code-footer"><span className="online"/> Available for collaboration <Code2 size={15}/></div>
      </div>
      <div className="float-bubble float-one"><Sparkles size={17}/> Build thoughtfully</div>
      <div className="float-bubble float-two"><Code2 size={17}/> Create with purpose</div>
    </div>
    <div className="hero-facts">
      <div><strong>05</strong><span>Personal & team projects</span></div>
      <div><strong>02</strong><span>Coursera certificates</span></div>
      <div><strong>Kabul, AF</strong><span>Open to remote work</span></div>
    </div>
    <a href="#work" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14}/></a>
  </section>;
}

function Heading({number, label, title, accent, subtitle}) {
  return <div className="section-heading"><div><div className="eyebrow">{number} <span>/</span> {label}</div><h2>{title} <em>{accent}</em></h2>{subtitle && <p>{subtitle}</p>}</div></div>;
}

function ProjectCard({project,index,compact=false}) {
  return <article className={compact ? 'project-card project-card-small' : 'project-card'}>
    <div className="project-art">
      <img src={project.image} alt={project.alt} loading="lazy"/>
      <span className="project-label">{project.badge}</span>
      <span className="art-note">Illustrative preview</span>
    </div>
    <div className="project-info">
      <div className="project-meta"><span>{project.type}</span><span>{project.year} / {String(index+1).padStart(2,'0')}</span></div>
      <h3>{project.title}</h3>
      <p className="summary">{project.summary}</p>
      {!compact && <p className="contribution"><strong>My contribution</strong> — {project.contribution}</p>}
      <div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      <div className="project-actions">
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">Live demo <ArrowUpRight size={16}/></a>}
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="code-link"><Github size={16}/> {project.id==='calculator'?'View source file':'GitHub code'} <ArrowUpRight size={14}/></a>
      </div>
    </div>
  </article>;
}

function Projects() {
  const [filter,setFilter] = useState('all');
  const showFeatured = filter !== 'more';
  const showMore = filter !== 'featured';
  return <section id="work" className="section work-section">
    <Heading number="01" label="SELECTED WORK" title="Things I've" accent="built." subtitle="Real projects, ongoing learning, and a little experimentation. Each project represents a step forward."/>
    <div className="work-toolbar"><div className="filter-buttons" aria-label="Filter projects">
      {[['all','All work'],['featured','Featured'],['more','Smaller builds']].map(([key,title])=><button type="button" key={key} className={filter===key?'filter active':'filter'} onClick={()=>setFilter(key)} aria-pressed={filter===key}>{title}</button>)}
    </div><span className="project-count">05 PROJECTS · 100% REAL WORK</span></div>
    {showFeatured && <div className="project-grid featured-grid">{featuredProjects.map((project,index)=><ProjectCard key={project.id} project={project} index={index}/>)}</div>}
    {showMore && <><div className="subsection-title"><span>More projects</span><span>Small builds, big lessons</span></div><div className="project-grid more-grid">{otherProjects.map((project,index)=><ProjectCard key={project.id} project={project} index={index+3} compact/>)}</div></>}
    <div className="project-next"><span className="icon-blob"><Sparkles size={20}/></span><div><strong>More in the making.</strong><p>I'm continuing to learn and add new work as my skills grow.</p></div><a href={profile.github} target="_blank" rel="noopener noreferrer">Explore all repositories <ArrowUpRight size={17}/></a></div>
  </section>;
}

function About() {
  return <section id="about" className="section"><Heading number="02" label="ABOUT ME" title="Creative thinking." accent="Practical code."/><div className="about-layout"><div className="about-intro"><div className="about-symbol"><Sparkles size={25}/></div><p>{profile.about}</p><a href="/resume/Marwa_Naikkhwah_Resume.pdf" download className="under-link">Download my resume <Download size={16}/></a></div><div className="qualities"><div><span>01</span><h3>Curious by nature</h3><p>Always learning, asking questions, and experimenting with new ideas.</p></div><div><span>02</span><h3>Designed for people</h3><p>Responsive experiences that make interfaces feel approachable.</p></div><div><span>03</span><h3>Better together</h3><p>Experience collaborating on real web development projects.</p></div></div></div></section>;
}

function Skills() {
  return <section id="skills" className="section"><Heading number="03" label="MY TOOLKIT" title="Skills &" accent="technologies." subtitle="Tools I have used, studied, and continue to strengthen through practice."/><div className="skill-groups">{skillGroups.map(group=><div className="skill-panel" key={group.label}><div className="skill-group-header"><span>{group.label}</span><small>{group.note}</small></div><div className="skill-pills">{group.skills.map(skill=><span key={skill}>{skill} <Check size={12}/></span>)}</div></div>)}</div></section>;
}

function Journey() {
  return <section id="journey" className="section"><Heading number="04" label="BACKGROUND" title="My" accent="journey." subtitle="An interdisciplinary background and a growing path in technology."/><div className="journey-grid"><div className="journey-column"><div className="journey-title"><GraduationCap size={19}/> EDUCATION</div>{education.map(item=><div className="journey-item" key={item.school}><span className="timeline-bullet"/><div className="journey-details"><span className="journey-date">{item.date}</span><h3>{item.degree}</h3><p>{item.school}</p><small>{item.status}</small></div></div>)}</div><div className="journey-column"><div className="journey-title"><BriefcaseBusiness size={19}/> EXPERIENCE</div>{experience.map(item=><div className="journey-item" key={item.title}><span className="timeline-bullet"/><div className="journey-details"><span className="journey-date">{item.date}</span><h3>{item.title}</h3><p>{item.organization}</p><div className="experience-desc">{item.description}</div><small className="internship-note">{item.note}</small></div></div>)}<div className="journey-quote"><Code2 size={21}/><p>Learning through building. Growing through doing.</p></div></div></div></section>;
}

function Certifications() {
  return <section id="certificates" className="section"><Heading number="05" label="LIFELONG LEARNING" title="Courses &" accent="certificates." subtitle="Completed Coursera courses from IBM and the University of Michigan."/><div className="certificate-grid">{certificates.map(cert=><article className="certificate-card" key={cert.title}><div className="cert-art"><a href={cert.image} target="_blank" rel="noopener noreferrer" title="Open certificate image"><img src={cert.image} loading="lazy" alt={cert.alt}/></a></div><div className="cert-body"><div className="cert-badge">COURSE CERTIFICATE · {cert.platform}</div><h3>{cert.title}</h3><p>{cert.description}</p><div className="cert-footer"><div><strong>{cert.issuer}</strong><span>{cert.date}</span></div><a href={cert.image} target="_blank" rel="noopener noreferrer" aria-label={'View image of '+cert.title}>Preview <ExternalLink size={14}/></a></div></div></article>)}</div><p className="cert-disclaimer">Certificate images are cropped from the proof supplied by the certificate holder. Add public Coursera verification links in <code>src/data.js</code> when available.</p></section>;
}

function Contact() {
  const [copied,setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email);setCopied(true);window.setTimeout(()=>setCopied(false),2200); }
    catch { window.location.href='mailto:'+profile.email; }
  }
  return <section id="contact" className="section contact-section"><div className="contact-glow" aria-hidden="true"/><div className="contact-content"><div className="eyebrow">06 <span>/</span> GET IN TOUCH</div><div className="contact-kicker">GOT SOMETHING IN MIND?</div><h2>Let's create <span>something good.</span></h2><p>I'm open to meaningful frontend projects, internships, and remote opportunities. Have an idea or want to connect?</p><div className="contact-buttons"><a className="btn btn-primary" href={'mailto:'+profile.email+'?subject=Hello%20Marwa'}>Send an email <ArrowUpRight size={17}/></a><button className="btn btn-outline" type="button" onClick={copyEmail}>{copied ? <><Check size={16}/> Email copied</> : <><Mail size={16}/> Copy email</>}</button></div><a className="contact-email" href={'mailto:'+profile.email}>{profile.email}</a></div></section>;
}

function Footer() {
  return <footer className="footer"><div><a href="#home" className="logo">marwa<span>.</span></a><p>Designed and built with care, curiosity & React.</p></div><div className="footer-right"><div className="footer-icons"><IconLink href={profile.github} title="GitHub profile"><Github size={17}/></IconLink><IconLink href={profile.linkedin} title="LinkedIn profile"><Linkedin size={17}/></IconLink><IconLink href={'mailto:'+profile.email} title="Email Marwa"><Mail size={17}/></IconLink></div><small>© {new Date().getFullYear()} Marwa Naikkhwah</small></div></footer>;
}

export default function App() {
  const [light,setLight] = useState(false);
  const [showTop,setShowTop] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = light ? 'light' : 'dark'; },[light]);
  useEffect(() => {
    function onScroll() {setShowTop(window.scrollY>550);}
    window.addEventListener('scroll',onScroll,{passive:true});return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  return <><div className="background-orbs" aria-hidden="true"/><div className="container"><NavBar light={light} setLight={setLight}/><main><Hero/><Projects/><About/><Skills/><Journey/><Certifications/><Contact/></main><Footer/></div>{showTop && <a className="back-to-top" href="#home" aria-label="Back to top"><ChevronUp size={20}/></a>}</>;
}
