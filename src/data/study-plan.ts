import type { StudyPlanOverviewData } from "@/components/study-plan/StudyPlanOverview";

export const defaultStudyPlanData: StudyPlanOverviewData = {
  keyIndicators: [
    {
      id: "duration",
      label: "总时长",
      value: "3",
      valueLabel: "days",
      accentClassName: "bg-emerald-500/15 text-emerald-600",
    },
    {
      id: "case",
      label: "核心案例",
      value: "手绘图片识别",
      valueLabel: "",
      accentClassName: "bg-indigo-500/15 text-indigo-600",
    },
    {
      id: "path",
      label: "双重路径",
      value: "特征工程",
      valueLabel: "& 神经网络优化",
      accentClassName: "bg-emerald-500/15 text-emerald-600",
    },
    {
      id: "focus",
      label: "重点提升",
      value: "从 40% 提升到 66%",
      valueLabel: "",
      accentClassName: "bg-orange-400/15 text-orange-500",
    },
  ],
  goal: {
    title: "核心学习目标",
    description:
      "彻底理解 AI 如何从数据中学习，掌握两种不同的优化思路以及落地实现路径。",
  },
  days: [
    {
      id: "day-1",
      dayLabel: "Day 1",
      title: "人工特征工程",
      description:
        "专注于'人工特征工程'（调教版），理解准确掌握如何从 40% 提升到 66%。",
      chart: {
        core: 45,
        video: 80,
        practice: 60,
      },
    },
    {
      id: "day-2",
      dayLabel: "Day 2",
      title: "神经网络基础",
      description:
        "聚焦模型结构与参数调整，理解自动特征学习的关键思路与实现细节。",
      chart: {
        core: 45,
        video: 85,
        practice: 65,
      },
    },
    {
      id: "day-3",
      dayLabel: "Day 3",
      title: "优化算法",
      description:
        "梳理最优化算法的核心概念，掌握学习率、正则化等关键调优技巧。",
      chart: {
        core: 40,
        video: 80,
        practice: 70,
      },
    },
  ],
};
