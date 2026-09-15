import { ShippingInfo } from "@/types/order";

export default function ShippingInfoCard({ info }: { info: ShippingInfo }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">배송 정보</h2>
        <button className="rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
          주소 변경
        </button>
      </div>
      <div className="rounded-xl bg-slate-50 px-5 py-4">
        <p className="text-sm font-semibold text-slate-800">
          {info.phone} &nbsp; {info.recipient}
        </p>
        <p className="mt-1 text-sm text-slate-600">{info.address}</p>
      </div>
    </section>
  );
}
