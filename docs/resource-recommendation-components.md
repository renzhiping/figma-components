# 资源推荐页面组件配置

```json
{
  "page_name": "资源推荐",
  "description": "根据学生的学习情况，推荐相关的学习资源。",
  "cards": [
    {
      "card_title": "资源统计概览",
      "components": [
        {
          "component_type": "ResourceStatistics",
          "data": {
            "header": {
              "title": "资源统计",
              "iconName": "BarChart3",
              "iconContainerClass": "w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center shadow-lg",
              "iconClass": "w-5 h-5 text-white",
              "stats": [
                {
                  "iconName": "BookOpen",
                  "text": "内部资源 3 类",
                  "variant": "secondary",
                  "className": "px-3 py-1"
                },
                {
                  "iconName": "Globe",
                  "text": "外部资源 3 类",
                  "variant": "secondary",
                  "className": "px-3 py-1"
                }
              ]
            },
            "goal": {
              "avatarImage": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=80",
              "avatarFallback": "RM",
              "avatarRingClass": "ring-2 ring-sky-100",
              "accentIconName": "Target",
              "accentContainerClass": "absolute -top-1 -right-1 w-4 h-4 bg-sky-600 rounded-full flex items-center justify-center",
              "accentIconClass": "w-2 h-2 text-white",
              "titleIconName": "Target",
              "titleIconClass": "w-4 h-4 text-sky-600",
              "title": "目的：",
              "description": "让学生对资源的数量和类型（内部/外部）有一个快速的量化认知。"
            },
            "sections": [
              {
                "title": "课程内部资源",
                "iconName": "BookOpen",
                "iconContainerClass": "w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center",
                "iconClass": "w-4 h-4 text-white",
                "badge": {
                  "text": "更新至 2024/09",
                  "variant": "outline",
                  "className": "text-xs border-violet-200 text-violet-700"
                },
                "preview": {
                  "iconName": "Image",
                  "label": "课程内部资源预览",
                  "overlayBgClass": "absolute inset-0 bg-violet-100/50 flex items-center justify-center",
                  "iconColorClass": "text-violet-500",
                  "downloadIconName": "Download",
                  "downloadIconColorClass": "text-violet-600",
                  "downloadContainerClass": "bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1"
                },
                "items": [
                  {
                    "iconName": "FileText",
                    "label": "课程讲义 PDF",
                    "value": "5 套",
                    "containerClass": "bg-violet-50 hover:bg-violet-100 transition-colors",
                    "iconColorClass": "text-violet-600",
                    "badgeClassName": "ml-auto text-xs bg-violet-100 text-violet-700",
                    "badgeVariant": "secondary"
                  },
                  {
                    "iconName": "ClipboardList",
                    "label": "练习题库",
                    "value": "更新 2024/09",
                    "containerClass": "bg-violet-50 hover:bg-violet-100 transition-colors",
                    "iconColorClass": "text-violet-600",
                    "badgeClassName": "ml-auto text-xs bg-violet-100 text-violet-700",
                    "badgeVariant": "secondary"
                  },
                  {
                    "iconName": "Video",
                    "label": "直播回放录像",
                    "value": "12 节",
                    "containerClass": "bg-violet-50 hover:bg-violet-100 transition-colors",
                    "iconColorClass": "text-violet-600",
                    "badgeClassName": "ml-auto text-xs bg-violet-100 text-violet-700",
                    "badgeVariant": "secondary"
                  }
                ]
              },
              {
                "title": "互联网精选资源",
                "iconName": "Globe",
                "iconContainerClass": "w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center",
                "iconClass": "w-4 h-4 text-white",
                "badge": {
                  "text": "每周更新",
                  "variant": "outline",
                  "className": "text-xs border-emerald-200 text-emerald-700"
                },
                "preview": {
                  "iconName": "Globe",
                  "label": "互联网资源预览",
                  "overlayBgClass": "absolute inset-0 bg-emerald-100/50 flex items-center justify-center",
                  "iconColorClass": "text-emerald-500",
                  "downloadIconName": "Download",
                  "downloadIconColorClass": "text-emerald-600",
                  "downloadContainerClass": "bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1"
                },
                "items": [
                  {
                    "iconName": "Globe",
                    "label": "开源案例合集",
                    "value": "GitHub 精选",
                    "containerClass": "bg-emerald-50 hover:bg-emerald-100 transition-colors",
                    "iconColorClass": "text-emerald-600",
                    "badgeClassName": "ml-auto text-xs bg-emerald-100 text-emerald-700",
                    "badgeVariant": "secondary"
                  },
                  {
                    "iconName": "FileText",
                    "label": "知识拓展文章",
                    "value": "周更",
                    "containerClass": "bg-emerald-50 hover:bg-emerald-100 transition-colors",
                    "iconColorClass": "text-emerald-600",
                    "badgeClassName": "ml-auto text-xs bg-emerald-100 text-emerald-700",
                    "badgeVariant": "secondary"
                  },
                  {
                    "iconName": "Video",
                    "label": "主题讲座视频",
                    "value": "8 个频道",
                    "containerClass": "bg-emerald-50 hover:bg-emerald-100 transition-colors",
                    "iconColorClass": "text-emerald-600",
                    "badgeClassName": "ml-auto text-xs bg-emerald-100 text-emerald-700",
                    "badgeVariant": "secondary"
                  }
                ]
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "资源推荐整体介绍",
      "components": [
        {
          "component_type": "Info",
          "data": {
            "title": "资源推荐整体介绍",
            "description": "根据学生当前学习进度与疑问，聚焦聚类算法相关的教材、视频与练习资源，帮助快速补齐薄弱点。",
            "items": [
              {
                "heading": "聚焦主题",
                "content": "围绕 K-means、DBSCAN 与层次聚类等核心概念，定位学生常见误区。"
              },
              {
                "heading": "提供策略",
                "content": "从教材精读、视频演示到练习巩固构成闭环，确保理解与实操同步。"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "文本资源推荐",
      "components": [
        {
          "component_type": "Info",
          "data": {
            "title": "文本资源推荐",
            "description": "精选平台内部教材与拓展阅读，兼顾理论理解与实战案例。",
            "items": [
              {
                "heading": "平台内部教材",
                "content": "1. 《无监督学习：数据中的自主发现之道》— 第 2.2 节讲解 K-means 数学基础与执行步骤，第 3.1 节展示在手机相册分类等场景的应用，并提供层次聚类、DBSCAN 拓展模块。\n2. 《机器学习》— 第 6.2 节从导论视角回顾无监督学习定义，预览聚类在图片分类、图像分割中的应用。\n3. 《特征工程：数据预处理的艺术与科学》— 第 5 章详细介绍 PCA，帮助理解聚类结果与可视化。"
              },
              {
                "heading": "互联网拓展书籍",
                "content": "- 《Pattern Recognition and Machine Learning》(Bishop)：第 9 章讨论 K-means 与混合高斯模型。\n- 《Python 机器学习实战》(A. Géron)：第 9 章示范使用 Scikit-Learn 实现 K-means、DBSCAN 等算法。"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "视频资源推荐",
      "components": [
        {
          "component_type": "VideoCard",
          "data": {
            "title": "推荐观看",
            "videos": [
              {
                "id": 1,
                "title": "内部视频 8.1：动画精讲 K-means 迭代原理",
                "description": "演示样本分配与中心更新的交替迭代过程，配合教材第 2.2 节学习。",
                "thumbnailUrl": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&q=80",
                "href": "#video-1"
              },
              {
                "id": 2,
                "title": "内部视频 8.2：案例分析 DBSCAN 与层次聚类",
                "description": "对比 K-means 的局限与 DBSCAN 的优势，关联补充模块内容。",
                "thumbnailUrl": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=640&q=80",
                "href": "#video-2"
              },
              {
                "id": 3,
                "title": "Stanford CS229 讲座：K-Means 与 EM",
                "description": "吴恩达讲解 K-means 背后的数学原理及与 EM 的联系。",
                "thumbnailUrl": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=640&q=80",
                "href": "#video-3"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "试题类型推荐",
      "components": [
        {
          "component_type": "InfoAction",
          "data": {
            "title": "试题类型推荐",
            "description": "挑选聚类算法重点题型，帮助学生以练促学。",
            "items": [
              {
                "heading": "推荐练习",
                "content": "- 「练习题库」→「聚类算法练习题」：包含 5 道选择题与 2 道计算题，巩固 K-means 迭代步骤。\n- 「练习题库」→「聚类算法比较题组」：通过案例练习 K-means、DBSCAN、层次聚类的适用场景。"
              }
            ],
            "ctaText": "前往练习中心"
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    }
  ]
}
```


