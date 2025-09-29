import type {
  StudyOverviewData,
  StudyOverviewTaskType,
} from "@/components/study-overview/StudyOverview";

export const defaultStudyOverviewData: StudyOverviewData = {
  header: {
    title: "学习总览",
    accentClassNames: ["bg-blue-500", "bg-green-500", "bg-orange-500"],
  },
  stats: [
    {
      id: "progress",
      label: "课程总进度",
      value: "45%",
      description: "已学9/20个知识点",
      valueClassName: "text-blue-600",
    },
    {
      id: "mastery",
      label: "知识掌握度",
      value: "67%",
      description: "已掌握6/9个重点模块",
      valueClassName: "text-green-600",
    },
    {
      id: "time",
      label: "本周学习时长",
      value: "3.5小时",
      description: "超过了65%的同学",
      valueClassName: "text-purple-600",
    },
  ],
  diagnosis: {
    buttonLabel: "关键诊断",
    questions: [
      {
        id: "q1",
        label: "循环与条件判断",
        accentClassName: "bg-blue-500",
      },
      {
        id: "q2",
        label: "函数与作用域",
        accentClassName: "bg-green-500",
      },
      {
        id: "q3",
        label: "数组与集合",
        accentClassName: "bg-orange-500",
      },
    ],
  },
  primaryAction: {
    buttonLabel: "首要行动",
    description: "下一步关键任务是完成先决条件测试并补充相关练习",
    buttonClassName: "bg-green-600 text-white hover:bg-green-700",
  },
  tasks: {
    buttonLabel: "攻坚任务",
    buttonClassName: "bg-purple-600 text-white hover:bg-purple-700",
    items: [
      {
        id: "task-video",
        label: "1个专题视频",
        type: "video" satisfies StudyOverviewTaskType,
      },
      {
        id: "task-reading",
        label: "1篇教材",
        type: "reading" satisfies StudyOverviewTaskType,
      },
      {
        id: "task-exercise",
        label: "1组专项练习",
        type: "exercise" satisfies StudyOverviewTaskType,
      },
    ],
  },
};
