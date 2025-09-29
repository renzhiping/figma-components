"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { BookOpen, Play, Target, type LucideIcon } from "lucide-react";

export type StudyOverviewTaskType = "video" | "reading" | "exercise" | "custom";

export interface StudyOverviewStat {
  id: string;
  label: string;
  value: string;
  description: string;
  valueClassName?: string;
}

export interface StudyOverviewQuestion {
  id: string;
  label: string;
  accentClassName?: string;
}

export interface StudyOverviewDiagnosis {
  buttonLabel: string;
  buttonClassName?: string;
  questions: StudyOverviewQuestion[];
}

export interface StudyOverviewPrimaryAction {
  buttonLabel: string;
  description: string;
  buttonClassName?: string;
}

export interface StudyOverviewTaskItem {
  id: string;
  label: string;
  type?: StudyOverviewTaskType;
}

export interface StudyOverviewTasks {
  buttonLabel: string;
  buttonClassName?: string;
  items: StudyOverviewTaskItem[];
}

export interface StudyOverviewHeader {
  title: string;
  accentClassNames?: string[];
}

export interface StudyOverviewData {
  header: StudyOverviewHeader;
  stats: StudyOverviewStat[];
  diagnosis: StudyOverviewDiagnosis;
  primaryAction: StudyOverviewPrimaryAction;
  tasks: StudyOverviewTasks;
}

interface StudyOverviewProps {
  data: StudyOverviewData;
  fullHeight?: boolean;
  className?: string;
}

const taskIconMap: Record<StudyOverviewTaskType, LucideIcon> = {
  video: Play,
  reading: BookOpen,
  exercise: Target,
  custom: Target,
};

export function StudyOverview({ data, fullHeight = true, className }: StudyOverviewProps) {
  const accentColors =
    data.header.accentClassNames && data.header.accentClassNames.length > 0
      ? data.header.accentClassNames
      : ["bg-blue-500", "bg-green-500", "bg-orange-500"];

  return (
    <div
      className={cn(
        "bg-background p-6",
        fullHeight && "min-h-screen",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {accentColors.slice(0, 3).map((accent, index) => (
              <div
                key={`${accent}-${index}`}
                className={cn("h-6 w-2 rounded-sm", accent)}
              />
            ))}
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            {data.header.title}
          </h1>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.stats.map((stat) => (
            <Card
              key={stat.id}
              className="border-2 border-border px-6 py-8 transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex h-40 flex-col p-0">
                <h3 className="mb-12 text-lg font-medium text-muted-foreground">
                  {stat.label}
                </h3>
                <div className="mt-auto">
                  <div
                    className={cn(
                      "mb-2 text-5xl font-bold",
                      stat.valueClassName ?? "text-foreground",
                    )}
                  >
                    {stat.value}
                  </div>
                  <p className="text-base text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Card className="h-full border-2 border-border px-6 py-8">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <Button
                    className={cn(
                      "w-full rounded-full px-6 py-3 text-lg font-semibold",
                      data.diagnosis.buttonClassName ??
                        "bg-blue-600 text-white hover:bg-blue-700",
                    )}
                  >
                    {data.diagnosis.buttonLabel}
                  </Button>

                  <div className="mt-6 space-y-3">
                    {data.diagnosis.questions.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                      >
                        <div
                          className={cn(
                            "h-3 w-3 rounded-full",
                            item.accentClassName ?? "bg-blue-500",
                          )}
                        />
                        <span className="text-lg font-medium text-foreground">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 lg:col-span-3">
            <Card className="border-2 border-border px-6 py-8">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-shrink-0">
                    <Button
                      className={cn(
                        "rounded-full px-8 py-3 text-lg font-semibold",
                        data.primaryAction.buttonClassName ??
                          "bg-green-600 text-white hover:bg-green-700",
                      )}
                    >
                      {data.primaryAction.buttonLabel}
                    </Button>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xl font-medium text-foreground">
                      {data.primaryAction.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border px-6 py-8">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-shrink-0">
                    <Button
                      className={cn(
                        "rounded-full px-8 py-3 text-lg font-semibold",
                        data.tasks.buttonClassName ??
                          "bg-purple-600 text-white hover:bg-purple-700",
                      )}
                    >
                      {data.tasks.buttonLabel}
                    </Button>
                  </div>

                  <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-3">
                    {data.tasks.items.map((item) => {
                      const iconKey: StudyOverviewTaskType = item.type ?? "custom";
                      const Icon = taskIconMap[iconKey] ?? taskIconMap.custom;

                      return (
                        <div
                          key={item.id}
                          className="flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted p-6 text-center"
                        >
                          <Icon className="mb-2 h-8 w-8 text-muted-foreground" />
                          <span className="text-lg font-medium text-foreground">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
