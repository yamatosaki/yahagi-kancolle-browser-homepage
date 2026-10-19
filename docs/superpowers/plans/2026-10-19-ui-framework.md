# ヤハギ UI 框架实现计划

**目标：** 将用户批准的首屏变为可本地运行且素材独立可换的官网框架。

**架构：** Vite + 原生 HTML/CSS/JavaScript。公共图片位于 public/assets，内容和素材路径集中在 src/site-config.js，交互和展示样式分别维护。

**技术栈：** Node.js 24、Vite 8、CSS、ES Modules。

- [x] 独立制作 harbor-background.png、yahagi-portrait.png、yahagi-character.png，检查图片模式与透明度。
- [x] 编写 index.html 语义化结构、首屏图层、截图展示、下载区域和原生 dialog 指南。
- [x] 编写 src/styles.css 的配色、图层定位、字标遮罩与桌面/手机响应式布局。
- [x] 编写 src/main.js 的内容绑定、截图标签、手机导航、指南开关与减少动态支持。
- [x] src/site-config.js 绑定真实发布资产、应用截图；README.md 与 docs/ASSETS.md 记录运行和换图方法。
- [x] npm install；npm run build 生成可部署的 dist 静态文件。
- [x] 浏览器验证首屏、截图切换、指南、链接、手机菜单及小屏布局；保存预览截图供用户审阅。

本轮是用户授权的可逆 UI 框架，按上级工作要求使用构建与真实浏览器验证，不添加镜像实现的单元测试。目录原为空且未初始化 Git，本轮不自动提交或上传远端。
