# 素材与下载配置

网站包含首页、功能、下载、更新日志、赞助与致谢、免责声明六页，以实际跨页链接导航。只有首页引用彩色人物大头；功能页为六组纯文字，赞助页显示公开二维码。应用截图保留为历史文件。网站源码同步至 GitHub，并通过 GitHub Pages 发布，操作见 [维护文档](./MAINTENANCE.md)。

## 当前引用的素材

| 文件 | 用途 |
| --- | --- |
| `public/assets/brand/yahagi-logo.png` | 用户提供的透明背景 Logo 原始 PNG，保留完整构图与透明度 |
| `public/favicon-yahagi.png` | 从透明背景 Logo 等比缩小的 64×64 PNG，供全站六页的浏览器标签图标使用 |
| `public/assets/hero/yahagi-portrait.png` | 用户提供的原始 PNG 首页大头，由 `heroAssets.portrait` 配置 |
| `public/assets/wordmark-distress.svg` | 当前首页原版 YAHAGI 字标的双斜切线遮罩 |
| `public/fonts/barlow-condensed-black-italic.ttf` | 首页原版字标与下载页水印字体 Barlow Condensed Black Italic |
| `public/fonts/OFL.txt` | 字体的 OFL 许可 |
| `public/fonts/HarmonyOS_Sans_SC.ttf` | 简中、日语 UI 字体，HarmonyOS Sans SC 2.040 |
| `public/fonts/HarmonyOS_Sans_TC.ttf` | 繁中 UI 字体，HarmonyOS Sans TC 2.00 |
| `public/fonts/HarmonyOS_Sans.ttf` | 英文、韩语 UI 基础字体，HarmonyOS Sans 2.040 |
| `public/fonts/LICENSE_HarmonyOS_Sans.txt` | HarmonyOS Sans 字体许可全文 |
| `public/assets/support/alipay.jpg` | 公开支付宝赞助收款码，原生 `details` 展开 |
| `public/assets/support/wechat-pay.png` | 公开微信支付赞助收款码，原生 `details` 展开 |

当前大头来自用户提供的「回眸的银灰长发少女.png」光泽版原始 PNG，完整保存在 `public/assets/hero/yahagi-portrait.png`，保留原始尺寸 1024×1536 与透明度，项目不再保留旧大头。4:3 是 CSS 的 `.portrait-frame` 展示窗口，并非原图比例；窗口内图片保持等比缩放，通过裁切沿用之前的大头构图，不修改原始 PNG。图片保留彩色，CSS 调整亮度、对比度、顶部过渡与边缘消隐，并绘制背景渐变。字标、轻量导航、文案与按钮独立于图片，现有手机、平板和桌面响应式布局继续保留。

