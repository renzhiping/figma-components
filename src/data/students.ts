export type StudentIssue = {
    type: string;
    description: string;
    color: "orange" | "amber" | "emerald" | "sky" | "red" | "purple";
};

export type Student = {
    id: number;
    name: string;
    issues: StudentIssue[];
};

export const defaultStudents: Student[] = [
    {
        id: 1,
        name: "学生A",
        issues: [
            {
                type: "问题1",
                description: "实验操作步骤不规范，需要重新演示基础操作流程",
                color: "orange",
            },
            {
                type: "问题2",
                description: "理论知识掌握不牢固，建议复习相关概念",
                color: "red",
            },
        ],
    },
    {
        id: 2,
        name: "学生B",
        issues: [
            {
                type: "问题1",
                description: "数据记录格式错误，需要指导正确的记录方法",
                color: "amber",
            },
        ],
    },
    {
        id: 3,
        name: "学生C",
        issues: [
            {
                type: "问题2",
                description: "计算结果有误，需要检查计算过程和公式应用",
                color: "emerald",
            },
        ],
    },
    {
        id: 4,
        name: "学生D",
        issues: [
            {
                type: "问题1",
                description: "实验设备使用不当，可能导致安全隐患",
                color: "sky",
            },
            {
                type: "问题3",
                description: "报告撰写格式不符合要求，需要重新整理",
                color: "purple",
            },
        ],
    },
];


