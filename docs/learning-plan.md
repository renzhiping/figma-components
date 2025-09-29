# 学习规划页面配置

```json
{
  "page_name": "学习规划",
  "description": "为学生提供未来三天的具体学习路径和任务规划。",
  "cards": [
    {
      "card_title": "学习规划整体介绍",
      "components": [
        {
          "component_type": "info_card",
          "content": "# 学习规划整体介绍\n\n为学生提供未来三天的具体学习路径与任务规划，帮助快速聚焦优先学习事项与关键资源。",
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "学习规划概要",
      "components": [
        {
          "component_type": "learning_plan_summary",
          "metrics": [
            { "label": "目标准确率", "value": "83%", "indicatorColor": "#4D00FF", "valueColor": "#4D00FF" },
            { "label": "学习周期", "value": "3 天", "indicatorColor": "#FF6A00", "valueColor": "#FF6A00" },
            { "label": "覆盖知识点", "value": "8 个", "indicatorColor": "#00C48D", "valueColor": "#00C48D" }
          ],
          "highlight": {
            "avatar": {
              "src": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=320&q=80",
              "alt": "学习计划头像"
            },
            "title": "未来三日学习主线",
            "description": "围绕“人工特征工程 → 神经网络优化 → 巩固总结”三步推进，确保聚类与深度学习两条路径均衡发展。"
          },
          "dayPlans": [
            {
              "badge": "Day 1 · 人工特征工程",
              "description": "聚焦诊断模型误差，掌握延伸度、圆度等关键人工特征。",
              "image": {
                "src": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=640&q=80",
                "alt": "人工特征工程学习场景"
              }
            },
            {
              "badge": "Day 2 · 神经网络优化",
              "description": "通过像素输入与网络结构优化，提升模型表现。",
              "image": {
                "src": "https://images.unsplash.com/photo-1526378722430-081c3fd34c05?w=640&q=80",
                "alt": "神经网络优化学习"
              }
            },
            {
              "badge": "Day 3 · 总结拓展",
              "description": "对比两种方案优劣，完成综合练习巩固思路。",
              "image": {
                "src": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&q=80",
                "alt": "学习总结场景"
              }
            }
          ],
          "max_width_class": "max-w-6xl"
        }
      ]
    },
    {
      "card_title": "Day 1 学习路径",
      "components": [
        {
          "component_type": "info_card",
          "content": "### 路径 A：人工特征工程（准确率 40% → 66%）\n1. **诊断问题 (Why)**\n   - 资源：观看 `[视频 9.1]`，阅读《手绘图片识别进阶》第 2 章。\n   - 目标：了解基线模型的混淆点，掌握混淆矩阵的阅读方法。\n2. **解决问题 (How)**\n   - 资源：观看 `[视频 9.2]`、`[视频 9.3]`，阅读第 3、4 章。\n   - 目标：理解延伸度、圆度等人工特征如何缓解“笔 vs 时钟”“房子 vs 时钟”混淆。",
          "max_width_class": "max-w-5xl"
        },
        {
          "component_type": "video_resource_list",
          "title": "第一天 · 推荐资源",
          "items": [
            {
              "title": "[视频 9.1] 诊断AI的视力：混淆矩阵详解",
              "description": "解释如何构建和分析混淆矩阵，定位模型误判原因。",
              "image": {
                "src": "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=640&q=80",
                "alt": "混淆矩阵视频封面"
              },
              "href": "#video-9-1"
            },
            {
              "title": "[视频 9.2] 特征的魔力 (上)：延伸度",
              "description": "通过案例展示延伸度特征如何区分笔与时钟。",
              "image": {
                "src": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&q=80",
                "alt": "延伸度特征视频封面"
              },
              "href": "#video-9-2"
            },
            {
              "title": "[视频 9.3] 特征的魔力 (下)：圆度",
              "description": "演示圆度特征在区分房子与时钟时的效果。",
              "image": {
                "src": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=640&q=80",
                "alt": "圆度特征视频封面"
              },
              "href": "#video-9-3"
            }
          ],
          "max_width_class": "max-w-5xl"
        },
        {
          "component_type": "info_card_action",
          "content": "# 推荐练习\n\n- 「练习题库」→「第9章：手绘图片识别进阶」\n- 完成“混淆矩阵解读”练习（5 题）\n- 完成“特征原理”计算题（3 题）",
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
      "card_title": "Day 2 学习路径",
      "components": [
        {
          "component_type": "info_card",
          "content": "### 路径 B：神经网络优化（准确率 66% → 83%）\n1. **优化一：像素输入**\n   - 资源：观看 `[视频 10.1]`，阅读《深度神经网络》第 2 章。\n   - 目标：理解从 5 个人工特征转为 400 个像素输入的意义。\n2. **优化二：网络宽度**\n   - 资源：观看 `[视频 10.2]`，阅读第 3 章。\n   - 目标：了解增加隐藏层神经元数量如何提升模型容量。\n3. **优化三：网络深度**\n   - 资源：观看 `[视频 10.3]`，阅读第 4 章。\n   - 目标：掌握多层神经网络的优势及边际效应。",
          "max_width_class": "max-w-5xl"
        },
        {
          "component_type": "video_resource_list",
          "title": "第二天 · 推荐资源",
          "items": [
            {
              "title": "[视频 10.1] 告别人造特征：拥抱像素输入",
              "description": "讲解像素级输入如何扩大信息量，推动准确率提升。",
              "image": {
                "src": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=640&q=80",
                "alt": "像素输入视频封面"
              },
              "href": "#video-10-1"
            },
            {
              "title": "[视频 10.2] 扩充大脑容量：增加神经元数量",
              "description": "演示加宽网络带来的非线性建模能力提升。",
              "image": {
                "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=640&q=80",
                "alt": "增加神经元视频封面"
              },
              "href": "#video-10-2"
            },
            {
              "title": "[视频 10.3] 增加思考深度：构建多层网络",
              "description": "分析双隐藏层带来的收益与过拟合风险。",
              "image": {
                "src": "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=640&q=80",
                "alt": "多层网络视频封面"
              },
              "href": "#video-10-3"
            }
          ],
          "max_width_class": "max-w-5xl"
        },
        {
          "component_type": "info_card_action",
          "content": "# 推荐练习\n\n- 「组卷试卷库」→「神经网络与深度学习」\n- 完成 `[试卷ID: DL-HW-03] 《深度神经网络优化》章节测验`",
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
      "card_title": "Day 3 学习路径",
      "components": [
        {
          "component_type": "info_card",
          "content": "### 总结、对比与拓展\n1. **路径对比与反思**\n   - 目标：总结路径 A 与路径 B 的优缺点，思考可解释性与性能的权衡。\n2. **知识拓展**\n   - 资源：回顾《特征工程》《机器学习》相关章节，探讨特征与监督学习关系。\n3. **综合练习**\n   - 目标：通过案例分析题巩固对 AI 解决问题哲学的理解。",
          "max_width_class": "max-w-5xl"
        },
        {
          "component_type": "video_resource_list",
          "title": "第三天 · 推荐资源",
          "items": [
            {
              "title": "[视频 6.1] 案例：房价预测中的特征工程",
              "description": "从房价预测案例理解人工特征构造的思路。",
              "image": {
                "src": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=640&q=80",
                "alt": "房价预测特征工程视频封面"
              },
              "href": "#video-6-1"
            },
            {
              "title": "[视频 12.1] 总结：AI 解决问题的两种哲学",
              "description": "对比人工特征工程与深度神经网络的核心差异。",
              "image": {
                "src": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=640&q=80",
                "alt": "AI 解决问题哲学视频封面"
              },
              "href": "#video-12-1"
            }
          ],
          "max_width_class": "max-w-5xl"
        },
        {
          "component_type": "info_card_action",
          "content": "# 推荐练习\n\n- 「练习题库」→「综合应用题」\n- 完成：'结合手绘图片识别案例，论述《AI 智能源于数据》的正确性'\n- 「组卷试卷库」→「期中综合测试」\n- 尝试 `[试卷ID: Midterm-01] 《AI 基础与机器学习》综合试卷`",
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
    }
  ]
}
```


