// Header.jsx — sticky header for Zero One Magazine
function Header({ current = 'home', onNav }) {
  const items = [
    { id: 'profiles', label: 'Profiles' },
    { id: 'essays',   label: 'Essays' },
    { id: 'archive',  label: 'Archive' },
    { id: 'about',    label: 'About' },
  ];
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand" href="#" onClick={e => { e.preventDefault(); onNav && onNav('home'); }}>
          <span className="brand-mark">Zero One</span>
          <span className="brand-sub">Magazine</span>
        </a>
        <nav className="site-nav">
          {items.map(it => (
            <a key={it.id}
               className={'nav-link ' + (current === it.id ? 'active' : '')}
               href="#"
               onClick={e => { e.preventDefault(); onNav && onNav(it.id); }}>
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
