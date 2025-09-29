export type InfoAction = {
    id: number;
    title: string;
    description: string;
    items: { heading: string; content: string }[];
    ctaText: string;
};

export const defaultInfoAction: InfoAction = {
    id: 1,
    title: "实训标题",
    description: "试管简单介绍，比如层架号作为氧气类型，主要参考xxx介绍。",
    items: [
        {
            heading: "目标",
            content:
                "学生：认识基本制备知识等基础知识，知道如何利用氧气分子辅导等的常见。作用：记录和了解每个制备的信息基本架构，一个关于印度的基本表达论内容与分析与制备的渗透的形式太久太少了，较小的环境建设诠释时小，同时，在你的责任感建设中，宿舍国际组的改革证可达性。",
        },
        {
            heading: "注意事项",
            content:
                "学生：认识基本制备知识等基础知识，知道如何利用氧气分子辅导等的常见。作用：记录和了解每个制备的信息基本架构，一个关于印度的基本表达论内容与分析与制备的渗透的形式太久太少了，较小的环境建设诠释时小，同时，在你的责任感建设中，宿舍国际组的改革证可达性。此事集开设的改革性研究。",
        },
    ],
    ctaText: "开始实训",
};


