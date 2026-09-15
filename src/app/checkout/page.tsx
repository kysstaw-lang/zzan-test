import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShippingInfoCard from "@/components/checkout/ShippingInfoCard";
import OrderItemsCard from "@/components/checkout/OrderItemsCard";
import PaymentSummaryCard from "@/components/checkout/PaymentSummaryCard";
import PaymentMethodSelector from "@/components/checkout/PaymentMethodSelector";
import TermsAgreement from "@/components/checkout/TermsAgreement";
import {
  BASE_SHIPPING_FEE,
  FREE_SHIPPING_THRESHOLD,
  mockOrderItems,
  mockShippingInfo,
  paymentMethods,
} from "@/data/mock-order";

export default function CheckoutPage() {
  const itemsTotal = mockOrderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemsOriginalTotal = mockOrderItems.reduce(
    (sum, item) => sum + item.originalPrice * item.qty,
    0
  );
  const shippingFee = itemsTotal >= FREE_SHIPPING_THRESHOLD ? 0 : BASE_SHIPPING_FEE;
  const orderTotal = itemsTotal + shippingFee;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-10">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">주문 / 결제</h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <ShippingInfoCard info={mockShippingInfo} />
            <OrderItemsCard
              items={mockOrderItems}
              itemsTotal={itemsTotal}
              itemsOriginalTotal={itemsOriginalTotal}
              shippingFee={shippingFee}
              orderTotal={orderTotal}
            />
            <PaymentMethodSelector methods={paymentMethods} />
            <TermsAgreement />
          </div>

          <div>
            <PaymentSummaryCard
              items={mockOrderItems}
              shippingFee={shippingFee}
              orderTotal={orderTotal}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
