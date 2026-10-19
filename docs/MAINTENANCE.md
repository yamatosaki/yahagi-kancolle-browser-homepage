# 官网维护说明

供项目维护者查阅的本地开发、GitHub 同步、发布与素材配置记录。

## 本地运行

安装 Node.js 22.12+（或 24+）与 npm 后，在项目根目录执行：

```sh
npm ci
npm run dev
```

终端会输出预览地址。构建静态文件：

```sh
npm run build
```

构建结果位于 `dist/`，包含下方六个 HTML 页面。Vite 8 在 `vite.config.js` 的 `build.rolldownOptions.input` 中配置六个入口。脚本使用 `--base=./`，图片地址通过 `import.meta.env.BASE_URL` 生成，兼容 GitHub Pages 仓库子路径。

## GitHub 同步与发布

正式官网地址为 `https://yahagi.xyz/`。`public/CNAME` 由 Vite 复制到 `dist/CNAME`，部署命令同时使用 `--cname yahagi.xyz`，确保每次发布都保留 GitHub Pages 自定义域名。域名在 GoDaddy 管理，DNS 生效后由 GitHub Pages 签发 HTTPS 证书。

`main` 保存网站源码、素材与维护文档；`gh-pages` 保存构建后的静态文件，GitHub Pages 从该分支根目录发布。`node_modules/`、`dist/`、`output/` 和本地环境配置不上传到源码分支。

每次修改完成并检查后，提交并推送源码，再发布网站：

```sh
npm test
npm run build
git add .
git commit -m "feat(官网): 描述本次修改"
git push origin main
npm run deploy
```

`npm run deploy` 会先运行测试和构建，再通过当前 Git 登录凭据推送到 `origin` 的 `gh-pages` 分支。发布后可在仓库的 Actions 页面查看 GitHub Pages 部署结果。首次配置时，在 Settings → Pages 中选择从 `gh-pages` 分支的 `/ (root)` 发布。

后续在本项目中由 Codex 完成的修改，按 `AGENTS.md` 的维护约定提交并推送到 GitHub；网站内容变化时同时重新发布。手工修改文件需要执行上述步骤，保存文件本身不会自动上传。

## 当前页面

- `index.html`：首页，仅展示彩色人物大头、渐变、原版粗斜体双切线字标、产品文案和双平台入口；底部保留页脚。
- `features.html`：六组纯文字功能介绍，包括舰队与战斗、任务中心、改修开发远征、编成与海域、航海日志备份、多屏移动体验。
- `download.html`：Android/iOS 下载入口、版本信息和发布记录链接，沿用全站浅色界面。
- `updates.html`：按版本阅读项目 GitHub Releases 的对应语言发布说明。
- `support.html`：公开赞助渠道、参与开发入口与特别致谢，包含舰娘 WIKI 的数据支持。
- `disclaimer.html`：使用用户提供的三段免责声明，说明非盈利、非官方性质、软件保证及使用风险；五种语言同步提供，并保留相关文档链接，从页脚进入。
- 全站使用轻量导航，链接直接打开对应 HTML 页面；主导航包含首页、功能、下载、更新日志、赞助与致谢。
- 全站提供简体中文、繁體中文、日本語、한국어 和 English，页头可即时切换；跨页和刷新保留所选语言。更新日志跟随网站语言，切换时保留当前版本。
- Android/iOS 按钮各自打开当前平台的四来源弹窗，弹窗内不切换平台。两平台均已启用同一百度、夸克分享文件夹，提取码分别为 `2953`、`miq4`；GitHub 和直接下载仍按平台分别配置。
- 网站不展示应用截图，也不包含使用指南。
- 六页统一使用冷白 `#F7F8FA` 背景、墨黑 `#111318` 文字与钴蓝 `#2456FF` 强调色；手机导航断点为 900px，901px 起恢复桌面导航。
- UI 使用与应用相同的 HarmonyOS Sans 可变字体：简中和日语使用 SC 版，繁中使用 TC 版，英文和韩语使用通用版；韩文字符由系统字体补足。原版 TTF 位于 `public/fonts/`，字重范围为 40–900，字体随所选语言加载。

## 文件与维护

- 根目录六个 HTML 文件：各页面结构与语义化容器。
- `vite.config.js`：六个 HTML 构建入口。
- `src/main.js`：共享内容生成、导航与下载入口绑定，按当前页面存在的容器初始化。
- `src/i18n.js`、`src/locales/`：语言选择、偏好保存，以及静态页面、动态内容和日志界面的译文；`?lang=ja` 等链接可直接指定语言。
- `src/download-dialog.js`：当前平台的来源选择、弹窗关闭和焦点返回。
- `src/release-notes.js`：更新日志版本选择与发布正文渲染；Marked 解析 Markdown，DOMPurify 清理生成的 HTML。
- `src/release-content.js`：选择对应语言正文；缺少译文时回退并标明实际原文语言。
- `src/data/releases.json`：发布说明静态快照。
- `scripts/sync-releases.mjs`：从 GitHub 官方 Releases API 同步快照。
- `public/assets/wordmark-distress.svg`：当前首页原版字标的双斜切线遮罩。
- `public/assets/yahagi-wordmark.svg`、`scripts/build-wordmark.py`：未启用的矢量字标试验稿及其生成脚本；仅手动重新生成试验稿时需要 Python 与 fontTools，常规网站构建不执行该脚本。
- `src/site-config.js`：品牌链接、首屏大头路径、六组功能文案与各平台下载数据。
- `src/styles.css`：共享布局、配色、滤镜与渐变，通过 `@import` 引入 `src/project-pages.css` 的更新、赞助及免责声明样式。
- `docs/ASSETS.md`：当前素材和历史文件的来源与替换说明。

