"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Student } from "@/data/students";

type StudentCardProps = {
    students: Student[];
};

const avatarGradients = [
    "bg-gradient-to-br from-orange-400 to-orange-500",
    "bg-gradient-to-br from-amber-400 to-amber-500",
    "bg-gradient-to-br from-emerald-400 to-emerald-500",
    "bg-gradient-to-br from-sky-400 to-sky-500",
];

function getBadgeClasses(color: string) {
    const colorMap: Record<string, string> = {
        orange: "bg-orange-100 text-orange-700 border-orange-200",
        amber: "bg-amber-100 text-amber-700 border-amber-200",
        emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
        sky: "bg-sky-100 text-sky-700 border-sky-200",
        red: "bg-red-100 text-red-700 border-red-200",
        purple: "bg-purple-100 text-purple-700 border-purple-200",
    };
    return colorMap[color] || "bg-gray-100 text-gray-700 border-gray-200";
}

export function StudentCard({ students }: StudentCardProps) {
    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-orange-500 rounded-full" />
                    <h2 className="text-xl font-semibold text-gray-800">学生状态</h2>
                </div>
                <p className="text-gray-600 mt-2">学生进度问题介绍</p>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {students.map((student, index) => (
                        <div
                            key={student.id}
                            className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-5 border border-gray-200/50 hover:shadow-md transition-all duration-300 cursor-pointer group"
                        >
                            <div className="flex gap-4">
                                <div
                                    className={`w-12 h-12 ${avatarGradients[index % avatarGradients.length]} rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-shrink-0`}
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <div className="w-4 h-4 bg-white/60 rounded-full" />
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium text-gray-800">{student.name}</p>
                                        <div className="flex gap-1 flex-wrap">
                                            {student.issues.map((issue, issueIndex) => (
                                                <Badge
                                                    key={issueIndex}
                                                    variant="secondary"
                                                    className={`${getBadgeClasses(issue.color)} px-2 py-1 text-xs font-medium transition-colors duration-300`}
                                                >
                                                    {issue.type}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {student.issues.map((issue, issueIndex) => (
                                            <div key={issueIndex} className="flex gap-2">
                                                <div
                                                    className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${issue.color === "orange"
                                                            ? "bg-orange-400"
                                                            : issue.color === "amber"
                                                                ? "bg-amber-400"
                                                                : issue.color === "emerald"
                                                                    ? "bg-emerald-400"
                                                                    : issue.color === "sky"
                                                                        ? "bg-sky-400"
                                                                        : issue.color === "red"
                                                                            ? "bg-red-400"
                                                                            : issue.color === "purple"
                                                                                ? "bg-purple-400"
                                                                                : "bg-gray-400"
                                                        }`}
                                                />
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {issue.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}


