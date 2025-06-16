export interface CmTabsItem {
  name: string; // tab 的名稱
  value: string; // 作為跟 tab 內容對應時使用，以及如需使用
  disabled?: boolean; // 是否禁用
}

export interface CmTabs {
  items: CmTabsItem[];
}

export interface CmTabPanel {
  value: string;
}
