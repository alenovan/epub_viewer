import type { PaginationParams } from "./common";
import type { OrderItem } from "./order";
import type { User } from "./profile";

export interface BalanceParams extends PaginationParams {
  from?: string;
  to?: string;
  date?: string;
  keyword?: string;
}

export interface Balance {
  id: number;
  id_user: number;
  debt: number | null;
  credit: number;
  balance: number;
  id_order: number;
  id_payment: number | null;
  id_order_refund: number | null;
  id_redeem: number | null;
  id_withdrawal: number | null;
  id_point_exchange: number | null;
  id_mkt_orders: number | null;
  created_at: Date;
  update_at: Date;
  member: User;
  order: OrderItem | null;
  payment: OrderItem | null;
  order_refund: OrderItem | null;
}
