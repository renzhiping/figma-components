"use client";

import {
    Check,
    AlertTriangle,
    X,
    Circle,
    BookOpen,
    Search,
    Filter,
    Trophy,
    Target,
    Zap,
    Star,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    type KnowledgeMapItem,
    type KnowledgeMapStatus,
    defaultKnowledgeMapData,
} from "@/data/knowledge-map";
import { cn } from "@/lib/utils";

const StatusIcon = ({ status }: { status: KnowledgeMapStatus }) => {
    switch (status) {
        case "completed":
            return (
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
                    <Check className="h-3 w-3 text-white" />
                </div>
            );
        case "warning":
            return (
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500">
                    <AlertTriangle className="h-3 w-3 text-white" />
                </div>
            );
        case "error":
            return (
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
                    <X className="h-3 w-3 text-white" />
                </div>
            );
        case "not-started":
            return <div className="h-4 w-4 rounded-full border-2 border-gray-300 bg-white" />;
        default:
            return <Circle className="h-4 w-4 text-gray-300" />;
    }
};

const StatusLegend = () => {
    return (
        <div className="mb-8 flex items-center gap-6">
            <div className="flex items-center gap-2">
                <StatusIcon status="completed" />
                <span className="text-sm text-gray-600">已掌握</span>
            </div>
            <div className="flex items-center gap-2">
                <StatusIcon status="warning" />
                <span className="text-sm text-gray-600">清明</span>
            </div>
            <div className="flex items-center gap-2">
                <StatusIcon status="error" />
                <span className="text-sm text-gray-600">未掌握</span>
            </div>
            <div className="flex items-center gap-2">
                <StatusIcon status="not-started" />
                <span className="text-sm text-gray-600">未开始</span>
            </div>
        </div>
    );
};

interface KnowledgeItemProps {
    item: KnowledgeMapItem;
    level?: number;
    searchTerm?: string;
    highlightMatch?: boolean;
}

