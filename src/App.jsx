import { useEffect, useState } from "react";
import "./index.css";
import headshot from "./assets/IJheadshot.jpg";

// Logos
import circlelogo from "./assets/FDPCircle2026.png";
import letterslogo from "./assets/FDPLetters.png";

// Brand imagery (sourced from each brand's website)
import oofosImg from "./assets/brands/oofos.jpg";
import goodrImg from "./assets/brands/goodr.jpg";
import feeturesImg from "./assets/brands/feetures.jpg";
import corosImg from "./assets/brands/coros.jpg";
import superfeetImg from "./assets/brands/superfeet.jpg";

/* ---------- Icons (inline, no dependencies) ---------- */
const ICONS = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2a5 5 0 0 1 5.5 5.8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
    </>
  ),
  pulse: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8" />
    </>
  ),
  mountain: (
    <>
      <path d="M2 20l7-12 4.5 7 2.5-3.5L22 20z" />
      <circle cx="17" cy="6" r="1.8" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8.5 7.5h2M13.5 7.5h2M8.5 11.5h2M13.5 11.5h2M10 21v-4h4v4" />
    </>
  ),
  flag: (
    <>
      <path d="M7 21V3l11 4-11 4" />
      <path d="M3.5 21h8" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.1h8.8a1.5 1.5 0 0 0 1.5-1.2L21 8H6" />
    </>
  ),
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

/* ---------- Content ---------- */
const services = [
  {
    title: "International Brand Development",
    icon: "globe",
    accent: "mint",
    items: [
      "Market entry strategy",
      "Distributor identification and evaluation",
      "Territory prioritization",
      "Commercial planning and forecasting",
      "Channel strategy and positioning",
      "Brand launch planning and execution",
    ],
  },
  {
    title: "Distributor Development & Expansion",
    icon: "users",
    accent: "sun",
    items: [
      "Brand sourcing and introductions",
      "Portfolio strategy development",
      "Brand evaluation and positioning",
      "Commercial negotiation support",
      "Growth strategy and business planning",
      "Channel and territory expansion",
    ],
  },
  {
    title: "Go-to-Market & Growth Execution",
    icon: "target",
    accent: "coral",
    items: [
      "Annual and multi-year business planning",
      "Product assortment and launch strategy",
      "Channel segmentation and prioritization",
      "Pricing and positioning guidance",
      "Marketing and brand activation alignment",
      "E-commerce and omnichannel expansion",
    ],
  },
  {
    title: "AI & Retail Optimization Solutions: Onebeat",
    icon: "sparkle",
    accent: "sky",
    featured: true,
    items: [
      "Inventory optimization",
      "Revenue enhancement strategies",
      "Retail analytics and data insights",
      "Customer engagement tools",
      "Operational efficiency solutions",
    ],
  },
];

// Active clients, in priority order
const brands = [
  {
    name: "OOFOS",
    url: "https://www.oofos.com",
    role: "LATAM & Canada",
    image: oofosImg,
    alt: "Woman wearing OOFOS recovery clogs",
    position: "60% 40%",
  },
  {
    name: "goodr",
    url: "https://goodr.com",
    role: "International",
    image: goodrImg,
    alt: "Surfer wearing goodr sunglasses on the beach",
    position: "50% 35%",
  },
  {
    name: "Feetures",
    url: "https://feetures.com",
    role: "LATAM",
    image: feeturesImg,
    alt: "Runners lacing up and wearing Feetures socks",
    position: "60% 50%",
  },
  {
    name: "COROS",
    url: "https://coros.com",
    role: "LATAM",
    image: corosImg,
    alt: "Runner training with a COROS GPS watch",
    position: "35% 40%",
    brighten: true,
  },
  {
    name: "Superfeet",
    url: "https://www.superfeet.com",
    role: "LATAM",
    image: superfeetImg,
    alt: "Fan of colorful Superfeet insoles",
    position: "55% 50%",
  },
];

const additionalBrands = [
  "Altra",
  "Saucony",
  "Arena",
  "Veja",
  "Cariuma",
  "Superga",
  "Barbour",
  "Givova",
  "Kappa",
  "Kizik",
  "Callaway Golf Apparel",
  "K-Swiss",
];

