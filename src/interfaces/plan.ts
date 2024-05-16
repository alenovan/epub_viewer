export interface PlanParams {
  name?: string;
}

export interface Plan {
  id_plan: number;
  name: string;
  price: number;
  frequency_amount: number;
  frequency_unit: string;
  options: string;
  menu: string;
  product_type: string;
  post_category: string;
  benefits: string;
  is_active: number;
  is_default: number;
  is_premium: number;
  upgrade_price: number | null;
  upgrade_balance: number | null;
  upgrade_fee: number | null;
  uv_price: number | null;
  uv_balance: number | null;
  uv_commision: number | null;
  uv_fee: number | null;
  banner_post_category_id: number;
  news_post_category_id: number;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface PlanPublic {
  benefits: string;
  id_plan: number;
  name: string;
  price: number;
}
