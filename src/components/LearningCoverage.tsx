"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Info, Book, Video, FileText, TestTube, CheckCircle, AlertTriangle, Clock, Sparkles, Trophy, Target } from "lucide-react";
import type { LearningCoverageData } from "@/data/learning-coverage";

type Props = { data: LearningCoverageData };

function StatusBadge({ status, type }: { status: string; type: "good" | "weak" | "average" }) {
    const variants = {
        good: {
            class: "bg-green-100 text-green-700 hover:bg-green-200",
            icon: <CheckCircle className="w-3 h-3 mr-1" />,
        },
        weak: {
            class: "bg-red-100 text-red-700 hover:bg-red-200",
            icon: <AlertTriangle className="w-3 h-3 mr-1" />,
        },
        average: {
            class: "bg-orange-100 text-orange-700 hover:bg-orange-200",
            icon: <Clock className="w-3 h-3 mr-1" />,
        },
    } as const;

    const variant = variants[type];
    return (
        <Badge className={`${variant.class} border-0 rounded-md px-3 py-1 whitespace-nowrap tracking-wide inline-flex items-center justify-center`}>
            {variant.icon}
            <span>{status}</span>
        </Badge>
    );
}

export function LearningCoverage({ data }: Props) {
    return (
        <div className="min-h-0 bg-transparent py-0 px-0">
            <div className="max-w-5xl mx-auto">
                <Card className="shadow-lg border-0 rounded-xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100 px-6 py-6 relative overflow-hidden">
                        <div className="absolute top-2 right-4 opacity-10">
                            <Sparkles className="w-8 h-8 text-blue-600" />
                        </div>
                        <CardTitle className="flex items-center gap-3 text-gray-800 tracking-wide relative z-10">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Book className="w-6 h-6 text-blue-600 flex-shrink-0" />
                            </div>
                            <span className="whitespace-nowrap">{data.header.title}</span>
                            <Trophy className="w-5 h-5 text-yellow-500 ml-2" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 bg-white">
                        {data.chapters.map((chapter, chapterIndex) => (
                            <div key={chapterIndex} className="border-b border-gray-100 last:border-b-0">
                                <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-5 border-b border-gray-100 relative">
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20">
                                        <Target className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <h3 className="text-gray-800 flex items-center gap-3 tracking-wide relative z-10">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 shadow-sm" />
                                            <Sparkles className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <span className="whitespace-nowrap">{chapter.chapter}</span>
                                    </h3>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full table-fixed min-w-[700px]">
                                        <thead>
                                            <tr className="bg-gray-50 border-b border-gray-100">
                                                <th className="text-left px-6 py-5 text-gray-600 w-[200px]">
                                                    <span className="whitespace-nowrap tracking-wide">知识点</span>
                                                </th>
                                                <th className="text-center px-3 py-5 text-gray-600 w-[80px]">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="bg-blue-100 p-1.5 rounded-lg">
                                                            <Book className="w-4 h-4 flex-shrink-0 text-blue-600" />
                                                        </div>
                                                        <span className="whitespace-nowrap tracking-wide">题目</span>
                                                    </div>
                                                </th>
                                                <th className="text-center px-3 py-5 text-gray-600 w-[80px]">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="bg-purple-100 p-1.5 rounded-lg">
                                                            <Video className="w-4 h-4 flex-shrink-0 text-purple-600" />
                                                        </div>
                                                        <span className="whitespace-nowrap tracking-wide">视频</span>
                                                    </div>
                                                </th>
                                                <th className="text-center px-3 py-5 text-gray-600 w-[80px]">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="bg-green-100 p-1.5 rounded-lg">
                                                            <FileText className="w-4 h-4 flex-shrink-0 text-green-600" />
                                                        </div>
                                                        <span className="whitespace-nowrap tracking-wide">图文</span>
                                                    </div>
                                                </th>
                                                <th className="text-center px-3 py-5 text-gray-600 w-[80px]">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="bg-orange-100 p-1.5 rounded-lg">
                                                            <TestTube className="w-4 h-4 flex-shrink-0 text-orange-600" />
                                                        </div>
                                                        <span className="whitespace-nowrap tracking-wide">试题</span>
                                                    </div>
                                                </th>
                                                <th className="text-center px-3 py-5 text-gray-600 w-[100px]">
                                                    <span className="whitespace-nowrap tracking-wide">状态</span>
                                                </th>
                                                <th className="text-center px-6 py-5 text-gray-600 w-[120px]">
                                                    <span className="whitespace-nowrap tracking-wide">建议</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {chapter.topics.map((topic) => (
                                                <tr key={topic.id} className="border-b border-gray-50 hover:bg-gray-25 transition-colors">
                                                    <td className="px-6 py-5">
                                                        <div className="space-y-1">
                                                            <div className="text-gray-800 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis tracking-wide">
                                                                {topic.name}
                                                            </div>
                                                            <div className="text-sm text-gray-500 tracking-wide whitespace-nowrap">{topic.id}</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center px-3 py-5">
                                                        <div className="flex items-center justify-center gap-1">
                                                            {topic.stats.题目 > 0 && <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />}
                                                            <span className="inline-block text-gray-700 tracking-wide">{topic.stats.题目}</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center px-3 py-5">
                                                        <div className="flex items-center justify-center gap-1">
                                                            {topic.stats.视频 > 0 && <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />}
                                                            <span className="inline-block text-gray-700 tracking-wide">{topic.stats.视频}</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center px-3 py-5">
                                                        <div className="flex items-center justify-center gap-1">
                                                            {topic.stats.图文 > 0 && <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />}
                                                            <span className="inline-block text-gray-700 tracking-wide">{topic.stats.图文}</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center px-3 py-5">
                                                        <div className="flex items-center justify-center gap-1">
                                                            {topic.stats.试题 > 0 && <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />}
                                                            <span className="inline-block text-gray-700 tracking-wide">{topic.stats.试题}</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center px-3 py-5">
                                                        <div className="flex justify-center">
                                                            <StatusBadge status={topic.status} type={topic.statusType} />
                                                        </div>
                                                    </td>
                                                    <td className="text-center px-6 py-5">
                                                        <div className="flex justify-center">
                                                            {topic.suggestion ? (
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <Button
                                                                                variant="outline"
                                                                                size="sm"
                                                                                className="bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 hover:border-orange-300 rounded-md whitespace-nowrap"
                                                                            >
                                                                                <Info className="w-4 h-4 mr-1 flex-shrink-0" />
                                                                                <span className="tracking-wide">查看建议</span>
                                                                            </Button>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent className="max-w-xs p-3 bg-white border border-gray-200 shadow-lg rounded-lg">
                                                                            <p className="text-sm text-gray-700 leading-relaxed tracking-wide whitespace-normal break-words">{topic.suggestion}</p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            ) : (
                                                                <span className="text-gray-400 tracking-wide">-</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