const markets = [
  {
    title: "Latin America",
    text: "Mexico, Brazil, Chile, Colombia, Peru, Argentina, Ecuador, Bolivia, Paraguay, Central America, and the Caribbean.",
  },
  {
    title: "Canada",
    text: "Brand development and distributor partnerships across the Canadian market.",
  },
  {
    title: "Select Global Markets",
    text: "Additional international markets through distributor partnerships.",
  },
];

const channels = [
  {
    title: "Run Specialty",
    text: "Independent running retailers and specialty performance stores.",
    icon: "pulse",
  },
  {
    title: "Sporting Goods Retailers",
    text: "Regional and national sporting goods chains.",
    icon: "trophy",
  },
  {
    title: "Outdoor & Lifestyle Retail",
    text: "Outdoor retailers and premium lifestyle stores.",
    icon: "mountain",
  },
  {
    title: "Department Stores",
    text: "Large retail chains and regional department store groups.",
    icon: "building",
  },
  {
    title: "Golf & Specialty Sports",
    text: "Golf retailers and sport-specific distribution channels.",
    icon: "flag",
  },
  {
    title: "E-commerce & Marketplace",
    text: "Digital retail and omnichannel expansion.",
    icon: "cart",
  },
];

const differentiators = [
  {
    title: "Deep International Experience",
    text: "More than 25 years of experience building global brands and developing distributor networks across multiple regions.",
  },
  {
    title: "Regional Expertise",
    text: "Extensive knowledge of Latin American markets and experience supporting brand development in Canada.",
  },
  {
    title: "Hands-On Commercial Leadership",
    text: "Strategic advisory combined with real execution in distributor management, business planning, and commercial development.",
  },
  {
    title: "Trusted Industry Network",
    text: "Access to an extensive network of distributors, retailers, and industry partners across the performance, lifestyle, outdoor, and sporting goods sectors.",
  },
];

const stats = [
  { value: "25+", label: "Years of international experience" },
  { value: "5", label: "Active brand partners" },
  { value: "LATAM", label: "+ Canada as core markets" },
  { value: "6", label: "Retail channels covered" },
];

const tickerItems = [
  "Market Entry",
  "Distributor Development",
  "Go-to-Market",
  "Commercial Planning",
  "Channel Strategy",
  "Brand Launches",
  "Retail Optimization",
  "Territory Expansion",
];

const navLinks = [
  { href: "#services", label: "What We Do" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#clients", label: "Clients" },
  { href: "#about", label: "About" },
];

const EMAIL = "ignacio@fractionaldp.com";

/* ---------- Hooks ---------- */
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}

