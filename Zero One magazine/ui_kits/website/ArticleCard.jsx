// ArticleCard.jsx — article card, two layouts (default + featured)
function ArticleCard({ article, featured, onClick }) {
  const t = article.title;
  const d = article.dek;
  const kindLabel = { profile: 'Profile', essay: 'Essay', interview: 'Interview' }[article.kind] || '';
  const L = article.lang || 'en';
  if (featured) {
    return (
      <article className="article-card featured" onClick={onClick}>
        <div className="card-illus">
          <object data={article.illus} type="image/svg+xml" aria-hidden="true" style={{pointerEvents:'none'}}></object>
        </div>
        <div className="card-body">
          <div className="meta-line">
            <span className={'badge badge-' + article.kind}>· {kindLabel}</span>
            <span className="dot">·</span>
            <span>{article.date}</span>
            <span className="dot">·</span>
            <span>{article.read} min</span>
          </div>
          <h2 className="card-title" lang={L}>{t}</h2>
          {article.titleEn && <div className="card-title-en" lang="en">{article.titleEn}</div>}
          <p className="card-dek" lang={L}>{d}</p>
          <div className="read-more" style={{color:'var(--terracotta)', fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:18, marginTop:14}}>read the piece →</div>
        </div>
      </article>
    );
  }
  return (
    <article className="article-card" onClick={onClick}>
      <span className="arrow">→</span>
      <div className="meta-line">
        <span className={'badge badge-' + article.kind}>· {kindLabel}</span>
        <span className="dot">·</span>
        <span>{article.date}</span>
        <span className="dot">·</span>
        <span>{article.read} min</span>
      </div>
      <h3 className="card-title" lang={L}>{t}</h3>
      {article.titleEn && <div className="card-title-en" lang="en">{article.titleEn}</div>}
      <p className="card-dek" lang={L}>{d}</p>
    </article>
  );
}

Object.assign(window, { ArticleCard });
