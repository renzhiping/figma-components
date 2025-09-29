"use client";

import { cn } from "@/lib/utils";

import {
  ArrowBigUpDash,
  FlaskConical,
  GraduationCap,
  Target,
  type LucideIcon,
} from "lucide-react";

export interface StudyPlanKeyIndicator {
  id: string;
  label: string;
  value: string;
  valueLabel: string;
  accentClassName?: string;
  icon?: LucideIcon;
}

export interface StudyPlanGoal {
  title: string;
  description: string;
}

export interface StudyPlanDayChart {
  core: number;
  video: number;
  practice: number;
}

export interface StudyPlanDayItem {
  id: string;
  dayLabel: string;
  title: string;
  description: string;
  chart: StudyPlanDayChart;
}

export interface StudyPlanOverviewData {
  keyIndicators: StudyPlanKeyIndicator[];
  goal: StudyPlanGoal;
  days: StudyPlanDayItem[];
}

interface StudyPlanOverviewProps {
  data: StudyPlanOverviewData;
  className?: string;
}

const defaultIndicatorIconOrder: LucideIcon[] = [
  ArrowBigUpDash,
  Target,
  FlaskConical,
  GraduationCap,
];

function IndicatorIcon({
  icon: Icon,
  accentClassName,
}: {
  icon: LucideIcon;
  accentClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl",
        accentClassName ?? "bg-emerald-500/15 text-emerald-600",
      )}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

export function StudyPlanOverview({ data, className }: StudyPlanOverviewProps) {
  return (
    <div className={cn("mx-auto max-w-7xl space-y-8 px-6", className)}>
      <section className="space-y-4">
        <header className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <h2 className="text-lg font-medium text-foreground">关键指标</h2>
        </header>

        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur md:grid-cols-2 lg:grid-cols-4">
          {data.keyIndicators.map((indicator, index) => {
            const icon = indicator.icon ?? defaultIndicatorIconOrder[index];
            return (
              <div key={indicator.id} className="flex items-center gap-3">
                {icon ? (
                  <IndicatorIcon
                    icon={icon}
                    accentClassName={indicator.accentClassName}
                  />
                ) : (
                  <div className="h-12 w-12 rounded-xl bg-muted" />
                )}
                <div>
                  <span className="text-sm text-muted-foreground">
                    {indicator.label}
                  </span>
                  <p className="text-base font-semibold text-foreground">
                    {indicator.value}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                      {indicator.valueLabel}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <h2 className="text-lg font-medium text-foreground">学习计划总览</h2>
        </header>

        <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/30">
              <div className="h-6 w-6 rounded-full bg-white" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-indigo-600">
              核心学习目标：
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {data.goal.description}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <h2 className="text-lg font-medium text-foreground">阶段安排</h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.days.map((day) => (
            <article
              key={day.id}
              className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur"
            >
              <header className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <h3 className="text-base font-medium text-foreground">
                  {day.dayLabel}
                </h3>
              </header>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {day.description}
              </p>

              <div className="mb-6 flex h-32 items-end justify-center gap-4">
                {([
                  {
                    id: "core",
                    value: day.chart.core,
                    className: "bg-indigo-500",
                    label: "核心文档",
                  },
                  {
                    id: "video",
                    value: day.chart.video,
                    className: "bg-emerald-500",
                    label: "视频",
                  },
                  {
                    id: "practice",
                    value: day.chart.practice,
                    className: "bg-orange-400",
                    label: "练习",
                  },
                ] satisfies Array<{
                  id: string;
                  value: number;
                  className: string;
                  label: string;
                }>).map((item) => (
                  <div key={item.id} className="flex flex-col items-center">
                    <div
                      className={cn("w-8 rounded-t-sm", item.className)}
                      style={{ height: `${(item.value / 100) * 120}px` }}
                    />
                    <span className="mt-2 text-xs text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

