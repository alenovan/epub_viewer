import type { MutationProps, PaginationParams, QueryPropsSimpleWithMetaList } from "./common";
import type { Product } from "./product";
import type { Voucher } from "./voucher";

export interface CartParams extends PaginationParams {
  keyword?: string;
}

export interface CartCustom {
  id: number;
  id_cart: number;
  form_name: string;
  form_value: string | number;
  created_at: Date | null;
  update_at: Date | null;
}

export interface CartDetail {
  product?: Product;
  customs: CartCustom[];
  discount: number;
  id_cart: number;
  id_product: number;
  id_reseller: number;
  id_voucher: number | null;
  price: number;
  qty: number;
  subtotal: number;
  target: string;
  total: number;
  voucher?: Voucher;
  created_at: Date | null;
  update_at: Date | null;
}

export interface Cart {
  carts: QueryPropsSimpleWithMetaList<CartDetail>;
  count: number;
  discount: number;
  subtotal: number;
  total: number;
}

export interface CartDeleteMutation {
  id: number;
}

export interface CartCheckout {
  cart_ids: number[];
}

export interface CartCheckoutMutation<T> extends MutationProps<T>, CartCheckout {}

export interface CartCheckoutResponse {}