HarmonyOS Sans 三份字体于 2026 年 10 月 19 日从用户的软件项目 `G:\kancolle project\yahagi-kancolle-browser\assets\fonts\` 原样复制。语言映射依据该项目的 `lib/src/theme/app_fonts.dart`，三份字体均为字重 40–900 的可变字体，未修改、裁剪或转换字体文件。韩文使用系统字体补足；`NotoSansJP-wght.ttf` 未注册在应用的默认字体配置中，因此本次未引入。字体许可来自 [OpenHarmony 官方仓库](https://github.com/openharmony/global_system_resources/blob/master/LICENSE_Fonts)，随字体保存在本地。

替换大头可覆盖原文件，或修改 `src/site-config.js` 中的 `heroAssets.portrait`。同名图片更新后，应同步更新 `index.html` 静态图片 `src` 与 `heroAssets.portrait` 地址中的 `?v=` 版本，避免浏览器沿用缓存。建议保留透明背景；展示窗口的位置与尺寸由 `src/styles.css` 中的 `--portrait-width`、`--portrait-x`、`--portrait-y` 调整，手机断点可分别覆盖。窗口内的裁切可通过 `.art-portrait` 的宽度、`left` 与 `top` 调整，保持图片原始宽高比。图片路径使用 `import.meta.env.BASE_URL`，适配站点根路径或仓库子路径。

## 浏览器标签图标

2026 年 10 月 19 日将用户提供的 `G:\桌面\yahagi图标\logo透明背景.png` 原样保存为 `public/assets/brand/yahagi-logo.png`，尺寸为 1254×1254，SHA256 为 `334bfe83e8460ca5a1e28951f79c1fb05912f30a3b791f427247367e5f703817`。`public/favicon-yahagi.png` 仅使用 Lanczos 重采样等比缩小为 64×64，保留完整构图和透明背景。六页统一使用新文件名，避免沿用旧蓝底 Y 图标的缓存；后续更换时同步六页的 `rel="icon"` 地址。

## 字标与原版备份

当前首页已恢复原版字体字标：`h1.hero-wordmark` 直接显示 YAHAGI 文字，使用 Barlow Condensed Black Italic、`skewX(-5deg)` 和 `public/assets/wordmark-distress.svg` 的双斜切线遮罩。首页预载原字体，保留原版手机行高及现有响应式构图；Barlow 字体同时供下载页水印使用，原字体与 OFL 许可继续保留。

`public/assets/yahagi-wordmark.svg` 与 `scripts/build-wordmark.py` 暂留作未启用的矢量字标试验稿及其生成源脚本，当前页面不引用试验稿。脚本基于 Barlow 字形调整轮廓、字宽和字距，仅手动重新生成试验稿时需要 Python 与 fontTools；常规 `npm run build` 不执行该脚本。

原版完整备份位于 `design-backups/2026-10-19-yahagi-wordmark-original/`，包含原首页 `index.html`、`src/styles.css`、原字体与 OFL 许可、`wordmark-distress.svg` 切痕遮罩、记录文件大小和 SHA256 的 `manifest.json`，以及 JPEG 格式预览 `preview-before.jpg`。恢复时只提取对应字标结构、样式与素材，避免覆盖后续其他界面修改。

## 赞助二维码与来源

两张二维码于 2026 年 10 月 19 日从项目公开仓库取得，文件内容保持原样。已核对本地文件的 Git blob SHA 与 GitHub Contents API 一致，页面仅用 CSS 控制展示尺寸并提供原图链接。

| 本地文件 | 原始 URL | Git blob SHA |
| --- | --- | --- |
| `public/assets/support/alipay.jpg` | [支付宝原图](https://raw.githubusercontent.com/yamatosaki/yahagi-kancolle-browser/master/docs/images/sponsors/alipay.jpg) | `992dcc2466c637c8f4d5840c3b6ad7fe2f2e3cd1` |
| `public/assets/support/wechat-pay.png` | [微信支付原图](https://raw.githubusercontent.com/yamatosaki/yahagi-kancolle-browser/master/docs/images/sponsors/wechat-pay.png) | `3271117e39954fedab2260baab664525329ef1d0` |

赞助渠道依据 [README 赞助支持](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/README.md#%E8%B5%9E%E5%8A%A9%E6%94%AF%E6%8C%81)及 [FUNDING.yml](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/.github/FUNDING.yml)，GitHub Sponsors 地址为 <https://github.com/sponsors/yamatosaki>。页面未创建赞助人名单。

## 更新日志数据

`src/data/releases.json` 是[项目 GitHub Releases](https://github.com/yamatosaki/yahagi-kancolle-browser/releases)的静态快照，目前含 1.0.0–1.0.8 共 9 个公开版本。版本正文按 API 原始 Markdown 保存，发布时间与原始发布链接一并保留。

在项目根目录执行 `npm run sync:releases` 更新快照，再执行 `npm run build`。同步由 `scripts/sync-releases.mjs` 分页读取官方 API，成功后才替换本地数据。浏览器通过 `src/release-notes.js` 读取快照，以 Marked 解析、DOMPurify 清理并渲染正文，无需在访问页面时请求 GitHub API。

## 历史素材

以下文件不被当前页面引用，无需随本次界面调整删除：

| 文件 | 来源或内容 |
| --- | --- |
| `public/assets/yahagi-wordmark.svg` | 未启用的矢量字标试验稿，生成源为 `scripts/build-wordmark.py` |
| `public/assets/screenshots/fleet.png` | [应用仓库原图：舰队信息](https://raw.githubusercontent.com/yamatosaki/yahagi-kancolle-browser/master/docs/images/screenshots/fleet.png) |
| `public/assets/screenshots/quests.png` | [应用仓库原图：任务中心](https://raw.githubusercontent.com/yamatosaki/yahagi-kancolle-browser/master/docs/images/screenshots/quests.png) |
| `public/assets/screenshots/tablet.png` | [应用仓库原图：平板布局](https://raw.githubusercontent.com/yamatosaki/yahagi-kancolle-browser/master/docs/images/screenshots/tablet.png) |

三张应用截图于 2026 年 10 月 19 日从公开仓库获取。`featureGroups` 当前只包含文字字段，无图片配置。

## 下载来源配置

首页和下载页的 Android/iOS 按钮分别打开对应平台的四来源弹窗，弹窗内不提供平台切换。两平台共用同一百度、夸克分享文件夹，GitHub 与直接下载地址仍按平台独立维护。每个平台的配置位于 `src/site-config.js` 的 `downloads[].sources`，每项包含 `key`、`name`、`description`、`url`、`code`。

| key | 当前状态 | 后续维护 |
| --- | --- | --- |
| `baidu` | Android 与 iOS 均已启用同一分享链接，提取码 `2953` | 更新分享链接或提取码时同步两平台配置 |
| `quark` | Android 与 iOS 均已启用同一分享链接，提取码 `miq4` | 更新分享链接或提取码时同步两平台配置 |
| `github` | 指向 v1.0.8 发布页 | 随版本更新发布页 URL |
| `direct` | 指向对应平台的已发布安装包 | 随版本更新安装包 URL |

当前版本为 [v1.0.8](https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.8)，2026 年 10 月 19 日通过 GitHub 官方 Releases API 核实：Android 安装包为 `Yahagi-1.0.8.apk`，iOS 为 `YahagiKancolleBrowser_1.0.8.ipa`。Android 是项目主要维护的平台；iOS 是 Kutinana 提供的第三方移植版，安装方式、支持功能和维护情况以对应发布说明为准。

## 名称与素材权利

应用名称为「ヤハギ（Yahagi KanColle Browser）」。它是社区开发的非官方工具，与《舰队 Collection》运营方、开发方、DMM 及相关权利方不存在隶属、授权或合作关系。

项目源码的 MIT License 不自动覆盖第三方人物、游戏画面、商标与字体的相关权利。素材来源及项目说明见：

- [项目 README](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/README.md)
- [第三方素材声明](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/THIRD_PARTY_NOTICES)
- [项目源码许可证](https://github.com/yamatosaki/yahagi-kancolle-browser/blob/master/LICENSE)
