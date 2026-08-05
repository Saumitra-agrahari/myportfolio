import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

const profileImageUrl = 'https://i.postimg.cc/rVRBm0hM/Whats-App-Image-2026-07-05-at-13-09-58.jpg'
const emailJsServiceId = 'service_v9mvky3'
const emailJsTemplateId = 'template_exhvr6k'
const emailJsPublicKey = 'rrHA1F4eSP5X00_Il'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  {
    title: 'Backend',
    icon: '⇄',
    items: ['Django REST Framework', 'FastAPI', 'Node.js', 'Next.js', 'REST APIs'],
  },
  {
    title: 'Frontend',
    icon: '▣',
    items: ['React.js', 'Next.js', 'TypeScript', 'HTML5', 'Tailwind CSS', 'React Native'],
  },
  {
    title: 'Programming Languages',
    icon: '</>',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI / ML',
    icon: '✦',
    items: ['YOLOv8', 'OpenCV', 'Face Recognition', 'PyTorch', 'NumPy', 'LangGraph', 'RAG', 'AI Agents', 'Prompt Engineering'],
  },
  {
    title: 'Databases',
    icon: '⌁',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Developer Tools',
    icon: '⌘',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Firebase', 'Figma'],
  },
]

const experience = [
  {
    role: 'Team Lead, Patent Management System',
    org: 'Fusion IIITDM',
    meta: 'Aug 2025 – Apr 2026',
    location: 'IIITDM Jabalpur',
    summary:
      'Led a team of 10 developers to architect and deploy a distributed Patent Management System, improving workflow efficiency by 30%; designed scalable Django backend services; implemented role-based access control; optimized PostgreSQL queries, reducing data retrieval time by 40%.',
  },
  {
    role: 'Freelance Software Engineer, GCP-Based Web Application Development',
    org: 'Private Client',
    meta: 'Jan 2025 – Mar 2025',
    location: 'Remote, Pune, India',
    summary:
      'Designed and deployed a production full-stack web app on GCP, containerized with Docker and served via Cloud Run; configured GCP IAM roles, service accounts, and secrets management; automated CI/CD via GitHub Actions.',
  },
]

const projects = [
  {
    name: 'CampusAI',
    timeframe: 'Mar 2026 – Present',
    description:
      'Agentic AI smart campus platform with 50+ REST APIs, JWT auth, Docker deployment, and 10+ LangGraph agents for academic assistance and campus automation.',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'JWT', 'LangGraph', 'RAG', 'Docker'],
    github: 'https://github.com/Saumitra-agrahari/campusai',
  },
  {
    name: 'Smart Bag-Pack',
    timeframe: 'Sept 2025 – Apr 2026',
    description:
      'IoT-based distributed tracking system with real-time sensor tracking via MQTT on Raspberry Pi, geofencing, and WebSocket streaming with sub-2s latency.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'MQTT', 'WebSocket', 'JWT'],
    github: 'https://github.com/Saumitra-agrahari/edp28',
  },
  {
    name: 'SecureSight – AI-Powered Surveillance System',
    timeframe: '2026',
    description:
      'SecureSight is an AI-powered surveillance system that leverages YOLOv8, OpenCV, Flask, and Face Recognition to detect weapons, recognize faces, monitor real-time camera feeds, and send instant alerts through a Flask-based web dashboard.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'Face Recognition', 'Computer Vision', 'Deep Learning', 'Real-time Video Processing'],
    github: 'https://github.com/aDHarSH0824/SecureSight',
  },
  {
    name: 'Netropolis',
    timeframe: 'Jan 2025 – Apr 2025',
    description:
      'Rural workforce matching platform connecting rural workers with volunteers through Google OAuth, semantic search, and vector database powered matching.',
    tags: ['React', 'Django REST Framework', 'PostgreSQL', 'OAuth 2.0', 'VectorDB', 'Sentence Transformers'],
    github: 'https://github.com/Saumitra-agrahari/netropo_lis',
  },
]

const highlights = [
  '1900+ rating on LeetCode (Knight) and 1450+ rating on Codeforces (Specialist)',
  'Solved 1000+ competitive programming problems',
  'Semifinalist, Flipkart GRID 8.0',
  'Top 10 at IIITDMJ Coding Hackathon “Code Rumble”',
  'Coordinator of Jazbaat: The Dramatics Club',
  'Event Management Head, Riwayat College Fest',
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/saumitra45', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com/Saumitra-agrahari', icon: 'GH' },
  { label: 'Email', href: 'mailto:saumitraraj13@gmail.com', icon: '@' },
]

