import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center gap-4 px-10 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900">ZZAN24</h1>
        <p className="text-sm text-slate-500">
          메인 홈 화면은 아직 준비 중이에요. 먼저 만든 주문/결제 화면을 확인해보세요.
        </p>
        <Link
          href="/checkout"
          className="mt-2 rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-600"
        >
          주문 / 결제 화면 보기
        </Link>
      </main>

      <Footer />
    </div>
  );
}
