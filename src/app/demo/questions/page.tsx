import { FillInBlankQuestion } from "@/components/questions/FillInBlankQuestion";
import { SingleChoiceQuestion } from "@/components/questions/SingleChoiceQuestion";
import { QuestionCard } from "@/components/questions/QuestionCard";
import {
    fillInBlankQuestions,
    mixedQuestions,
    singleChoiceQuestions,
} from "@/data/questions";

export default function QuestionsDemoPage() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 py-10">
            <section className="space-y-6">
                <header className="space-y-2 text-center">
                    <h1 className="text-3xl font-semibold text-foreground">题目组件示例</h1>
                    <p className="text-muted-foreground">
                        展示单选题、填空题以及通用题目卡片的使用方式，方便集成到考试或练习系统中。
                    </p>
                </header>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                        <h2 className="text-xl font-medium text-foreground">单选题组件</h2>
                        {singleChoiceQuestions.map((question) => (
                            <SingleChoiceQuestion key={question.id} question={question} />
                        ))}
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-xl font-medium text-foreground">填空题组件</h2>
                        {fillInBlankQuestions.map((question) => (
                            <FillInBlankQuestion key={question.id} question={question} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-medium text-foreground">通用题目卡片</h2>
                <p className="text-sm text-muted-foreground">
                    使用同一个组件根据 `type` 字段自动切换渲染方式，多题型场景可直接复用。
                </p>

                <div className="space-y-3">
                    {mixedQuestions.map((question) => (
                        <QuestionCard key={question.id} question={question} />
                    ))}
                </div>
            </section>
        </div>
    );
}

