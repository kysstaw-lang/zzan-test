import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1440px] px-10 py-10 text-sm text-slate-500">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500 text-white text-xs">
            Z
          </span>
          ZZAN 24
        </div>

        <div className="mt-4 space-y-1">
          <p>(주)ZZAN24 · 대표 문희원</p>
          <p>사업자등록번호 000-00-00000</p>
          <p>서울특별시 강남구 학동로</p>
          <p>
            고객 문의처 :{" "}
            <span className="font-semibold text-slate-700">testid@naver.com</span>
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-6">
          <Link href="/terms" className="hover:text-slate-700">
            서비스 이용약관
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/privacy" className="hover:text-slate-700">
            개인정보처리방침
          </Link>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          © 2026 ZZAN24 Inc. · 주류는 만 19세 이상만 구매 가능 · 과음은 건강에 해롭습니다
        </p>
      </div>
    </footer>
  );
}
