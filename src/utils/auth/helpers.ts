/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteCookie, getCookie, setCookie } from "cookies-next";

import { ACCESS_TOKEN } from "@/constants/auth";

import { isObject } from "../common";

export const getUrlKeys = (object: Record<string, any>, keepObjectKeys = false, keys = [], scope = []): string[] => {
  if (Array.isArray(object)) {
    object.forEach(obj => getUrlKeys(obj, keepObjectKeys, keys, scope), keys);
  } else if (isObject(object)) {
    Object.keys(object).forEach(item => {
      if ((!Array.isArray(object[item]) && !isObject(object[item])) || keepObjectKeys) {
        const path = `/${scope
          .concat(item as never)
          .join("/")
          .replace(/\.\[/g, "[")}`;
        if (!keys.includes(path as never)) {
          keys.push(path as never);
        }
      }
      getUrlKeys(object[item], keepObjectKeys, keys, scope.concat(item as never));
    }, keys);
  }
  return keys;
};

export const getAccessToken = (): string => getCookie(ACCESS_TOKEN)?.toString() ?? "";

export const setAccessToken = (token: string, expired: string, rememberMe: boolean) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 24 * 60 * 60 * 1000); // 3 hours
  const expireds = new Date();
  if (rememberMe) expireds.setDate(expireds.getDate() + 90 * 60 * 60 * 1000); // 3 hours
  setCookie(ACCESS_TOKEN, token, {
    expires: new Date(rememberMe ? expireds : tomorrow.toUTCString()),
  });
};

export const removeAccessToken = () => deleteCookie(ACCESS_TOKEN);

export const checkPermission = (permissions: string[], key: string, value: string) => {
  if (!permissions || permissions.length <= 0) {
    return false;
  }

  if (!key || key.length <= 0) {
    return false;
  }

  if (!value || value.length <= 0) {
    return false;
  }

  const find = permissions.find(x => {
    if (x === `${key}-${value}`) {
      return true;
    }
    return false;
  });

  return find !== undefined;
};

export function getRefFromCookie() {
  const cookies = document.cookie.split(";");
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("ref=")) {
      return cookie.substring(4); // Exclude the 'ref=' prefix
    }
  }
  return null; // If 'ref' cookie is not found
}
