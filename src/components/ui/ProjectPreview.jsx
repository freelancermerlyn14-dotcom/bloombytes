// Realistic, hand-drawn SVG mockups used as project preview placeholders.
// Avoids generic stock imagery and ties visually to the service being shown.

function WebMockup({ accentFrom = "#4F8CFF", accentTo = "#34D399" }) {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full">
      <defs>
        <linearGradient id={`web-${accentFrom}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accentFrom} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accentTo} stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" rx="10" fill="#0F1526" />
      <rect width="400" height="28" rx="10" fill="#1B2338" />
      <circle cx="16" cy="14" r="4" fill="#3A4358" />
      <circle cx="30" cy="14" r="4" fill="#3A4358" />
      <circle cx="44" cy="14" r="4" fill="#3A4358" />
      <rect x="140" y="8" width="120" height="12" rx="6" fill="#232C44" />
      <rect x="24" y="50" width="150" height="14" rx="4" fill="#E8EDFB" opacity="0.9" />
      <rect x="24" y="72" width="220" height="8" rx="4" fill="#4A5570" />
      <rect x="24" y="88" width="180" height="8" rx="4" fill="#4A5570" />
      <rect x="24" y="112" width="90" height="28" rx="14" fill={accentFrom} opacity="0.9" />
      <rect x="230" y="48" width="146" height="100" rx="10" fill={`url(#web-${accentFrom})`} stroke="#2A3550" />
      <rect x="24" y="160" width="110" height="60" rx="8" fill="#171F35" stroke="#242D48" />
      <rect x="145" y="160" width="110" height="60" rx="8" fill="#171F35" stroke="#242D48" />
      <rect x="266" y="160" width="110" height="60" rx="8" fill="#171F35" stroke="#242D48" />
    </svg>
  );
}

function DeckMockup({ accentFrom = "#7FADFF", accentTo = "#34D399" }) {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full">
      <defs>
        <linearGradient id={`deck-${accentFrom}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accentFrom} stopOpacity="0.4" />
          <stop offset="100%" stopColor={accentTo} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" rx="10" fill="#0F1526" />
      <rect x="20" y="20" width="360" height="200" rx="8" fill="#141B30" stroke="#242D48" />
      <rect x="44" y="46" width="150" height="16" rx="4" fill="#E8EDFB" opacity="0.9" />
      <rect x="44" y="70" width="220" height="8" rx="4" fill="#4A5570" />
      <rect x="44" y="86" width="180" height="8" rx="4" fill="#4A5570" />
      <circle cx="300" cy="120" r="46" fill={`url(#deck-${accentFrom})`} />
      <rect x="44" y="150" width="60" height="40" rx="6" fill="#1E2A46" />
      <rect x="112" y="150" width="60" height="40" rx="6" fill="#1E2A46" />
      <rect x="180" y="150" width="60" height="40" rx="6" fill="#1E2A46" />
      <rect x="352" y="200" width="8" height="8" rx="2" fill="#4A5570" />
      <rect x="20" y="230" width="360" height="4" rx="2" fill="#1B2338" />
    </svg>
  );
}

function ExcelMockup({ accentFrom = "#34D399", accentTo = "#4F8CFF" }) {
  const rows = [50, 70, 90, 110, 130, 150, 170, 190];
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full">
      <defs>
        <linearGradient id={`xl-${accentFrom}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={accentFrom} />
          <stop offset="100%" stopColor={accentTo} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" rx="10" fill="#0F1526" />
      <rect x="20" y="20" width="150" height="200" rx="8" fill="#141B30" stroke="#242D48" />
      {rows.map((y, i) => (
        <rect key={i} x="34" y={y} width={i % 3 === 0 ? 90 : 60} height="6" rx="3" fill="#374260" />
      ))}
      <rect x="185" y="20" width="195" height="90" rx="8" fill="#141B30" stroke="#242D48" />
      <polyline
        points="200,95 225,70 250,85 275,55 300,65 325,40 350,50 365,35"
        fill="none"
        stroke={`url(#xl-${accentFrom})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="185" y="122" width="90" height="98" rx="8" fill="#141B30" stroke="#242D48" />
      <rect x="200" y="180" width="14" height="30" fill={accentFrom} opacity="0.8" />
      <rect x="222" y="160" width="14" height="50" fill={accentFrom} opacity="0.6" />
      <rect x="244" y="145" width="14" height="65" fill={accentFrom} opacity="0.4" />
      <rect x="290" y="122" width="90" height="98" rx="8" fill="#141B30" stroke="#242D48" />
      <circle cx="335" cy="170" r="34" fill="none" stroke={accentTo} strokeWidth="10" strokeDasharray="140 210" strokeLinecap="round" />
    </svg>
  );
}

export default function ProjectPreview({ type }) {
  if (type === "deck") return <DeckMockup />;
  if (type === "excel") return <ExcelMockup />;
  return <WebMockup />;
}
