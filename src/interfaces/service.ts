import type { PaginationParams } from "./common";
import type { Product } from "./product";

export interface ServiceParams extends PaginationParams {
  keyword?: string;
  from?: string;
  to?: string;
  date?: string;
  update_type?: string;
}

export interface Service {
  id_product_monitor: number;
  id_product: number;
  mode: string;
  notes: string;
  speed_duration: number | null;
  speed_start: number | null;
  product?: Product;
  update_new_price: number;
  is_active: number;
  update_old_price: number;
  update_type: string;
  created_at: Date | null;
  update_at: Date | null;
}
