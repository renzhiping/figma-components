"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import type { Info as InfoData } from "@/data/info";

type InfoProps = {
    data: InfoData;
};

export function Info({ data }: InfoProps) {
    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-blue-500 rounded-full" />
                    <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
                </div>
                <p className="text-gray-600 mt-2">{data.description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-4">
                    {data.items.map((it, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <div>
                                <h3 className="font-medium text-gray-800 mb-2">{it.heading}</h3>
                                <p className="text-gray-600 leading-relaxed">{it.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}


