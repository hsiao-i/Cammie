import type { RouteLocationRaw } from 'vue-router';

export interface Link {
  to?: RouteLocationRaw; // vue router 提供的型別，可以給 RouterLink 的 to 使用，可以是 sting，也可以是 { name: 'user' } 這種
  isExternal?: boolean; // 是否是外部連結，若是外部連結，to 的部分可以帶上 https:// ... 這種連結
  target?: string; // 連結的 target，預設會是 _self，另開連結會使用 _blank
}
