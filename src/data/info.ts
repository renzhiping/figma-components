export type Info = {
    id: number;
    title: string;
    description: string;
    items: { heading: string; content: string }[];
};

export const defaultInfo: Info = {
    id: 1,
    title: "实训信息",
    description: "试管相关基础信息简介，主要参考 xxx 资料。",
    items: [
        {
            heading: "目标",
            content:
                "认识基本制备知识与相关概念；理解流程环节，建立整体框架。",
        },
        {
            heading: "注意事项",
            content:
                "规范操作、注意安全；记录要完整、格式要统一，按要求存档。",
        },
    ],
};


