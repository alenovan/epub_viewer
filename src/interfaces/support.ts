export interface TextParams {
  param?: string;
}

export interface IText {
  description: string;
  file_txt: string | null;
  id: number;
  is_file: File | null;
  param: string;
  parent: string;
  parent_id: number;
  value: string;
}
