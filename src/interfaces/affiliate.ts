import type { MutationProps, PaginationParams } from "./common";
import type { User } from "./profile";

export interface AffiliateSummary {
  affiliate_ready: boolean;
  commission_not_redeem_count: number;
  commission_not_redeem_sum: number;
  commission_redeem_sum: string;
}

export interface RedeemParams extends PaginationParams {
  keyword?: string;
}

export interface Redeem {
  id_redeem: number;
  id_member: number;
  date: Date;
  type: string;
  a_id_paymentaccount: number | null;
  m_id_paymentaccount: number;
  nominal_commission: number;
  nominal_fee: number;
  nominal_redeem: number;
  is_paid: number | null;
  paid_at: Date | null;
  status: string;
  action_by: string | null;
  action_at: Date;
  sender_name: string | null;
  sender_accountnumber: string | null;
  sender_bank: string | null;
  sender_note: string | null;
  sender_file_proof: string | null;
  receiver_name: string;
  receiver_accountnumber: string;
  receiver_bank: string;
  created_at: Date;
  update_at: Date;
}

export interface CommisionParams extends PaginationParams {
  keyword?: string;
  is_redeem?: number;
}

export interface Commision {
  id_comission: number;
  id_member: number;
  id_payment: number;
  type: string;
  nominal_topup: number;
  nominal_commision: number;
  member: MemberCommision;
  is_redeem: number;
  is_claim: number;
  created_at: Date;
  update_at: Date;
}

export interface MemberCommision {
  username: string;
}

export interface Downline {
  id_affiliate: number;
  id_member: number;
  id_member_downline: number;
  id_payment_upgrade: number;
  created_at: Date;
  update_at: Date;
  member_downline: User;
}

export interface SuggestionCode {}

export interface Affiliate {
  code: string;
}

export interface AffiliateMutation<T> extends MutationProps<T>, Affiliate {}

export interface AffiliateResponse {}

export interface RedeemMutation<T> extends MutationProps<T> {}

export interface RedeemResponse {}
