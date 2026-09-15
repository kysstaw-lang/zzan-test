import { OrderItem } from "@/types/order";
import { discountPercent, formatWon } from "@/lib/format";
import BottleThumb from "./BottleThumb";

export default function OrderItemsCard({
  items,
  itemsTotal,
  itemsOriginalTotal,
  shippingFee,
  orderTotal,
}: {
  items: OrderItem[];
  itemsTotal: number;
  itemsOriginalTotal: number;
  shippingFee: number;
  orderTotal: number;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-slate-900">주문 상품</h2>

      <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 px-5">
        {items.map((item) => {
          const percent = discountPercent(item.originalPrice, item.price);
          return (
            <div key={item.id} className="flex items-center gap-4 py-5">
              <BottleThumb />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-400">{item.category}</p>
                <p className="truncate text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {item.volumeMl}ml · {item.abvPercent}%
                </p>
              </div>
              <div className="shrink-0 text-sm text-slate-500">수량 : {item.qty}</div>
              <div className="w-32 shrink-0 text-right">
                {percent > 0 && (
                  <p className="text-sm font-bold text-amber-600">{percent}% 할인</p>
                )}
                <p className="text-sm font-bold text-slate-900">{formatWon(item.price)}</p>
                {percent > 0 && (
                  <p className="text-xs text-slate-400 line-through">
                    {formatWon(item.originalPrice)}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 space-y-2 rounded-xl bg-cyan-50/60 px-5 py-4 text-sm">
        <div className="flex items-center justify-between text-slate-600">
          <span>상품 금액</span>
          <span>
            {itemsOriginalTotal > itemsTotal && (
              <span className="mr-2 text-slate-400 line-through">
                {formatWon(itemsOriginalTotal)}
              </span>
            )}
            <span className="font-semibold text-slate-800">{formatWon(itemsTotal)}</span>
          </span>
        </div>
        <div className="flex items-center justify-between text-slate-600">
          <span>배송비</span>
          <span className="font-semibold text-slate-800">
            {shippingFee === 0 ? "무료배송" : formatWon(shippingFee)}
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-cyan-100 pt-2 text-base font-bold text-slate-900">
          <span>총 주문 금액</span>
          <span>{formatWon(orderTotal)}</span>
        </div>
      </div>
    </section>
  );
}
