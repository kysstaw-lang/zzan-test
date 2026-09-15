"use client";

import { OrderItem } from "@/types/order";
import { formatWon } from "@/lib/format";

export default function PaymentSummaryCard({
  items,
  shippingFee,
  orderTotal,
}: {
  items: OrderItem[];
  shippingFee: number;
  orderTotal: number;
}) {
  return (
    <aside className="sticky top-6 rounded-xl border border-slate-200 p-6">
      <h2 className="mb-4 text-lg font-bold text-slate-900">결제 금액</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start justify-between text-sm">
            <div>
              <p className="text-slate-800">{item.name}</p>
              <p className="mt-0.5 text-xs text-slate-400">수량 : {item.qty}</p>
            </div>
            <p className="shrink-0 font-semibold text-slate-800">{formatWon(item.price)}</p>
          </div>
        ))}

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>배송비</span>
          <span className="font-semibold text-cyan-600">
            {shippingFee === 0 ? "무료 배송" : formatWon(shippingFee)}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
        <span>총 주문 금액</span>
        <span>{formatWon(orderTotal)}</span>
      </div>

      <button
        type="button"
        onClick={() => alert("결제 연동은 아직 준비 중이에요.")}
        className="mt-5 w-full rounded-lg bg-cyan-500 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-600"
      >
        결제하기
      </button>
    </aside>
  );
}
