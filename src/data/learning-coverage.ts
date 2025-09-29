export type TopicStats = { 题目: number; 视频: number; 图文: number; 试题: number };
export type Topic = {
    id: string;
    name: string;
    stats: TopicStats;
    status: string;
    statusType: "good" | "weak" | "average";
    suggestion: string | null;
};
export type Chapter = { chapter: string; topics: Topic[] };

export type LearningCoverageData = {
    header: { title: string };
    chapters: Chapter[];
};

export const defaultLearningCoverage: LearningCoverageData = {
    header: { title: "章节与知识点覆盖情况" },
    chapters: [
        {
            chapter: "第一章：深度学习引论",
            topics: [
                { id: "1.1.1", name: "DNN 定义与特征", stats: { 题目: 7, 视频: 2, 图文: 3, 试题: 2 }, status: "准备充分", statusType: "good", suggestion: null },
                { id: "1.1.2", name: "自动微分学习优势", stats: { 题目: 6, 视频: 3, 图文: 1, 试题: 1 }, status: "准备充分", statusType: "good", suggestion: null },
                { id: "1.2.1", name: "大数据处理优势", stats: { 题目: 0, 视频: 0, 图文: 1, 试题: 0 }, status: "备考薄弱", statusType: "weak", suggestion: "充实关于\"大数据处理优势\"相关解释对应比较题目" },
                { id: "1.2.2", name: "灵活的输出设计能力", stats: { 题目: 0, 视频: 1, 图文: 0, 试题: 0 }, status: "备考薄弱", statusType: "weak", suggestion: null },
                { id: "1.2.3", name: "深度学习与传统 ML 的区别", stats: { 题目: 0, 视频: 1, 图文: 2, 试题: 0 }, status: "备考薄弱", statusType: "weak", suggestion: null },
            ],
        },
        {
            chapter: "第二章：网络优化与正则化",
            topics: [
                { id: "2.1.1", name: "过拟合 (Overfitting) 定义", stats: { 题目: 5, 视频: 1, 图文: 2, 试题: 3 }, status: "准备充分", statusType: "good", suggestion: null },
                { id: "2.2.1", name: "网络深度优化", stats: { 题目: 2, 视频: 0, 图文: 1, 试题: 1 }, status: "备考一般", statusType: "average", suggestion: null },
                { id: "2.2.2", name: "非线性增强能力", stats: { 题目: 4, 视频: 1, 图文: 1, 试题: 1 }, status: "备考一般", statusType: "average", suggestion: null },
            ],
        },
    ],
};


