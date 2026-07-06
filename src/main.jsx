import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BriefcaseBusiness, Code2, Download, GraduationCap, Mail, MousePointer2, Sparkles, Star, UserRound } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const navItems = ['Home', 'About', 'Service', 'Resume', 'Project', 'Contact'];

const services = [
  {
    title: 'Python Full Stack',
    text: 'Backend logic, APIs, database workflows, and clean web interfaces using Python ecosystems.',
    accent: '2025',
  },
  {
    title: 'Full Stack Development',
    text: 'Modern frontend and backend development with responsive layouts and practical app features.',
    accent: '2026',
  },
  {
    title: 'Software Engineering',
    text: 'Problem solving, maintainable code, debugging, and project-ready development practices.',
    accent: 'Learning',
  },
];

const projects = [
  'Student portal UI',
  'Python API dashboard',
  'Full stack web app',
  'Portfolio website',
];

const timeline = [
  {
    company: 'SRMCEM',
    date: 'B.Tech, Passout 2028',
    role: 'Aspiring Software Engineer',
    body: 'Currently pursuing B.Tech with a focus on software engineering, full stack development, and practical project building.',
  },
  {
    company: 'SRDT Internship',
    date: '2025',
    role: 'Python Full Stack Intern',
    body: 'Completed a Python full stack internship covering backend fundamentals, frontend integration, and hands-on development workflows.',
  },
  {
    company: 'SRDT Internship',
    date: '2026 - Present',
    role: 'Full Stack Development Intern',
    body: 'Currently building full stack development skills through real-world training, responsive interfaces, and application logic.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

function Navigation() {
  return (
    <motion.header className="nav-shell" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
      <nav className="nav">
        {navItems.slice(0, 3).map((item, index) => (
          <a className={index === 0 ? 'active' : ''} href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
        <a className="brand" href="#home" aria-label="Khushi home">
          <span>K</span>
          KHUSHI
        </a>
        {navItems.slice(3).map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <motion.div className="hello-pill" initial={{ scale: 0.7, rotate: -8, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ delay: 0.45 }}>
        Hello
      </motion.div>
      <motion.h1 initial="hidden" animate="show" variants={fadeUp}>
        I'm <span>Khushi</span>,<br /> Software Engineer
      </motion.h1>
      <div className="hero-stage">
        <motion.aside className="quote" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <b>&quot;</b>
          <p>Aspiring software engineer building full stack skills through B.Tech coursework and SRDT internships.</p>
        </motion.aside>
        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <div className="sun"></div>
          <img src="/assets/khushi-portrait.png" alt="Khushi Tripathi portrait" />
          <motion.div className="hero-cta" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a href="#project">Projects <ArrowUpRight size={19} /></a>
            <a href="#contact">Contact</a>
          </motion.div>
        </motion.div>
        <motion.aside className="rating" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div>{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>
          <strong>2028</strong>
          <span>B.Tech Passout</span>
        </motion.aside>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section" id="service">
      <div className="section-head dark">
        <h2>My <span>Skills</span></h2>
        <p>Focused on full stack development, Python foundations, responsive interfaces, and software engineering basics.</p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <motion.article
            className="service-card"
            key={service.title}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            whileHover={{ y: -12, rotate: index === 1 ? 0 : index === 0 ? -1.3 : 1.3 }}
          >
            <div className="service-top">
              <h3>{service.title}</h3>
              <span>{service.accent}</span>
            </div>
            <MockupPreview variant={index} />
            <button aria-label={`Open ${service.title}`}>
              <ArrowUpRight size={34} />
            </button>
          </motion.article>
        ))}
      </div>
      <div className="dots" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
    </section>
  );
}

function MockupPreview({ variant }) {
  return (
    <div className={`mockup mockup-${variant}`}>
      <div className="phone">
        <span></span><i></i><i></i><b></b>
      </div>
      <div className="panel">
        <span></span><span></span><span></span>
        <div></div>
      </div>
      <div className="mini">
        <span></span><b></b>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="experience section" id="resume">
      <div className="section-head">
        <h2>My <span>Journey</span></h2>
      </div>
      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.article className="timeline-row" key={item.company} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="company">
              <h3>{item.company}</h3>
              <span>{item.date}</span>
            </div>
            <div className="pin"><span></span></div>
            <div className="role">
              <h3>{item.role}</h3>
              <p>{item.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects section" id="project">
      <div className="section-head">
        <h2>Selected <span>Projects</span></h2>
        <p>Starter project cards for showcasing internships, coursework, and full stack practice work.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article className="project-card" key={project} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <MockupPreview variant={index % 3} />
            <div>
              <h3>{project}</h3>
              <a href="#contact">View case <ArrowUpRight size={17} /></a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <motion.div className="contact-panel" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div>
          <span className="eyebrow">Open to learning opportunities</span>
          <h2>Let's build something useful.</h2>
          <p>Khushi Tripathi is an aspiring software engineer pursuing B.Tech from SRMCEM, graduating in 2028.</p>
        </div>
        <div className="contact-actions">
          <a href="mailto:khushi.tripathi@example.com"><Mail size={18} /> khushi.tripathi@example.com</a>
          <a href="/assets/khushi-portrait.png" download><Download size={18} /> Download portrait</a>
        </div>
      </motion.div>
      <footer>
        <span><UserRound size={16} /> Khushi Tripathi</span>
        <span><GraduationCap size={16} /> B.Tech SRMCEM</span>
        <span><Code2 size={16} /> Full Stack</span>
        <span><BriefcaseBusiness size={16} /> SRDT Intern</span>
        <span><Sparkles size={16} /> Passout 2028</span>
        <span><MousePointer2 size={16} /> Smooth Motion</span>
      </footer>
    </section>
  );
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
