# 资源覆盖度分析页面配置

```json
{
  "page_name": "资源覆盖度分析",
  "description": "展示教材资源的覆盖情况，帮助教研团队识别盲点并制定补齐计划。",
  "cards": [
    {
      "card_title": "资源覆盖度概览",
      "components": [
        {
          "component_type": "global_stats_summary",
          "title": "资源覆盖度分析报告",
          "stats": [
            { "title": "知识点总数", "value": "25", "subtitle": "叶子节点知识点", "cardColor": "#EEF2FF" },
            { "title": "题目总数", "value": "50", "subtitle": "平均 3.125 题/知识点", "cardColor": "#E0F2FE" },
            { "title": "视频资源", "value": "38", "subtitle": "覆盖 12 个知识点", "cardColor": "#E8FBF0" },
            { "title": "图文资料", "value": "62", "subtitle": "覆盖 20 个知识点", "cardColor": "#FDF4FF" },
            { "title": "试卷数量", "value": "10", "subtitle": "覆盖 8 个知识点", "cardColor": "#FFF7E6" }
          ],
          "coverage_stats": [
            { "title": "题目覆盖率", "value": "64.0%", "subtitle": "16/25 知识点有题目", "valueColor": "#2563EB", "cardColor": "#EEF2FF" },
            { "title": "视频覆盖率", "value": "48.0%", "subtitle": "12/25 知识点有视频", "valueColor": "#059669", "cardColor": "#E8FBF0" },
            { "title": "图文覆盖率", "value": "80.0%", "subtitle": "20/25 知识点有图文", "valueColor": "#C026D3", "cardColor": "#FDF4FF" }
          ],
          "max_width_class": "max-w-6xl"
        }
      ]
    },
    {
      "card_title": "章节覆盖情况",
      "components": [
        {
          "component_type": "knowledge_coverage_table",
          "title": "章节与知识点覆盖情况",
          "chapters": [
            {
              "title": "第一章：深度学习引论",
              "rows": [
                {
                  "topic": "DNN 定义与特征",
                  "code": "1.1.1",
                  "counts": { "questions": 7, "videos": 2, "articles": 3, "exams": 2 },
                  "status": { "label": "覆盖良好", "variant": "sufficient" }
                },
                {
                  "topic": "自动特征学习优势",
                  "code": "1.1.2",
                  "counts": { "questions": 6, "videos": 3, "articles": 1, "exams": 1 },
                  "status": { "label": "覆盖良好", "variant": "sufficient" }
                },
                {
                  "topic": "大数据处理优势",
                  "code": "1.2.1",
                  "counts": { "questions": 0, "videos": 0, "articles": 1, "exams": 0 },
                  "status": { "label": "覆盖盲点", "variant": "blind" },
                  "suggestion": { "variant": "medium", "label": "建议补充", "text": "补充关于“大数据处理优势”和“可解释性”对比的题目。" }
                },
                {
                  "topic": "灵活的结构设计能力",
                  "code": "1.2.2",
                  "counts": { "questions": 0, "videos": 1, "articles": 0, "exams": 0 },
                  "status": { "label": "覆盖盲点", "variant": "blind" }
                },
                {
                  "topic": "深度学习与传统 ML 的区别",
                  "code": "1.2.3",
                  "counts": { "questions": 0, "videos": 1, "articles": 2, "exams": 0 },
                  "status": { "label": "覆盖盲点", "variant": "blind" }
                }
              ]
            },
            {
              "title": "第二章：网络优化与正则化",
              "rows": [
                {
                  "topic": "过拟合 (Overfitting) 定义",
                  "code": "2.1.1",
                  "counts": { "questions": 5, "videos": 1, "articles": 2, "exams": 3 },
                  "status": { "label": "覆盖良好", "variant": "sufficient" }
                },
                {
                  "topic": "网络深度优化",
                  "code": "2.2.1",
                  "counts": { "questions": 2, "videos": 0, "articles": 1, "exams": 1 },
                  "status": { "label": "覆盖一般", "variant": "moderate" }
                },
                {
                  "topic": "非线性建模能力",
                  "code": "2.2.2",
                  "counts": { "questions": 4, "videos": 1, "articles": 1, "exams": 1 },
                  "status": { "label": "覆盖一般", "variant": "moderate" }
                },
                {
                  "topic": "像素输入优化",
                  "code": "2.2.3",
                  "counts": { "questions": 3, "videos": 0, "articles": 0, "exams": 0 },
                  "status": { "label": "覆盖一般", "variant": "moderate" }
                },
                {
                  "topic": "神经元数量优化",
                  "code": "2.2.4",
                  "counts": { "questions": 3, "videos": 1, "articles": 1, "exams": 0 },
                  "status": { "label": "覆盖一般", "variant": "moderate" }
                },
                {
                  "topic": "合理网络设计原则",
                  "code": "2.3.1",
                  "counts": { "questions": 1, "videos": 0, "articles": 1, "exams": 0 },
                  "status": { "label": "覆盖一般", "variant": "moderate" }
                }
              ]
            },
            {
              "title": "补充模块",
              "rows": [
                {
                  "topic": "补充模块一：激活函数",
                  "code": "supp.1",
                  "counts": { "questions": 0, "videos": 1, "articles": 1, "exams": 0 },
                  "status": { "label": "覆盖盲点", "variant": "blind" },
                  "suggestion": { "variant": "high", "label": "优先补齐", "text": "尽快补充激活函数相关题目，覆盖 CNN、RNN、ReLU 等核心概念。" }
                },
                {
                  "topic": "补充模块二：CNN/RNN 基础",
                  "code": "supp.2",
                  "counts": { "questions": 0, "videos": 2, "articles": 3, "exams": 0 },
                  "status": { "label": "覆盖盲点", "variant": "blind" },
                  "suggestion": { "variant": "high", "label": "优先补齐", "text": "补充 CNN、RNN、ReLU 等基础概念的题目，以增强练习覆盖。" }
                },
                {
                  "topic": "补充模块三：NLP/CV 应用",
                  "code": "supp.3",
                  "counts": { "questions": 0, "videos": 1, "articles": 2, "exams": 0 },
                  "status": { "label": "覆盖盲点", "variant": "blind" }
                }
              ]
            }
          ],
          "max_width_class": "max-w-6xl"
        }
      ]
    }
  ],
  "footer_note": "深度神经网络教材资源覆盖率分析系统 © 2024"
}
```


