// Footer.jsx
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="foot-brand">
          <div className="brand-mark" style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize: 26, color:'var(--ink)'}}>Zero One</div>
          <div style={{color: 'var(--clay)', fontFamily:'var(--font-display)', fontStyle:'italic', fontSize: 15, marginTop: 4}}>
            with love — Z.
          </div>
        </div>
        <div className="foot-cols">
          <div className="foot-col">
            <div className="eyebrow">Writing</div>
            <a href="#">Profiles</a>
            <a href="#">Essays</a>
            <a href="#">Archive</a>
          </div>
          <div className="foot-col">
            <div className="eyebrow">Elsewhere</div>
            <a href="#">The Magazine</a>
            <a href="#">Instagram</a>
            <a href="#">Email</a>
          </div>
        </div>
        <div className="foot-orn">
          <svg viewBox="0 0 60 24"><g fill="currentColor">
            <circle cx="10" cy="12" r="2"/><circle cx="30" cy="12" r="2"/><circle cx="50" cy="12" r="2"/>
          </g></svg>
          <div className="meta" style={{fontSize:12, marginTop:8}}>© 2026 Zero One Magazine</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
