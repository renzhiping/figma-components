# 知识问答页面组件配置

```json
{
  "page_name": "知识问答",
  "description": "围绕一个具体的知识点，提供介绍、测试和实验，形成学习闭环。",
  "cards": [
    {
      "card_title": "页面简介",
      "components": [
        {
          "component_type": "info",
          "data": {
            "title": "智能问答系统简介",
            "description": "通过知识图谱与 NLP 模型结合，我们可以快速获取教材内的关键信息，并支持自然语言的提问与回答。",
            "items": [
              {
                "heading": "核心亮点",
                "content": "知识图谱整合教材重点，结合 NLP 模型提供自然语言交互式学习支持。"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "练习模式",
      "components": [
        {
          "component_type": "infoAction",
          "data": {
            "title": "练习模式",
            "description": "根据教材章节生成常见问题，结合示例解析帮助理解。",
            "items": [
              {
                "heading": "功能",
                "content": "- 根据教材章节生成常见问题\n- 结合示例解析帮助理解"
              },
              {
                "heading": "说明",
                "content": "- 每套练习含 5-8 个问答\n- 支持导出为 PDF 复习资料"
              }
            ],
            "ctaText": "开始测试"
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "测试模式",
      "components": [
        {
          "component_type": "infoAction",
          "data": {
            "title": "测试模式",
            "description": "根据提问实时检索知识点，自动生成多轮对话建议。",
            "items": [
              {
                "heading": "功能",
                "content": "- 根据提问实时检索知识点\n- 自动生成多轮对话建议"
              },
              {
                "heading": "说明",
                "content": "- 支持多轮提问\n- 生成学习建议与补充材料"
              }
            ],
            "ctaText": "开始测试"
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    }
  ]
}
```


