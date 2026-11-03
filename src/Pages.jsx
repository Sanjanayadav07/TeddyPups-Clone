import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAMILIES, FAQS, PUPPIES, SHOWROOM, img, wa, PHONE, PHONE_HREF, EMAIL } from './data';

/* ---------- Happy families ---------- */
export function HappyFamilies() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="serif">Happy families &amp; puppies</h1>
        <p className="muted maxw">We are truly honored to see our puppies become cherished members of loving families.</p>
        <ul className="grid four gallery">
          {FAMILIES.map((f) => (
            <li key={f.src}>
              <img src={img(f.src, 640)} alt="A happy TeddyPups family with their new puppy" loading="lazy" />
              <span>{f.cap}</span>
            </li>
          ))}
        </ul>
        <div className="center"><a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">Be our next happy family</a></div>
      </div>
    </section>
  );
}

/* ---------- Gone home ---------- */
export function GoneHome() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="serif">Gone home</h1>
        <p className="muted maxw">These pups have already found their forever families.</p>
        <ul className="grid four gallery">
          {FAMILIES.map((f) => (
            <li key={f.src}><img src={img(f.src, 640)} alt="" loading="lazy" /><span>{f.cap}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  const [q, setQ] = useState('');
  const list = FAQS.filter(([a, b]) => (a + b).toLowerCase().includes(q.toLowerCase()));
  return (
    <section className="section">
      <div className="container narrow">
        <h1 className="serif">Questions &amp; answers</h1>
        <p className="muted">Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.</p>
        <input className="search" placeholder="sniff out a question" value={q} onChange={(e) => setQ(e.target.value)} />
        <p className="hand">{list.length} notes on the board</p>
        {list.map(([a, b]) => (
          <details key={a} className="faq"><summary>{a}</summary><p>{b}</p></details>
        ))}
        <a className="btn btn-wa" href={wa('Hi TeddyPups! I have a question:')} target="_blank" rel="noreferrer">Ask your own question</a>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
const Steps = ({ items }) => (
  <ol className="steps-list">
    {items.map(([t, d], n) => (
      <li key={t}><span className="num">{n + 1}</span><div><h4>{t}</h4><p>{d}</p></div></li>
    ))}
  </ol>
);

export function HowItWorks() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="serif">How it works</h1>
          <p className="muted maxw">Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.</p>
          <nav className="chips toc">
            <a href="#two-ways">1 Two ways home</a>
            <a href="#promise">2 Our premium puppy promise</a>
            <a href="#delivery">3 Delivery &amp; collection</a>
            <a href="#why">4 Why choose us</a>
          </nav>
        </div>
      </section>

      <section id="two-ways" className="section alt">
        <div className="container">
          <p className="hand">choose your way</p>
          <h2 className="serif">Two ways home</h2>
          <div className="grid two">
            <article className="card pad">
              <span className="tag">In Dubai · meet in person</span>
              <h3 className="serif">Meet your puppy in person</h3>
              <p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.</p>
              <Steps items={[
                ['Explore our puppies', 'Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.'],
                ['Choose your puppy', 'Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.'],
                ['Meet before you choose', 'Spend time bonding before making your decision.'],
                ['Pick-up or delivery', 'Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.'],
              ]} />
            </article>
            <article className="card pad">
              <span className="tag">Imported · order upon request</span>
              <h3 className="serif">Order upon request</h3>
              <p>Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.</p>
              <p>From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.</p>
              <Steps items={[
                ['Reserve your puppy', "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences."],
                ['Personalized consultation', "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey."],
                ['Import and arrival', 'We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.'],
                ['Welcome home', 'Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.'],
              ]} />
            </article>
          </div>
        </div>
      </section>

      <section id="promise" className="section">
        <div className="container">
          <p className="hand">puppy passport</p>
          <h2 className="serif">Our premium puppy promise</h2>
          <ul className="grid three">
            {[
              ['Hand-selected breeders', 'We work only with breeders who uphold the highest ethical and health standards.'],
              ['Full transparency', 'Photos, videos, and health certificates are shared before your puppy travels.'],
              ['Safe, stress-free delivery', 'We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.'],
            ].map(([t, d]) => <li key={t} className="card pad"><h3 className="serif">{t}</h3><p>{d}</p></li>)}
          </ul>
        </div>
      </section>

      <section id="delivery" className="section alt">
        <div className="container">
          <h2 className="serif">Delivery &amp; collection</h2>
          <p className="muted maxw">From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.</p>
          <ul className="grid four">
            {[
              ['Take your puppy home the same day', 'Local puppies are available immediately — visit, fall in love, and go home together.'],
              ['Delivery within Dubai', 'Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.'],
              ['Safe international cargo', 'We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.'],
              ['Worldwide delivery', 'We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.'],
            ].map(([t, d]) => <li key={t} className="card pad"><h3 className="serif">{t}</h3><p>{d}</p></li>)}
          </ul>
        </div>
      </section>

      <section id="why" className="section">
        <div className="container">
          <h2 className="serif">Why choose us</h2>
          <p className="muted maxw">We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way.</p>
          <ul className="grid three">
            {[
              ['International cargo', 'We safely deliver puppies to loving homes all around the world, with trusted cargo partners.'],
              ['Support 24/7', "Our team is available 24/7 to answer your questions and assist you through every step of the adoption process."],
              ['Health guarantee', 'All our puppies come with a verified health certificate from licensed vets. Vaccinated, dewormed, and thoroughly checked.'],
            ].map(([t, d]) => <li key={t} className="card pad"><h3 className="serif">{t}</h3><p>{d}</p></li>)}
          </ul>
          <h3 className="serif">Unique and high quality puppies</h3>
          <p className="maxw">When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care.</p>
          <div className="row">
            <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">Ask us on WhatsApp</a>
            <Link className="btn btn-ghost" to="/puppies">See available puppies</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  const [f, setF] = useState({ name: '', phone: '', email: '', city: '', puppy: '', message: '', website: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (f.website) return; // honeypot
    const err = {};
    if (!f.name.trim()) err.name = true;
    if (!f.phone.trim()) err.phone = true;
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = true;
    if (!f.city.trim()) err.city = true;
    setErrors(err);
    if (Object.keys(err).length) return;

    const text = `Dear TeddyPups, my name is ${f.name}, you can reach me on ${f.phone} or by email at ${f.email}. I live in ${f.city}, and I'm curious about ${f.puppy || 'any puppy (not sure yet)'}. ${f.message}`;
    window.open(wa(text), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="serif">Get in touch with us</h1>
        <p className="muted maxw">Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!</p>

        <div className="contact-grid">
          {sent ? (
            <div className="letter"><h2 className="serif">Letter posted! 💌</h2><p>Our team will get back to you shortly on WhatsApp.</p></div>
          ) : (
            <form className="letter" onSubmit={submit} noValidate>
              <p>Dear TeddyPups,</p>
              <p className="inline">
                my name is <input className={errors.name ? 'err' : ''} placeholder="your name" value={f.name} onChange={on('name')} />, and you can reach me on{' '}
                <input className={errors.phone ? 'err' : ''} placeholder="phone" type="tel" value={f.phone} onChange={on('phone')} /> or by email at{' '}
                <input className={errors.email ? 'err' : ''} placeholder="email" type="email" value={f.email} onChange={on('email')} />.
              </p>
              <p className="inline">
                I live in <input className={errors.city ? 'err' : ''} placeholder="city" value={f.city} onChange={on('city')} />, and I'm curious about{' '}
                <select value={f.puppy} onChange={on('puppy')} aria-label="Puppy you're interested in (optional)">
                  <option value="">any puppy (not sure yet)</option>
                  {PUPPIES.map((p) => <option key={p.slug} value={`${p.title} (${p.gender})`}>{p.title} ({p.gender})</option>)}
                </select>.
              </p>
              <label className="block">Your message (optional)
                <textarea rows="4" value={f.message} onChange={on('message')} />
              </label>
              <input className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" placeholder="Website" value={f.website} onChange={on('website')} />
              <p className="hand">with love, a future puppy parent</p>
              <button className="btn btn-primary" type="submit">Post my letter</button>
              {Object.keys(errors).length > 0 && <p className="error">Please fill in the highlighted fields.</p>}
            </form>
          )}

          <aside className="contact-side">
            <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">WhatsApp {PHONE}</a>
            <p><small>call us</small><br /><a href={PHONE_HREF}>{PHONE}</a></p>
            <p><small>email</small><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </aside>
        </div>

        <div className="visit">
          <div>
            <h2 className="serif">Visit us in Downtown Dubai</h2>
            <p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p>
            <p><strong>Downtown Dubai, United Arab Emirates</strong></p>
            <a className="btn btn-ghost" href="https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7" target="_blank" rel="noreferrer">Open in Google Maps</a>
          </div>
          <img src={img(SHOWROOM[3], 1080)} alt="The apricot teddy bear puppy from our showroom, held up to say hello" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function NotFound() {
  return (
    <section className="section"><div className="container center">
      <h1 className="serif">Page not found</h1>
      <Link className="btn btn-primary" to="/">Go home</Link>
    </div></section>
  );
}