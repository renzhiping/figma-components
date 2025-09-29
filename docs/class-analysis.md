# 班级情况分析页面配置

```json
{
  "page_name": "班级情况分析",
  "description": "为教师提供班级整体学习情况、薄弱知识点和需关注学生等信息。",
  "cards": [
    {
      "card_title": "班级整体学习数据",
      "components": [
        {
          "component_type": "global_stats_summary",
          "title": "班级整体学习数据",
          "stats": [
            { "title": "班级人数", "value": "48 人", "cardColor": "#E0F2FE" },
            { "title": "教材阅读完成率", "value": "75%", "subtitle": "平均进度", "valueColor": "#2563EB", "cardColor": "#EEF2FF" },
            { "title": "测验提交率", "value": "89%", "subtitle": "贪吃蛇案例测验", "valueColor": "#0F766E", "cardColor": "#E6FFFA" },
            { "title": "测验平均分", "value": "68.5", "subtitle": "低于课程平均分 75", "valueColor": "#DC2626", "cardColor": "#FEE2E2" },
            { "title": "需关注学生", "value": "4 人", "valueColor": "#B45309", "cardColor": "#FEF3C7" }
          ],
          "max_width_class": "max-w-6xl"
        }
      ]
    },
    {
      "card_title": "班级知识点掌握详情",
      "components": [
        {
          "component_type": "info_card",
          "content": "### 整体进度与参与度\n- 教材阅读完成率（平均）：75%\n- 贪吃蛇案例测验提交率：89%（43 / 48 人）\n- 章节测验平均分：68.5 分（低于课程平均分 75 分）\n\n### 知识点掌握情况（按错误率划分）\n**掌握良好（错误率 < 15%）**\n- 强化学习 vs 监督学习（教练开车的比喻）：8% 错误率\n- 智能体 (Agent) 与环境 (Environment) 的定义：12% 错误率\n\n**普遍难点（错误率高）**\n1. 贝尔曼方程（错误率 55%）\n   - 多数学生混淆当前奖励与未来折扣价值的关系，无法正确计算目标值。\n2. 状态表示（错误率 42%）\n   - 学生无法理解贪吃蛇案例中，食物位置与蛇头朝向为何需要分开表示。",
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "关注名单",
      "components": [
        {
          "component_type": "student_status_list",
          "title": "关注名单",
          "description": "针对作业与测验表现，建议课后重点沟通的学生。",
          "students": [
            {
              "name": "王晓宇",
              "avatar": { "src": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&q=80" },
              "issues": ["贝尔曼方程题目连续两次未通过", "课堂提问时无法解释状态表示"]
            },
            {
              "name": "李嘉禾",
              "avatar": { "src": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&q=80" },
              "issues": ["测验提交迟交，班级阅读进度落后", "对强化学习奖励机制理解不清"]
            },
            {
              "name": "赵子涵",
              "avatar": { "src": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=160&q=80" },
              "issues": ["状态表示练习得分 40/100", "需要辅助理解贪吃蛇案例中的状态编码"]
            },
            {
              "name": "陈昊",
              "avatar": { "src": "https://images.unsplash.com/photo-1544723795-3fb27e3b62f8?w=160&q=80" },
              "issues": ["课堂互动参与度低", "需要复习智能体与环境的区分"]
            }
          ],
          "max_width_class": "max-w-6xl"
        }
      ]
    },
    {
      "card_title": "教学建议",
      "components": [
        {
          "component_type": "info_card",
          "content": "### 教学建议\n1. 下次课重点讲解贝尔曼方程的递归思想，清晰拆解目标值计算步骤。\n2. 布置课堂讨论题：让学生自行设计贪吃蛇的状态表示，比较不同方案的优劣并说明理由。",
          "max_width_class": "max-w-5xl"
        }
      ]
    }
  ]
}
```


