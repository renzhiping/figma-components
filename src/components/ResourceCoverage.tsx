import { Card } from "./ui/card";
import { BookOpen, FileText, Video, FileImage, ClipboardList, Target, Play, FileCheck, type Icon as LucideIcon } from "lucide-react";
import type { ResourceCoverageData } from "@/data/resource-coverage";

const iconMap = {
    BookOpen,
    FileText,
    Video,
    FileImage,
    ClipboardList,
    Target,
    Play,
    FileCheck,
} as const;

function getIcon(name: string) {
    return (iconMap as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? BookOpen;
}

type ResourceCoverageProps = {
    data: ResourceCoverageData;
};

export function ResourceCoverage({ data }: ResourceCoverageProps) {
    return (
        <div className="min-h-0 p-0">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">{data.header.title}</h1>
                    <p className="text-gray-600">{data.header.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    {data.basicStats.map((stat, index) => {
                        const Icon = getIcon(stat.iconName);
                        return (
                            <Card key={index} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.colorClass} mb-4`}>
                                            <Icon className={`w-6 h-6 ${stat.iconColorClass}`} />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-xs text-gray-500 leading-relaxed">{stat.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.coverageStats.map((stat, index) => {
                        const Icon = getIcon(stat.iconName);
                        return (
                            <Card key={index} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.colorClass} mb-4`}>
                                            <Icon className={`w-6 h-6 ${stat.iconColorClass}`} />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                            <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-xs text-gray-500 leading-relaxed">{stat.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                        <span>完成度</span>
                                        <span>{stat.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full transition-all duration-500 ${stat.progress >= 70 ? "bg-emerald-500" : stat.progress >= 50 ? "bg-amber-500" : "bg-red-500"
                                                }`}
                                            style={{ width: `${stat.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">分析总结</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        {data.summary.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <div className={`w-3 h-3 ${item.colorClass} rounded-full`} />
                                <span className="text-gray-600">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
