"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Award, BookOpen, CheckCircle, Clock, Edit } from "lucide-react";

export interface FillInBlankQuestionData {
    id: number;
    type: string;
    title: string;
    difficulty: string;
    points: number;
    correctAnswer: string;
    explanation: string;
    userAnswer?: string;
}

interface FillInBlankQuestionProps {
    question: FillInBlankQuestionData;
}

export function FillInBlankQuestion({ question }: FillInBlankQuestionProps) {
    const [fillAnswer, setFillAnswer] = useState<string>(
        question.userAnswer || "",
    );
    const [showAnalysis] = useState(true);

    const handleFillAnswerChange = (value: string) => {
        setFillAnswer(value);
    };

    return (
        <Card className="w-full max-w-3xl mx-auto space-y-3 bg-card border border-border p-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-card-foreground">第{question.id}题</h2>
                    <Badge
                        variant="secondary"
                        className="bg-primary px-2 py-1 text-xs text-primary-foreground"
                    >
                        {question.type}
                    </Badge>
                </div>
            </div>

            <div>
                <h3 className="mb-1 text-card-foreground">题目：</h3>
                <p className="mb-3 text-card-foreground">{question.title}</p>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2 text-card-foreground">
                    <Edit className="h-4 w-4" />
                    <span>请填写答案：</span>
                </div>
                <Input
                    type="text"
                    placeholder="请输入您的答案..."
                    value={fillAnswer}
                    onChange={(event) => handleFillAnswerChange(event.target.value)}
                    className="w-full"
                />
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-border pt-2">
                <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">难度：{question.difficulty}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                    <Award className="h-3 w-3" />
                    <span className="text-xs">分值：{question.points}分</span>
                </div>
                <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-3 w-3" />
                    <span className="text-xs">正确答案：{question.correctAnswer}</span>
                </div>
            </div>

            {showAnalysis && (
                <div className="rounded-lg border border-border bg-muted p-3">
                    <div className="mb-1 flex items-center gap-2">
                        <BookOpen className="h-3 w-3 text-muted-foreground" />
                        <span className="font-medium text-muted-foreground">答案解析：</span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        {question.explanation}
                    </p>
                </div>
            )}
        </Card>
    );
}

