// =====================
// Shared reusable icon / decorative components used across pages
// =====================

// Hover background fill used inside dropdown links
export function HoverBg() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400" />
  );
}

// Pixel / grid icon used inside buttons (buttonV3)
export function PixelIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path d="M11 5H13V7H11V5Z" /><path d="M5 5H7V7H5V5Z" />
      <path d="M14 8H16V10H14V8Z" /><path d="M8 8H10V10H8V8Z" />
      <path d="M17 11H19V13H17V11Z" /><path d="M11 11H13V13H11V11Z" />
      <path d="M14 14H16V16H14V14Z" /><path d="M8 14H10V16H8V14Z" />
      <path d="M11 17H13V19H11V17Z" /><path d="M5 17H7V19H5V17Z" />
    </svg>
  );
}

// White checkmark on filled circle
export function CheckmarkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true" className="dark:fill-secondary fill-white">
      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
    </svg>
  );
}

// Chevron pointing down (nav dropdown arrow)
export function ChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
