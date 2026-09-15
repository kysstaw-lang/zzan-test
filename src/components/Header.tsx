import Link from "next/link";

function BottleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2h6" />
      <path d="M10 2v4.5a2 2 0 0 1-.7 1.5L8 9.3A3 3 0 0 0 7 11.6V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.4a3 3 0 0 0-1-2.3l-1.3-1.3a2 2 0 0 1-.7-1.5V2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6h15l-1.5 9h-12z" />
      <path d="M6 6 5 3H2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-10 py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-white">
            <BottleIcon />
          </span>
          ZZAN 24
        </Link>

        <div className="relative w-full max-w-md">
          <input
            type="search"
            placeholder="검색어를 입력해주세요."
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-11 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            <SearchIcon />
          </span>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-5">
          <Link
            href="/partner-inquiry"
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            입점문의
          </Link>
          <Link href="/cart" aria-label="장바구니" className="text-slate-700 hover:text-slate-900">
            <CartIcon />
          </Link>
          <button aria-label="알림" className="text-slate-700 hover:text-slate-900">
            <BellIcon />
          </button>
          <Link href="/mypage" aria-label="마이페이지" className="text-slate-700 hover:text-slate-900">
            <UserIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
