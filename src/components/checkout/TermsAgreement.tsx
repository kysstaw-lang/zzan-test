"use client";

import { useState } from "react";

type Term = {
  id: string;
  label: string;
  required: boolean;
  note?: string;
};

const terms: Term[] = [
  { id: "service", label: "서비스 이용약관", required: true },
  { id: "location", label: "위치정보 이용 약관", required: true },
  { id: "privacy-required", label: "개인정보 수집 및 이용 동의", required: true },
  { id: "privacy-optional", label: "개인정보 수집 및 이용 동의", required: false },
  { id: "marketing", label: "혜택 / 이벤트 등 맞춤형 정보 알림 동의", required: false },
  {
    id: "marketing-night",
    label: "혜택 / 이벤트 야간 알람 동의",
    required: false,
    note: "오후 9시 ~ 오전 8시에 알림을 받을 수 있습니다",
  },
];

function CheckIcon({ checked }: { checked: boolean }) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${
        checked ? "bg-cyan-500" : "bg-slate-200"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function TermsAgreement() {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(terms.map((t) => [t.id, true]))
  );

  const allChecked = terms.every((t) => checked[t.id]);

  function toggleAll() {
    const next = !allChecked;
    setChecked(Object.fromEntries(terms.map((t) => [t.id, next])));
  }

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-slate-900">약관 동의</h2>

      <button
        type="button"
        onClick={toggleAll}
        className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-5 py-4 text-left"
      >
        <CheckIcon checked={allChecked} />
        <span className="text-sm font-semibold text-slate-800">전체 약관 동의</span>
      </button>

      <ul className="mt-3 space-y-3 px-2">
        {terms.map((term) => (
          <li key={term.id}>
            <button
              type="button"
              onClick={() => toggle(term.id)}
              className="flex w-full items-start gap-3 text-left"
            >
              <span className="mt-0.5">
                <CheckIcon checked={!!checked[term.id]} />
              </span>
              <span>
                <span className="text-sm text-slate-700">
                  {term.label}{" "}
                  <span className="text-slate-400">({term.required ? "필수" : "선택"})</span>
                </span>
                {term.note && <p className="mt-0.5 text-xs text-slate-400">{term.note}</p>}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
