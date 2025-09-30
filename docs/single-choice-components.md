# 单选题组件配置

```json
{
  "component_name": "SingleChoiceQuestion",
  "description": "展示单选题内容、选项、难度、分值以及答案解析，用于练习或测试场景。",
  "demo_page": "/demo/questions",
  "data_source": "singleChoiceQuestions",
  "components": [
    {
      "component_type": "SingleChoiceQuestion",
      "data": {
        "id": 1,
        "type": "单选题",
        "title": "以下哪项是 Python 的特点？",
        "options": [
          { "id": "A", "text": "编译型语言" },
          { "id": "B", "text": "解释型语言" },
          { "id": "C", "text": "只支持面向对象" },
          { "id": "D", "text": "不支持跨平台" }
        ],
        "difficulty": "简单",
        "points": 5,
        "correctAnswer": "B",
        "explanation": "Python 是一种解释型语言，具有跨平台、动态类型、支持多种编程范式等特点。",
        "userAnswer": "B"
      },
      "max_width_class": "max-w-3xl"
    },
    {
      "component_type": "SingleChoiceQuestion",
      "data": {
        "id": 2,
        "type": "单选题",
        "title": "React 中哪个 Hook 用于处理组件的状态？",
        "options": [
          { "id": "A", "text": "useEffect" },
          { "id": "B", "text": "useState" },
          { "id": "C", "text": "useMemo" },
          { "id": "D", "text": "useCallback" }
        ],
        "difficulty": "中等",
        "points": 8,
        "correctAnswer": "B",
        "explanation": "useState 是 React 最基础的 Hook，用于在函数组件中添加状态管理能力。",
        "userAnswer": "B"
      },
      "max_width_class": "max-w-3xl"
    },
    {
      "component_type": "SingleChoiceQuestion",
      "data": {
        "id": 3,
        "type": "单选题",
        "title": "以下哪个 HTML 标签用于定义无序列表？",
        "options": [
          { "id": "A", "text": "<ol>" },
          { "id": "B", "text": "<ul>" },
          { "id": "C", "text": "<li>" },
          { "id": "D", "text": "<dl>" }
        ],
        "difficulty": "简单",
        "points": 4,
        "correctAnswer": "B",
        "explanation": "<ul> 标签表示无序列表，<ol> 表示有序列表，<li> 表示列表项，<dl> 用于定义列表。",
        "userAnswer": "B"
      },
      "max_width_class": "max-w-3xl"
    }
  ]
}
```


