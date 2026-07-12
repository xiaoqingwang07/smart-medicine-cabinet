# 家药箱 Figma 原型与用户验证 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 产出可分享的 Figma 可点击原型，并用至少 5 名目标用户验证「家庭共用药箱」流程是否愿意用、愿意拉家人。

**Architecture:** 本阶段不写 App 代码。在 Figma 中用 9 帧 iPhone 画板 + Prototype 热区串主故事线；示例数据写死在画板内。验证问卷只问使用意愿与流程卡点，不问价格。App 实现计划在验证通过后另开。

**Tech Stack:** ~~Figma~~ → **已改为 HTML 可点击原型**（`prototype/index.html`），因无 Figma 编辑权限；可选微信/小红书收集反馈；文档在 `docs/`。

**Spec:** `docs/superpowers/specs/2026-07-12-family-medicine-cabinet-design.md`

**执行变更（2026-07-12）：** 用户选择方案 B，用 HTML 原型替代 Figma Tasks 1–6；Task 7–8 文档已落地。验证标准不变。

---

## 文件与产物结构

| 产物 | 路径 / 位置 | 职责 |
|---|---|---|
| 设计规格（已有） | `docs/superpowers/specs/2026-07-12-family-medicine-cabinet-design.md` | 需求真相源 |
| 本计划 | `docs/superpowers/plans/2026-07-12-figma-prototype-validation.md` | 任务清单 |
| Figma 文件 | Figma 云端：`家药箱-MVP原型` | 9 帧交互原型 |
| 测试脚本 | `docs/superpowers/validation/2026-07-12-user-test-script.md` | 访谈话术与记录表 |
| 测试结论 | `docs/superpowers/validation/2026-07-12-user-test-results.md` | 汇总是否进入开发 |

```
智能药箱/
├── docs/superpowers/
│   ├── specs/2026-07-12-family-medicine-cabinet-design.md
│   ├── plans/2026-07-12-figma-prototype-validation.md
│   └── validation/
│       ├── 2026-07-12-user-test-script.md
│       └── 2026-07-12-user-test-results.md
├── gemini-code-1783829049245.md
└── 产品调研报告.md
```

---

### Task 1: 创建 Figma 文件与设计基础

**Files:**
- Create: Figma 文件 `家药箱-MVP原型`（云端）
- Create: Page `01-主故事`、Page `02-附录-付费墙（不串原型）`

- [ ] **Step 1: 新建文件与画板尺寸**

在 Figma 新建文件，命名为 `家药箱-MVP原型`。  
Page `01-主故事` 内创建 Frame 预设 **iPhone 14 & 15 Pro**（或手动 390×844）。  
命名规则：`P01-登录` … `P09-我的家庭`（与下表一致）。

- [ ] **Step 2: 建立颜色与文字样式**

创建 Color styles（名称必须一致，后续组件引用）：

| Style 名 | 用途 | 建议值 |
|---|---|---|
| `bg/page` | 页面背景 | `#F7F5F2` |
| `bg/card` | 卡片 | `#FFFFFF` |
| `text/primary` | 主文案 | `#1A1A1A` |
| `text/secondary` | 次文案 | `#6B6B6B` |
| `accent` | 主按钮/位置强调 | `#0F6B5C` |
| `status/expired` | 过期 | `#C43C3C` |
| `status/soon` | 临期 | `#C48A1A` |
| `status/ok` | 安全 | `#2E7D4F` |

Text styles：`Title` 22 Bold、`Body` 16 Regular、`Caption` 13 Regular、`ResultName` 20 Semibold、`ResultLocation` 18 Bold（用于找药结果位置）。

- [ ] **Step 3: 建立基础组件**

在 Page `01-主故事` 旁建 `Components` 区域，创建：

1. `TabBar` — 三项：首页 / ＋ / 我的；＋ 视觉加重  
2. `StatusPill` — variants：过期 / 临期 / 安全  
3. `MedicineRow` — 左药名、中功效小标签、右位置+效期 pill  
4. `PrimaryButton` — 高 48、圆角 12、填充 `accent`、白字  
5. `SecondaryButton` — 描边 `accent`、字色 `accent`  
6. `SearchField` — 圆角输入框，placeholder「搜索药品名、功效或症状」

- [ ] **Step 4: 自检**

