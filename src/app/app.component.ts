import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header class="site-header"><a class="wordmark" href="#top">ST<span>.</span></a><nav aria-label="Primary"><a href="#experience">Experience</a><a href="#work">Work</a><a href="#skills">Expertise</a><a href="#writing">Writing</a><a href="#contact">Contact</a></nav><a class="header-link" href="assets/Saket-Tiwari-Resume.pdf" target="_blank">Resume</a></header>
    <main id="top">
      <section class="hero section">
        <div class="hero-copy">
          <p class="eyebrow">GURUGRAM, INDIA</p>
          <h1>Saket Tiwari</h1>
          <p class="hero-role">Full Stack .NET Developer · Angular, Azure & Applied AI</p>
          <p class="lede">I build enterprise applications from API to interface. At Accenture and Infosys, my work has spanned secure ASP.NET Core services, Angular workflows, and performance tuning for production systems. I also prototype AI features that help users explore data in natural language.</p>
          <div class="actions">
            <a class="button" href="assets/Saket-Tiwari-Resume.pdf" download>Download résumé</a>
            <a class="text-link" href="#work">View selected work</a>
            <a class="text-link" href="#contact">Let’s work together</a>
          </div>
        </div>
        <div class="portrait-wrap">
          <img src="assets/saket-tiwari-headshot.jpeg" alt="Saket Tiwari" class="portrait" width="1122" height="1402" fetchpriority="high">
        </div>
      </section>
      <section class="proof section recruiter-proof" aria-label="Fleet platform results at Accenture">
        <article><strong>50K+</strong><span>monthly active users on the fleet-management platform</span></article>
        <article><strong>~30%</strong><span>lower P95 latency on a high-traffic transaction flow</span></article>
        <article><strong>25%</strong><span>less SQL query time on large transactional tables</span></article>
      </section>
      <section id="experience" class="section experience"><div class="section-intro"><p class="eyebrow">01 / EXPERIENCE</p><h2>Engineering systems that hold up under pressure.</h2></div><div class="timeline"><article class="role"><div class="role-meta"><span>Jul 2024 — Present</span><span>Gurugram, India</span></div><div><h3>Full Stack .NET Developer</h3><p class="company"><a class="text-link" href="https://www.accenture.com/en" target="_blank" rel="noopener noreferrer">Accenture</a> <span>· Packaged App Development Analyst</span></p><p>Developing a fleet-management platform for 50,000+ monthly active users. I work across transaction flows, secure APIs, asynchronous services, and production observability.</p><ul class="impact-list"><li><strong>Transaction performance.</strong> Separated reads and writes with CQRS so read-heavy endpoints could scale independently. P95 latency fell by about 30%.</li><li><strong>Asynchronous messaging.</strong> Moved notification delivery to Azure Service Bus to isolate notification failures from the transaction flow.</li><li><strong>API delivery.</strong> Shipped 15+ JWT-secured REST APIs and Azure Functions jobs through Azure DevOps CI/CD.</li><li><strong>Database performance.</strong> Analyzed SQL Server execution plans and redesigned indexes, cutting query time by 25% on large transactional tables.</li><li><strong>Production reliability.</strong> Diagnosed 50+ incidents with client stakeholders using Application Insights. Repeat downtime incidents fell by 20%.</li><li><strong>AI prototyping and mentoring.</strong> Explored prompt-based fleet analytics with Azure AI and LLMs, and mentored four junior developers through reviews and knowledge-sharing sessions.</li></ul></div></article><article class="role"><div class="role-meta"><span>Jun 2022 — Jul 2024</span><span>Gurugram, India</span></div><div><h3>Full Stack .NET Developer</h3><p class="company"><a class="text-link" href="https://www.infosys.com/" target="_blank" rel="noopener noreferrer">Infosys</a> <span>· Digital Specialist Engineer</span></p><p>Built enterprise applications for a Big Four audit and advisory client, with a focus on scalable services and responsive workflow interfaces.</p><ul class="impact-list"><li><strong>Data access.</strong> Tuned EF Core and LINQ queries and database indexes on high-volume datasets, improving retrieval time by 20%.</li><li><strong>Service development.</strong> Delivered 20+ REST APIs across modular ASP.NET Core microservices supporting complex audit and advisory workflows.</li><li><strong>Frontend delivery.</strong> Built responsive Angular workflow screens with reactive forms, validation, and state management connected to backend services.</li><li><strong>Automated testing.</strong> Added xUnit and Moq tests alongside each feature to improve coverage and reliability.</li></ul></div></article></div></section>
      <section id="work" class="section work">
        <div class="section-intro"><p class="eyebrow">SELECTED WORK</p><h2>Projects and design decisions</h2></div>
        <div class="case-study-grid">
          <article class="project ticket-case">
            <p class="project-type">FULL-STACK CASE STUDY</p>
            <h3>Customer Service Ticketing Platform</h3>
            <p>I built a ticketing system that supports the full ticket lifecycle, from creating a request to tracking its resolution.</p>
            <ul class="tags"><li>ASP.NET Core</li><li>Angular</li><li>SQL Server</li><li>CQRS</li></ul>
            <dl class="case-details">
              <dt>API design</dt>
              <dd>Separated commands that change tickets from queries that retrieve them, giving reads and writes their own paths across 30+ REST endpoints.</dd>
              <dt>Workflow and notifications</dt>
              <dd>Used Angular reactive forms for ticket interactions and a message queue to keep notification delivery separate from the main workflow.</dd>
              <dt>Verification</dt>
              <dd>Wrote 80+ automated tests to make the platform easier to maintain as the workflow evolves.</dd>
            </dl>
            <a class="project-link" href="https://github.com/sakthere/distributed-ticket-platform" target="_blank" rel="noopener noreferrer">View ticketing platform on GitHub</a>
          </article>
          <article class="project secondary-project">
            <p class="project-type">IN PROGRESS · APPLIED AI</p>
            <h3>JobHunter</h3>
            <p>A local-first assistant for preparing and reviewing job applications from one verified candidate profile.</p>
            <ul class="tags"><li>TypeScript</li><li>.NET Core</li><li>Claude API</li><li>Playwright</li></ul>
            <dl class="case-details">
              <dt>Verified profile</dt>
              <dd>Reuse candidate details across applications and use verified data to pre-fill forms.</dd>
              <dt>AI drafting</dt>
              <dd>Generate tailored cover letters and résumé adjustments with Claude behind a swappable provider layer.</dd>
              <dt>Review before submission</dt>
              <dd>Playwright handles form pre-fill. Submission requires explicit approval.</dd>
            </dl>
            <a class="project-link" href="https://github.com/sakthere?tab=repositories" target="_blank" rel="noopener noreferrer">Browse my GitHub repositories</a>
          </article>
        </div>
      </section>
      <section id="skills" class="section skills"><div class="section-intro"><p class="eyebrow">03 / EXPERTISE</p><h2>A balanced full-stack practice.</h2></div><div class="skill-grid"><article><h3>Backend & architecture</h3><p>C# · ASP.NET Core · .NET Core · EF Core · REST APIs · JWT · LINQ · CQRS · Microservices</p></article><article><h3>Frontend craft</h3><p>Angular · TypeScript · JavaScript · HTML5 · CSS3 · Reactive Forms</p></article><article><h3>Cloud & delivery</h3><p>Azure App Service · Functions · Service Bus · Blob Storage · Key Vault · Azure DevOps · Docker</p></article><article><h3>Applied AI</h3><p>Azure AI · Generative AI · Retrieval-Augmented Generation (RAG) · OpenAI · Claude API · Prompt Engineering · Python</p></article><article><h3>Data & performance</h3><p>SQL Server · Query Execution Plans · Index Design</p></article><article><h3>Testing & operations</h3><p>xUnit · Moq · Playwright · Application Insights · Git · CI/CD</p></article></div></section>
      <section id="writing" class="section writing" aria-labelledby="writing-heading">
        <div class="section-intro">
          <p class="eyebrow">WRITING</p>
          <div>
            <h2 id="writing-heading">Notes on distributed systems</h2>
            <p class="lede">Selected articles on how distributed systems fail and what makes them easier to operate.</p>
          </div>
        </div>
        <div class="writing-grid">
          <article class="writing-card">
            <p class="eyebrow">CACHING</p>
            <h3><a href="https://medium.com/stackademic/the-cache-expired-and-the-database-fell-over-dac3f7249b25" target="_blank" rel="noopener noreferrer">The Cache Expired and the Database Fell Over</a></h3>
            <p>Why a cache expiry can send a wave of traffic to the database, and what that means for the reliability of a cached system.</p>
          </article>
          <article class="writing-card">
            <p class="eyebrow">RESILIENCE</p>
            <h3><a href="https://medium.com/stackademic/your-retries-are-why-the-outage-didnt-end-c5acbc53ec7c" target="_blank" rel="noopener noreferrer">Your Retries Are Why the Outage Didn’t End</a></h3>
            <p>How retrying failed requests can add load to a struggling service and make recovery harder.</p>
          </article>
          <article class="writing-card">
            <p class="eyebrow">RELIABLE MESSAGING</p>
            <h3><a href="https://medium.com/stackademic/your-database-committed-your-message-never-left-817818fc7fa6" target="_blank" rel="noopener noreferrer">Your Database Committed. Your Message Never Left.</a></h3>
            <p>What can go wrong between committing a database transaction and publishing the event that other services depend on.</p>
          </article>
          <article class="writing-card">
            <p class="eyebrow">FAILURE ANALYSIS</p>
            <h3><a href="https://medium.com/&#64;tiwarisaket3/eight-failure-modes-and-the-four-bugs-underneath-them-9d7faa3dd4ce" target="_blank" rel="noopener noreferrer">Eight Failure Modes and the Four Bugs Underneath Them</a></h3>
            <p>A look at how different failure symptoms can trace back to the same underlying bugs.</p>
          </article>
        </div>
        <p class="writing-footer"><a class="text-link" href="https://medium.com/&#64;tiwarisaket3" target="_blank" rel="noopener noreferrer">View all articles on Medium</a></p>
      </section>
      <section class="section recognition"><p class="eyebrow">RECOGNITION & EDUCATION</p><div><h2>Thoughtful delivery,<br>recognized impact.</h2><div class="recognition-list"><p><strong>Client appreciation</strong><span>Accenture · Critical production fixes</span></p><p><strong>Insta Award</strong><span>Infosys · Consistent high performance</span></p><p><strong>B.Tech (Honours), Computer Science and Engineering</strong><span>Dr. APJ Abdul Kalam Technical University · 2018–2022 · 8.0/10</span></p></div></div></section>
      <section id="contact" class="contact"><p class="eyebrow">04 / CONTACT</p><h2>Have an important system to build?</h2><p>I’m open to conversations about full-stack engineering, Azure architecture, and AI-enabled product work.</p><a class="contact-email" href="mailto:tiwarisaket3&#64;gmail.com">tiwarisaket3&#64;gmail.com</a><div class="social"><a href="https://www.linkedin.com/in/tiwarisaket3/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/sakthere" target="_blank" rel="noreferrer">GitHub</a><a href="assets/Saket-Tiwari-Resume.pdf" target="_blank">Resume</a></div></section>
    </main><footer><span>© 2026 Saket Tiwari</span><span>Full Stack .NET Developer · Azure & AI</span></footer>
  `,
  styleUrl: '../styles.css'
})
export class AppComponent {}
