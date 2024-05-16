import type { MutationProps, PaginationParams } from "./common";
import type { Product } from "./product";
import type { User } from "./profile";
import type { Voucher } from "./voucher";

export interface OrderSubscription {
  min?: number;
  posts?: number;
  delay?: number;
}

export interface OrderCommentCustom {
  comments?: string[];
}

export interface OrderMentionCustom {
  username_list?: string[];
}

export interface OrderMentionFollow {
  username?: string;
}

export interface OrderDripfill {
  day?: number;
}

export interface OrderData {
  product_id: number;
  target: string;
  qty?: number;
  custom?: OrderSubscription | OrderCommentCustom | OrderMentionCustom | OrderMentionFollow | OrderDripfill;
  interval?: number;
  runs?: number;
  source: string;
  voucher: string;
}

export interface OrderParams extends PaginationParams {
  status?: string;
  keyword?: string;
}

export interface OrderRating {
  comment: string;
  id_member: number;
  id_product: number;
  id_product_rating: number;
  rating: number;
  created_at: Date;
  updated_at: Date;
}

export interface OrderItem {
  action_at: Date | null;
  action_by: null;
  cancel_at: Date | null;
  charge: number | null;
  completed_at: Date | null;
  date: Date;
  discount: number;
  est_finish: number | null;
  est_speed: number | null;
  failed_count: number;
  failed_message: string | null;
  id: number;
  id_auto_orders: number | null;
  id_member: number;
  id_product: number;
  id_voucher: number | null;
  inprogress_at: Date | null;
  interval: number;
  is_auto: number | null;
  is_auto_orders: number | null;
  is_cancel: number | null;
  is_completed: number | null;
  is_dripfeed: number;
  is_inprogress: number | null;
  is_partial: number | null;
  is_processing: number | null;
  is_refund: number | null;
  is_sync: number | null;
  lastcheck_sync: Date | null;
  member: User;
  no_transaction: string;
  notify_estimation_at: Date;
  orderid_auto: number | null;
  partial_at: Date | null;
  price: number;
  price_hpp: number;
  processing_at: Date | null;
  product: Product;
  product_name: string;
  progress_completed: number | null;
  progress_count: number;
  progress_fail: number;
  progress_orders: number | null;
  progress_status: string;
  progress_stop_by: number;
  qty_endcount: number | null;
  qty_failed: number | null;
  qty_order: number;
  qty_remain: number;
  qty_startcount: number;
  qty_success: number | null;
  rating_member_me?: OrderRating;
  refund_at: Date | null;
  refund_id: number | null;
  runs: number;
  source: string;
  source_ip: string;
  status: string;
  subtotal: number;
  target: string;
  total: number;
  point_get: number;
  voucher?: Voucher;
  update_at: Date;
  created_at: Date;
}

export interface OrderMutation<T> extends MutationProps<T>, OrderData {}

export interface OrderResponse {
  action_at: Date | null;
  action_by: string | null;
  cancel_at: Date | null;
  charge: number | null;
  completed_at: Date | null;
  created_at: Date | null;
  date: Date | null;
  discount: number;
  est_finish: number | null;
  est_speed: number | null;
  failed_count: number;
  failed_message: string | null;
  id: number;
  id_auto_orders: number | null;
  id_member: number;
  id_product: number;
  id_voucher: number | null;
  inprogress_at: Date | null;
  interval: number;
  is_auto: number;
  is_auto_orders: number | null;
  is_cancel: number | null;
  is_completed: number | null;
  is_dripfeed: number;
  is_inprogress: number | null;
  is_partial: number | null;
  is_processing: number | null;
  is_refund: number | null;
  is_sync: number | null;
  lastcheck_sync: Date | null;
  no_transaction: string;
  notify_estimation_at: Date | null;
  orderid_auto: number | null;
  partial_at: Date | null;
  price: number;
  price_hpp: number;
  processing_at: Date | null;
  product_name: string;
  progress_completed: number | null;
  progress_count: number | null;
  progress_fail: number | null;
  progress_orders: number | null;
  progress_status: string | null;
  progress_stop_by: string | null;
  qty_endcount: number;
  qty_failed: number;
  qty_order: number;
  qty_remain: number;
  qty_startcount: number;
  qty_success: number;
  refund_at: Date | null;
  refund_id: number | null;
  runs: number;
  source: string | null;
  source_ip: string | null;
  status: string;
  subtotal: number;
  target: string;
  total: number;
  update_at: Date | null;
}