打开任意空 Frame，确认能插入上述组件且样式正确。  
预期：6 个组件均可复用，颜色不靠手填 hex。

---

### Task 2: 绘制 P01–P04（登录与家庭加入）

**Files:**
- Modify: Figma `01-主故事` → `P01`–`P04`

- [ ] **Step 1: 画 P01-登录**

内容：
- 顶部大标题：`家药箱`
- 副标题：`一人录入，全家能找`
- 主按钮：`通过 Apple 登录`
- 次按钮：`手机号登录`
- 底部小字：`登录即表示同意用户协议与隐私政策`（可点区域可先不做真链接）

- [ ] **Step 2: 画 P02-家庭空状态**

内容：
- 标题：`还没有家庭药箱`
- 说明：`创建一个，或输入家人发来的邀请码加入`
- `PrimaryButton`：`创建家庭药箱`
- `SecondaryButton`：`输入邀请码加入`
- **本页不要出现任何付费文案**

- [ ] **Step 3: 画 P03-创建家庭**

内容：
- 标题：`创建家庭药箱`
- 输入框 label：`家庭名称`，默认预填示例 `张家药箱`（可编辑外观）
- `PrimaryButton`：`创建并进入`

- [ ] **Step 4: 画 P04-加入家庭**

内容：
- 标题：`加入家庭药箱`
- 6 个方格示意邀请码，预填 `482916`
- 确认区：`将加入「张家药箱」`
- `PrimaryButton`：`确认加入`

- [ ] **Step 5: 自检**

四帧并排查看：视觉层级一致、无付费字样、文案与规格第 5.1 节一致。

---

### Task 3: 绘制 P05 首页（含示例数据）

**Files:**
- Modify: Figma `P05-首页`

- [ ] **Step 1: 画顶栏与搜索**

- 顶栏左侧：`张家药箱`（`Title`）  
- 其下：`SearchField`  
- SearchField 下方一排症状标签（小圆角胶囊，可点样式）：`腹泻` `感冒` `发烧` `止痛` `过敏`

- [ ] **Step 2: 画三色效期看板**

横向三块等宽卡片：
- 过期 `1`（`status/expired`）
- 临期 `1`（`status/soon`）
- 安全 `3`（`status/ok`）

数字用大号字，下方小字标签。

- [ ] **Step 3: 画位置列表与示例药品**

两个位置分组：

**客厅药箱（3）**
| 药名 | 功效标签 | 效期 |
|---|---|---|
| 蒙脱石散 | 腹泻 | 安全 |
| 布洛芬混悬滴剂 | 退烧止痛 | 临期 |
| 创可贴 | 外伤 | 安全 |

**冰箱冷藏（2）**
| 药名 | 功效标签 | 效期 |
|---|---|---|
| 整肠生 | 腹泻 | 安全 |
| 某眼药水 | 眼部 | 过期 |

每行用 `MedicineRow` + `StatusPill`。

- [ ] **Step 4: 放入 TabBar**

选中「首页」。底部安全区留白。

- [ ] **Step 5: 自检**

数一下看板数字：过期1+临期1+安全3=5，与列表示例药数量一致。

---

### Task 4: 绘制 P06–P08（录入与找药）

**Files:**
- Modify: Figma `P06`–`P08`

- [ ] **Step 1: 画 P06-录入扫码**

- 标题：`极速录入`
- 中央大矩形占位：`对准药盒条码` + 相机取景示意框  
- 文字按钮：`改为拍照识别说明书/效期`  
- 顶栏关闭 `×`（返回首页）

- [ ] **Step 2: 画 P07-录入确认表单**

预填示例（模拟扫码结果）：
- 药品名称：`整肠生胶囊`
- 功效标签：`腹泻` `肠道菌群`
- 存放位置：下拉显示 `冰箱冷藏`（可示意另有「客厅药箱」「＋新建位置」）
- 有效期至：`2027-03-01`
- 开封管理：开关关闭
- 主按钮文案必须是：`保存并继续录入`（不是单独的「完成」）
- 次要文字按钮：`保存并返回首页`

- [ ] **Step 3: 画 P08-找药结果**

顶栏显示用户输入：`拉肚子`  
免责小字：`仅展示家中已有药品，不构成用药建议`

结果列表（匹配「腹泻」）：
1. **整肠生** — 位置大字 `冰箱冷藏` — 安全  
2. **蒙脱石散** — 位置大字 `客厅药箱` — 安全  

