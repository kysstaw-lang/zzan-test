"use client";

import { useState } from "react";
import { PaymentMethod } from "@/types/order";

export default function PaymentMethodSelector({ methods }: { methods: PaymentMethod[] }) {
  const [selected, setSelected] = useState(methods[0]?.id ?? "");

  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-slate-900">결제 수단</h2>
      <div className="grid grid-cols-2 gap-3">
        {methods.map((method) => {
          const isSelected = method.id === selected;
          return (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelected(method.id)}
              aria-pressed={isSelected}
              className={`rounded-lg border py-3.5 text-sm font-semibold transition ${
                isSelected
                  ? "border-cyan-500 bg-cyan-50 text-cyan-700"
                  : "border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              {method.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
