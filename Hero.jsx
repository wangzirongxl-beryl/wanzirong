// Hero.jsx — home hero
function Hero({ onOpen }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="eyebrow">Reporter · Zero One Magazine · 王梓蓉</div>
        <h1 className="hero-title">
          I write about <em>women</em>,<br/>and about the moments<br/>between us.
        </h1>
        <p className="hero-dek">
          数年记者经历，写下的那些人、那些事。Profiles and essays from the desk — the outtakes, the longer thoughts, the names I keep coming back to.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onOpen && onOpen('latest')}>
            Read the latest
          </button>
          <a href="#archive" onClick={e=>{e.preventDefault(); onOpen && onOpen('archive');}} className="ghost-link">
            or browse the archive →
          </a>
        </div>
      </div>
      <div className="hero-illus">
        <object data="assets/illustrations/woman-reading.svg" type="image/svg+xml" aria-hidden="true" style={{pointerEvents:'none'}}></object>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
