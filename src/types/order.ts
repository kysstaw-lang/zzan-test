export type OrderItem = {
  id: string;
  category: string;
  name: string;
  volumeMl: number;
  abvPercent: number;
  qty: number;
  price: number;
  originalPrice: number;
  imageUrl?: string;
};

export type ShippingInfo = {
  recipient: string;
  phone: string;
  address: string;
};

export type PaymentMethod = {
  id: string;
  label: string;
};