当前首页使用用户提供的「回眸的银灰长发少女.png」光泽版原始 PNG，完整保存为 `public/assets/hero/yahagi-portrait.png`，保留原始尺寸 1024×1536 与透明度，不再保留旧大头。替换图片时修改 `heroAssets.portrait`，或覆盖该文件；同名图片更新后，应同步更新 `index.html` 静态图片 `src` 与 `src/site-config.js` 的 `heroAssets.portrait` 地址中的 `?v=` 版本，避免浏览器沿用缓存。4:3 是 CSS 的 `.portrait-frame` 展示窗口，并非原图比例；窗口裁切可通过内部 `.art-portrait` 的宽度和位置调整，图片保持等比缩放，不修改原始 PNG。图片保留彩色，顶部过渡、边缘消隐及背景渐变由 CSS 控制；窗口尺寸和位置使用 `--portrait-width`、`--portrait-x`、`--portrait-y`，沿用现有 UI 的手机、平板和桌面响应式布局。应用截图文件保留为历史素材，当前网站不引用。

首页 YAHAGI 字标已恢复原版：`h1` 直接显示 YAHAGI 文字，采用 Barlow Condensed Black Italic 字体、`skewX(-5deg)` 倾斜与 `wordmark-distress.svg` 双斜切线遮罩，并保留原版手机行高。原版备份位于 `design-backups/2026-10-19-yahagi-wordmark-original/`，包含原始字体与 OFL 许可、切痕遮罩、首页 HTML、样式、文件哈希 manifest 和 `preview-before.jpg` 预览。Barlow 字体同时供下载页水印使用，原字体和许可继续保留。独立 SVG 字标及生成脚本暂留作未启用试验稿，当前页面不引用。

## 响应式布局

顶部菜单与语言切换共用右侧控制组，1100px 及以下收起主导航；CSS 与 `src/main.js` 的桌面断点保持对应。语言选择和菜单均保留至少 44px 的触摸高度。

首页在平板和桌面保留左右构图，立绘同时参考宽度与视口高度，避免竖屏时图片与字标断开。640px 及以下采用自然内容流，字标、介绍和下载按钮随文字高度排列；日文、韩文、英文的长按钮使用纵排，避免截断。保留现有配色、素材和渐变。

已在 320、390、600、768、834、1024、1100/1101、1280、1440px 等宽度检查布局，并检查五种语言、菜单键盘交互与各内页的横向溢出。需要复测时，通过浏览器视口切换检查实际排版；`npm test` 不替代视觉检查。

## 更新日志同步

当前快照包含 **1.0.0–1.0.8 共 9 个公开版本、45 份官方语言文档**，保留 GitHub Releases 的原始 Markdown、名称、发布时间和原始页面链接。各语言正文来自应用仓库的 `docs/releases/{版本}/`，分别读取 `README.md`、`README.zh-Hant.md`、`README.ja.md`、`README.ko.md`、`README.en.md`；网站仅移除文档顶部重复的版本标题、语言导航和返回链接，保留正文。浏览器读取打包后的静态数据，不调用 GitHub API。

上游发布或修改记录后，先同步，再构建：

```sh
npm run sync:releases
npm run build
```

同步脚本分页读取公开发布，跳过草稿，再固定一个仓库提交读取全部版本的五语言文档。`notesRevision` 和每份文档的 `sourceUrl` 记录来源。全部获取与校验成功后才替换快照；任一文档缺失、格式异常或请求失败时保留旧文件。`npm run build` 本身不会联网刷新日志。更新日志页支持桌面版本索引、手机选择框及版本 URL 的前进后退。

运行 `npm test` 可检查文档同步、五语言快照完整性和正文选择逻辑。

## 赞助素材

支付宝与微信二维码原样来自应用公开仓库，保存在 `public/assets/support/`，未修改图片内容。页面使用原生 `details` 展开二维码，并可点击查看原图；GitHub Sponsors、来源与致谢链接直接指向已核实的公开地址。完整来源见 `docs/ASSETS.md`。

## 下载来源

下载数据于 **2026 年 10 月 19 日**通过 GitHub Releases API 核实，当前配置为 **v1.0.8**，发布于 2026 年 9 月 27 日。

