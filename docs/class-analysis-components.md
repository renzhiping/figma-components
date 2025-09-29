# 班级情况分析页面组件配置

```json
{
  "page_name": "班级情况分析",
  "description": "为教师提供班级整体学习情况、薄弱知识点和需关注学生等信息。",
  "cards": [
    {
      "card_title": "班级整体学习数据",
      "components": [
        {
          "component_type": "ClassOverview",
          "data": {
            "overviewTitle": "学习进度概览",
            "overviewDescription": "对比阶段目标，监测班级整体学习趋势。",
            "metrics": [
              {
                "id": "size",
                "title": "班级人数",
                "value": "48 人",
                "colorScheme": "blue",
                "iconName": "Users",
                "showProgress": false
              },
              {
                "id": "reading",
                "title": "教材阅读完成率",
                "value": "75%",
                "subtitle": "平均进度",
                "colorScheme": "purple",
                "iconName": "BookOpen",
                "progress": 75
              },
              {
                "id": "quiz-pass",
                "title": "测验提交率",
                "value": "89%",
                "subtitle": "贪吃蛇案例测验",
                "colorScheme": "green",
                "iconName": "CheckCircle",
                "progress": 89
              },
              {
                "id": "quiz-score",
                "title": "测验平均分",
                "value": "68.5",
                "subtitle": "低于课程平均分 75",
                "colorScheme": "red",
                "iconName": "GraduationCap",
                "progress": 68.5,
                "maxProgress": 100
              },
              {
                "id": "attention",
                "title": "需关注学生",
                "value": "4 人",
                "colorScheme": "yellow",
                "iconName": "AlertTriangle",
                "showProgress": false
              }
            ],
            "trendStats": [
              {
                "id": "reading-trend",
                "label": "阅读完成率",
                "current": 75,
                "target": 85,
                "trend": "up",
                "color": "purple"
              },
              {
                "id": "quiz-trend",
                "label": "测验提交率",
                "current": 89,
                "target": 95,
                "trend": "up",
                "color": "green"
              },
              {
                "id": "score-trend",
                "label": "平均分数",
                "current": 68.5,
                "target": 75,
                "trend": "down",
                "color": "red"
              }
            ]
          },
          "max_width_class": "max-w-6xl"
        }
      ]
    },
    {
      "card_title": "班级知识点掌握详情",
      "components": [
        {
          "component_type": "Info",
          "data": {
            "title": "班级知识点掌握详情",
            "description": "整体进度与参与度，以及关键知识点的掌握情况。",
            "items": [
              {
                "heading": "整体进度与参与度",
                "content": "- 教材阅读完成率（平均）：75%\n- 贪吃蛇案例测验提交率：89%（43 / 48 人）\n- 章节测验平均分：68.5 分（低于课程平均分 75 分)"
              },
              {
                "heading": "掌握良好（错误率 < 15%）",
                "content": "- 强化学习 vs 监督学习（教练开车的比喻）：8% 错误率\n- 智能体 (Agent) 与环境 (Environment) 的定义：12% 错误率"
              },
              {
                "heading": "普遍难点（错误率高）",
                "content": "1. 贝尔曼方程（错误率 55%）：多数学生混淆当前奖励与未来折扣价值的关系，无法正确计算目标值。\n2. 状态表示（错误率 42%）：学生无法理解贪吃蛇案例中，食物位置与蛇头朝向为何需要分开表示。"
              }
            ]
          },
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "关注名单",
      "components": [
        {
          "component_type": "StudentCard",
          "data": {
            "title": "关注名单",
            "description": "针对作业与测验表现，建议课后重点沟通的学生。",
            "students": [
              {
                "id": "wang-xiaoyu",
                "name": "王晓宇",
                "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&q=80",
                "tags": ["贝尔曼方程未通过", "状态表示解释困难"],
                "status": "warning"
              },
              {
                "id": "li-jiahe",
                "name": "李嘉禾",
                "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&q=80",
                "tags": ["测验提交迟交", "强化学习奖励理解不清"],
                "status": "alert"
              },
              {
                "id": "zhao-zihan",
                "name": "赵子涵",
                "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=160&q=80",
                "tags": ["状态表示练习 40/100", "需强化贪吃蛇状态编码"],
                "status": "alert"
              },
              {
                "id": "chen-hao",
                "name": "陈昊",
                "avatar": "https://images.unsplash.com/photo-1544723795-3fb27e3b62f8?w=160&q=80",
                "tags": ["课堂互动参与度低", "需复习智能体与环境区分"],
                "status": "warning"
              }
            ]
          },
          "max_width_class": "max-w-6xl"
        }
      ]
    },
    {
      "card_title": "教学建议",
      "components": [
        {
          "component_type": "Info",
          "data": {
            "title": "教学建议",
            "description": "根据班级掌握情况提出教学调整方案。",
            "items": [
              {
                "heading": "重点复习",
                "content": "下次课重点讲解贝尔曼方程的递归思想，拆解目标值计算步骤，并配合练习。"
              },
              {
                "heading": "课堂活动",
                "content": "设计讨论题：让学生自行设计贪吃蛇的状态表示，比较不同方案的优劣并说明理由。"
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


