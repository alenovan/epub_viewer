import type { FormError, MutationProps, PaginationParams } from "./common";
import type { User } from "./profile";

export interface PaymentAccountParams extends PaginationParams {
  keyword?: string;
  method?: string;
}

export interface PaymentMethod {
  id: number;
  method: string;
  type: string;
  code: string;
  name: string;
  logo: string;
  rate: number;
  api_file: string | null;
  api_key: string;
  api_service: string;
  api_url: string;
  created_at: Date;
  update_at: Date;
}

export interface PaymentAccountItem {
  id_payment_account: number;
  id_payment_method: number;
  type: string;
  account_number: string;
  account_name: string;
  account_branch: string;
  account_barcode: string;
  account_logo: string;
  order_number: number;
  is_active: number;
  is_active_shop: number;
  used_by: string | null;
  username: string | null;
  password: string | null;
  key: string;
  timeout: number | null;
  offline_time: string;
  online_time: string;
  tripay_ref: string;
  tripay_fee_text: string | null;
  created_at: Date;
  update_at: Date;
  sag_ref: string | null;
  sag_fee: number | null;
  notes: string;
  payment_method: PaymentMethod;
}

export interface PaymentAccount {
  method: string;
  is_balance?: number;
  data: PaymentAccountItem[];
}

export interface PaymentWaiting {
  id: number;
  date: Date;
  no_transaction: string;
  type: string;
  id_member: number;
  m_id_paymentaccount: number;
  a_id_paymentaccount: number;
  id_voucher: number;
  nominal_voucher: number;
  unique_number: number;
  nominal_transfer: number;
  nominal_topup: number;
  action_by: string | null;
  action_at: Date | null;
  sender_name: string | null;
  sender_accountnumber: string | null;
  sender_bank: string | null;
  note: string | null;
  file_proof: string | null;
  status: string;
  tripay_ref: string | null;
  tripay_fee: number | null;
  tripay_checkout_url: string | null;
  autocheck_at: Date | null;
  remind_at: Date | null;
  created_at: Date;
  updated_at: Date;
  sag_ref: string | null;
  sag_fee: number | null;
  source: string | null;
  expired_payment_at: Date;
  member: User;
  admin_payment_account: PaymentAccountItem;
  member_payment_account: PaymentAccountItem;
}

export interface PaymentSubmit {
  id: string;
}

export interface PaymentSubmitMutation<T> extends MutationProps<T>, PaymentSubmit {}

export interface PaymentSubmitResponse {
  id: number;
  date: Date;
  no_transaction: string;
  type: string;
  id_member: number;
  m_id_paymentaccount: number;
  a_id_paymentaccount: number;
  id_voucher: number;
  nominal_voucher: number;
  unique_number: number;
  nominal_transfer: number;
  nominal_topup: number;
  action_by: string | null;
  action_at: Date | null;
  sender_name: string | null;
  sender_accountnumber: string | null;
  sender_bank: string | null;
  note: string | null;
  file_proof: string | null;
  status: string;
  tripay_ref: string | null;
  tripay_fee: number | null;
  tripay_checkout_url: string | null;
  autocheck_at: Date | null;
  remind_at: Date | null;
  created_at: Date;
  updated_at: Date;
  sag_ref: string | null;
  sag_fee: number | null;
  source: string | null;
  expired_payment_at: Date;
}

export interface PaymentManual {
  account_name: string;
  account_number: string;
  payment_id: string;
  file_proof: File | null;
}

export interface PaymentManualMutation<T> extends MutationProps<T>, PaymentManual {}

export interface PaymentManualResponse {
  account_name: string;
  account_number: string;
  file_proof: string;
  no_transaction: string;
  payment_id: string;
  payment_method_id: number;
  status: string;
}

export interface PaymentParams extends PaginationParams {
  keyword?: string;
  status?: string;
}

export interface PaymentTopup {
  payment_account_id: number;
  nominal_topup: number;
  code: string;
  source?: string;
}

export interface PaymentTopupMutation<T> extends MutationProps<T>, PaymentTopup {}

export interface PaymentTopupResponse {
  status: boolean;
  message: string;
  data: PaymentWaiting;
}

export interface PaymentTopupValidation {
  nominal_topup: FormError;
  payment_account_id: FormError;
  code: FormError;
}

export interface PaymentPremium {
  payment_account_id: number;
  is_balance: number;
  code_voucher: string;
}

export interface PaymentPremiumMutation<T> extends MutationProps<T>, PaymentPremium {}

export interface PaymentPremiumResponse {
  status: boolean;
  message: string;
  data: PaymentWaiting;
}

export interface PaymentChange {
  payment_id: number;
  payment_account_id: number;
}

export interface PaymentChangeMutation<T> extends MutationProps<T>, PaymentChange {}

export interface PaymentChangeResponse {}
