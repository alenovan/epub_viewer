import type { MutationProps, PaginationParams } from "./common";

export interface ProductPlatformParams {
  other?: number;
}

export interface ProductPlatform {
  id: number;
  name: string;
  icon: string;
  icon_active: string;
  parent: null;
  urutan: number;
  created_at: Date;
  updated_at: Date;
}

export interface ProductTypeParams extends PaginationParams {
  platform_id?: number;
  keyword?: string;
}

export interface ProductType {
  id: number;
  name: string;
  order_number: number;
  is_premium: number | null;
  is_private: number | null;
  is_active: number;
  is_hide_rs: number;
  is_validate_ig: number | null;
  validate_ig: string | null;
  autoblacklist_type: number;
  is_active_shop: number;
  created_at: Date;
  update_at: Date;
  platform_id: number;
  platform?: ProductPlatform;
}

export interface ProductParams extends PaginationParams {
  is_favorite?: number;
  product_type_id?: number;
  platform_id?: number;
  criteria_id?: number | string;
  keyword?: string;
}

export interface Product {
  id_type: number;
  id_form: number;
  name: string;
  description: string;
  hint: string;
  price_sell: number;
  price_strike?: number;
  min_order: number;
  max_order: number;
  is_validate_ig: number;
  is_active: number;
  validate_ig: string;
  is_dripfeed: number;
  is_limit: number;
  limit_alltime: number;
  limit_peruser: number;
  limit_perday: number;
  is_limitdate: number;
  limitdate_start: Date | null;
  limitdate_end: Date | null;
  created_at: Date;
  update_at: Date;
  platform_id: number | null;
  product_function_id: number | null;
  is_syncprice: number;
  is_estimation: number;
  estimation_day: number;
  estimation_hour: number;
  id: number;
  is_favorite: number;
  product_form?: ProductForm;
  product_type?: ProductType;
  platform?: ProductPlatform;
  product_function?: ProductFunction;
  product_month?: ProductMonth;
  multi_type?: ProductMultType[];
  sales_count: number;
  sales_count_type: string;
}

export interface ProductForm {
  id_product_form: number;
  name: string;
  api_function: string;
  hide_qty: number;
  disable_qty: number;
  hide_target: number;
  created_at: Date | null;
  update_at: Date | null;
}

export interface ProductFunction {
  id: number;
  name: string;
  created_at: Date | null;
  update_at: Date | null;
}

export interface ProductMonth {
  hpp: number | null;
  id_product: number;
  kategori?: string | null;
  name: string;
  order_count: number;
  rating: number;
  sales: number;
  speed: number;
}

export interface ProductMultType {
  id: number;
  id_product: number;
  id_type: number;
  created_at: Date | null;
  update_at: Date | null;
}

export interface ProductFavorite {
  product_id: number;
  is_favorite: number;
}

export interface ProductMutation<T> extends MutationProps<T>, ProductFavorite {}
export interface ProductResponse {}
