export type KnowledgeMapStatus = "completed" | "warning" | "error" | "not-started";

export interface KnowledgeMapItem {
    id: string;
    title: string;
    status: KnowledgeMapStatus;
    children?: KnowledgeMapItem[];
}

export const defaultKnowledgeMapData: KnowledgeMapItem[] = [
    {
        id: "part1",
        title: "第一部分：AI基础认知",
        status: "completed",
        children: [
            {
                id: "chapter1",
                title: "第1章：AI智能源于数据",
                status: "completed",
                children: [
                    {
                        id: "kp1.1",
                        title: "KP 1.1：AI智能的直观体验（深度攻略、PPT制作）",
                        status: "completed",
                    },
                    {
                        id: "kp1.2",
                        title: "KP 1.2：人类与AI的获维体现机制对比",
                        status: "completed",
                    },
                    {
                        id: "kp1.3",
                        title: "KP 1.3：数据、算法、算力的三支柱上作用",
                        status: "completed",
                    },
                ],
            },
            {
                id: "chapter2",
                title: "第2章：什么是数据",
                status: "not-started",
                children: [
                    {
                        id: "kp2.1",
                        title: "KP 2.1：数据的定义与形式（众示例举例）",
                        status: "not-started",
                    },
                    {
                        id: "kp2.2",
                        title: "KP 2.2：高质量数据的五大要件",
                        status: "not-started",
                    },
                    {
                        id: "kp2.3",
                        title: "KP 2.3：数据获取的六大途径",
                        status: "not-started",
                    },
                ],
            },
            {
                id: "chapter3",
                title: "第3章：AI如何看待数据",
                status: "warning",
                children: [
                    {
                        id: "kp3.1",
                        title: "KP 3.1：数据的向量表示与高维空间",
                        status: "warning",
                    },
                    {
                        id: "kp3.2",
                        title: "KP 3.2：基于向量距离的语义理解",
                        status: "error",
                    },
                    {
                        id: "kp3.3",
                        title: "KP 3.3：词嵌入技术（Word Embeddings）",
                        status: "not-started",
                    },
                ],
            },
        ],
    },
    {
        id: "part2",
        title: "第二部分：机器学习核心原理",
        status: "completed",
        children: [
            {
                id: "chapter6",
                title: "第6章：机器学习导论",
                status: "completed",
            },
        ],
    },
];

