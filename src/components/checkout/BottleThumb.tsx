export default function BottleThumb() {
  return (
    <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded-lg bg-slate-100">
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 2h6" />
        <path d="M10 2v4.5a2 2 0 0 1-.7 1.5L8 9.3A3 3 0 0 0 7 11.6V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.4a3 3 0 0 0-1-2.3l-1.3-1.3a2 2 0 0 1-.7-1.5V2" />
      </svg>
    </div>
  );
}
