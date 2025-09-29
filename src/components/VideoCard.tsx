"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MoreHorizontal } from "lucide-react";
import type { VideoItem } from "@/data/videos";

type VideoCardProps = {
    videos: VideoItem[];
    title?: string;
};

export function VideoCard({ videos, title = "配套视频标题" }: VideoCardProps) {
    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg border-0 bg-white/95 backdrop-blur-sm relative">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-green-500 rounded-full" />
                        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2 h-auto"
                    >
                        <MoreHorizontal className="w-5 h-5" />
                        <span className="ml-1 text-sm">more</span>
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((v) => (
                        <div
                            key={v.id}
                            className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 border border-green-200/50 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex gap-4">
                                <div className="relative flex-shrink-0">
                                    <ImageWithFallback
                                        src={v.thumbnailUrl}
                                        alt="视频缩略图"
                                        className="w-32 h-20 object-cover rounded-lg shadow-sm"
                                    />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-gray-800 mb-1">{v.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}


