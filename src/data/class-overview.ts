export type ClassOverviewMetric = {
    id: string;
    title: string;
    value: string;
    subtitle?: string;
    colorScheme: "blue" | "purple" | "green" | "red" | "yellow";
    iconName: "Users" | "BookOpen" | "CheckCircle" | "GraduationCap" | "AlertTriangle";
    progress?: number;
    maxProgress?: number;
    showProgress?: boolean;
    students?: {
        name: string;
        imageUrl: string;
    }[];
};

export type ClassOverviewTrendStat = {
    id: string;
    label: string;
    current: number;
    target: number;
    trend: "up" | "down" | "stable";
    color: "purple" | "green" | "red";
};

export type ClassOverviewData = {
    overviewTitle: string;
    overviewDescription?: string;
    metrics: ClassOverviewMetric[];
    trendStats: ClassOverviewTrendStat[];
};

export const defaultClassOverviewData: ClassOverviewData = {
    overviewTitle: "学习进度概览",
    overviewDescription: "对比阶段目标，监测班级整体学习趋势。",
    metrics: [
        {
            id: "size",
            title: "班级人数",
            value: "48 人",
            colorScheme: "blue",
            iconName: "Users",
            progress: 100,
            showProgress: false,
        },
        {
            id: "reading",
            title: "教材阅读完成率",
            value: "75%",
            subtitle: "平均进度，目标 85%",
            colorScheme: "purple",
            iconName: "BookOpen",
            progress: 75,
        },
        {
            id: "quiz-pass",
            title: "测验达标率",
            value: "89%",
            subtitle: "近三次测验",
            colorScheme: "green",
            iconName: "CheckCircle",
            progress: 89,
        },
        {
            id: "quiz-score",
            title: "测验平均分",
            value: "68.5",
            subtitle: "课程平均 75",
            colorScheme: "red",
            iconName: "GraduationCap",
            progress: 68.5,
            maxProgress: 100,
        },
        {
            id: "attention",
            title: "需关注学生",
            value: "4 人",
            subtitle: "学业辅导优先级",
            colorScheme: "yellow",
            iconName: "AlertTriangle",
            progress: (4 / 48) * 100,
            showProgress: false,
            students: [
                {
                    name: "李明",
                    imageUrl:
                        "https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjB5b3VuZyUyMHBlcnNvbnxlbnwxfHx8fDE3NTkwODQ5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
                {
                    name: "王小华",
                    imageUrl:
                        "https://images.unsplash.com/photo-1726618069973-e5c15308c4af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50JTIwcG9ydHJhaXQlMjBmZW1hbGV8ZW58MXx8fHwxNzU5MTM5NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
                {
                    name: "张强",
                    imageUrl:
                        "https://images.unsplash.com/photo-1729824186684-eaff43f7d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlJTIwc3R1ZGVudCUyMG1hbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkxMzk1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
                {
                    name: "刘佳",
                    imageUrl:
                        "https://images.unsplash.com/photo-1729824186959-ba83cbd1978d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMGFzaWFufGVufDF8fHx8MTc1OTEzOTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
            ],
        },
    ],
    trendStats: [
        {
            id: "reading-trend",
            label: "阅读完成率",
            current: 75,
            target: 85,
            trend: "up",
            color: "purple",
        },
        {
            id: "quiz-trend",
            label: "测验达标率",
            current: 89,
            target: 90,
            trend: "up",
            color: "green",
        },
        {
            id: "score-trend",
            label: "平均分数",
            current: 68.5,
            target: 75,
            trend: "down",
            color: "red",
        },
    ],
};