/* ---------- Components ---------- */
function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className={`section-heading reveal${light ? " is-light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

function HeroOrbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit-glow" />
      <div className="orbit-ring orbit-ring-outer" />
      <div className="orbit-ring orbit-ring-inner" />
      <div className="orbit-spin">
        <span className="orbit-node node-top" />
        <span className="orbit-node node-right" />
        <span className="orbit-node node-bottom" />
        <span className="orbit-node node-left" />
      </div>
      <div className="orbit-core">
        <img src={circlelogo} alt="" />
      </div>

      <div className="orbit-chip chip-a">
        <span className="chip-dot dot-mint" /> Brand Development
      </div>
      <div className="orbit-chip chip-b">
        <span className="chip-dot dot-sun" /> Distributor Selection
      </div>
      <div className="orbit-chip chip-c">
        <span className="chip-dot dot-coral" /> Market Expansion
      </div>
      <div className="orbit-chip chip-d">
        <span className="chip-dot dot-sky" /> Commercial Execution
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  useRevealOnScroll();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      {/* ---------- Header ---------- */}
      <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
        <div className="container nav">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src={circlelogo} alt="" className="logo-symbol" />
            <img
              src={letterslogo}
              alt="Fractional Development Partners"
              className="logo-text"
            />
          </a>

          <nav
            id="site-nav"
            className={`nav-links${menuOpen ? " is-open" : ""}`}
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="button button-small" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section id="home" className="hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="blob blob-mint" />
            <span className="blob blob-sun" />
            <span className="blob blob-coral" />
            <span className="blob blob-sky" />
            <span className="hero-grid-pattern" />
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="pill rise">
                <span className="pill-dot" />
                International brand &amp; distributor development
              </p>
              <h1 className="rise" style={{ "--delay": "80ms" }}>
                Expand your brand with the right{" "}
                <span className="highlight">partners</span>,{" "}
                <span className="highlight highlight-alt">markets</span>, and{" "}
                <em className="serif-accent">strategy.</em>
              </h1>
              <p className="lead rise" style={{ "--delay": "160ms" }}>
                Fractional Development Partners helps performance, lifestyle,
                outdoor, and sporting goods brands grow internationally through
                strategic market entry, distributor development, and disciplined
                commercial execution.
              </p>
              <p className="sublead rise" style={{ "--delay": "220ms" }}>
                With deep expertise across Latin America and Canada, FDP works
                closely with brands and distributors to unlock new opportunities,
                accelerate growth, and build long-term value.
              </p>

              <div className="hero-actions rise" style={{ "--delay": "280ms" }}>
                <a href="#contact" className="button button-glow">
                  Schedule a Conversation <Icon name="arrowRight" size={18} />
                </a>
                <a href="#services" className="button button-secondary">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hero-visual rise" style={{ "--delay": "200ms" }}>
              <HeroOrbit />
            </div>
          </div>

          <div className="container">
            <dl className="stats rise" style={{ "--delay": "360ms" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- Ticker ---------- */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy}>
                {tickerItems.map((item) => (
                  <span key={item} className="ticker-item">
                    {item}
                    <span className="ticker-star">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Services ---------- */}
        <section id="services" className="section">
          <div className="container">
            <SectionHeading eyebrow="What We Do" title="Driving International Expansion">
              FDP helps brands and distributors enter new markets, build the
              right partnerships, and execute growth with discipline.
            </SectionHeading>

            <div className="service-grid">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`service-card accent-${service.accent}${
                    service.featured ? " is-featured" : ""
                  } reveal`}
                  style={{ "--delay": `${index * 80}ms` }}
                >
                  <div className="service-top">
                    <span className="icon-badge">
                      <Icon name={service.icon} />
                    </span>
                    <span className="service-num">0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <ul className="check-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <Icon name="check" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Who We Help ---------- */}
        <section id="who-we-help" className="section section-tint">
          <div className="container">
            <SectionHeading eyebrow="Who We Help" title="Industry and Market Expertise">
              FDP specializes in helping brands and distributors grow across
              complex international markets by identifying the right partners,
              structuring strong commercial relationships, and building
              sustainable long-term growth strategies.
            </SectionHeading>

            <div className="help-grid">
              <div className="geo-card reveal">
                <div className="geo-card-head">
                  <span className="icon-badge icon-badge-light">
                    <Icon name="pin" />
                  </span>
                  <h3>Geographic Focus</h3>
                </div>
                <div className="geo-list">
                  {markets.map((market, index) => (
                    <div key={market.title} className="geo-item">
                      <span className="geo-index">0{index + 1}</span>
                      <div>
                        <h4>{market.title}</h4>
                        <p>{market.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="geo-rings" aria-hidden="true" />
              </div>

              <div className="channels reveal">
                <h3 className="channels-title">Distribution Channel Expertise</h3>
                <div className="channel-grid">
                  {channels.map((channel, index) => (
                    <div
                      key={channel.title}
                      className={`channel-card tone-${index % 6}`}
                    >
                      <span className="channel-icon">
                        <Icon name={channel.icon} />
                      </span>
                      <div>
                        <h4>{channel.title}</h4>
                        <p>{channel.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Clients ---------- */}
        <section id="clients" className="section">
          <div className="container">
            <SectionHeading eyebrow="Clients" title="Selected Brand Portfolio">
              FDP currently supports and collaborates with leading international
              brands through distributor development, regional growth strategy,
              commercial planning, and long-term market expansion.
            </SectionHeading>

            <div className="brand-bento">
              {brands.map((brand, index) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`brand-tile brand-tile-${index + 1} reveal`}
                  style={{ "--delay": `${index * 70}ms` }}
                >
                  <img
                    src={brand.image}
                    alt={brand.alt}
                    loading="lazy"
                    style={{ objectPosition: brand.position }}
                    className={brand.brighten ? "is-brightened" : undefined}
                  />
                  <span className="brand-shade" aria-hidden="true" />
                  <span className="brand-role-chip">{brand.role}</span>
                  <span className="brand-meta">
                    <span className="brand-tile-name">{brand.name}</span>
                    <span className="brand-visit">
                      Visit site <Icon name="arrowUpRight" size={16} />
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="engagement-card reveal">
              <div>
                <h3>Additional Industry Engagement</h3>
                <p>
                  Ignacio has also worked with or engaged with a wide range of
                  international brands on behalf of clients and distributor
                  partners as part of brand development initiatives, distributor
                  introductions, and market exploration projects.
                </p>
              </div>
              <ul className="tag-cloud">
                {additionalBrands.map((brand) => (
                  <li key={brand}>{brand}</li>
                ))}
                <li className="tag-more">And more…</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Why FDP ---------- */}
        <section className="section section-dark">
          <div className="dark-bg" aria-hidden="true">
            <span className="blob blob-mint" />
            <span className="blob blob-coral" />
          </div>
          <div className="container">
            <SectionHeading
              eyebrow="Why FDP"
              title="Trusted, hands-on commercial leadership"
              light
            />

            <div className="why-grid">
              {differentiators.map((item, index) => (
                <article
                  key={item.title}
                  className="why-card reveal"
                  style={{ "--delay": `${index * 80}ms` }}
                >
                  <span className={`why-num num-${index}`}>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="section">
          <div className="container about-grid">
            <div className="about-photo reveal">
              <span className="photo-shape shape-a" aria-hidden="true" />
              <span className="photo-shape shape-b" aria-hidden="true" />
              <img src={headshot} alt="Ignacio Justiniano" className="headshot" />
              <div className="photo-badge">
                <strong>25+</strong>
                <span>years building global brands</span>
              </div>
            </div>

            <div className="about-copy reveal">
              <p className="eyebrow">About</p>
              <h2>Ignacio Justiniano</h2>
              <p className="role">Founder &amp; Principal Consultant</p>

              <p>
                Ignacio Justiniano is an international commercial leader with
                more than 25 years of experience developing brands, building
                distributor networks, and driving business growth across the
                performance, lifestyle, outdoor, and sporting goods industries.
              </p>

              <p>
                Throughout his career, he has held leadership roles with global
                companies and brands including Wolverine World Wide, Timberland,
                and Reebok, gaining extensive experience in international brand
                management, distributor development, channel strategy, retail
                expansion, and licensing.
              </p>

              <p>
                Through Fractional Development Partners, Ignacio works with
                brands and distributors to identify growth opportunities,
                structure strong partnerships, and execute international
                expansion strategies with discipline and focus.
              </p>

              <p>
                Based in the Boston area, Ignacio works closely with companies
                across Latin America, Canada, and other international markets.
              </p>

              <div className="career-tags">
                <span className="career-label">Leadership roles at</span>
                <span className="career-tag">Wolverine World Wide</span>
                <span className="career-tag">Timberland</span>
                <span className="career-tag">Reebok</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-card reveal">
              <div className="contact-bg" aria-hidden="true">
                <span className="blob blob-sun" />
                <span className="blob blob-mint" />
              </div>
              <div className="contact-copy">
                <p className="eyebrow">Contact</p>
                <h2>
                  Let’s build the right{" "}
                  <em className="serif-accent">growth strategy.</em>
                </h2>
                <p>
                  Whether you are a brand looking to expand internationally or a
                  distributor seeking your next growth opportunity, Fractional
                  Development Partners can help you move faster with the right
                  strategy and the right partners.
                </p>
              </div>

              <div className="contact-details">
                <p className="contact-name">Ignacio Justiniano</p>
                <p className="contact-org">Fractional Development Partners</p>
                <p className="contact-line">
                  <Icon name="pin" size={18} /> Boston, Massachusetts
                </p>
                <a className="contact-line contact-email" href={`mailto:${EMAIL}`}>
                  <Icon name="mail" size={18} /> {EMAIL}
                </a>
                <a
                  className="button button-light"
                  href={`mailto:${EMAIL}?subject=Schedule%20a%20Conversation`}
                >
                  Schedule a Conversation <Icon name="arrowRight" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="footer-brand">
            <img src={circlelogo} alt="" />
            <img src={letterslogo} alt="Fractional Development Partners" />
          </a>
          <nav className="footer-links" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-meta">
            <p>© {new Date().getFullYear()} Fractional Development Partners LLC</p>
            <p>Boston, Massachusetts</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