位置使用 `ResultLocation` 样式 + `accent` 色。  
不要把过期眼药水排在前面。

- [ ] **Step 4: 自检**

P07 主按钮文案是否为「保存并继续录入」；P08 是否有免责声明且位置足够醒目。

---

### Task 5: 绘制 P09 我的-家庭（轻量升级）

**Files:**
- Modify: Figma `P09-我的家庭`
- Optional: Page `02-附录` 画一帧付费墙但不链接进主 Prototype

- [ ] **Step 1: 画 P09 主体**

- 标题：`张家药箱`
- 成员列表（全员对等，无角色标签）：
  - 张三（我）
  - 李四
- 区块：`邀请家人`
  - 邀请码大号：`482916`
  - 按钮：`复制邀请码` / `分享给家人`
- 文字按钮：`退出家庭`（用 `text/secondary`，不要用主色大按钮）

- [ ] **Step 2: 轻量升级入口（按规格：不强调付费）**

页面最底部用 **Caption + 次要色** 一行：
`解锁完整版（可选）`  
不要用大红按钮、不要角标「限时」、不要放在首屏中间。

- [ ] **Step 3:（可选）附录付费墙**

在 `02-附录-付费墙` 画一帧说明无限药品/识别，**禁止**从 P01–P09 的 Prototype 连到此帧。

- [ ] **Step 4: 放入 TabBar**

选中「我的」。

---

### Task 6: 连接 Prototype 主故事线

**Files:**
- Modify: Figma Prototype 设置（`01-主故事`）

- [ ] **Step 1: 设置起始帧**

Prototype 面板 → Starting point = `P01-登录`

- [ ] **Step 2: 按下列热区连接（全部 On tap → Navigate to）**

| 从 | 热区 | 到 | 动画 |
|---|---|---|---|
| P01 | `通过 Apple 登录` | P02 | Dissolve |
| P01 | `手机号登录` | P02 | Dissolve |
| P02 | `创建家庭药箱` | P03 | Push |
| P02 | `输入邀请码加入` | P04 | Push |
| P03 | `创建并进入` | P05 | Push |
| P04 | `确认加入` | P05 | Push |
| P05 | SearchField 或标签 `腹泻` | P08 | Push |
| P05 | Tab `＋` | P06 | Cover |
| P05 | Tab `我的` | P09 | Instant |
| P06 | 扫码取景框（整块可点） | P07 | Push |
| P07 | `保存并继续录入` | P06 | Push |
| P07 | `保存并返回首页` | P05 | Push |
| P08 | 返回箭头 | P05 | Pop |
| P09 | Tab `首页` | P05 | Instant |

- [ ] **Step 3: 走查主故事（必测路径）**

Present 模式完整点一遍：
`P01 → P02 → P03 → P05 → P06 → P07 → P06 →（次要）或 P07→P05 → 点腹泻 → P08 → 回首页 → 我的 P09`

预期：无断链、无误进附录付费墙、全程无价格文案弹出。

- [ ] **Step 4: 开启分享链接**

Share → `Anyone with the link can view` → 复制链接，粘贴保存到本地备忘或发到微信「文件传输助手」。  
在 `docs/superpowers/validation/2026-07-12-user-test-script.md` 起草时把链接填进「原型链接」字段（Task 7 创建该文件）。

---

### Task 7: 编写用户测试脚本

**Files:**
- Create: `docs/superpowers/validation/2026-07-12-user-test-script.md`

- [ ] **Step 1: 创建验证目录与脚本文件**

创建目录 `docs/superpowers/validation/`，写入如下完整内容：

