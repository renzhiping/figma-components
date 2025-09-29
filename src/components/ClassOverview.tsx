"use client";

import { TrendingUp, TrendingDown, Minus, Users, BookOpen, CheckCircle, GraduationCap, AlertTriangle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { ClassOverviewData, ClassOverviewMetric, ClassOverviewTrendStat } from "@/data/class-overview";
import { cn } from "@/lib/utils";

const metricColorSchemes: Record<
    ClassOverviewMetric["colorScheme"],
    {
        background: string;
        value: string;
        title: string;
        subtitle: string;
        icon: string;
        progress: string;
    }
> = {
    blue: {
        background: "bg-blue-50",
        value: "text-blue-700",
        title: "text-blue-600",
        subtitle: "text-blue-500",
        icon: "text-blue-600",
        progress: "#3b82f6",
    },
    purple: {
        background: "bg-purple-50",
        value: "text-purple-700",
        title: "text-purple-600",
        subtitle: "text-purple-500",
        icon: "text-purple-600",
        progress: "#8b5cf6",
    },
    green: {
        background: "bg-green-50",
        value: "text-green-700",
        title: "text-green-600",
        subtitle: "text-green-500",
        icon: "text-green-600",
        progress: "#10b981",
    },
    red: {
        background: "bg-red-50",
        value: "text-red-700",
        title: "text-red-600",
        subtitle: "text-red-500",
        icon: "text-red-600",
        progress: "#ef4444",
    },
    yellow: {
        background: "bg-yellow-50",
        value: "text-yellow-700",
        title: "text-yellow-600",
        subtitle: "text-yellow-500",
        icon: "text-yellow-600",
        progress: "#f59e0b",
    },
};

const metricIconMap = {
    Users,
    BookOpen,
    CheckCircle,
    GraduationCap,
    AlertTriangle,
} as const;

const trendIconMap = {
    up: TrendingUp,
    down: TrendingDown,
    stable: Minus,
} as const;

const trendColorMap: Record<ClassOverviewTrendStat["trend"], string> = {
    up: "text-green-500",
    down: "text-red-500",
    stable: "text-slate-400",
};

const trendBarColorMap: Record<ClassOverviewTrendStat["color"], string> = {
    purple: "#8b5cf6",
    green: "#10b981",
    red: "#ef4444",
};

type ClassOverviewProps = {
    data: ClassOverviewData;
    className?: string;
};

export function ClassOverview({ data, className }: ClassOverviewProps) {
    return (
        <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-4", className)}>
            <div className="lg:col-span-3">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {data.metrics.map((metric) => (
                        <MetricCard key={metric.id} metric={metric} />
                    ))}
                </div>
            </div>

            <div className="lg:col-span-1">
                <OverviewCard stats={data.trendStats} title={data.overviewTitle} description={data.overviewDescription} />
            </div>
        </div>
    );
}

function MetricCard({ metric }: { metric: ClassOverviewMetric }) {
    const colors = metricColorSchemes[metric.colorScheme];
    const Icon = metricIconMap[metric.iconName] ?? Users;

    const progressMax = metric.maxProgress ?? 100;
    const hasProgress = typeof metric.progress === "number" && (metric.showProgress ?? true);
    const computedProgress = hasProgress
        ? Math.min(100, Math.round((metric.progress! / progressMax) * 100))
        : 0;

    return (
        <Card className={cn("h-full border-0 p-6 shadow-sm transition-shadow hover:shadow-md", colors.background)}>
            <div className="flex h-full flex-col">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className={cn("text-sm font-medium", colors.title)}>{metric.title}</h3>
                    <Icon className={cn("h-5 w-5", colors.icon)} />
                </div>

                <div className={cn("mb-3 text-3xl font-bold", colors.value)}>{metric.value}</div>

                <div className="flex flex-1 flex-col justify-end gap-3">
                    {metric.students && metric.students.length > 0 && (
                        <div className="space-y-2">
                            <div className="flex -space-x-2">
                                {metric.students.map((student) => (
                                    <Avatar key={student.name} className="h-9 w-9 border-2 border-white shadow-sm">
                                        <AvatarImage src={student.imageUrl} alt={student.name} />
                                        <AvatarFallback className={cn(colors.title, colors.background)}>
                                            {student.name.slice(0, 1)}
                                        </AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                            <div className={cn("text-xs", colors.subtitle)}>{metric.students.map((student) => student.name).join("、")}</div>
                        </div>
                    )}

                    {hasProgress && (
                        <div className="space-y-2">
                            <div className="relative h-2 w-full overflow-hidden rounded-full bg-black/10">
                                <div
                                    className="h-full rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${computedProgress}%`, backgroundColor: colors.progress }}
                                />
                            </div>
                            <div className={cn("text-xs", colors.subtitle)}>{computedProgress}% 完成</div>
                        </div>
                    )}

                    {metric.subtitle && <p className={cn("mt-auto text-xs", colors.subtitle)}>{metric.subtitle}</p>}
                </div>
            </div>
        </Card>
    );
}

function OverviewCard({
    stats,
    title,
    description,
}: {
    stats: ClassOverviewTrendStat[];
    title: string;
    description?: string;
}) {
    return (
        <Card className="h-full border-0 bg-white p-6 shadow-sm">
            <div className="flex h-full flex-col">
                <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
                {description && <p className="mt-2 text-sm text-slate-500">{description}</p>}

                <div className="mt-6 flex-1 space-y-6">
                    {stats.map((stat) => {
                        const TrendIcon = trendIconMap[stat.trend];
                        const trendColor = trendColorMap[stat.trend];
                        const barColor = trendBarColorMap[stat.color];

                        return (
                            <div key={stat.id} className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-600">{stat.label}</span>
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                                        <span>
                                            {stat.current}% / {stat.target}%
                                        </span>
                                        <TrendIcon className={cn("h-4 w-4", trendColor)} />
                                    </div>
                                </div>

                                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100">
                                    <div
                                        className="h-full rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${Math.min(100, stat.current)}%`, backgroundColor: barColor }}
                                    />
                                    <div
                                        className="absolute top-0 h-full rounded-full opacity-20"
                                        style={{ width: `${Math.min(100, stat.target)}%`, backgroundColor: barColor }}
                                    />
                                </div>

                                <div className="text-xs text-slate-500">目标差距：{Math.abs(stat.target - stat.current)}%</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Card>
    );
}


