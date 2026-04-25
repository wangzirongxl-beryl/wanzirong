// ProfileHeader.jsx — person profile top
function ProfileHeader({ person }) {
  return (
    <section className="profile-head">
      <div className="profile-portrait">
        <object data={person.portrait} type="image/svg+xml" aria-hidden="true" style={{pointerEvents:'none'}}></object>
      </div>
      <div className="profile-meta">
        <div className="eyebrow">A Profile</div>
        <h1 className="profile-name" lang={person.lang || 'en'}>{person.name}</h1>
        <p className="profile-blurb" lang={person.lang || 'en'}>{person.blurb}</p>
        <div className="profile-tags">
          {person.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProfileHeader });
