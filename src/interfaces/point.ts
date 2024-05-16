import type { MutationProps, PaginationParams } from "./common";

export interface PointParams extends PaginationParams {
  from?: string;
  to?: string;
  date?: string;
  keyword?: string;
}

export interface Point {
  id_point_exchange: number;
  id_member: number;
  point: number;
  nominal: number;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface PointHistory {
  id_point_history: number;
  id_member: number;
  id_order: number | null;
  debt: number;
  credit: number;
  balance: number;
  id_point_exchange: number;
  id_point_manual: number | null;
  type_of_income: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface PointRedeem {}

export interface PointRedeemMutation<T> extends MutationProps<T>, PointRedeem {}

export interface PointRedeemResponse {}
