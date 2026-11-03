import { Link, useParams, useSearchParams } from 'react-router-dom';
import { PUPPIES, BREEDS, img, wa } from './data';

export function PuppyCard({ p, n }) {
  return (
    <li className="card puppy">
      <Link to={`/puppies/${p.slug}`}>
        <div className="ph">
          <img src={img(p.src, 640)} alt={p.alt} loading="lazy" />
          <span className="badge">Available</span>
          {n && <span className="idx">{String(n).padStart(2, '0')}</span>}
        </div>
        <div className="pb">
          <h3 className="serif">{p.title}</h3>
          <p>{p.gender}, {p.age}{p.video ? ', with video' : ''}</p>
        </div>
      </Link>
    </li>
  );
}

export default function Puppies() {
  const [params, setParams] = useSearchParams();
  const origin = params.get('origin') || 'all';
  const breed = params.get('breed') || 'all';

  const set = (k, v) => {
    const next = new URLSearchParams(params);
    v === 'all' ? next.delete(k) : next.set(k, v);
    setParams(next, { replace: true });
  };

  const list = PUPPIES.filter(
    (p) => (origin === 'all' || p.origin === origin) && (breed === 'all' || p.breeds.includes(breed))
  );

  return (
    <section className="section">
      <div className="container">
        <h1 className="serif">Available puppies</h1>
        <p className="muted">Real puppies, real photos, looking for their families right now.</p>

        <div className="filters">
          <div className="chips">
            {[['all', 'All'], ['local', 'In Dubai'], ['imported', 'Imported']].map(([v, l]) => (
              <button key={v} className={origin === v ? 'on' : ''} onClick={() => set('origin', v)}>{l}</button>
            ))}
          </div>
          <div className="chips">
            <button className={breed === 'all' ? 'on' : ''} onClick={() => set('breed', 'all')}>All breeds</button>
            {BREEDS.map((b) => (
              <button key={b.id} className={breed === b.id ? 'on' : ''} onClick={() => set('breed', b.id)}>{b.label}</button>
            ))}
          </div>
        </div>

        {list.length ? (
          <ul className="grid puppies">{list.map((p) => <PuppyCard key={p.slug} p={p} />)}</ul>
        ) : (
          <div className="empty">
            <p>No puppies match right now — but new ones arrive often.</p>
            <a className="btn btn-wa" href={wa('Hi TeddyPups! I am looking for a specific breed.')} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
          </div>
        )}
      </div>
    </section>
  );
}

export function PuppyDetail() {
  const { slug } = useParams();
  const p = PUPPIES.find((x) => x.slug === slug);

  if (!p) {
    return (
      <section className="section"><div className="container center">
        <h1 className="serif">Puppy not found</h1>
        <Link className="btn btn-primary" to="/puppies">Back to puppies</Link>
      </div></section>
    );
  }

  const msg = `Hi TeddyPups! I'm interested in the ${p.title} (${p.gender}, ${p.age}).`;
  const related = PUPPIES.filter((x) => x.slug !== p.slug && x.breeds.some((b) => p.breeds.includes(b))).slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <Link className="link" to="/puppies">← All puppies</Link>
        <div className="detail">
          <img src={img(p.src, 1200)} alt={p.alt} />
          <div>
            <span className="badge static">Available</span>
            <h1 className="serif">{p.title}</h1>
            <dl className="facts">
              <div><dt>Breed</dt><dd>{p.breed}</dd></div>
              <div><dt>Gender</dt><dd>{p.gender}</dd></div>
              <div><dt>Age</dt><dd>{p.age}</dd></div>
              <div><dt>Origin</dt><dd>{p.origin === 'local' ? 'In our Dubai showroom' : 'Imported — order upon request'}</dd></div>
            </dl>
            <p>Every puppy comes vaccinated, dewormed, and with a verified health certificate. Photos, videos and health details are shared on WhatsApp before you decide.</p>
            <div className="row">
              <a className="btn btn-wa" href={wa(msg)} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
              <Link className="btn btn-ghost" to="/contact">Visit &amp; contact</Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <>
            <h2 className="serif">You might also love</h2>
            <ul className="grid puppies">{related.map((x) => <PuppyCard key={x.slug} p={x} />)}</ul>
          </>
        )}
      </div>
    </section>
  );
}