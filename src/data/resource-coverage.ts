import type { Icon as LucideIcon } from "lucide-react";

export type BasicStat = {
    title: string;
    value: string;
    subtitle: string;
    iconName: string; // lucide-react 图标名
    colorClass: string;
    iconColorClass: string;
};

export type CoverageStat = {
    title: string;
    value: string;
    subtitle: string;
    iconName: string; // lucide-react 图标名
    colorClass: string;
    iconColorClass: string;
    progress: number;
};

export type ResourceCoverageData = {
    header: {
        title: string;
        subtitle: string;
    };
    basicStats: BasicStat[];
    coverageStats: CoverageStat[];
    summary: { colorClass: string; text: string }[];
};

export const defaultResourceCoverage: ResourceCoverageData = {
    header: {
        title: "资源覆盖度分析报告",
        subtitle: "计算机知识点资源分布与覆盖情况统计",
    },
    basicStats: [
        {
            title: "知识点总数",
            value: "25",
            subtitle: "计算机知识点",
            iconName: "BookOpen",
            colorClass: "bg-blue-50 text-blue-700",
            iconColorClass: "text-blue-600",
        },
        {
            title: "题目总数",
            value: "50",
            subtitle: "平均 3.125 题/知识点",
            iconName: "ClipboardList",
            colorClass: "bg-sky-50 text-sky-700",
            iconColorClass: "text-sky-600",
        },
        {
            title: "视频资源",
            value: "38",
            subtitle: "覆盖 12 个知识点",
            iconName: "Video",
            colorClass: "bg-emerald-50 text-emerald-700",
            iconColorClass: "text-emerald-600",
        },
        {
            title: "图文资料",
            value: "62",
            subtitle: "覆盖 20 个知识点",
            iconName: "FileImage",
            colorClass: "bg-purple-50 text-purple-700",
            iconColorClass: "text-purple-600",
        },
        {
            title: "试卷数量",
            value: "10",
            subtitle: "覆盖 8 个知识点",
            iconName: "FileText",
            colorClass: "bg-amber-50 text-amber-700",
            iconColorClass: "text-amber-600",
        },
    ],
    coverageStats: [
        {
            title: "题目覆盖率",
            value: "64.0%",
            subtitle: "16/25 知识点有题目",
            iconName: "Target",
            colorClass: "bg-blue-50 text-blue-700",
            iconColorClass: "text-blue-600",
            progress: 64,
        },
        {
            title: "视频覆盖率",
            value: "48.0%",
            subtitle: "12/25 知识点有视频",
            iconName: "Play",
            colorClass: "bg-emerald-50 text-emerald-700",
            iconColorClass: "text-emerald-600",
            progress: 48,
        },
        {
            title: "图文覆盖率",
            value: "80.0%",
            subtitle: "20/25 知识点有图文",
            iconName: "FileCheck",
            colorClass: "bg-purple-50 text-purple-700",
            iconColorClass: "text-purple-600",
            progress: 80,
        },
    ],
    summary: [
        { colorClass: "bg-emerald-500", text: "图文资料覆盖率表现优秀 (80%)" },
        { colorClass: "bg-blue-500", text: "题目覆盖率达到良好水平 (64%)" },
        { colorClass: "bg-emerald-500", text: "视频资源覆盖率稳步提升 (48%)" },
    ],
};