const KnowledgeItemNode = ({
    item,
    level = 0,
    searchTerm = "",
    highlightMatch = false,
}: KnowledgeItemProps) => {
    const indentClass = level === 0 ? "" : level === 1 ? "ml-6" : "ml-12";

    const highlightText = (text: string, search: string) => {
        if (!search || !highlightMatch) return text;

        const regex = new RegExp(`(${search})`, "gi");
        const lowerSearch = search.toLowerCase();
        const parts = text.split(regex);

        return parts.map((part, index) => {
            const isMatch = part.toLowerCase() === lowerSearch;
            return isMatch ? (
                <mark key={index} className="rounded bg-yellow-200 px-1">
                    {part}
                </mark>
            ) : (
                <span key={index}>{part}</span>
            );
        });
    };

    return (
        <div className={`${indentClass} mb-3`}>
            <div className="flex items-center gap-3">
                <StatusIcon status={item.status} />
                <span className="text-gray-800">{highlightText(item.title, searchTerm)}</span>
            </div>
            {item.children && item.children.length > 0 && (
                <div className="mt-2">
                    {item.children.map((child) => (
                        <KnowledgeItemNode
                            key={child.id}
                            item={child}
                            level={level + 1}
                            searchTerm={searchTerm}
                            highlightMatch={highlightMatch}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const calculateProgress = (
    items: KnowledgeMapItem[],
): {
    total: number;
    completed: number;
    warning: number;
    error: number;
    notStarted: number;
} => {
    let total = 0;
    let completed = 0;
    let warning = 0;
    let error = 0;
    let notStarted = 0;

    const countItems = (nodes: KnowledgeMapItem[]) => {
        nodes.forEach((node) => {
            if (!node.children || node.children.length === 0) {
                total += 1;
                switch (node.status) {
                    case "completed":
                        completed += 1;
                        break;
                    case "warning":
                        warning += 1;
                        break;
                    case "error":
                        error += 1;
                        break;
                    case "not-started":
                        notStarted += 1;
                        break;
                }
            } else {
                countItems(node.children);
            }
        });
    };

    countItems(items);
    return { total, completed, warning, error, notStarted };
};

const filterItems = (
    items: KnowledgeMapItem[],
    searchTerm: string,
    statusFilter: string,
): KnowledgeMapItem[] => {
    const hasMatchingChild = (children: KnowledgeMapItem[], term: string): boolean => {
        return children.some(
            (child) =>
                child.title.toLowerCase().includes(term.toLowerCase()) ||
                (child.children && hasMatchingChild(child.children, term)),
        );
    };

    const hasChildWithStatus = (children: KnowledgeMapItem[], status: string): boolean => {
        return children.some(
            (child) =>
                child.status === status ||
                (child.children && hasChildWithStatus(child.children, status)),
        );
    };

    return items
        .map((item) => {
            let shouldInclude = true;

            if (searchTerm) {
                const matchesSearch =
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (item.children && hasMatchingChild(item.children, searchTerm));
                shouldInclude = shouldInclude && matchesSearch;
            }

            if (statusFilter !== "all") {
                const matchesStatus =
                    item.status === statusFilter ||
                    (item.children && hasChildWithStatus(item.children, statusFilter));
                shouldInclude = shouldInclude && matchesStatus;
            }

            if (!shouldInclude) return null;

            const filteredChildren = item.children
                ? filterItems(item.children, searchTerm, statusFilter)
                : undefined;

            return {
                ...item,
                children: filteredChildren?.length ? filteredChildren : undefined,
            };
        })
        .filter(Boolean) as KnowledgeMapItem[];
};

interface KnowledgeMapProps {
    data?: KnowledgeMapItem[];
    className?: string;
}

export default function KnowledgeMap({ data = defaultKnowledgeMapData, className }: KnowledgeMapProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");

    const progress = useMemo(() => calculateProgress(data), [data]);
    const completionPercentage =
        progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

    const filteredData = useMemo(
        () => filterItems(data, searchTerm, statusFilter),
        [data, searchTerm, statusFilter],
    );

    return (
        <div className={cn("mx-auto max-w-4xl bg-white p-6", className)}>
            <div className="mb-8">
                <div className="mb-6 flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-gray-700" />
                    <h1 className="text-2xl font-medium text-gray-800">我的知识地图</h1>
                </div>

                <div className="mb-6 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-blue-100 p-1.5">
                                <Target className="h-4 w-4 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">学习进度</h3>
                            {completionPercentage >= 80 && (
                                <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1">
                                    <Trophy className="h-3 w-3 text-yellow-600" />
                                    <span className="text-xs text-yellow-700">优秀</span>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {completionPercentage > 0 && <Zap className="h-5 w-5 text-blue-500" />}
                            <span className="text-2xl font-bold text-blue-600">{completionPercentage}%</span>
                        </div>
                    </div>
                    <Progress
                        value={completionPercentage}
                        className="mb-4 h-3 [&>[data-slot=progress-indicator]]:bg-blue-600"
                    />
                    <div className="grid grid-cols-4 gap-4 text-sm">
                        <div className="rounded-lg bg-white/60 p-2 text-center">
                            <div className="mb-1 flex items-center justify-center gap-1">
                                <Check className="h-3 w-3 text-green-600" />
                                <div className="text-lg font-semibold text-green-600">{progress.completed}</div>
                            </div>
                            <div className="text-gray-600">已掌握</div>
                        </div>
                        <div className="rounded-lg bg-white/60 p-2 text-center">
                            <div className="mb-1 flex items-center justify-center gap-1">
                                <AlertTriangle className="h-3 w-3 text-yellow-600" />
                                <div className="text-lg font-semibold text-yellow-600">{progress.warning}</div>
                            </div>
                            <div className="text-gray-600">清明</div>
                        </div>
                        <div className="rounded-lg bg-white/60 p-2 text-center">
                            <div className="mb-1 flex items-center justify-center gap-1">
                                <X className="h-3 w-3 text-red-600" />
                                <div className="text-lg font-semibold text-red-600">{progress.error}</div>
                            </div>
                            <div className="text-gray-600">未掌握</div>
                        </div>
                        <div className="rounded-lg bg-white/60 p-2 text-center">
                            <div className="mb-1 flex items-center justify-center gap-1">
                                <Circle className="h-3 w-3 text-gray-600" />
                                <div className="text-lg font-semibold text-gray-600">{progress.notStarted}</div>
                            </div>
                            <div className="text-gray-600">未开始</div>
                        </div>
                    </div>
                    {completionPercentage > 0 && (
                        <div className="mt-3 rounded-lg bg-white/40 p-2">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span>
                                    {completionPercentage === 100
                                        ? "🎉 恭喜完成所有学习任务！"
                                        : completionPercentage >= 80
                                            ? "👏 学习进度非常棒，继续保持！"
                                            : completionPercentage >= 50
                                                ? "💪 已经完成一半了，加油！"
                                                : completionPercentage >= 20
                                                    ? "🚀 良好的开端，继续努力！"
                                                    : "🌱 开始学习之旅，每一步都很重要！"}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mb-6 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                        <Input
                            placeholder="搜索知识点..."
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <div className="w-48">
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger>
                                <Filter className="mr-2 h-4 w-4" />
                                <SelectValue placeholder="全部状态" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">全部状态</SelectItem>
                                <SelectItem value="completed">已掌握</SelectItem>
                                <SelectItem value="warning">清明</SelectItem>
                                <SelectItem value="error">未掌握</SelectItem>
                                <SelectItem value="not-started">未开始</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <StatusLegend />
            </div>

            <div className="space-y-4">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <KnowledgeItemNode
                            key={item.id}
                            item={item}
                            searchTerm={searchTerm}
                            highlightMatch={Boolean(searchTerm)}
                        />
                    ))
                ) : (
                    <div className="py-8 text-center text-gray-500">
                        <div className="mb-2 text-lg">未找到匹配的知识点</div>
                        <div className="text-sm">请尝试其他搜索词或筛选条件</div>
                    </div>
                )}
            </div>
        </div>
    );
}

