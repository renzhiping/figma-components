import KnowledgeMap from "@/components/study-overview/KnowledgeMap";
import { StudyOverview } from "@/components/study-overview/StudyOverview";
import { StudyPlanOverview } from "@/components/study-plan/StudyPlanOverview";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { defaultStudyOverviewData } from "@/data/study-overview";
import { defaultStudyPlanData } from "@/data/study-plan";
import { mixedQuestions } from "@/data/questions";
import { defaultKnowledgeMapData } from "@/data/knowledge-map";

export default function Home() {
  return (
    <div className="space-y-16 bg-background pb-16">
      <StudyOverview data={defaultStudyOverviewData} fullHeight={false} />
      <StudyPlanOverview data={defaultStudyPlanData} />
      <KnowledgeMap data={defaultKnowledgeMapData} className="rounded-2xl border border-border shadow" />

      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <h2 className="text-xl font-semibold text-foreground">练习题示例</h2>
        </div>
        <div className="space-y-4">
          {mixedQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </section>
    </div>
  );
}
