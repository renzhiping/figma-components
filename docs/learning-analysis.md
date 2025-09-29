# 学习状态分析页面配置

```json
{
  "page_name": "学习状态分析",
  "description": "分析学生的知识点掌握情况，并提供建议和相关资源。",
  "cards": [
    {
      "card_title": "学习概览",
      "components": [
        {
          "component_type": "info_card",
          "content": "# 我的学习概览\n\n结合近期测验与作业情况，我们为你梳理在 AI 课程中的知识掌握程度，并提供重点弥补建议。",
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "知识掌握情况",
      "components": [
        {
          "component_type": "knowledge_map",
          "legend": [
            { "status": "✅", "label": "已掌握" },
            { "status": "⚠️", "label": "薄弱" },
            { "status": "❌", "label": "未掌握" },
            { "status": "⚪", "label": "未开始" }
          ],
          "parts": [
            {
              "partTitle": "第一部分：AI基础认知",
              "chapters": [
                {
                  "title": "第1章：AI智能源于数据",
                  "status": "✅",
                  "knowledgePoints": [
                    { "title": "KP 1.1: AI智能的直观体验 (旅游攻略、PPT制作)", "status": "✅" },
                    { "title": "KP 1.2: 人类与AI的规律发现机制对比", "status": "✅" },
                    { "title": "KP 1.3: 数据、算法、算力的三大支柱作用", "status": "✅" }
                  ]
                },
                {
                  "title": "第2章：什么是数据",
                  "status": "⚪",
                  "knowledgePoints": [
                    { "title": "KP 2.1: 数据的定义与形态 (沃尔玛案例)", "status": "⚪" },
                    { "title": "KP 2.2: 高质量数据的五大条件", "status": "⚪" },
                    { "title": "KP 2.3: 数据获取的六大途径", "status": "⚪" }
                  ]
                },
                {
                  "title": "第3章：AI如何看待数据",
                  "status": "⚠️",
                  "knowledgePoints": [
                    { "title": "KP 3.1: 数据的向量化表示与高维空间", "status": "⚠️" },
                    { "title": "KP 3.2: 基于向量距离的语义理解", "status": "❌" },
                    { "title": "KP 3.3: 词嵌入技术 (Word Embeddings)", "status": "⚪" }
                  ]
                }
              ]
            },
            {
              "partTitle": "第二部分：机器学习核心原理",
              "chapters": [
                {
                  "title": "第6章：机器学习导论",
                  "status": "✅",
                  "knowledgePoints": [
                    { "title": "KP 6.1: 机器学习与传统编程的区别", "status": "✅" },
                    { "title": "KP 6.2: 监督/无监督/强化学习的分类", "status": "✅" }
                  ]
                },
                {
                  "title": "第7章：无监督学习",
                  "status": "⚠️",
                  "knowledgePoints": [
                    { "title": "KP 7.1: 聚类分析的基本思想", "status": "⚠️" },
                    { "title": "KP 7.2: K-means算法工作原理", "status": "❌" },
                    { "title": "KP 7.3: 降维技术与关联规则", "status": "⚪" }
                  ]
                },
                {
                  "title": "第8章：强化学习",
                  "status": "⚪",
                  "knowledgePoints": [
                    { "title": "KP 8.1: 强化学习四要素 (智能体、环境、奖励、策略)", "status": "⚪" },
                    { "title": "KP 8.2: 贝尔曼方程与价值预测", "status": "⚪" }
                  ]
                },
                {
                  "title": "第10章：深度神经网络",
                  "status": "⚪",
                  "knowledgePoints": [
                    { "title": "KP 10.1: 神经网络的核心优势", "status": "⚪" },
                    { "title": "KP 10.2: 神经网络的结构与优化", "status": "⚪" }
                  ]
                }
              ]
            }
          ],
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "行动建议",
      "components": [
        {
          "component_type": "info_card",
          "content": "### 根源诊断与首要任务\n我们发现你在 \"KP 7.2: K-means算法工作原理\" 和 \"KP 3.2: 基于向量距离的语义理解\" 两个知识点上存在困难。核心问题在于对向量距离理解不牢，建议优先攻克 **KP 3.2**，再回头复习 K-means。\n\n### 立即复习：薄弱知识点\n- KP 7.1: 聚类分析的基本思想\n- KP 3.1: 数据的向量化表示与高维空间\n\n### 学习路径建议\n1. **第一步（巩固基础）**：集中学习 **KP 3.2**，参考教材《AI如何看待数据》第2节，配合“向量距离与相似度”专项练习题。\n2. **第二步（扫清障碍）**：掌握向量距离后，重新学习 **KP 7.1** 和 **KP 7.2**，复习 K-means 的迭代逻辑。\n3. **第三步（继续前行）**：完成上述复习后，可转向《第2章：什么是数据》，打牢数据基础。",
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "推荐资源",
      "components": [
        {
          "component_type": "info_card",
          "content": "### 推荐阅读材料\n- 教材《AI如何看待数据》第 2 节\n- 教材《无监督学习：数据中的自主发现之道》第 2.2 节\n- 练习题：“向量距离与相似度”专项练习题",
          "max_width_class": "max-w-5xl"
        },
        {
          "component_type": "video_resource_list",
          "title": "推荐学习视频",
          "items": [
            {
              "title": "AI的数学语言：向量空间与距离的奥秘",
              "description": "12 分钟带你回顾向量距离概念，帮助理解 AI 如何比较数据相似度。",
              "image": {
                "src": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=640&q=80",
                "alt": "向量空间与距离视频封面"
              },
              "href": "#vector-video"
            },
            {
              "title": "聚类算法精讲：K-means 的迭代逻辑",
              "description": "通过案例拆解样本分配与中心更新流程，强化 K-means 理解。",
              "image": {
                "src": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=640&q=80",
                "alt": "K-means 算法讲解视频封面"
              },
              "href": "#kmeans-video"
            }
          ],
          "max_width_class": "max-w-5xl"
        }
      ]
    }
  ]
}
```