function App() {
  const formRef = useRef<HTMLFormElement>(null)
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current) {
      return
    }

    setIsSubmitting(true)
    setStatusMessage('')

    try {
      await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, formRef.current, {
        publicKey: emailJsPublicKey,
      })

      formRef.current.reset()
      setStatusMessage('Message sent successfully. I will get back to you soon.')
    } catch {
      setStatusMessage('Something went wrong while sending the message. Please email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          Saumitra.
        </a>

        <button
          className={`mobile-nav-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="Primary" className={`site-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Hire me
        </a>
      </header>

      {menuOpen ? <div className="mobile-menu-backdrop" onClick={closeMenu} /> : null}

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow">Final-year CSE @ PDPM IIIT Jabalpur</p>
            <h1>
              Saumitra <span>Agrahari</span>
            </h1>
            <p className="tagline">Full-Stack Developer | AI &amp; Software Engineering Enthusiast</p>
            <p className="intro">
              I build scalable web applications and AI-powered solutions with React, Next.js,
              Django, FastAPI, Python, TypeScript and LangGraph.
            </p>

            <div className="hero-badges" aria-label="Key strengths">
              <span>Full-stack systems</span>
              <span>AI / GenAI</span>
              <span>Competitive programming</span>
              <a href="https://leetcode.com/u/saumitra16/" target="_blank" rel="noreferrer">
                Knight on LeetCode
              </a>
              <a href="https://codeforces.com/profile/saumitraraj16" target="_blank" rel="noreferrer">
                Specialist on Codeforces
              </a>
            </div>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View My Work
              </a>
              <a className="secondary-btn" href="#contact">
                Get In Touch
              </a>
            </div>

            <div className="social-links" aria-label="Social links">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal" aria-label="Profile picture placeholder">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="profile-frame">
              <img className="profile-image" src={profileImageUrl} alt="Saumitra Agrahari profile photo" />
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>A developer who ships end to end</h2>
          </div>

          <div className="about-grid">
            <article className="glass-card about-card reveal">
              <p>
                I'm Saumitra Agrahari, a final-year Computer Science student at IIIT Jabalpur and
                a full-stack developer passionate about AI and software engineering. I build
                scalable web applications and AI-powered solutions using React, Next.js, Django,
                FastAPI, Python, TypeScript, and LangGraph. I enjoy solving complex problems
                through competitive programming and developing innovative products that combine
                modern technology with great user experiences.
              </p>

              <div className="education-card">
                <p className="mini-label">Education</p>
                <h3>B.Tech in Computer Science and Engineering</h3>
                <p>PDPM Indian Institute of Information Technology, Design and Manufacturing, Jabalpur</p>
                <p>Aug 2023 – Jul 2027 (Expected)</p>
              </div>
            </article>

            <div className="about-points">
              <article className="glass-card info-card reveal">
                <h3>AI &amp; GenAI</h3>
                <p>LangGraph agents, RAG pipelines, vector search</p>
              </article>
              <article className="glass-card info-card reveal">
                <h3>Full-Stack</h3>
                <p>React / Next.js frontends on Django &amp; FastAPI backends</p>
              </article>
              <article className="glass-card info-card reveal">
                <h3>CS Fundamentals</h3>
                <p>1000+ competitive programming problems</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading reveal">
            <p className="eyebrow">Skills</p>
            <h2>Tools and fundamentals I work with</h2>
            <p>From low-level CS fundamentals to production backends, modern frontends and agentic AI systems.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.title} className="glass-card skill-card reveal">
                <div className="card-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <div className="tag-list">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="eyebrow">Experience</p>
            <h2>Where I’ve built and led</h2>
            <p>Leading teams and shipping production systems across distributed backends and cloud infrastructure.</p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-item glass-card reveal">
                <div className="timeline-meta">
                  <p>{item.meta}</p>
                  <p>{item.location}</p>
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="org-name">{item.org}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">Projects</p>
            <h2>Production-minded products and systems</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="glass-card project-card reveal">
                <p className="mini-label">{project.timeframe}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list compact">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.github ? (
                  <a
                    className="project-link-btn"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading reveal">
            <p className="eyebrow">Services</p>
            <h2>What I help build</h2>
          </div>

          <article className="glass-card service-card reveal">
            <h3>Full-Stack Development</h3>
            <p>
              End-to-end web application design and development, from scalable backend architecture
              to responsive, modern frontends.
            </p>
          </article>
        </section>

        <section className="section" id="achievements">
          <div className="section-heading reveal">
            <p className="eyebrow">Achievements &amp; Certifications</p>
            <h2>Competitive programming and leadership highlights</h2>
          </div>

          <div className="achievement-grid">
            {highlights.map((item) => (
              <article key={item} className="glass-card achievement-card reveal">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading reveal">
            <p className="eyebrow">Contact</p>
            <h2>Let’s talk about product, AI, or shipping something useful</h2>
          </div>

          <div className="contact-grid">
            <form ref={formRef} className="glass-card contact-form reveal" onSubmit={handleContactSubmit}>
              <label>
                Name
                <input type="text" name="from_name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="reply_to" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={6} placeholder="Tell me what you're building" required />
              </label>
              <button type="submit" className="primary-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage ? <p className="form-status">{statusMessage}</p> : null}
            </form>

            <aside className="glass-card contact-details reveal">
              <h3>Direct contact</h3>
              <a href="mailto:saumitraraj13@gmail.com">saumitraraj13@gmail.com</a>
              <a href="tel:+918539918727">+91 8539918727</a>
              <a href="https://linkedin.com/in/saumitra45" target="_blank" rel="noreferrer">
                linkedin.com/in/saumitra45
              </a>
              <a href="https://github.com/Saumitra-agrahari" target="_blank" rel="noreferrer">
                github.com/Saumitra-agrahari
              </a>
              <p className="contact-note">
                Phone is listed as a secondary option. Email is usually the fastest way to reach me.
              </p>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
