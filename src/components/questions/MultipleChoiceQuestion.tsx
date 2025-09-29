"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { Award, BookOpen, CheckCircle, Clock } from "lucide-react";

interface Option {
    id: string;
    text: string;
}

export interface MultipleChoiceQuestionData {
    id: number;
    type: string;
    title: string;
    options: Option[];
    difficulty: string;
    points: number;
    correctAnswer: string;
    explanation: string;
    userAnswer?: string;
}

interface MultipleChoiceQuestionProps {
    question: MultipleChoiceQuestionData;
}

export function MultipleChoiceQuestion({ question }: MultipleChoiceQuestionProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(
        question.userAnswer || "",
    );
    const showAnalysis = true;

    const handleAnswerSelect = (answerId: string) => {
        setSelectedAnswer(answerId);
    };

    return (
        <Card className="mx-auto w-full max-w-3xl space-y-3 border border-border bg-card p-3">
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
                {question.options.map((option) => (
                    <button
                        key={option.id}
                        type="button"
                        onClick={() => handleAnswerSelect(option.id)}
                        className={`w-full rounded-lg border-2 p-2 text-left transition-all duration-200 ${selectedAnswer === option.id
                                ? "border-primary bg-accent text-accent-foreground"
                                : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span
                                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs font-medium ${selectedAnswer === option.id
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "border-muted-foreground text-muted-foreground"
                                        }`}
                                >
                                    {option.id}
                                </span>
                                <span>{option.text}</span>
                            </div>
                            {selectedAnswer === option.id && (
                                <CheckCircle className="h-5 w-5 text-primary" />
                            )}
                        </div>
                    </button>
                ))}
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

