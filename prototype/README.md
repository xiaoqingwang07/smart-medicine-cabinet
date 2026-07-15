# 家药箱 HTML 原型

本目录承载可本地打开的 HTML/CSS 点击原型。Task 1 建立设计令牌与基础组件；Task 2 已加入 P01–P04（登录与家庭加入）多屏流程。

## 如何打开

### 手机 / 任意设备（推荐）

在浏览器中打开：

**https://cdn.jsdelivr.net/gh/xiaoqingwang07/smart-medicine-cabinet@gh-pages/index.html**

（已部署到 `gh-pages` 分支，可点击交互。）

若希望使用 `https://xiaoqingwang07.github.io/smart-medicine-cabinet/`，需在 GitHub 仓库 **Settings → Pages** 中将 Source 设为 `gh-pages` 分支、根目录 `/`。

### 电脑本地

1. 在 Finder 中进入本目录，双击 `index.html`；或
2. 将 `index.html` 拖入 Chrome / Safari / Firefox。

无需本地服务器，直接 `file://` 打开即可。

## 当前流程

- P01 登录：Apple 登录 / 手机号登录 → P02
- P02 家庭空状态：创建家庭药箱 → P03；输入邀请码加入 → P04
- P03 创建家庭：创建并进入 → P05 首页
- P04 加入家庭：确认加入 → P05 首页
- P05 首页：症状标签 → P08 找药结果（占位）；Tab ＋ → P06 极速录入（占位）；Tab 我的 → P09 我的（占位）

## 文件说明

| 文件 | 职责 |
|---|---|
| `index.html` | 手机框壳 + P01–P06/P08/P09 多屏结构 |
| `styles.css` | 设计令牌（CSS 变量）+ 基础组件与表单/屏幕样式 |
| `app.js` | `showScreen()` 路由、hash 同步、底部导航显隐 |

## 设计令牌

颜色变量名与 Figma 计划一致：

- `--bg-page` `#F7F5F2`
- `--bg-card` `#FFFFFF`
- `--text-primary` `#1A1A1A`
- `--text-secondary` `#6B6B6B`
- `--accent` `#0F6B5C`
- `--status-expired` `#C43C3C`
- `--status-soon` `#C48A1A`
- `--status-ok` `#2E7D4F`

文字样式类：`.text-title`、`.text-body`、`.text-caption`、`.text-result-name`、`.text-result-location`

## 基础组件

| CSS 类 | 对应 Figma 组件 |
|---|---|
| `.tab-bar` | TabBar（首页 / ＋ / 我的） |
| `.status-pill` + `--expired` / `--soon` / `--ok` | StatusPill |
| `.medicine-row` | MedicineRow |
| `.btn-primary` | PrimaryButton |
| `.btn-secondary` | SecondaryButton |
| `.search-field` | SearchField |

手机预览框：`.phone-frame`（宽约 390px，模拟 iPhone 画板）

## 后续

- Task 4+ 将继续补齐 P06–P09 细节屏幕，串起主故事线。
- 规格真相源：`docs/superpowers/specs/2026-07-12-family-medicine-cabinet-design.md`
