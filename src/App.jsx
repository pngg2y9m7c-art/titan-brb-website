import { useMemo, useState } from "react";

/**
 * Image helper: loads a photo from /public/images and swaps to a fallback path
 * if the primary fails, so the site never shows a broken image.
 */
function Img({ local, fallback, alt, className }) {
  const [src, setSrc] = useState(local);
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (src !== fallback) setSrc(fallback);
      }}
    />
  );
}

const hero = { local: "/images/hero.jpg", fallback: "/images/hero.jpg" };
const beforeStorm = { local: "/images/before-storm.jpg", fallback: "/images/before-storm.jpg" };
const afterStorm = { local: "/images/after-storm.jpg", fallback: "/images/after-storm.jpg" };

const services = [
  { title: "Roof Replacement & Repair", description: "Full roof replacements, leak response, repairs, and documented scope review for storm-related damage." },
  { title: "Storm Damage Inspections", description: "Detailed residential and commercial inspections for wind, hail, and visible exterior damage." },
  { title: "Insurance Claim Assistance", description: "Claim support, adjuster coordination, supplements, and scope verification from start to finish." },
  { title: "Siding & Gutter Work", description: "Exterior restoration that keeps the full property envelope aligned with the approved loss scope." },
  { title: "Interior Storm Repairs", description: "Interior repairs tied to storm-related loss, including water intrusion and related restoration work." },
  { title: "Emergency Tarping & Response", description: "Fast stabilization support for active leaks and urgent storm situations requiring immediate attention." }
];

const residentialDatabase = [
  { img: { local: "/images/residential-1.jpg", fallback: "/images/residential-1.jpg" }, title: "Residential Roof Replacement", text: "Full residential roof replacement project with active install crew and clean jobsite workflow." },
  { img: { local: "/images/residential-2.jpg", fallback: "/images/residential-2.jpg" }, title: "Residential Roof Project 1", text: "Residential roofing inspection and restoration work designed for homeowner clarity and strong curb appeal." },
  { img: { local: "/images/residential-3.jpg", fallback: "/images/residential-3.jpg" }, title: "Residential Roof Project 2", text: "Residential property roof evaluation and damage assessment supporting insurance-based restoration decisions." }
];

const commercialDatabase = [
  { img: { local: "/images/commercial-1.jpg", fallback: "/images/commercial-1.jpg" }, title: "Mosaic Church Project", text: "Commercial roofing project documentation for church property restoration and claim support." },
  { img: { local: "/images/commercial-2.jpg", fallback: "/images/commercial-2.jpg" }, title: "Church Exterior", text: "Commercial church property inspection and restoration work with large-site visibility and documentation." },
  { img: { local: "/images/commercial-3.jpg", fallback: "/images/commercial-3.jpg" }, title: "Commercial Roof Inspection", text: "Technician-led commercial roof inspection focused on damage capture, safety, and claim-readiness." }
];

const stats = [
  { value: "DC, MD & VA", label: "Primary service area" },
  { value: "Licensed", label: "Professional operation" },
  { value: "Bonded & Insured", label: "Protected projects" }
];

const commercialSegments = ["Churches", "Apartment complexes", "Commercial office buildings", "Strip malls"];

function BrandMark() {
  return (
    <div className="brand">
      <img src="/images/logo.jpg" alt="Titan BRB — Build Rebuild" className="brand-logo-img" />
    </div>
  );
}

function SectionBadge({ children, invert = false }) {
  return <div className={invert ? "badge badge-invert" : "badge"}>{children}</div>;
}

function PageHeader({ onNavigate, onBack }) {
  return (
    <header className="page-header">
      <div className="container header-inner">
        <BrandMark />
        {onNavigate ? (
          <nav className="top-nav">
            <button onClick={() => onNavigate("services")}>Services</button>
            <button onClick={() => onNavigate("projects")}>Projects</button>
            <button onClick={() => onNavigate("commercial")}>Commercial Claims</button>
            <a href="#storm-watch">Storm Watch</a>
            <a href="https://www.facebook.com/titanbrbinc" target="_blank" rel="noopener noreferrer">Facebook</a>
          </nav>
        ) : null}
        {onBack ? (
          <button onClick={onBack} className="btn btn-outline">Back</button>
        ) : (
          <div className="header-actions">
            <a href="tel:2022137934" className="btn btn-dark">Call Now</a>
            <a href="https://www.facebook.com/titanbrbinc" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Facebook</a>
            <a href="https://storm-hunter-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Team Login</a>
          </div>
        )}
      </div>
    </header>
  );
}

