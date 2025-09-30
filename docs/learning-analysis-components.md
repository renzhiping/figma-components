# 学习状态分析页面组件配置

```json
{
  "page_name": "学习状态分析",
  "description": "分析学生的知识点掌握情况，并提供建议和相关资源。",
  "cards": [
    {
      "card_title": "学习总览",
      "components": [
        {
          "component_type": "StudyOverview",
          "data": {
            "header": {
              "title": "AI 课程学习总览",
              "accentClassNames": [
                "bg-blue-500",
                "bg-green-500",
                "bg-purple-500"
              ]
            },
            "stats": [
              {
                "id": "mastery",
                "label": "知识掌握度",
                "value": "67%",
                "description": "掌握 6/9 个重点模块",
                "valueClassName": "text-green-600"
              },
              {
                "id": "progress",
                "label": "课程进度",
                "value": "45%",
                "description": "完成 9/20 个核心知识点",
                "valueClassName": "text-blue-600"
              },
              {
                "id": "time",
                "label": "本周学习时长",
                "value": "3.5 小时",
                "description": "超过 65% 的同学",
                "valueClassName": "text-purple-600"
              }
            ],
            "diagnosis": {
              "buttonLabel": "薄弱诊断",
              "buttonClassName": "bg-blue-600 text-white hover:bg-blue-700",
              "questions": [
                {
                  "id": "diag-1",
                  "label": "KP 3.2：向量距离概念",
                  "accentClassName": "bg-blue-500"
                },
                {
                  "id": "diag-2",
                  "label": "KP 7.1：聚类分析思路",
                  "accentClassName": "bg-green-500"
                },
                {
                  "id": "diag-3",
                  "label": "KP 7.2：K-means 迭代流程",
                  "accentClassName": "bg-purple-500"
                }
              ]
            },
            "primaryAction": {
              "buttonLabel": "首要行动",
              "description": "优先完成向量距离概念回顾，并锁定本周攻坚目标",
              "buttonClassName": "bg-green-600 text-white hover:bg-green-700"
            },
            "tasks": {
              "buttonLabel": "攻坚任务",
              "buttonClassName": "bg-purple-600 text-white hover:bg-purple-700",
              "items": [
                {
                  "id": "task-video",
                  "label": "观看向量距离精讲视频",
                  "type": "video"
                },
                {
                  "id": "task-reading",
                  "label": "研读教材第 7.1 节",
                  "type": "reading"
                },
                {
                  "id": "task-exercise",
                  "label": "完成 K-means 练习题",
                  "type": "exercise"
                }
              ]
            }
          },
          "max_width_class": "max-w-7xl"
        }
      ]
    },
    {
      "card_title": "学习概览",
      "components": [
        {
          "component_type": "info",
          "data": {
            "title": "我的学习概览",
            "description": "结合近期测验与作业情况，我们为你梳理在 AI 课程中的知识掌握程度，并提供重点弥补建议。",
            "items": [
              {
                "heading": "概览摘要",
                "content": "聚焦近期测验表现，定位掌握良好与需要补强的模块，便于快速启动针对性复习。"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "知识掌握情况",
      "components": [
        {
          "component_type": "KnowledgeMap",
          "data": {
            "legend": [
              { "status": "completed", "label": "已掌握" },
              { "status": "warning", "label": "薄弱" },
              { "status": "error", "label": "未掌握" },
              { "status": "not-started", "label": "未开始" }
            ],
            "nodes": [
              {
                "id": "part-1",
                "title": "第一部分：AI基础认知",
                "status": "completed",
                "children": [
                  {
                    "id": "chapter-1",
                    "title": "第1章：AI智能源于数据",
                    "status": "completed",
                    "children": [
                      { "id": "kp-1-1", "title": "KP 1.1: AI智能的直观体验 (旅游攻略、PPT制作)", "status": "completed" },
                      { "id": "kp-1-2", "title": "KP 1.2: 人类与AI的规律发现机制对比", "status": "completed" },
                      { "id": "kp-1-3", "title": "KP 1.3: 数据、算法、算力的三大支柱作用", "status": "completed" }
                    ]
                  },
                  {
                    "id": "chapter-2",
                    "title": "第2章：什么是数据",
                    "status": "not-started",
                    "children": [
                      { "id": "kp-2-1", "title": "KP 2.1: 数据的定义与形态 (沃尔玛案例)", "status": "not-started" },
                      { "id": "kp-2-2", "title": "KP 2.2: 高质量数据的五大条件", "status": "not-started" },
                      { "id": "kp-2-3", "title": "KP 2.3: 数据获取的六大途径", "status": "not-started" }
                    ]
                  },
                  {
                    "id": "chapter-3",
                    "title": "第3章：AI如何看待数据",
                    "status": "warning",
                    "children": [
                      { "id": "kp-3-1", "title": "KP 3.1: 数据的向量化表示与高维空间", "status": "warning" },
                      { "id": "kp-3-2", "title": "KP 3.2: 基于向量距离的语义理解", "status": "error" },
                      { "id": "kp-3-3", "title": "KP 3.3: 词嵌入技术 (Word Embeddings)", "status": "not-started" }
                    ]
                  }
                ]
              },
              {
                "id": "part-2",
                "title": "第二部分：机器学习核心原理",
                "status": "completed",
                "children": [
                  {
                    "id": "chapter-6",
                    "title": "第6章：机器学习导论",
                    "status": "completed",
                    "children": [
                      { "id": "kp-6-1", "title": "KP 6.1: 机器学习与传统编程的区别", "status": "completed" },
                      { "id": "kp-6-2", "title": "KP 6.2: 监督/无监督/强化学习的分类", "status": "completed" }
                    ]
                  },
                  {
                    "id": "chapter-7",
                    "title": "第7章：无监督学习",
                    "status": "warning",
                    "children": [
                      { "id": "kp-7-1", "title": "KP 7.1: 聚类分析的基本思想", "status": "warning" },
                      { "id": "kp-7-2", "title": "KP 7.2: K-means算法工作原理", "status": "error" },
                      { "id": "kp-7-3", "title": "KP 7.3: 降维技术与关联规则", "status": "not-started" }
                    ]
                  },
                  {
                    "id": "chapter-8",
                    "title": "第8章：强化学习",
                    "status": "not-started",
                    "children": [
                      { "id": "kp-8-1", "title": "KP 8.1: 强化学习四要素 (智能体、环境、奖励、策略)", "status": "not-started" },
                      { "id": "kp-8-2", "title": "KP 8.2: 贝尔曼方程与价值预测", "status": "not-started" }
                    ]
                  },
                  {
                    "id": "chapter-10",
                    "title": "第10章：深度神经网络",
                    "status": "not-started",
                    "children": [
                      { "id": "kp-10-1", "title": "KP 10.1: 神经网络的核心优势", "status": "not-started" },
                      { "id": "kp-10-2", "title": "KP 10.2: 神经网络的结构与优化", "status": "not-started" }
                    ]
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
      "card_title": "行动建议",
      "components": [
        {
          "component_type": "info",
          "data": {
            "title": "行动建议",
            "description": "针对薄弱知识点给出诊断、复习顺序与后续进阶建议。",
            "items": [
              {
                "heading": "根源诊断与首要任务",
                "content": "主要困难集中在 KP 7.2 与 KP 3.2，建议先攻克向量距离概念，再回到 K-means。"
              },
              {
                "heading": "立即复习：薄弱知识点",
                "content": "- KP 7.1: 聚类分析的基本思想\n- KP 3.1: 数据的向量化表示与高维空间"
              },
              {
                "heading": "学习路径建议",
                "content": "1. 巩固基础：聚焦 KP 3.2，结合教材与专项练习理解向量距离。\n2. 扫清障碍：掌握向量距离后复习 KP 7.1 与 KP 7.2，梳理 K-means 迭代逻辑。\n3. 继续前行：完成上述内容后，转向第2章夯实数据基础。"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "推荐资源",
      "components": [
        {
          "component_type": "info",
          "data": {
            "title": "推荐阅读材料",
            "description": "聚焦向量距离、K-means 与数据基础的核心资料。",
            "items": [
              {
                "heading": "教材与阅读",
                "content": "- 《AI如何看待数据》第 2 节\n- 《无监督学习：数据中的自主发现之道》第 2.2 节"
              },
              {
                "heading": "练习资源",
                "content": "- “向量距离与相似度” 专项练习题"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        },
        {
          "component_type": "VideoCard",
          "data": {
            "title": "推荐学习视频",
            "videos": [
              {
                "id": 1,
                "title": "AI的数学语言：向量空间与距离的奥秘",
                "description": "12 分钟回顾向量距离概念，帮助理解 AI 如何比较数据相似度。",
                "thumbnailUrl": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=640&q=80",
                "href": "#vector-video"
              },
              {
                "id": 2,
                "title": "聚类算法精讲：K-means 的迭代逻辑",
                "description": "通过案例拆解样本分配与中心更新流程，强化 K-means 理解。",
                "thumbnailUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=640&q=80",
                "href": "#kmeans-video"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    }
  ]
}
```


