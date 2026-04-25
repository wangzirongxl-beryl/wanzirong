// ArticleBody.jsx — the reading surface
function ArticleBody({ article }) {
  const body = article.body || [];
  const L = article.lang || 'en';
  return (
    <article className="article-page">
      <header className="article-hero">
        <div className="eyebrow">{article.kind === 'profile' ? 'A Profile' : article.kind === 'interview' ? 'An Interview' : 'An Essay'}</div>
        <h1 className="article-h1" lang={L}>{article.title}</h1>
        {article.titleEn && <div className="article-h1-en" lang="en">{article.titleEn}</div>}
        <p className="lede" lang={L}>{article.dek}</p>
        <div className="article-meta">
          <span className="byline">by Z.</span>
          <span className="dot">·</span>
          <span>{article.date}</span>
          <span className="dot">·</span>
          <span>{article.read} min read</span>
        </div>
      </header>

      {article.heroIllus && (
        <figure className="article-figure">
          <object data={article.heroIllus} type="image/svg+xml" aria-hidden="true" style={{pointerEvents:'none'}}></object>
          <figcaption className="caption">Illustration · Zero One</figcaption>
        </figure>
      )}

      <div className="article-body" lang={L}>
        {body.map((block, i) => {
          if (block.type === 'p') return <p key={i}>{block.text}</p>;
          if (block.type === 'pq') return (
            <blockquote className="pullquote" key={i}>
              {block.text}
              {block.cite && <span style={{display:'block', marginTop:10, fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:12, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--clay)'}}>— {block.cite}</span>}
            </blockquote>
          );
          if (block.type === 'h') return <h2 key={i}>{block.text}</h2>;
          if (block.type === 'ornament') return (
            <div key={i} className="divider-ornament">
              <object data={'assets/ornaments/' + (block.name || 'asterism') + '.svg'} type="image/svg+xml" style={{pointerEvents:'none', color:'var(--terracotta)'}}></object>
            </div>
          );
          return null;
        })}
      </div>

      <footer className="article-footer">
        <div style={{color:'var(--terracotta)', fontFamily:'var(--font-display)', fontStyle:'italic', fontSize: 26}}>— with love, Z.</div>
        <div className="meta" style={{marginTop:8}}>
          First published in Zero One Magazine, {article.date}.
        </div>
      </footer>
    </article>
  );
}

Object.assign(window, { ArticleBody });
