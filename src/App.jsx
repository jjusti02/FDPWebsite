import "./index.css";
import headshot from "./assets/IJheadshot.jpg";

// Logos
import circlelogo from "./assets/FDPCircle2026.png";
import letterslogo from "./assets/FDPLetters.png";
import fulllogo from "./assets/FDPAllTogether.png";




function App() {
  const services = [
    {
      title: "International Brand Development",
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
      items: [
        "Inventory optimization",
        "Revenue enhancement strategies",
        "Retail analytics and data insights",
        "Customer engagement tools",
        "Operational efficiency solutions",
      ],
    },
  ];

  const brandLogos = [
    {
      name: "OOFOS",
      url: "https://www.oofos.com",
      role: "LATAM & Canada",
    },
    {
      name: "Feetures",
      url: "https://feetures.com",
      role: "LATAM",
    },
    {
      name: "Superfeet",
      url: "https://www.superfeet.com",
      role: "LATAM",
    },
    {
      name: "Goodr",
      url: "https://goodr.com",
      role: "LATAM",
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
    "And more...",
  ];

  const markets = [
    "Latin America",
    "Canada",
    "Select global markets through distributor partnerships",
  ];

  const countries = [
    "Mexico",
    "Brazil",
    "Chile",
    "Colombia",
    "Peru",
    "Argentina",
    "Ecuador",
    "Bolivia",
    "Paraguay",
    "Central America",
    "Caribbean",
  ];

  const channels = [
    {
      title: "Run Specialty",
      text: "Independent running retailers and specialty performance stores.",
    },
    {
      title: "Sporting Goods Retailers",
      text: "Regional and national sporting goods chains.",
    },
    {
      title: "Outdoor & Lifestyle Retail",
      text: "Outdoor retailers and premium lifestyle stores.",
    },
    {
      title: "Department Stores",
      text: "Large retail chains and regional department store groups.",
    },
    {
      title: "Golf & Specialty Sports",
      text: "Golf retailers and sport-specific distribution channels.",
    },
    {
      title: "E-commerce & Marketplace",
      text: "Digital retail and omnichannel expansion.",
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

  return (
    <div className="site">
      <header className="topbar">
        <div className="container nav">
        <a href="#home" className="brand">
  <img src={circlelogo} alt="FDP symbol" className="logo-symbol" />
  <img src={letterslogo} alt="Fractional Development Partners" className="logo-text" />
</a>

          <nav className="nav-links">
            <a href="#services">What We Do</a>
            <a href="#who-we-help">Who We Help</a>
            <a href="#clients">Clients</a>
            <a href="#about">About</a>
            <a href="#contact" className="button button-small">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Fractional Development Partners</p>
              <h1>Expand Your Brand with the Right Partners, Markets, and Strategy</h1>
              <p className="lead">
                Fractional Development Partners helps performance, lifestyle,
                outdoor, and sporting goods brands grow internationally through
                strategic market entry, distributor development, and disciplined
                commercial execution.
              </p>
              <p className="sublead">
                With deep expertise across Latin America and Canada, FDP works
                closely with brands and distributors to unlock new opportunities,
                accelerate growth, and build long-term value.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button">
                  Schedule a Conversation
                </a>
                <a href="#services" className="button button-secondary">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hero-card">
              <h3>What FDP Delivers</h3>
              <ul>
                <li>Strategic brand development</li>
                <li>Distributor selection</li>
                <li>Market expansion</li>
                <li>Commercial execution</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What We Do</p>
              <h2>Driving International Expansion</h2>
              <p>
                FDP helps brands and distributors enter new markets, build the
                right partnerships, and execute growth with discipline.
              </p>
            </div>

            <div className="card-grid">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <ul className="bullet-list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-help" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Who We Help</p>
              <h2>Industry and Market Expertise</h2>
              <p>
                FDP specializes in helping brands and distributors grow across
                complex international markets by identifying the right partners,
                structuring strong commercial relationships, and building
                sustainable long-term growth strategies.
              </p>
            </div>

            <div className="two-column">
              <div className="card">
                <h3>Geographic Focus</h3>
                <ul className="bullet-list">
                  {markets.map((market) => (
                    <li key={market}>{market}</li>
                  ))}
                </ul>

                
              </div>

              <div className="card">
                <h3>Distribution Channel Expertise</h3>
                <div className="stack">
                  {channels.map((channel) => (
                    <div key={channel.title}>
                      <h4>{channel.title}</h4>
                      <p>{channel.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Clients</p>
              <h2>Selected Brand Portfolio</h2>
              <p>
                FDP currently supports and collaborates with leading
                international brands through distributor development, regional
                growth strategy, commercial planning, and long-term market
                expansion.
              </p>
            </div>

            <div className="logo-grid">
            {brandLogos.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-card brand-link"
                >
                  <div className="brand-name">{brand.name}</div>
                  <div className="brand-role">{brand.role}</div>
                </a>
              ))}
            </div>

            <div className="card extra-space">
              <h3>Additional Industry Engagement</h3>
              <p>
                Ignacio has also worked with or engaged with a wide range of
                international brands on behalf of clients and distributor
                partners as part of brand development initiatives, distributor
                introductions, and market exploration projects.
              </p>
              <p className="brand-cloud">{additionalBrands.join(" • ")}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Why FDP</p>
              <h2>Trusted, hands-on commercial leadership</h2>
            </div>

            <div className="card-grid small-cards">
              {differentiators.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container about-grid">
          <div className="about-photo">
            <img src={headshot} alt="Ignacio Justiniano" className="headshot" />
          </div>

            <div>
              <p className="eyebrow">About</p>
              <h2>Ignacio Justiniano</h2>
              <p className="role">Founder & Principal Consultant</p>

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
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s Build the Right Growth Strategy</h2>
              <p>
                Whether you are a brand looking to expand internationally or a
                distributor seeking your next growth opportunity, Fractional
                Development Partners can help you move faster with the right
                strategy and the right partners.
              </p>
            </div>

            <div className="contact-details">
              <p><strong>Ignacio Justiniano</strong></p>
              <p>Fractional Development Partners</p>
              <p>Boston, Massachusetts</p>
              <p>
                <a href="mailto:ignacio@fractionaldp.com">
                  ignacio@fractionaldp.com
                </a>
              </p>
              <a
                className="button"
                href="mailto:ignacio@fractionaldp.com?subject=Schedule%20a%20Conversation"
              >
                Schedule a Conversation
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Fractional Development Partners LLC</p>
          <p>Boston, Massachusetts</p>
        </div>
      </footer>
    </div>
  );
}

export default App;