// NewsletterCard.jsx
function NewsletterCard() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <div className="newsletter-card">
      <div className="nl-illus">
        <object data="assets/ornaments/letter.svg" type="image/svg+xml" style={{pointerEvents:'none', width:96, height:96, color:'var(--terracotta)'}}></object>
      </div>
      <div className="nl-body">
        <h3 className="nl-title">A letter, once a month.</h3>
        <p className="nl-dek">No roundups. Just one story — usually a woman I can't stop thinking about.</p>
        {!sent ? (
          <form className="nl-form" onSubmit={e => { e.preventDefault(); if (email) setSent(true); }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your email" required/>
            <button type="submit" className="btn-pill">Join</button>
          </form>
        ) : (
          <div style={{color:'var(--terracotta)', fontFamily:'var(--font-display)', fontStyle:'italic', fontSize: 20}}>
            thank you — Z.
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { NewsletterCard });
