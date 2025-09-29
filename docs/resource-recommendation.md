# 资源推荐页面配置

```json
{
  "page_name": "资源推荐",
  "description": "根据学生的学习情况，推荐相关的学习资源。",
  "cards": [
    {
      "card_title": "资源统计概览",
      "components": [
        {
          "component_type": "resource_overview",
          "header": {
            "accent_label": "资源",
            "title": "统计",
            "purpose_label": "目的：",
            "purpose_text": "让学生对资源的数量和类型（内部/外部）有一个快速的量化认知。",
            "accent_color": "#0095ff",
            "icon_color": "#06c167",
            "avatar": {
              "src": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=80",
              "alt": "资源管理员头像"
            }
          },
          "items": [
            {
              "title": "课程内部资源",
              "bullets": [
                "练习题库 · 更新日期 2024/09",
                "课程讲义 PDF · 5 套",
                "直播回放录像 · 12 节"
              ],
              "image": {
                "src": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=480&q=80",
                "alt": "课程内部资源预览"
              },
              "bullet_color": "#9c4dff",
              "accent_color": "#6bd49f"
            },
            {
              "title": "互联网精选资源",
              "bullets": [
                "开源案例合集 · GitHub 精选",
                "知识拓展文章 · 每周更新",
                "主题讲座视频 · 8 个频道"
              ],
              "image": {
                "src": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=480&q=80",
                "alt": "互联网资源预览"
              },
              "bullet_color": "#9c4dff",
              "accent_color": "#6bd49f"
            }
          ],
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "资源推荐整体介绍",
      "components": [
        {
          "component_type": "info_card",
          "content": "# 资源推荐整体介绍\n\n根据学生当前的学习进度与疑问，系统将聚焦聚类算法相关的教材、视频与练习资源，帮助快速补齐知识薄弱点。",
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "文本资源推荐",
      "components": [
        {
          "component_type": "info_card",
          "content": "### 平台内部教材\n1. **《无监督学习：数据中的自主发现之道》** — 第 2.2 节讲解 K-means 的数学基础与执行步骤，第 3.1 节展示在手机相册分类等场景的应用，并提供层次聚类、DBSCAN 拓展模块。\n2. **《机器学习》** — 第 6.2 节从导论视角回顾无监督学习定义，预览聚类在图片分类、图像分割中的应用。\n3. **《特征工程：数据预处理的艺术与科学》** — 第 5 章详细介绍 PCA，帮助理解聚类结果与可视化。\n\n### 互联网拓展书籍\n- **《Pattern Recognition and Machine Learning》 (Bishop)** — 第 9 章讨论 K-means 与混合高斯模型。\n- **《Python 机器学习实战》 (A. Géron)** — 第 9 章示范使用 Scikit-Learn 实现 K-means、DBSCAN 等算法。",
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "视频资源推荐",
      "components": [
        {
          "component_type": "video_resource_list",
          "title": "推荐观看",
          "items": [
            {
              "title": "内部视频 8.1：动画精讲 K-means 迭代原理",
              "description": "演示样本分配与中心更新的交替迭代过程，配合教材第 2.2 节学习。",
              "image": {
                "src": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&q=80",
                "alt": "K-means 迭代过程动画封面"
              },
              "href": "#video-1"
            },
            {
              "title": "内部视频 8.2：案例分析 DBSCAN 与层次聚类",
              "description": "对比 K-means 的局限与 DBSCAN 的优势，关联补充模块内容。",
              "image": {
                "src": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=640&q=80",
                "alt": "DBSCAN 与层次聚类案例分析封面"
              },
              "href": "#video-2"
            },
            {
              "title": "Stanford CS229 讲座：K-Means 与 EM",
              "description": "吴恩达讲解 K-means 背后的数学原理及与 EM 的联系。",
              "image": {
                "src": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=640&q=80",
                "alt": "Stanford CS229 讲座封面"
              },
              "href": "#video-3"
            }
          ],
          "max_width_class": "max-w-5xl"
        }
      ]
    },
    {
      "card_title": "试题类型推荐",
      "components": [
        {
          "component_type": "info_card_action",
          "content": "# 试题类型推荐\n\n## 推荐练习\n- 「练习题库」→「聚类算法练习题」  \n  包含 5 道选择题与 2 道计算题，巩固 K-means 迭代步骤。\n- 「练习题库」→「聚类算法比较题组」  \n  通过案例练习 K-means、DBSCAN、层次聚类的适用场景。",
          "button_label": "前往练习中心",
          "button_href": "#exam",
          "max_width_class": "max-w-5xl"
        }
      ]
    }
  ]
}
```


