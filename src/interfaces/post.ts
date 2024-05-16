import type { PaginationParams } from "./common";

export interface PostParams extends PaginationParams {
  category?: string;
  orderby?: string;
  sortby?: string;
}

export interface PostCategory {
  id_category: number;
  id_parent: number;
  is_banner: number;
  name: string;
  description: string;
  update_at: Date;
  created_at: Date;
}
export interface Post {
  banner: string;
  body: string;
  category: PostCategory;
  external_link: string | null;
  id_admin: number | null;
  id_category: number;
  id_post: number;
  subject: string;
  update_at: Date;
  created_at: Date;
}
