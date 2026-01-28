
```typescript name=lib/api/default-sources.ts url=https://github.com/nicemax24/KVideo/blob/main/lib/api/default-sources.ts
import type { VideoSource } from '@/lib/types';

// Default predefined video sources - Real Chinese video APIs
// 已移除项：'leba' (乐播资源), 'aidan' (爱蛋资源), 'yilingba2' (1080JSON),
// 以及用户本次请求移除的：'youku' (优酷资源), 'lezi' (乐子资源), 'lezi2' (乐子HTTP),
// 'baofeng' (暴风资源), 'baofeng_app_alt' (暴风备用), 'sanliuling' (360资源)
export const DEFAULT_SOURCES: VideoSource[] = [
  { id: 'feifan', name: '非凡资源', baseUrl: 'http://ffzy5.tv/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 1 },
  { id: 'wolong', name: '卧龙资源', baseUrl: 'https://wolongzyw.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 2 },
  { id: 'zuida', name: '最大资源', baseUrl: 'https://api.zuidapi.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 3 },
  { id: 'baiduyun', name: '百度云资源', baseUrl: 'https://api.apibdzy.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 4 },
  { id: 'jisu', name: '极速资源', baseUrl: 'https://jszyapi.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 5 },
  { id: 'tianya', name: '天涯资源', baseUrl: 'https://tyyszy.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 6 },
  { id: 'wujin', name: '无尽资源', baseUrl: 'https://api.wujinapi.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 7 },
  { id: 'modu', name: '魔都资源', baseUrl: 'https://www.mdzyapi.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 8 },
  { id: 'dytt', name: '电影天堂', baseUrl: 'http://caiji.dyttzyapi.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 9 },
  { id: 'ruyi', name: '如意资源', baseUrl: 'https://cj.rycjapi.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 10 },
  { id: 'wangwang', name: '旺旺资源', baseUrl: 'https://wwzy.tv/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 11 },
  { id: 'hongniu', name: '红牛资源', baseUrl: 'https://www.hongniuzy2.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 12 },
  { id: 'guangsu', name: '光速资源', baseUrl: 'https://api.guangsu.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 13 },
  { id: 'jiangyu', name: '鲸鱼资源', baseUrl: 'https://api.jiangyuzy.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 14 },
  { id: 'haihua', name: '海豚资源', baseUrl: 'https://api.haihuazy.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 15 },
  { id: 'wujin2', name: '无尽ME', baseUrl: 'https://api.wujinme.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 16 },
  { id: 'tianyazy', name: '天涯海角', baseUrl: 'https://api.tianyazy.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 17 },
  { id: 'guangsu2', name: '光速HTTP', baseUrl: 'https://api.guangsu-http.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 18 },
  { id: 'yilingba', name: '1080资源', baseUrl: 'https://1080.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 19 },
  { id: 'huya', name: '虎牙资源', baseUrl: 'https://api.huya.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 20 },
  { id: 'xinlang', name: '新浪资源', baseUrl: 'https://api.xinlangapi.com/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 21 },
  { id: 'ikun', name: 'iKun资源', baseUrl: 'https://ikun.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 22 },
  { id: 'xinlang2', name: '新浪HTTPS', baseUrl: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod', searchPath: '', detailPath: '', enabled: true, priority: 23 },

  // Disabled / fallback / collection variants (保留但默认禁用)
  { id: 'yilingba2_fallback', name: '1080JSON-fallback', baseUrl: 'https://fallback.1080json.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: false, priority: 24 },
  { id: 'wolong2', name: '卧龙采集', baseUrl: 'https://wolong-cj.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: false, priority: 25 },
  { id: 'feifanapi', name: '非凡API', baseUrl: 'https://feifan.api.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: false, priority: 26 },
  { id: 'feifancj', name: '非凡采集', baseUrl: 'https://feifancj.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: false, priority: 27 },
  { id: 'feifancj2', name: '非凡采集HTTPS', baseUrl: 'https://feifancj2.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: false, priority: 28 },
  { id: 'feifan1', name: '非凡线路1', baseUrl: 'https://feifan1.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: false, priority: 29 },
  { id: 'moduzy', name: '魔都影视', baseUrl: 'https://moduzy.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: false, priority: 30 },
  { id: 'baofeng2', name: '暴风APP', baseUrl: 'https://bfzyapp.example/api.php/provide/vod', searchPath: '', detailPath: '', enabled: false, priority: 31 },
  { id: 'baofeng_app_alt_disabled', name: '暴风备用（已移除原条目）', baseUrl: '', searchPath: '', detailPath: '', enabled: false, priority: 32 },
];
