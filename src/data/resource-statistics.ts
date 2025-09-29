export type ResourceStatisticsBadgeVariant =
    | "default"
    | "secondary"
    | "outline"
    | "destructive";

export type ResourceStatisticsHeader = {
    title: string;
    iconName: string;
    iconContainerClass: string;
    iconClass?: string;
    stats: {
        iconName: string;
        text: string;
        variant?: ResourceStatisticsBadgeVariant;
        className?: string;
    }[];
};

export type ResourceStatisticsGoal = {
    avatarImage: string;
    avatarFallback: string;
    avatarRingClass?: string;
    accentIconName: string;
    accentContainerClass: string;
    accentIconClass?: string;
    titleIconName: string;
    titleIconClass?: string;
    title: string;
    description: string;
};

export type ResourceStatisticsPreview = {
    iconName: string;
    label: string;
    overlayBgClass: string;
    iconColorClass?: string;
    downloadIconName?: string;
    downloadIconColorClass?: string;
    downloadContainerClass?: string;
};

export type ResourceStatisticsItem = {
    iconName: string;
    label: string;
    value: string;
    containerClass: string;
    iconColorClass?: string;
    badgeClassName?: string;
    badgeVariant?: ResourceStatisticsBadgeVariant;
};

export type ResourceStatisticsSection = {
    title: string;
    iconName: string;
    iconContainerClass: string;
    iconClass?: string;
    badge: {
        text: string;
        variant?: ResourceStatisticsBadgeVariant;
        className?: string;
    };
    preview: ResourceStatisticsPreview;
    items: ResourceStatisticsItem[];
};

export type ResourceStatisticsData = {
    header: ResourceStatisticsHeader;
    goal: ResourceStatisticsGoal;
    sections: ResourceStatisticsSection[];
};

export const defaultResourceStatistics: ResourceStatisticsData = {
    header: {
        title: "资源统计",
        iconName: "BarChart3",
        iconContainerClass:
            "w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg",
        iconClass: "w-5 h-5 text-white",
        stats: [
            {
                iconName: "BookOpen",
                text: "12 课程",
                variant: "secondary",
                className: "px-3 py-1",
            },
            {
                iconName: "Globe",
                text: "8 外部资源",
                variant: "secondary",
                className: "px-3 py-1",
            },
        ],
    },
    goal: {
        avatarImage: "/placeholder-avatar.jpg",
        avatarFallback: "U",
        avatarRingClass: "ring-2 ring-blue-100",
        accentIconName: "Target",
        accentContainerClass:
            "absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center",
        accentIconClass: "w-2 h-2 text-white",
        titleIconName: "Target",
        titleIconClass: "w-4 h-4 text-blue-600",
        title: "目的：",
        description: "让学生对资源的数量和类型（内部/外部）有一个快速的量化认知。",
    },
    sections: [
        {
            title: "课程内部名称",
            iconName: "BookOpen",
            iconContainerClass:
                "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center",
            iconClass: "w-4 h-4 text-white",
            badge: {
                text: "12 项目",
                variant: "outline",
                className: "text-xs border-blue-200 text-blue-700",
            },
            preview: {
                iconName: "Image",
                label: "预览图片",
                overlayBgClass:
                    "absolute inset-0 bg-blue-100/50 flex items-center justify-center",
                iconColorClass: "text-blue-500",
                downloadIconName: "Download",
                downloadIconColorClass: "text-blue-600",
                downloadContainerClass:
                    "bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1",
            },
            items: [
                {
                    iconName: "FileText",
                    label: "课程文档材料",
                    value: "8",
                    containerClass:
                        "bg-blue-50 hover:bg-blue-100 transition-colors",
                    iconColorClass: "text-blue-600",
                    badgeClassName: "ml-auto text-xs bg-blue-100 text-blue-700",
                    badgeVariant: "secondary",
                },
                {
                    iconName: "Video",
                    label: "视频教程",
                    value: "3",
                    containerClass:
                        "bg-blue-50 hover:bg-blue-100 transition-colors",
                    iconColorClass: "text-blue-600",
                    badgeClassName: "ml-auto text-xs bg-blue-100 text-blue-700",
                    badgeVariant: "secondary",
                },
                {
                    iconName: "Image",
                    label: "图片素材",
                    value: "15",
                    containerClass:
                        "bg-blue-50 hover:bg-blue-100 transition-colors",
                    iconColorClass: "text-blue-600",
                    badgeClassName: "ml-auto text-xs bg-blue-100 text-blue-700",
                    badgeVariant: "secondary",
                },
            ],
        },
        {
            title: "互联网精选资源",
            iconName: "Globe",
            iconContainerClass:
                "w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center",
            iconClass: "w-4 h-4 text-white",
            badge: {
                text: "8 项目",
                variant: "outline",
                className: "text-xs border-cyan-200 text-cyan-700",
            },
            preview: {
                iconName: "Globe",
                label: "外部资源预览",
                overlayBgClass:
                    "absolute inset-0 bg-cyan-100/50 flex items-center justify-center",
                iconColorClass: "text-cyan-500",
                downloadIconName: "Download",
                downloadIconColorClass: "text-cyan-600",
                downloadContainerClass:
                    "bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1",
            },
            items: [
                {
                    iconName: "Globe",
                    label: "在线课程链接",
                    value: "5",
                    containerClass:
                        "bg-cyan-50 hover:bg-cyan-100 transition-colors",
                    iconColorClass: "text-cyan-600",
                    badgeClassName: "ml-auto text-xs bg-cyan-100 text-cyan-700",
                    badgeVariant: "secondary",
                },
                {
                    iconName: "FileText",
                    label: "参考文献",
                    value: "12",
                    containerClass:
                        "bg-cyan-50 hover:bg-cyan-100 transition-colors",
                    iconColorClass: "text-cyan-600",
                    badgeClassName: "ml-auto text-xs bg-cyan-100 text-cyan-700",
                    badgeVariant: "secondary",
                },
                {
                    iconName: "Video",
                    label: "相关视频",
                    value: "7",
                    containerClass:
                        "bg-cyan-50 hover:bg-cyan-100 transition-colors",
                    iconColorClass: "text-cyan-600",
                    badgeClassName: "ml-auto text-xs bg-cyan-100 text-cyan-700",
                    badgeVariant: "secondary",
                },
            ],
        },
    ],
};


