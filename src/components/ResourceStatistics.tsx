import type { ComponentType } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ResourceStatisticsData } from "@/data/resource-statistics";
import {
    BarChart3,
    BookOpen,
    Globe,
    Target,
    FileText,
    Video,
    Image,
    Download,
} from "lucide-react";

const iconMap = {
    BarChart3,
    BookOpen,
    Globe,
    Target,
    FileText,
    Video,
    Image,
    Download,
} as const satisfies Record<string, ComponentType<{ className?: string }>>;

function getIcon(name: string) {
    return iconMap[name as keyof typeof iconMap] ?? BarChart3;
}

type ResourceStatisticsProps = {
    data: ResourceStatisticsData;
    className?: string;
};

export function ResourceStatistics({ data, className }: ResourceStatisticsProps) {
    const HeaderIcon = getIcon(data.header.iconName);

    return (
        <div className={cn("space-y-6", className)}>
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className={data.header.iconContainerClass}>
                        <HeaderIcon className={data.header.iconClass ?? "w-5 h-5 text-white"} />
                    </div>
                    <h2 className="text-2xl font-semibold text-slate-800">
                        {data.header.title}
                    </h2>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    {data.header.stats.map((stat, index) => {
                        const StatIcon = getIcon(stat.iconName);
                        return (
                            <Badge
                                key={`${stat.text}-${index}`}
                                variant={stat.variant}
                                className={cn("px-2 py-1", stat.className)}
                            >
                                <StatIcon className="w-3 h-3" />
                                {stat.text}
                            </Badge>
                        );
                    })}
                </div>
            </div>

            <Card className="border-0 shadow-lg rounded-2xl relative overflow-hidden bg-white">
                <CardContent className="relative p-6">
                    <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-blue-50" />
                    <div className="relative flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-center md:text-left">
                        <div className="relative">
                            <Avatar className={cn("h-12 w-12 flex-shrink-0", data.goal.avatarRingClass)}>
                                <AvatarImage src={data.goal.avatarImage} alt="Avatar" />
                                <AvatarFallback className="bg-blue-100 text-blue-800">
                                    {data.goal.avatarFallback}
                                </AvatarFallback>
                            </Avatar>
                            <div className={data.goal.accentContainerClass}>
                                {(() => {
                                    const AccentIcon = getIcon(data.goal.accentIconName);
                                    return (
                                        <AccentIcon className={data.goal.accentIconClass ?? "w-2 h-2 text-white"} />
                                    );
                                })()}
                            </div>
                        </div>
                        <div className="max-w-2xl space-y-2">
                            <div className="flex items-center gap-2 text-slate-800">
                                {(() => {
                                    const TitleIcon = getIcon(data.goal.titleIconName);
                                    return (
                                        <TitleIcon className={data.goal.titleIconClass ?? "w-4 h-4 text-blue-600"} />
                                    );
                                })()}
                                <span className="font-medium">{data.goal.title}</span>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                {data.goal.description}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {data.sections.map((section, index) => {
                    const SectionIcon = getIcon(section.iconName);
                    const BadgeIcon = getIcon(section.preview.downloadIconName ?? "Download");

                    return (
                        <Card
                            key={`${section.title}-${index}`}
                            className="rounded-2xl border-0 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                        >
                            <CardContent className="space-y-4 p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={section.iconContainerClass}>
                                            <SectionIcon className={section.iconClass ?? "w-4 h-4 text-white"} />
                                        </div>
                                        <h3 className="text-lg font-medium text-slate-800">
                                            {section.title}
                                        </h3>
                                    </div>
                                    <Badge
                                        variant={section.badge.variant ?? "outline"}
                                        className={cn("text-xs", section.badge.className)}
                                    >
                                        {section.badge.text}
                                    </Badge>
                                </div>

                                <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-slate-200">
                                    <div className={section.preview.overlayBgClass}>
                                        <div className="text-center text-slate-600">
                                            {(() => {
                                                const PreviewIcon = getIcon(section.preview.iconName);
                                                return (
                                                    <PreviewIcon
                                                        className={cn(
                                                            "mx-auto mb-2 h-8 w-8",
                                                            section.preview.iconColorClass ?? "text-blue-500",
                                                        )}
                                                    />
                                                );
                                            })()}
                                            <p className="text-sm">{section.preview.label}</p>
                                        </div>
                                    </div>
                                    <div
                                        className={cn(
                                            "absolute bottom-2 right-2 opacity-0 transition-opacity group-hover:opacity-100",
                                            section.preview.downloadContainerClass ?? "bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1",
                                        )}
                                    >
                                        <BadgeIcon className={cn("h-4 w-4", section.preview.downloadIconColorClass ?? "text-blue-600")} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {section.items.map((item, itemIndex) => {
                                        const ItemIcon = getIcon(item.iconName);
                                        return (
                                            <div
                                                key={`${item.label}-${itemIndex}`}
                                                className={cn(
                                                    "flex items-center gap-3 rounded-lg p-2",
                                                    item.containerClass,
                                                )}
                                            >
                                                <ItemIcon className={cn("h-4 w-4", item.iconColorClass ?? "text-blue-600")} />
                                                <span className="text-sm text-slate-700">{item.label}</span>
                                                <Badge
                                                    variant={item.badgeVariant ?? "secondary"}
                                                    className={cn("ml-auto text-xs", item.badgeClassName)}
                                                >
                                                    {item.value}
                                                </Badge>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}


