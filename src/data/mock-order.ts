import { OrderItem, PaymentMethod, ShippingInfo } from "@/types/order";

export const mockShippingInfo: ShippingInfo = {
  recipient: "김현성",
  phone: "010-9999-9999",
  address: "서울특별시 중구 신당동 123-4 5층",
};

export const mockOrderItems: OrderItem[] = [
  {
    id: "wine-chateau-margaux-2018-1",
    category: "와인",
    name: "샤또 마고 2018 그랑 크뤼",
    volumeMl: 750,
    abvPercent: 13.5,
    qty: 1,
    price: 245000,
    originalPrice: 280000,
  },
  {
    id: "wine-chateau-margaux-2018-2",
    category: "와인",
    name: "샤또 마고 2018 그랑 크뤼",
    volumeMl: 750,
    abvPercent: 13.5,
    qty: 1,
    price: 245000,
    originalPrice: 280000,
  },
  {
    id: "wine-chateau-margaux-2018-3",
    category: "와인",
    name: "샤또 마고 2018 그랑 크뤼",
    volumeMl: 750,
    abvPercent: 13.5,
    qty: 1,
    price: 245000,
    originalPrice: 280000,
  },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "card", label: "신용카드" },
  { id: "bank-transfer-manual", label: "무통장 입금" },
  { id: "bank-transfer", label: "계좌이체" },
  { id: "naverpay", label: "네이버페이" },
  { id: "kakaopay", label: "카카오페이" },
  { id: "toss", label: "토스" },
];

export const FREE_SHIPPING_THRESHOLD = 100000;
export const BASE_SHIPPING_FEE = 3000;
