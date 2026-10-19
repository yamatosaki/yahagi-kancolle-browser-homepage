const assetPath = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

export const site = {
  name: 'ヤハギ',
  englishName: 'YAHAGI',
  repoUrl: 'https://github.com/yamatosaki/yahagi-kancolle-browser',
  releasesUrl: 'https://github.com/yamatosaki/yahagi-kancolle-browser/releases',
  issuesUrl: 'https://github.com/yamatosaki/yahagi-kancolle-browser/issues',
  qq: '1104904097',
};

export const heroAssets = {
  portrait: assetPath('hero/yahagi-portrait.png?v=a7d6b291'),
};

// Published assets verified against GitHub Releases on 2026-10-19.
// Keep both the version text and the asset URL in sync when updating a release.
export const downloads = [
  {
    platform: 'Android',
    label: '下载 Android 版',
    description: 'v1.0.8 · APK 安装包',
    version: '1.0.8',
    fileType: 'APK',
    url: 'https://github.com/yamatosaki/yahagi-kancolle-browser/releases/download/1.0.8/Yahagi-1.0.8.apk',
    note: '本项目主要维护的版本。更新时请按照发布说明覆盖安装。',
    sources: [
      { key: 'baidu', name: '百度网盘', description: '网盘分享下载', url: 'https://pan.baidu.com/s/1V8L9nDtdAY4J-CaDu-bN7g?pwd=2953', code: '2953' },
      { key: 'quark', name: '夸克网盘', description: '网盘分享下载', url: 'https://pan.quark.cn/s/93202af2fa7c?pwd=miq4', code: 'miq4' },
      { key: 'github', name: 'GitHub', description: '查看完整发布与更新记录', url: 'https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.8', code: '' },
      { key: 'direct', name: '直接下载', description: '直接获取 APK 安装包', url: 'https://github.com/yamatosaki/yahagi-kancolle-browser/releases/download/1.0.8/Yahagi-1.0.8.apk', code: '' },
    ],
  },
  {
    platform: 'iOS',
    label: '下载 iOS 版',
    description: 'v1.0.8 · IPA 安装包',
    version: '1.0.8',
    fileType: 'IPA',
    url: 'https://github.com/yamatosaki/yahagi-kancolle-browser/releases/download/1.0.8/YahagiKancolleBrowser_1.0.8.ipa',
    note: 'iOS 安装方式与支持功能请参阅对应版本说明。',
    attribution: 'iOS 移植版由 Kutinana 提供',
    sources: [
      { key: 'baidu', name: '百度网盘', description: '网盘分享下载', url: 'https://pan.baidu.com/s/1V8L9nDtdAY4J-CaDu-bN7g?pwd=2953', code: '2953' },
      { key: 'quark', name: '夸克网盘', description: '网盘分享下载', url: 'https://pan.quark.cn/s/93202af2fa7c?pwd=miq4', code: 'miq4' },
      { key: 'github', name: 'GitHub', description: '查看完整发布与更新记录', url: 'https://github.com/yamatosaki/yahagi-kancolle-browser/releases/tag/1.0.8', code: '' },
      { key: 'direct', name: '直接下载', description: '直接获取 IPA 安装包', url: 'https://github.com/yamatosaki/yahagi-kancolle-browser/releases/download/1.0.8/YahagiKancolleBrowser_1.0.8.ipa', code: '' },
    ],
  },
];

export const featureGroups = [
  {
    key: 'fleet',
    number: '01',
    kicker: 'FLEET & BATTLE',
    title: '舰队与战斗',
    description: '游玩时同步查看舰队状态与战斗信息，出击前检查补给和耐久。信息依据游戏页面已经收到的数据整理，操作始终由你完成。',
    details: [
      '查看舰娘等级、耐久、疲劳、燃料、弹药与装备，以及舰队制空、索敌等参考信息。',
      '未卜先知支持通常舰队与联合舰队，展示耐久变化、战果等级与 MVP 预测。',
      '提供出击前状态检查、大破提醒与战前敌舰信息；预测请结合游戏画面判断。',
    ],
  },
  {
    key: 'quests',
    number: '02',
    kicker: 'QUEST CENTER',
    title: '任务中心',
    description: '把任务说明、奖励与前后置关系放在一起，方便安排日常与连续任务。部分任务支持分项进度追踪和完成提示。',
    details: [
      '浏览已接受任务与任务资料，按类型、周期等条件筛选，也可直接搜索。',
      '查询基础奖励、前置与后续任务，确认任务之间的衔接关系。',
      '部分进度由本地观察与记录推算，未被应用观察到的进度可能不完整。',
    ],
  },
  {
    key: 'planning',
    number: '03',
    kicker: 'DAILY PLANNING',
    title: '改修、开发与远征',
    description: '出击之外，提前查好改修安排与开发配方，检查远征条件和预计收益。常用规划工具集中在应用内，方便随时查询。',
    details: [
      '按星期、装备分类、关键词与收藏查改修，查看二番舰条件、消耗和进化路线。',
      '按秘书舰与资源投入查询开发概率，也可从目标装备反查配方。',
      '检查远征的舰种、等级、装备、补给与士气条件，估算大成功率、收益和完成时间。',
    ],
  },
  {
    key: 'formations',
    number: '04',
    kicker: 'FLEETS & MAPS',
    title: '编成与海域资料',
    description: '保存常用舰队与陆航编成，准备出击时查询路线和敌舰资料。编成记录用于查阅与分享，游戏内的编成仍由你自行操作。',
    details: [
      '按名称、海域等条件查找编成记录，导出高清编成图或 DeckBuilder 数据。',
      '主动打开制空权模拟器、Jervis 等外部工具，继续进行编成计算。',
      '查看海域路线、节点类型、敌方编成与制空参考；海域与敌舰资料支持独立检查更新。',
    ],
  },
  {
    key: 'logbook',
    number: '05',
    kicker: 'LOGBOOK & BACKUP',
    title: '航海日志与备份',
    description: '从应用实际观察到的数据开始，积累出击与日常记录，查看资源变化。日志和编成记录主要保存在设备本地，可自行导出与恢复。',
    details: [
      '保存出击、远征、建造、开发、除籍与资源六类记录，按条件筛选并查看战斗详情。',
      '查看资源存量趋势与区间变化，导出记录，或同步至自己选择的文档文件夹。',
      '备份范围为航海日志与编成记录，不包含登录密码、Cookie 或全部应用设置。',
    ],
  },
  {
    key: 'mobile',
    number: '06',
    kicker: 'MOBILE EXPERIENCE',
    title: '多屏与移动体验',
    description: '在手机、平板和折叠屏上按自己的习惯安排信息。应用提供简体中文、繁体中文和日语界面，也能调整模块与资源栏的显示。',
    details: [
      '选择普通或 HD 布局，调整信息区宽度、模块顺序与显示项目。',
      '查看远征、入渠、建造与疲劳倒计时，按需要设置提醒；后台表现受系统权限影响。',
      '缓存游戏资源以减少重复加载，支持外接鼠标与滚轮兼容设置；游玩仍需连接服务器。',
    ],
  },
];