```markdown
# 家药箱用户测试脚本

**日期：** 2026-07-12  
**原型链接：** （粘贴 Figma share link）  
**目标人数：** ≥5（有娃家庭或需照顾老人的家庭）  
**单场时长：** 10–15 分钟  

## 开场（1 分钟）

「我在做一个家庭药箱小工具的原型，想请你帮我点一点、说说真实感觉。没有对错，不是考试。这不是成品 App。」

## 任务（让用户自己点，少提示）

1. 登录并创建一个叫任意名字的家庭药箱  
2. 录入一盒药（走扫码→确认→保存）  
3. 用「拉肚子」或点「腹泻」找到药在哪  
4. 打开「我的」，看看怎么邀请家人  

观察：哪里停顿、哪里想点却点不到、是否理解「全家共用」。

## 访谈问题（问完任务再问；不问价格）

1. 如果正式上线，你会不会下载使用？为什么？  
2. 你会不会邀请家人一起用？卡点是什么？  
3. 刚才哪里让你觉得烦或看不懂？  
4. 还缺什么功能你才会真正坚持用？  

## 记录表（每人一行）

| 用户 | 关系画像 | 会装？ | 会邀请家人？ | 主要吐槽 | 亮点原话 |
|---|---|---|---|---|---|
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |

## 通过标准（与规格一致）

- [ ] ≥5 人完成测试  
- [ ] 其中多数表示「会装」或「想拉家人」  
- [ ] 吐槽已记录，可支撑改一版流程  

未达标准：先改 Figma 再测一轮，不进入 App 开发。
```

- [ ] **Step 2: 填入真实 Figma 链接**

将 Task 6 的 share link 替换进脚本「原型链接」一行。

- [ ] **Step 3: 自检**

通读脚本：确认 **没有**「你愿意付多少钱」类问题。

---

### Task 8: 执行用户测试并写结论

**Files:**
- Modify: `docs/superpowers/validation/2026-07-12-user-test-script.md`（填记录表）
- Create: `docs/superpowers/validation/2026-07-12-user-test-results.md`

- [ ] **Step 1: 招募并完成 ≥5 场测试**

渠道建议：家人朋友、小区父母群、小红书「家庭收纳/育儿」评论区私信（说明是无偿原型访谈）。  
每场按脚本执行，当场填记录表。

- [ ] **Step 2: 汇总结论文件**

创建 `docs/superpowers/validation/2026-07-12-user-test-results.md`，结构如下（填入真实数据）：

```markdown
# 家药箱用户测试结论

**测试日期：**  
**完成人数：**  
**Figma 链接：**  

## 量化

- 会装：X / N  
- 会邀请家人：Y / N  

## Top 卡点（按提及次数）

1.  
2.  
3.  

## 决定

- [ ] **通过** → 进入 iOS App 实现计划（另开 `docs/superpowers/plans/`）  
- [ ] **需改原型再测** → 列出 Figma 修改项与负责人  
- [ ] **方向存疑** → 暂停开发，回研报复盘  

## 若通过：下一计划应覆盖的模块

（供后续 App 计划引用，本阶段不实现）
- 账号与家庭邀请码
- 位置 / 药品 CRUD + 同步
- 扫码 / OCR 录入与连续录入
- 首页看板与症状找药
- 合规文案与本地缓存
```

- [ ] **Step 3: 对照规格成功标准做 Go/No-Go**

打开规格第 1 节成功标准，逐条勾选。  
仅当「通过」勾选时，再请求撰写 `2026-XX-XX-ios-app-implementation.md`。

---

## Spec 覆盖自检

| 规格要求 | 对应 Task |
|---|---|
| 家庭共享为差异化、账号邀请 | Task 2, 5, 6 |
| 全员对等、不强调付费 | Task 5, 6, 7 |
| 连续录入文案 | Task 4 Step 2, Task 6 热区 |
| 找药大字号位置 + 免责 | Task 4 Step 3 |
| 9 帧主故事无付费墙 | Task 2–6 |
| ≥5 人验证、不问价 | Task 7–8 |
| MVP 不做语音/服药提醒/安卓 | 本计划未包含（正确） |
| App 代码实现 | **刻意排除**；验证通过后另开计划 |

---

## 执行说明

本计划以 **Figma 操作为主**。若由 Agent 协助：可代写 validation 文档、走查清单与文案；Figma 画布需在你的 Figma 账号内完成（或你共享编辑权后由人执行 Task 1–6）。

**Plan complete and saved to `docs/superpowers/plans/2026-07-12-figma-prototype-validation.md`.**

**两种执行方式：**

1. **Subagent-Driven（推荐）** — 每个 Task 开一个子代理，做完再审，适合 Task 7–8 文档与你并行画 Figma  
2. **Inline Execution** — 本会话按 Task 推进；Figma 步骤由你点，我负责文档、文案核对与走查清单  

你选哪种？若你更想 **自己先在 Figma 画、我在旁边当核对清单**，直接说「我画 Figma，你协助走查」即可。
