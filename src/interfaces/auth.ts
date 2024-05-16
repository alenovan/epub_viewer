import type { FormError, MutationProps } from "./common";

export interface Login {
  username: string;
  password: string;
}

export interface BindAccount {
  username: string;
  password: string;
  uid: string;
}

export interface LoginGoogle {
  email: string;
  uid: string;
  url?: string;
  ref?: string;
}

export interface LoginValidation {
  username: FormError;
  password: FormError;
}

export interface LoginOtpGoogle {
  username: string;
  otp: number;
}

export interface BindAccountMutation<T> extends MutationProps<T>, BindAccount {}

export interface LoginMutation<T> extends MutationProps<T>, Login {}

export interface LoginGoogleMutation<T> extends MutationProps<T>, LoginGoogle {}
export interface LoginOtpMutation<T> extends MutationProps<T>, LoginOtpGoogle {}

export interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    id_member: number;
    email: string;
    username: string;
    phone: string;
    balance: number;
    is_otp: 0 | 1;
    is_active: 0 | 1;
    is_premium: 0 | 1;
  };
}

export interface Register {
  name: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  payment_account_id: string;
  plan_id: string;
  code_voucher: string;
  url?: string;
  ref?: string;
  step: number;
  submit: boolean;
}

export interface RegisterValidation {
  name: FormError;
  email: FormError;
  username: FormError;
  password: FormError;
  phone: FormError;
  confirmation_password: FormError;
}

export interface RegisterMutation<T> extends MutationProps<T>, Register {}

export interface RegisterResponse {
  status: boolean;
  message: string;
  data: {
    id_member: number;
    email: string;
    username: string;
    phone: string;
    balance: number;
    is_active: 0 | 1;
    is_premium: 0 | 1;
    token: string;
  };
}

export interface BindAccountResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    id_member: number;
    email: string;
    username: string;
    phone: string;
    balance: number;
    is_active: 0 | 1;
    is_premium: 0 | 1;
  };
}