function ServiceCard({ title, description }) {
  return (
    <article className="card service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function GalleryCard({ item }) {
  return (
    <article className="card gallery-card">
      <Img local={item.img.local} fallback={item.img.fallback} alt={item.title} />
      <div className="gallery-copy">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="card stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="brand-title">TITAN BRB</div>
          <div className="brand-subtitle">Build • Rebuild • Restore</div>
          <p className="footer-copy">
            Roofing and storm restoration for residential and commercial properties across
            Washington DC, Maryland, and Virginia. Licensed, bonded, and insured.
          </p>
        </div>
        <div className="footer-contact">
          <div className="footer-label">Contact</div>
          <a href="tel:2022137934">202-213-7934</a>
          <a href="mailto:patrick.tcr@icloud.com">patrick.tcr@icloud.com</a>
          <a href="https://www.facebook.com/titanbrbinc" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div className="footer-contact">
          <div className="footer-label">Service Area</div>
          <span>Washington, DC</span>
          <span>Maryland</span>
          <span>Virginia</span>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Titan BRB. All rights reserved.
      </div>
    </footer>
  );
}

function SimpleGalleryPage({ badge, title, description, items, onBack }) {
  return (
    <div className="site-shell">
      <PageHeader onBack={onBack} />
      <main className="container section">
        <SectionBadge>{badge}</SectionBadge>
        <h1 className="page-title">{title}</h1>
        {description ? <p className="page-copy">{description}</p> : null}
        <div className="grid gallery-grid">
          {items.map((item) => <GalleryCard key={`${badge}-${item.title}`} item={item} />)}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [form, setForm] = useState({
    name: "",
    date: "",
    address: "",
    phone: "",
    email: "",
    damage: "",
    severity: "3",
  });

  const emergencyMailto = useMemo(() => {
    const subject = "Emergency Service Request";
    const body = [
      "Emergency Service Request",
      "",
      `Name: ${form.name}`,
      `Date: ${form.date}`,
      `Address: ${form.address}`,
      `Phone Number: ${form.phone}`,
      `Email: ${form.email}`,
      `Nature of the Damage: ${form.damage}`,
      `Severity of the Emergency (1-5): ${form.severity}`,
    ].join("\n");
    return `mailto:patrick.tcr@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  // ---- Live Storm Watch enrollment: posts to the app and creates a lead ----
  const emptyEnroll = { name: "", phone: "", email: "", address: "", city: "", state: "", zip: "", kind: "home", company: "" };
  const [enroll, setEnroll] = useState(emptyEnroll);
  const [enrollStatus, setEnrollStatus] = useState("");
  const [enrollBusy, setEnrollBusy] = useState(false);
  const handleEnroll = (event) => {
    const { name, value } = event.target;
    setEnroll((current) => ({ ...current, [name]: value }));
  };
  const submitEnroll = async (event) => {
    event.preventDefault();
    if (!enroll.name || (!enroll.phone && !enroll.email && !enroll.address)) {
      setEnrollStatus("Please add your name and at least a phone, email, or address.");
      return;
    }
    setEnrollBusy(true);
    setEnrollStatus("Sending…");
    try {
      const r = await fetch("https://storm-hunter-phi.vercel.app/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enroll),
      });
      const j = await r.json();
      if (j && j.ok) {
        setEnrollStatus("You're enrolled in Titan Storm Watch. We'll watch your address and reach out if a storm hits. Thank you!");
        setEnroll(emptyEnroll);
      } else {
        setEnrollStatus((j && j.error) || "Something went wrong — please call 202-213-7934.");
      }
    } catch (e) {
      setEnrollStatus("Couldn't submit right now — please call or text 202-213-7934.");
    }
    setEnrollBusy(false);
  };

  if (page === "services") {
    return (
      <div className="site-shell">
        <PageHeader onBack={() => setPage("home")} />
        <main className="container section">
          <SectionBadge>Services</SectionBadge>
          <h1 className="page-title">Our Services</h1>
          <p className="page-copy">TITAN BRB handles residential and commercial storm restoration with a documented, insurance-aware process designed to move jobs from inspection to completion cleanly.</p>
          <div className="grid service-grid">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div>

          <div className="doc-callout">
            <div>
              <div className="doc-callout-label">Built Into Every Inspection</div>
              <h2 className="section-title section-title-light">We document your roof — even when there's no damage.</h2>
              <p className="section-copy-light">
                Every TITAN BRB inspection produces a dated, photographed baseline of your roof's
                condition — damage or not. If a future storm hits, that record proves the new damage
                occurred during a covered event while your policy was active, giving your claim
                stronger footing from day one.
              </p>
              <a href="tel:2022137934" className="btn btn-light">Schedule an inspection</a>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (page === "projects") {
    return <SimpleGalleryPage badge="Residential Projects" title="Our Residential Jobs" description="Selected residential roofing and restoration work showing the kind of field-ready projects TITAN BRB handles for homeowners." items={residentialDatabase} onBack={() => setPage("home")} />;
  }

  if (page === "commercial") {
    return <SimpleGalleryPage badge="Commercial Claims" title="Commercial Claim Jobs" description="Commercial projects including churches, multi-family properties, office buildings, and other claim-driven restoration work." items={commercialDatabase} onBack={() => setPage("home")} />;
  }

  return (
    <div className="site-shell">
      <PageHeader onNavigate={setPage} />
      <main>
        <section className="container hero">
          <div>
            <SectionBadge>Licensed • Bonded • Insured</SectionBadge>
            <h1 className="hero-title">Roofing and storm restoration built for residential and commercial claims.</h1>
            <p className="hero-copy">TITAN BRB helps property owners across DC, Maryland, and Virginia manage storm damage, insurance claim coordination, exterior restoration, and emergency response with a professional, straightforward process.</p>
            <div className="button-row">
              <a href="tel:2022137934" className="btn btn-lime">Call Now</a>
              <a href="#emergency-form" className="btn btn-red">Emergency Services</a>
            </div>
            <div className="grid stats-grid">{stats.map((item) => <StatCard key={item.value} {...item} />)}</div>
          </div>
          <div className="hero-image-wrap">
            <Img local={hero.local} fallback={hero.fallback} alt="Roofing and storm restoration project" className="hero-image" />
          </div>
        </section>

        <section className="container section section-tight">
          <div className="grid service-grid">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div>
        </section>

        {/* No-Damage Documentation — protect the claim before the storm even hits */}
        <section className="container section">
          <div className="documentation-grid">
            <div>
              <SectionBadge>Inspection Documentation</SectionBadge>
              <h2 className="section-title">We document your roof — even when there's no damage.</h2>
              <p className="page-copy">
                Most contractors only show up after a storm. TITAN BRB does something different:
                when we inspect your property, we document the condition of your roof <strong>even when
                no damage is present</strong>. That dated, photographed baseline becomes your proof.
                If a future storm hits, we can show exactly what your roof looked like before — establishing
                that the new damage happened during a covered event, while your policy was active.
              </p>
              <div className="grid doc-points">
                <div className="doc-point">
                  <div className="doc-point-title">Baseline on file</div>
                  <p>Every inspection is photographed and dated — damage or not — so there's a clear record of prior condition.</p>
                </div>
                <div className="doc-point">
                  <div className="doc-point-title">Storm-event proof</div>
                  <p>When weather hits later, we tie the new damage directly to the covered event and the date it occurred.</p>
                </div>
                <div className="doc-point">
                  <div className="doc-point-title">Policy-period clarity</div>
                  <p>A clean timeline showing the loss happened while your coverage was active — stronger footing for the claim.</p>
                </div>
              </div>
              <div className="button-row">
                <a href="#emergency-form" className="btn btn-dark">Request a roof review</a>
              </div>
            </div>
            <div className="doc-media">
              <figure className="doc-figure">
                <Img local={beforeStorm.local} fallback={beforeStorm.fallback} alt="Roof condition documented before a storm" className="doc-image" />
                <figcaption>Before — baseline condition on file</figcaption>
              </figure>
              <figure className="doc-figure">
                <Img local={afterStorm.local} fallback={afterStorm.fallback} alt="Roof condition documented after a storm" className="doc-image" />
                <figcaption>After — storm event documented</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="section-head">
            <div>
              <SectionBadge>Recent Projects</SectionBadge>
              <h2 className="section-title">Project imagery and restoration work.</h2>
            </div>
          </div>
          <div className="grid gallery-grid">{residentialDatabase.map((item) => <GalleryCard key={item.title} item={item} />)}</div>
        </section>

        <section className="section">
          <div className="container commercial-wrap">
            <div className="commercial-panel">
              <div className="commercial-grid">
                <div>
                  <SectionBadge invert>Commercial Claims</SectionBadge>
                  <h2 className="section-title section-title-light">We specialize in commercial claims.</h2>
                  <p className="section-copy-light">TITAN BRB supports large and complex commercial loss projects with documentation, adjuster coordination, scope review, supplement support, and execution across multi-structure properties.</p>
                  <button onClick={() => setPage("commercial")} className="btn btn-light">View commercial gallery</button>
                </div>
                <div className="grid segment-grid">{commercialSegments.map((item) => <div key={item} className="segment-card">{item}</div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="storm-watch" className="container section">
          <SectionBadge>Storm Watch Program</SectionBadge>
          <h2 className="section-title">Free lifetime roof monitoring — no cost, no obligation.</h2>
          <p className="page-copy">
            Enroll your home or church in TITAN BRB's Storm Watch Program. We document your roof's
            current condition, then monitor your exact location for hail and damaging wind. If a
            qualifying storm strikes, we notify you and return for a <strong>free re-inspection</strong> —
            so any new damage is caught early and documented while it's fresh. No cost, no obligation.
          </p>

          <div className="doc-point">
            <div className="doc-point-title">For Homeowners — Enroll Online</div>
            <p>Enroll in 30 seconds and you're on Storm Watch. It goes straight into our system — we start watching your home's address right away and reach out if a storm hits. Free, no obligation.</p>
            <div className="card emergency-card">
              <form onSubmit={submitEnroll} className="form-grid">
                <input name="name" placeholder="Full name" value={enroll.name} onChange={handleEnroll} />
                <input name="phone" placeholder="Phone" value={enroll.phone} onChange={handleEnroll} />
                <input name="email" placeholder="Email" value={enroll.email} onChange={handleEnroll} />
                <input name="zip" placeholder="ZIP" value={enroll.zip} onChange={handleEnroll} />
                <input name="address" placeholder="Home address" value={enroll.address} onChange={handleEnroll} className="full" />
                <input name="city" placeholder="City" value={enroll.city} onChange={handleEnroll} />
                <input name="state" placeholder="State" value={enroll.state} onChange={handleEnroll} />
                <input name="company" value={enroll.company} onChange={handleEnroll} className="full" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button type="submit" className="btn btn-lime full" disabled={enrollBusy}>{enrollBusy ? "Sending…" : "Enroll free in Storm Watch"}</button>
              </form>
              {enrollStatus ? <p className="page-copy" style={{ marginTop: "0.75rem" }}>{enrollStatus}</p> : null}
            </div>
            <div className="button-row top-gap">
              <a href="/StormWatch_Residential_Insert.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Program Flyer (PDF)</a>
              <a href="/StormWatch_Residential_OneSheet.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Program Details (PDF)</a>
            </div>
          </div>

          <div className="doc-point top-gap">
            <div className="doc-point-title">For Churches</div>
            <div className="button-row">
              <a href="/StormWatch_Church_Insert.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Church Flyer (PDF)</a>
              <a href="/StormWatch_Church_OneSheet.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Church Details (PDF)</a>
              <a href="/StormWatch_Church_Enrollment.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Church Enrollment Form (PDF)</a>
            </div>
          </div>

          <div className="button-row top-gap">
            <a href="tel:2022137934" className="btn btn-outline">Prefer to talk? Call 202-213-7934</a>
            <a href="https://storm-hunter-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Team Login</a>
          </div>
        </section>

        <section id="emergency-form" className="container section">
          <div className="emergency-grid">
            <div>
              <SectionBadge>Emergency Request</SectionBadge>
              <h2 className="section-title">Submit emergency service details fast.</h2>
              <p className="page-copy">Fill out the form below and open a prefilled email directly to Patrick so urgent storm-related issues can be reviewed quickly.</p>
              <div className="severity-box">
                <div className="severity-label">Severity Guide</div>
                <p>Select 1 for lower urgency and 5 for the highest emergency level requiring immediate response.</p>
              </div>
            </div>

            <div className="card emergency-card">
              <div className="form-grid">
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <input type="date" name="date" value={form.date} onChange={handleChange} />
                <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="full" />
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <textarea name="damage" placeholder="Nature of the Damage" value={form.damage} onChange={handleChange} rows={5} className="full" />
                <select name="severity" value={form.severity} onChange={handleChange} className="full">
                  <option value="1">1 - Low</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5 - Highest</option>
                </select>
              </div>
              <div className="button-row top-gap">
                <a href={emergencyMailto} className="btn btn-red">Open Emergency Email</a>
                <a href="tel:2022137934" className="btn btn-outline">Call 202-213-7934</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
