import type { MutationProps, PaginationParams } from "./common";
import type {
  OrderCommentCustom,
  OrderDripfill,
  OrderMentionCustom,
  OrderMentionFollow,
  OrderSubscription,
} from "./order";

export interface VoucherParams extends PaginationParams {
  keyword?: string;
  for?: string;
}

export interface Voucher {
  bonuspercent: number;
  bonusrp: number;
  code: string;
  date_end: Date | null;
  date_start: Date | null;
  description: string;
  discountpercent: number | null;
  discountrp: number | null;
  for: string;
  id_voucher: number;
  is_active: number;
  is_allplan: number;
  is_allproduct: number | null;
  is_alluser: number;
  is_date_limit: number;
  is_public: number;
  is_shop: number | null;
  max_payment_total: number;
  max_product: number | null;
  max_used: number;
  max_used_perday: number;
  max_used_permonth: number;
  max_used_peruser: number;
  min_order_qty: number | null;
  min_order_total: number | null;
  min_payment_total: number;
  name: string;
  plan: string;
  sort: string | null;
  type: string;
  created_at: Date | null;
  update_at: Date | null;
}

export interface VoucherRegister {
  bonus: number;
  code_voucher: string;
  new_balance: number;
  uniq_number: number;
  upgrade: string;
  upgrade_transfer: number;
}

export interface VoucherRedeemMutation extends MutationProps {
  code_voucher: string;
}

export interface VoucherCheck {
  code: string;
  nominal: number;
}

export interface VoucherCheckMutation<T> extends MutationProps<T>, VoucherCheck {}

export interface VoucherRegisterCheckMutation extends MutationProps {
  code_voucher: string;
  payment_account_id: string;
}

export interface VoucherCheckOrder {
  product_id: number;
  voucher: string;
  qty?: number;
  custom?: OrderSubscription | OrderCommentCustom | OrderMentionCustom | OrderMentionFollow | OrderDripfill;
  interval?: number;
  runs?: number;
}

export interface VoucherCheckOrderMutation<T> extends MutationProps<T>, VoucherCheckOrder {}

export interface VoucherCheckOrderResponse {
  bonus: number;
  disc: number;
  discount: number;
  id_voucher: number;
  is_rp: number;
  subtotal: number;
  total: number;
  code?: string;
}
