import type { User } from "@/interfaces/profile";

import type { MutationProps } from "./common";

export interface RatingDetailParams {
  rating?: string;
  to?: string;
  from?: string;
  orderBy?: string;
}

export interface RatingItem {
  comment: string;
  id_member: number;
  id_product: number;
  id_product_rating: number;
  member: User;
  rating: number;
  updated_at: Date;
  created_at: Date;
}

export interface Rating {
  all_ratings: RatingItem[];
  rating_me: RatingItem;
}

export interface RatingData {
  product_id: number;
  rating: number;
  comment: string;
}

export interface RatingMutation<T> extends MutationProps<T>, RatingData {}

export interface RatingResponse {}
