// ArchiveFilters.jsx + content data
function ArchiveFilters({ current, onChange }) {
  const opts = [
    { id: 'all',       label: 'All' },
    { id: 'profile',   label: 'Profiles' },
    { id: 'essay',     label: 'Essays' },
    { id: 'interview', label: 'Interviews' },
  ];
  return (
    <div className="archive-filters">
      {opts.map(o => (
        <button key={o.id}
                className={'tag ' + (current === o.id ? 'on' : '')}
                onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

// --- Sample data (kept as fallback — live articles come from articles.js) ---
const ARTICLES_FALLBACK = [
  {
    id: 'liu-yuling',
    kind: 'profile',
    date: 'Mar 12, 2026',
    read: 7,
    illus: 'assets/illustrations/portrait-contour-1.svg',
    heroIllus: 'assets/illustrations/portrait-contour-1.svg',
    title: 'A morning with Liu Yuling',
    dek: 'She answers the door barefoot. It is nine a.m. on a Tuesday in late March, and she has already written for three hours.',
    tags: ['writer', 'Beijing', '2026'],
    body: [
      { type: 'p', text: 'Liu Yuling answers the door barefoot. It is nine a.m. on a Tuesday in late March, and she has already written for three hours. The apartment smells of orange peel and old paper. There is a record playing very softly in another room.' },
      { type: 'p', text: '"I don\u2019t make coffee in the mornings anymore," she says, before I\u2019ve asked anything. She points me to a low chair by the window. "It makes me argue with myself."' },
      { type: 'pq', text: '"I don\u2019t make coffee in the mornings anymore. It makes me argue with myself."', cite: 'Liu Yuling' },
      { type: 'p', text: 'She is forty-two, the author of four novels and a book of essays I have reread so many times my copy has come apart at the spine. She is not famous in the way her publisher keeps hoping she will become. She is famous in a quieter way \u2014 to a small country of readers who treat her sentences like weather.' },
      { type: 'ornament', name: 'asterism' },
      { type: 'h', text: 'The shape of a morning' },
      { type: 'p', text: 'When I ask what she is working on, she says, "A book about my mother." Then, after a pause: "Or about all our mothers. I haven\u2019t decided yet."' },
    ],
  },
  {
    id: 'the-new-quiet',
    kind: 'essay',
    date: 'Feb 28, 2026',
    read: 9,
    illus: 'assets/illustrations/still-life.svg',
    heroIllus: 'assets/illustrations/still-life.svg',
    title: 'The new quiet',
    dek: 'We keep asking what women want. The better question is what they\u2019ve already decided.',
    tags: ['essay', 'culture'],
    body: [
      { type: 'p', text: 'There is a quietness that is not silence. It is the quietness of a woman who has stopped explaining. I have been noticing it everywhere this year: in interviews, in waiting rooms, in the way my friends answer their phones.' },
      { type: 'pq', text: '"The quietness of a woman who has stopped explaining."' },
      { type: 'p', text: 'This is not resignation. It is the sound of a decision arriving from a long way off, finally.' },
    ],
  },
  {
    id: 'wang-xiaohui',
    kind: 'profile',
    date: 'Feb 10, 2026',
    read: 6,
    illus: 'assets/illustrations/hands-letter.svg',
    title: 'Wang Xiaohui is not apologizing',
    dek: 'The lawyer who defended twelve women in a year, talking to me over cold noodles.',
    tags: ['lawyer', 'rights'],
  },
  {
    id: 'bodies-archives',
    kind: 'essay',
    date: 'Jan 22, 2026',
    read: 11,
    illus: 'assets/illustrations/woman-reading.svg',
    title: 'Bodies are archives',
    dek: 'On what our mothers keep for us \u2014 in their hands, their backs, the way they still stand at the door.',
    tags: ['essay', 'family'],
  },
  {
    id: 'yan-zhao',
    kind: 'interview',
    date: 'Jan 5, 2026',
    read: 8,
    illus: 'assets/illustrations/portrait-contour-2.svg',
    title: 'Yan Zhao, at sea',
    dek: 'The oceanographer spent eleven months on a research vessel. Here is what she brought back.',
    tags: ['science', 'interview'],
  },
  {
    id: 'who-gets-to-be-tired',
    kind: 'essay',
    date: 'Dec 14, 2025',
    read: 7,
    illus: 'assets/illustrations/hands-letter.svg',
    title: 'Who gets to be tired',
    dek: 'A short essay about rest \u2014 and the women who are not allowed it.',
    tags: ['essay', 'labor'],
  },
];

// Don't clobber ARTICLES if articles.js loaded first; otherwise use fallback.
if (!window.ARTICLES) window.ARTICLES = ARTICLES_FALLBACK;
Object.assign(window, { ArchiveFilters });
