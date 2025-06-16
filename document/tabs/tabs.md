# CmTabs & CmTabPanel 元件說明

## 功能簡介

`CmTabs` 與 `CmTabPanel` 是一組用於切換分頁內容的 Vue 3 元件，支援 v-model 雙向綁定、分頁禁用、slot 傳遞內容等功能。

---

## 基本用法

### 1. 引入元件

```ts
import { CmTabs, CmTabPanel } from '你的元件庫路徑';
```

### 2. 定義分頁資料

```ts
<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('tab1');
const items = [
  { name: 'Tab 1', value: 'tab1' },
  { name: 'Tab 2', value: 'tab2' },
  { name: 'Tab 3', value: 'tab3', disabled: true }, // 可選: 禁用分頁
];
</script>
```

### 3. 在 template 使用

```vue
<template>
  <cm-tabs v-model="tab" :items="items">
    <cm-tab-panel value="tab1">Tab 1 的內容</cm-tab-panel>
    <cm-tab-panel value="tab2">Tab 2 的內容</cm-tab-panel>
    <cm-tab-panel value="tab3">Tab 3 的內容</cm-tab-panel>
  </cm-tabs>
</template>
```

---

## Props 說明

### CmTabs

| Prop    | 型別         | 說明         |
| ------- | ------------ | ------------ |
| items   | CmTabsItem[] | 分頁資料陣列 |
| v-model | string       | 當前選中分頁 |

#### CmTabsItem 結構

```ts
interface CmTabsItem {
  name: string; // 分頁名稱
  value: string; // 對應值
  disabled?: boolean; // 是否禁用
}
```

### CmTabPanel

| Prop  | 型別   | 說明         |
| ----- | ------ | ------------ |
| value | string | 對應分頁的值 |

---

## 完整範例

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { CmTabs, CmTabPanel } from '你的元件庫路徑';

const tab = ref('tab1');
const items = [
  { name: 'Tab 1', value: 'tab1' },
  { name: 'Tab 2', value: 'tab2' },
  { name: 'Tab 3', value: 'tab3', disabled: true },
];
</script>

<template>
  <cm-tabs v-model="tab" :items="items">
    <cm-tab-panel value="tab1">Tab 1 的內容</cm-tab-panel>
    <cm-tab-panel value="tab2">Tab 2 的內容</cm-tab-panel>
    <cm-tab-panel value="tab3">Tab 3 的內容</cm-tab-panel>
  </cm-tabs>
</template>
```

---

## 注意事項

- `v-model` 綁定的值需與 `items` 陣列中某個 `value` 對應。
- `disabled: true` 可讓分頁無法點擊。
- `CmTabPanel` 的 `value` 必須與 `items` 內的 `value` 對應，否則內容不會顯示。

---

## slot 使用說明

`CmTabs` 的 slot 主要是用來放置多個 `CmTabPanel`，這屬於元件的標準用法，而非進階用法。

如果有特殊需求（如在 tab 內容中插入自訂元件、表單、或動態內容），可以利用 slot 靈活擴充。例如：

```vue
<cm-tabs v-model="tab" :items="items">
  <cm-tab-panel value="tab1">
    <custom-form />
  </cm-tab-panel>
  <cm-tab-panel value="tab2">
    <div>
      <p>這裡可以放任何自訂內容</p>
      <my-component />
    </div>
  </cm-tab-panel>
</cm-tabs>
```

---

如需更多範例，請參考元件庫文件或原始碼。
