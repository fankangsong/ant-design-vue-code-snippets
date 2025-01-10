// Ant Design Vue 组件列表 (Vue 3 版本)
export const ANT_COMPONENTS = [
  // 通用组件
  "a-button",
  "a-icon",
  "a-typography",
  "a-divider",

  // 布局组件
  "a-row",
  "a-col",
  "a-layout",
  "a-layout-header",
  "a-layout-content",
  "a-layout-footer",
  "a-layout-sider",
  "a-space",
  "a-grid",

  // 导航组件
  "a-affix",
  "a-breadcrumb",
  "a-breadcrumb-item",
  "a-dropdown",
  "a-dropdown-button",
  "a-menu",
  "a-menu-item",
  "a-menu-divider",
  "a-menu-sub-menu",
  "a-menu-item-group",
  "a-pagination",
  "a-steps",
  "a-step",

  // 数据录入组件
  "a-auto-complete",
  "a-cascader",
  "a-checkbox",
  "a-checkbox-group",
  "a-date-picker",
  "a-time-picker",
  "a-form",
  "a-form-item",
  "a-input",
  "a-input-number",
  "a-input-search",
  "a-input-password",
  "a-input-textarea",
  "a-mentions",
  "a-radio",
  "a-radio-group",
  "a-radio-button",
  "a-rate",
  "a-select",
  "a-select-option",
  "a-select-opt-group",
  "a-slider",
  "a-switch",
  "a-transfer",
  "a-tree-select",
  "a-upload",

  // 数据展示组件
  "a-avatar",
  "a-badge",
  "a-calendar",
  "a-card",
  "a-card-meta",
  "a-card-grid",
  "a-carousel",
  "a-collapse",
  "a-collapse-panel",
  "a-descriptions",
  "a-descriptions-item",
  "a-empty",
  "a-image",
  "a-list",
  "a-list-item",
  "a-list-item-meta",
  "a-popover",
  "a-statistic",
  "a-table",
  "a-tabs",
  "a-tab-pane",
  "a-tag",
  "a-timeline",
  "a-timeline-item",
  "a-tooltip",
  "a-tree",

  // 反馈组件
  "a-alert",
  "a-drawer",
  "a-message",
  "a-modal",
  "a-notification",
  "a-popconfirm",
  "a-progress",
  "a-result",
  "a-skeleton",
  "a-spin",

  // 其他组件
  "a-anchor",
  "a-anchor-link",
  "a-back-top",
  "a-config-provider",
  "a-watermark",
];

// 组件分类
export const COMPONENT_CATEGORIES = {
  GENERAL: ["a-button", "a-icon", "a-typography", "a-divider"],
  LAYOUT: ["a-row", "a-col", "a-layout", "a-space", "a-grid"],
  NAVIGATION: [
    "a-breadcrumb",
    "a-dropdown",
    "a-menu",
    "a-pagination",
    "a-steps",
  ],
  DATA_INPUT: [
    "a-form",
    "a-input",
    "a-select",
    "a-checkbox",
    "a-radio",
    "a-switch",
    "a-upload",
  ],
  DATA_DISPLAY: [
    "a-table",
    "a-list",
    "a-card",
    "a-tabs",
    "a-tree",
    "a-tooltip",
  ],
  FEEDBACK: [
    "a-alert",
    "a-modal",
    "a-message",
    "a-notification",
    "a-progress",
    "a-spin",
  ],
  OTHER: ["a-anchor", "a-back-top", "a-config-provider"],
};

// 获取特定类别的组件
export function getComponentsByCategory(category) {
  return COMPONENT_CATEGORIES[category] || [];
}

// 检查是否是有效的 Ant Design Vue 组件
export function isValidAntComponent(componentName) {
  return ANT_COMPONENTS.includes(componentName);
}
