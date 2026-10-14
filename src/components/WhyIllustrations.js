// Flat vector scenes for the "Why VPH" cards, drawn in the site palette.
const NAVY = "#0b2545";
const GOLD = "#b8893a";
const GOLD_LIGHT = "#e3c27a";
const WASH = "#dce6f4";

function Scene({ children }) {
  return (
    <svg
      viewBox="0 0 240 180"
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
      stroke={NAVY}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

// Stacked crates on a pallet, with a shield.
export function SupplyScene() {
  return (
    <Scene>
      <rect x="36" y="142" width="168" height="12" rx="2" fill={GOLD} />
      <rect x="46" y="92" width="62" height="50" fill={GOLD_LIGHT} />
      <path d="M46 108h62" />
      <rect x="116" y="92" width="62" height="50" fill="#fff" />
      <path d="M116 108h62" />
      <rect x="78" y="44" width="62" height="48" fill={GOLD} />
      <path d="M78 60h62M109 44v16" />
      <path d="M190 22l24 8v20c0 15-11 26-24 30-13-4-24-15-24-30V30z" fill={NAVY} />
      <path d="M180 52l8 8 14-16" stroke="#fff" strokeWidth="4" />
    </Scene>
  );
}

// Delivery truck with a clock above it.
export function DeliveryScene() {
  return (
    <Scene>
      <path d="M12 154h216" />
      <path d="M8 92h16M2 108h22M12 124h12" strokeWidth="2.5" />
      <rect x="34" y="66" width="98" height="70" rx="3" fill="#fff" />
      <path d="M132 88h32l22 26v22h-54z" fill={GOLD_LIGHT} />
      <path d="M142 96h18l12 16h-30z" fill={WASH} />
      <circle cx="64" cy="140" r="14" fill={NAVY} />
      <circle cx="64" cy="140" r="5" fill="#fff" />
      <circle cx="158" cy="140" r="14" fill={NAVY} />
      <circle cx="158" cy="140" r="5" fill="#fff" />
      <circle cx="84" cy="36" r="20" fill="#fff" />
      <path d="M84 36V24M84 36l9 6" />
      <path d="M110 30c8 3 14 9 16 16" strokeDasharray="1 7" />
    </Scene>
  );
}

// Folded map with a location pin.
export function LocalScene() {
  return (
    <Scene>
      <path d="M36 66l52-14 64 14 52-14v92l-52 14-64-14-52 14z" fill={WASH} />
      <path d="M88 52v92M152 66v92" />
      <path d="M52 112c20-10 30 8 52-4s30-22 50-8" stroke={GOLD} strokeDasharray="2 7" />
      <ellipse cx="120" cy="116" rx="18" ry="5" fill={NAVY} stroke="none" opacity="0.25" />
      <path
        d="M120 20c-17 0-30 13-30 30 0 22 30 62 30 62s30-40 30-62c0-17-13-30-30-30z"
        fill={GOLD}
      />
      <circle cx="120" cy="50" r="11" fill="#fff" />
    </Scene>
  );
}

// Balance scale: fair dealing.
export function FairScene() {
  return (
    <Scene>
      <path d="M84 154h72M120 154V52" />
      <path d="M56 62h128" />
      <circle cx="120" cy="52" r="9" fill={GOLD} />
      <path d="M56 62l-22 46M56 62l22 46M184 62l-22 46M184 62l22 46" strokeWidth="2.5" />
      <path d="M28 108h56a28 20 0 0 1-56 0z" fill={GOLD_LIGHT} />
      <path d="M156 108h56a28 20 0 0 1-56 0z" fill={GOLD_LIGHT} />
      <circle cx="56" cy="96" r="11" fill={GOLD} />
      <rect x="172" y="86" width="24" height="22" fill="#fff" />
      <path d="M172 94h24" />
    </Scene>
  );
}
