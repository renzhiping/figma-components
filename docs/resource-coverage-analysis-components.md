# 资源覆盖度分析页面组件配置

```json
{
  "page_name": "资源覆盖度分析",
  "description": "展示教材资源的覆盖情况，帮助教研团队识别盲点并制定补齐计划。",
  "cards": [
    {
      "card_title": "资源覆盖度概览",
      "components": [
        {
          "component_type": "ResourceCoverage",
          "data": {
            "header": {
              "title": "资源覆盖度分析报告",
              "subtitle": "计算各类资源在知识点层面的覆盖情况，识别空缺与优势。"
            },
            "basicStats": [
              {
                "title": "知识点总数",
                "value": "25",
                "subtitle": "叶子节点知识点",
                "iconName": "BookOpen",
                "colorClass": "bg-indigo-50 text-indigo-700",
                "iconColorClass": "text-indigo-600"
              },
              {
                "title": "题目总数",
                "value": "50",
                "subtitle": "平均 3.125 题/知识点",
                "iconName": "ClipboardList",
                "colorClass": "bg-sky-50 text-sky-700",
                "iconColorClass": "text-sky-600"
              },
              {
                "title": "视频资源",
                "value": "38",
                "subtitle": "覆盖 12 个知识点",
                "iconName": "Video",
                "colorClass": "bg-emerald-50 text-emerald-700",
                "iconColorClass": "text-emerald-600"
              },
              {
                "title": "图文资料",
                "value": "62",
                "subtitle": "覆盖 20 个知识点",
                "iconName": "FileImage",
                "colorClass": "bg-purple-50 text-purple-700",
                "iconColorClass": "text-purple-600"
              },
              {
                "title": "试卷数量",
                "value": "10",
                "subtitle": "覆盖 8 个知识点",
                "iconName": "FileText",
                "colorClass": "bg-amber-50 text-amber-700",
                "iconColorClass": "text-amber-600"
              }
            ],
            "coverageStats": [
              {
                "title": "题目覆盖率",
                "value": "64.0%",
                "subtitle": "16/25 知识点有题目",
                "iconName": "Target",
                "colorClass": "bg-blue-50 text-blue-700",
                "iconColorClass": "text-blue-600",
                "progress": 64
              },
              {
                "title": "视频覆盖率",
                "value": "48.0%",
                "subtitle": "12/25 知识点有视频",
                "iconName": "Play",
                "colorClass": "bg-emerald-50 text-emerald-700",
                "iconColorClass": "text-emerald-600",
                "progress": 48
              },
              {
                "title": "图文覆盖率",
                "value": "80.0%",
                "subtitle": "20/25 知识点有图文",
                "iconName": "FileCheck",
                "colorClass": "bg-fuchsia-50 text-fuchsia-700",
                "iconColorClass": "text-fuchsia-600",
                "progress": 80
              }
            ],
            "summary": [
              {
                "colorClass": "bg-emerald-500",
                "text": "图文资料覆盖率表现优秀，达 80%"
              },
              {
                "colorClass": "bg-blue-500",
                "text": "题目覆盖率 64%，处于良好水平"
              },
              {
                "colorClass": "bg-amber-500",
                "text": "视频覆盖率 48%，需优先补齐"
              }
            ]
          },
          "max_width_class": "max-w-6xl"
        }
      ]
    },
    {
      "card_title": "章节覆盖情况",
      "components": [
        {
          "component_type": "LearningCoverage",
          "data": {
            "header": {
              "title": "章节与知识点覆盖情况"
            },
            "chapters": [
              {
                "chapter": "第一章：深度学习引论",
                "topics": [
                  {
                    "id": "1.1.1",
                    "name": "DNN 定义与特征",
                    "stats": { "题目": 7, "视频": 2, "图文": 3, "试题": 2 },
                    "status": "覆盖良好",
                    "statusType": "good",
                    "suggestion": null
                  },
                  {
                    "id": "1.1.2",
                    "name": "自动特征学习优势",
                    "stats": { "题目": 6, "视频": 3, "图文": 1, "试题": 1 },
                    "status": "覆盖良好",
                    "statusType": "good",
                    "suggestion": null
                  },
                  {
                    "id": "1.2.1",
                    "name": "大数据处理优势",
                    "stats": { "题目": 0, "视频": 0, "图文": 1, "试题": 0 },
                    "status": "覆盖盲点",
                    "statusType": "weak",
                    "suggestion": "补充关于“大数据处理优势”和“可解释性”对比的题目。"
                  },
                  {
                    "id": "1.2.2",
                    "name": "灵活的结构设计能力",
                    "stats": { "题目": 0, "视频": 1, "图文": 0, "试题": 0 },
                    "status": "覆盖盲点",
                    "statusType": "weak",
                    "suggestion": null
                  },
                  {
                    "id": "1.2.3",
                    "name": "深度学习与传统 ML 的区别",
                    "stats": { "题目": 0, "视频": 1, "图文": 2, "试题": 0 },
                    "status": "覆盖盲点",
                    "statusType": "weak",
                    "suggestion": null
                  }
                ]
              },
              {
                "chapter": "第二章：网络优化与正则化",
                "topics": [
                  {
                    "id": "2.1.1",
                    "name": "过拟合 (Overfitting) 定义",
                    "stats": { "题目": 5, "视频": 1, "图文": 2, "试题": 3 },
                    "status": "覆盖良好",
                    "statusType": "good",
                    "suggestion": null
                  },
                  {
                    "id": "2.2.1",
                    "name": "网络深度优化",
                    "stats": { "题目": 2, "视频": 0, "图文": 1, "试题": 1 },
                    "status": "覆盖一般",
                    "statusType": "average",
                    "suggestion": null
                  },
                  {
                    "id": "2.2.2",
                    "name": "非线性建模能力",
                    "stats": { "题目": 4, "视频": 1, "图文": 1, "试题": 1 },
                    "status": "覆盖一般",
                    "statusType": "average",
                    "suggestion": null
                  },
                  {
                    "id": "2.2.3",
                    "name": "像素输入优化",
                    "stats": { "题目": 3, "视频": 0, "图文": 0, "试题": 0 },
                    "status": "覆盖一般",
                    "statusType": "average",
                    "suggestion": null
                  },
                  {
                    "id": "2.2.4",
                    "name": "神经元数量优化",
                    "stats": { "题目": 3, "视频": 1, "图文": 1, "试题": 0 },
                    "status": "覆盖一般",
                    "statusType": "average",
                    "suggestion": null
                  },
                  {
                    "id": "2.3.1",
                    "name": "合理网络设计原则",
                    "stats": { "题目": 1, "视频": 0, "图文": 1, "试题": 0 },
                    "status": "覆盖一般",
                    "statusType": "average",
                    "suggestion": null
                  }
                ]
              },
              {
                "chapter": "补充模块",
                "topics": [
                  {
                    "id": "supp.1",
                    "name": "补充模块一：激活函数",
                    "stats": { "题目": 0, "视频": 1, "图文": 1, "试题": 0 },
                    "status": "覆盖盲点",
                    "statusType": "weak",
                    "suggestion": "尽快补充激活函数题目，覆盖 CNN、RNN、ReLU 等核心概念。"
                  },
                  {
                    "id": "supp.2",
                    "name": "补充模块二：CNN/RNN 基础",
                    "stats": { "题目": 0, "视频": 2, "图文": 3, "试题": 0 },
                    "status": "覆盖盲点",
                    "statusType": "weak",
                    "suggestion": "补充 CNN、RNN、ReLU 等基础概念题目以增强练习覆盖。"
                  },
                  {
                    "id": "supp.3",
                    "name": "补充模块三：NLP/CV 应用",
                    "stats": { "题目": 0, "视频": 1, "图文": 2, "试题": 0 },
                    "status": "覆盖盲点",
                    "statusType": "weak",
                    "suggestion": null
                  }
                ]
              }
            ]
          },
          "max_width_class": "max-w-6xl"
        }
      ]
    }
  ],
  "footer_note": "深度神经网络教材资源覆盖率分析系统 © 2024"
}
```


