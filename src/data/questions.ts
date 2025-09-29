import type { FillInBlankQuestionData } from "@/components/questions/FillInBlankQuestion";
import type { MultipleChoiceQuestionData } from "@/components/questions/MultipleChoiceQuestion";
import type { QuestionData } from "@/components/questions/QuestionCard";

export const multipleChoiceQuestions: MultipleChoiceQuestionData[] = [
    {
        id: 1,
        type: "单选题",
        title: "以下哪项是 Python 的特点？",
        options: [
            { id: "A", text: "编译型语言" },
            { id: "B", text: "解释型语言" },
            { id: "C", text: "只支持面向对象" },
            { id: "D", text: "不支持跨平台" },
        ],
        difficulty: "简单",
        points: 5,
        correctAnswer: "B",
        explanation:
            "Python 是一种解释型语言，具有跨平台、动态类型、支持多种编程范式等特点。",
        userAnswer: "B",
    },
    {
        id: 2,
        type: "单选题",
        title: "React 中哪个 Hook 用于处理组件的状态？",
        options: [
            { id: "A", text: "useEffect" },
            { id: "B", text: "useState" },
            { id: "C", text: "useMemo" },
            { id: "D", text: "useCallback" },
        ],
        difficulty: "中等",
        points: 8,
        correctAnswer: "B",
        explanation:
            "useState 是 React 最基础的 Hook，用于在函数组件中添加状态管理能力。",
        userAnswer: "B",
    },
];

export const fillInBlankQuestions: FillInBlankQuestionData[] = [
    {
        id: 3,
        type: "填空题",
        title: "JavaScript 中用于声明常量的关键字是 ______。",
        difficulty: "简单",
        points: 3,
        correctAnswer: "const",
        explanation:
            "ES6 引入了 const 与 let 关键字，其中 const 用于声明常量，不允许重新赋值。",
        userAnswer: "const",
    },
    {
        id: 4,
        type: "填空题",
        title: "CSS 中让块级元素水平居中的常用写法是 ______。",
        difficulty: "中等",
        points: 4,
        correctAnswer: "margin: 0 auto",
        explanation:
            "为块级元素设置 fixed 宽度并应用 margin: 0 auto 可以实现水平居中效果。",
        userAnswer: "margin: 0 auto",
    },
];

export const mixedQuestions: QuestionData[] = [
    ...multipleChoiceQuestions,
    ...fillInBlankQuestions,
];

