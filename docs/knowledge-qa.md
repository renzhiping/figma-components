# 知识问答页面配置

```json
{
  "page_name": "知识问答",
  "description": "围绕一个具体的知识点，提供介绍、测试和实验，形成学习闭环。",
  "cards": [
    {
      "card_title": "页面简介",
      "components": [
        {
          "component_type": "info_card",
          "content": "# 智能问答系统简介\n\n通过知识图谱与 NLP 模型结合，我们可以快速获取教材内的关键信息，并支持自然语言的提问与回答。",
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "练习模式",
      "components": [
        {
          "component_type": "info_card_action",
          "content": "# 练习模式\n\n## 功能\n- 根据教材章节生成常见问题\n- 结合示例解析帮助理解\n\n## 说明\n- 每套练习含 5-8 个问答\n- 支持导出为 PDF 复习资料",
          "actions": [
            {
              "type": "button",
              "text": "开始测试",
              "href": "#quiz",
              "target": "_blank"
            }
          ],
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "测试模式",
      "components": [
        {
          "component_type": "info_card_action",
          "content": "# 测试模式\n\n## 功能\n- 根据提问实时检索知识点\n- 自动生成多轮对话建议\n\n## 说明\n- 支持多轮提问\n- 生成学习建议与补充材料",
          "actions": [
            {
              "type": "button",
              "text": "开始测试",
              "href": "#quiz",
              "target": "_blank"
            }
          ]
        }
      ],
      "max_width_class": "max-w-5xl"
    }
  ]
 }
```


