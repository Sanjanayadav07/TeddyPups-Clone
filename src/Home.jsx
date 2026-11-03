import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PUPPIES, BREEDS, FAMILIES, FAQS, SHOWROOM, LOGO, img, wa } from './data';
import { PuppyCard } from './Puppies.jsx';

const HERO = PUPPIES.slice(0, 6);

export default function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % HERO.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="hand">every puppy is family</p>
            <h1 className="serif">Premium teacup <em>puppies</em> in Dubai</h1>
            <p className="lead">Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>
            <div className="row">
              <Link className="btn btn-primary" to="/puppies">View available puppies</Link>
              <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
            </div>
          </div>
          <div className="hero-slider">
            {HERO.map((p, idx) => (
              <Link key={p.slug} to={`/puppies/${p.slug}`} className={`slide ${idx === i ? 'on' : ''}`}>
                <img src={img(p.src, 1080)} alt={p.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
              </Link>
            ))}
            <div className="slide-caption">{HERO[i].name || HERO[i].title}</div>
            <div className="dots">
              {HERO.map((p, idx) => (
                <button key={p.slug} className={idx === i ? 'on' : ''} onClick={() => setI(idx)} aria-label={`Show ${p.title}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE PUPS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="serif">Meet the pups</h2>
              <p className="muted">Real puppies, real photos, looking for their families right now.</p>
            </div>
            <Link className="link" to="/puppies">See all available puppies →</Link>
          </div>
          <ol className="grid puppies">
            {PUPPIES.map((p, n) => <PuppyCard key={p.slug} p={p} n={n + 1} />)}
            <li className="card meet-all">
              <Link to="/puppies"><span className="serif">Meet them all</span><span>→</span></Link>
            </li>
          </ol>
        </div>
      </section>

      {/* TWO WAYS */}
      <section className="section alt">
        <div className="container">
          <h2 className="serif center">Two ways to meet your puppy</h2>
          <div className="grid two">
            <article className="way">
              <img src={img(SHOWROOM[0], 1080)} alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom" loading="lazy" />
              <div className="way-body">
                <span className="tag">In our showroom</span>
                <h3 className="serif">Puppies in Dubai</h3>
                <p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
                <Link className="btn btn-primary" to="/puppies?origin=local">Meet local puppies</Link>
              </div>
            </article>
            <article className="way imported">
              <div className="way-body">
                <span className="tag">Korea → Dubai</span>
                <h3 className="serif">Imported for you</h3>
                <p>Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p>
                <Link className="btn btn-primary" to="/puppies?origin=imported">See imported puppies</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section">
        <div className="container">
          <h2 className="serif center">Your puppy journey</h2>
          <p className="muted center">A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.</p>
          <ol className="grid three steps">
            {[
              ['Choose your breed', "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle."],
              ['Get photos & details', 'Our team will share real photos, health details, and all necessary information directly on WhatsApp.'],
              ['Secure & safe delivery', 'Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.'],
            ].map(([t, d], n) => (
              <li key={t} className="card step">
                <span className="num">{n + 1}</span>
                <h3 className="serif">{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
          <div className="center"><Link className="btn btn-ghost" to="/how-it-works">How it works</Link></div>
        </div>
      </section>

      {/* WHATSAPP PREVIEW */}
      <section className="section alt">
        <div className="container chat-grid">
          <div className="chat">
            <div className="chat-head">
              <img src={LOGO} alt="" width="40" height="40" />
              <div><strong>TeddyPups U.A.E.</strong><small>online</small></div>
            </div>
            <div className="bubble me">Hi TeddyPups! I'd love to know more about your puppies.</div>
            <div className="bubble them">Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.</div>
            <div className="chips">
              {BREEDS.map((b) => <Link key={b.id} to={`/puppies?breed=${b.id}`}>{b.label}</Link>)}
            </div>
            <div className="photo-row">
              {SHOWROOM.map((s) => <img key={s} src={img(s, 256)} alt="The apricot teddy bear puppy from our showroom" loading="lazy" />)}
            </div>
            <div className="bubble them">Our team will share real photos, health details, and all necessary information directly on WhatsApp.</div>
            <div className="bubble them">Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.</div>
            <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">Say hello on WhatsApp</a>
          </div>
          <div>
            <p className="hand">puppy passport</p>
            <h2 className="serif">Why families trust TeddyPups</h2>
            <ul className="trust">
              <li><strong>Vet-checked &amp; healthy</strong><span>Every puppy comes vaccinated, dewormed, and with a verified health certificate.</span></li>
              <li><strong>Korea to Dubai, safely</strong><span>Trusted breeders, safe travel, and premium care from start to finish.</span></li>
              <li><strong>Support 24/7</strong><span>Always here to help, from choosing your puppy to post-delivery support.</span></li>
              <li><strong>Trusted by families worldwide</strong><span>Puppies delivered to loving homes all around the world.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* HAPPY FAMILIES */}
      <section className="section">
        <div className="container">
          <h2 className="serif">Happy families &amp; puppies</h2>
          <p className="muted maxw">We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.</p>
          <blockquote className="quote">
            “TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”
            <cite>Sarah M., Dubai, UAE</cite>
          </blockquote>
          <ul className="grid four gallery">
            {FAMILIES.map((f) => (
              <li key={f.src}>
                <img src={img(f.src, 640)} alt="A happy TeddyPups family with their new puppy" loading="lazy" />
                <span>{f.cap}</span>
              </li>
            ))}
          </ul>
          <div className="center"><Link className="btn btn-ghost" to="/happy-families">See every happy family</Link></div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="section alt">
        <div className="container narrow">
          <div className="section-head">
            <h2 className="serif">Questions, answered</h2>
            <Link className="link" to="/faq">Read all questions →</Link>
          </div>
          {FAQS.slice(0, 3).map(([q, a]) => (
            <details key={q} className="faq"><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container cta">
          <div>
            <p className="hand">welcome home</p>
            <h2 className="serif">Ready to meet your new best friend?</h2>
            <p>Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.</p>
            <div className="row">
              <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
              <Link className="btn btn-ghost" to="/contact">Visit &amp; contact</Link>
            </div>
          </div>
          <img src={img(PUPPIES[0].src, 1080)} alt="Max, waiting inside" loading="lazy" />
        </div>
      </section>
    </>
  );
}