在 `src/site-config.js` 的 `downloads` 数组中，每个平台包含 `version`、`fileType`、`url`、`note` 和 `sources`。`sources` 按 `baidu`、`quark`、`github`、`direct` 配置；Android 与 iOS 共用同一百度、夸克分享文件夹，两平台的网盘 `url`、`code` 均已填写，提取码分别为 `2953`、`miq4`。更新网盘链接或提取码时同步两平台配置；下载弹窗以及 GitHub、直接下载地址仍按平台独立维护。

更新发布版本时，同时核对版本文字、平台的 `url`、`github` 发布页地址与 `direct` 安装包地址。Android 是项目主要维护的平台；iOS 是 Kutinana 提供的第三方移植版，安装方式、支持功能和维护情况以对应发布说明为准。

- [应用仓库](https://github.com/yamatosaki/yahagi-kancolle-browser)
- [版本发布](https://github.com/yamatosaki/yahagi-kancolle-browser/releases)
- [v1.0.8 发布页](https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.8)

功能文案依据项目 README。游戏操作由玩家完成；任务进度与估算结果应结合游戏画面判断。日志与编成备份不等于全部应用数据备份。

## 搜索收录准备与提交

正式搜索网址使用 `https://yahagi.xyz/`。六个页面各自声明 canonical；首页以 WebSite 结构化数据说明网站名称，Open Graph metadata 用于链接分享。`public/robots.txt` 允许抓取并声明 `https://yahagi.xyz/sitemap.xml`，站点地图仅列出六个正式页面，不包含开发文档、备份、`index.html` 的重复首页或语言/版本偏好参数。

功能介绍与下载卡片在构建时从现有配置生成 HTML，搜索引擎无需先运行 JavaScript 就能读取这些产品信息；浏览器继续使用原有交互与五语翻译。当前五种语言通过 `?lang=` 切换，未生成独立的静态语言页面，因此不额外声明 hreflang 或把这些偏好 URL 当作独立页面提交。

域名 DNS 生效并启用 HTTPS 后，按顺序完成以下操作：

1. 验证六页、`/robots.txt`、`/sitemap.xml` 在正式域名正常访问，HTTP 和 `www` 指向统一的 HTTPS 正式网址。
2. 在 [Google Search Console](https://search.google.com/search-console/) 添加网域资源 `yahagi.xyz`。按平台实际提供的方法，将 TXT 或 CNAME 验证记录添加到 GoDaddy DNS，验证后继续保留验证记录。提交 `https://yahagi.xyz/sitemap.xml`，并在网址检查中请求抓取首页、功能页和下载页。
3. 在 [Bing Webmaster Tools](https://www.bing.com/webmasters/) 添加网站，使用平台提供的验证方法证明所有权，再提交同一份 sitemap。若选择从 Google 导入，先检查其请求的账号授权范围。
4. 如需百度曝光，在 [百度搜索资源平台](https://ziyuan.baidu.com/) 添加 HTTPS 网站并按平台实际提供的方法验证，使用普通收录工具提交六个正式网址；sitemap 提交能力以账号后台为准。
5. 在应用仓库的官网字段或 README 中链接正式域名，方便用户和搜索引擎发现；修改另一仓库时另按该仓库的维护约定执行。

验证代码、TXT 或 CNAME 记录值和验证文件必须来自所选搜索平台，不使用占位代码。平台验证尚未完成时，不能将网站标记为已提交或已收录。提交只帮助发现网站，不保证收录、排名或完成时间。

### 当前进度（2026 年 10 月 19 日）

- Google Search Console 网域资源 `yahagi.xyz` 已通过 DNS CNAME 验证；Google TXT 验证记录也仍保留。后续维护 DNS 时应保留这些验证记录，避免影响网站所有权验证。
- 首页 `https://yahagi.xyz/` 的网址检查显示已收录到 Google，Googlebot 智能手机版抓取成功，允许编入索引，Google 选择的规范网址与该首页一致。
- 网站地图 `https://yahagi.xyz/sitemap.xml` 已提交，但首次状态显示「无法抓取」，尚未确认 Google 成功读取。公开地址可正常访问，不将提交状态视为读取或收录成功。
- 功能页与下载页的网址检查均显示尚未收录。功能页手动「请求编入索引」因无法连接 Google reCAPTCHA 服务而失败，刷新后重试结果相同，未取得提交成功确认；下载页未继续执行同一服务下的单页申请。两页都在已提交的网站地图内。网络恢复后可在网址检查中继续申请，不能将本次尝试记作成功提交。
- 应用仓库 `yamatosaki/yahagi-kancolle-browser` 的 About 官网字段已设置为 `https://yahagi.xyz/`，已通过 GitHub API 核对。

参考：[Google 站点地图](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)、[Google 网站所有权验证](https://support.google.com/webmasters/answer/9008080?hl=en)、[Bing 添加及验证站点](https://www2.bing.com/webmasters/help/add-and-verify-site-12184f8b)、[百度普通收录](https://ziyuan.baidu.com/linksubmit/index)。
