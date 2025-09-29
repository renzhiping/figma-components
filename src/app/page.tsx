import KnowledgeMap from "@/components/study-overview/KnowledgeMap";
import { StudyOverview } from "@/components/study-overview/StudyOverview";
import { StudyPlanOverview } from "@/components/study-plan/StudyPlanOverview";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { defaultStudyOverviewData } from "@/data/study-overview";
import { defaultStudyPlanData } from "@/data/study-plan";
import { mixedQuestions } from "@/data/questions";
import { defaultKnowledgeMapData } from "@/data/knowledge-map";
import { StudentCard } from "@/components/StudentCard";
import { defaultStudents } from "@/data/students";
import { VideoCard } from "@/components/VideoCard";
import { defaultVideos } from "@/data/videos";
import { InfoAction } from "@/components/InfoAction";
import { defaultInfoAction } from "@/data/info-action";
import { Info } from "@/components/Info";
import { defaultInfo } from "@/data/info";
import { ResourceCoverage } from "@/components/ResourceCoverage";
import { defaultResourceCoverage } from "@/data/resource-coverage";
import { LearningCoverage } from "@/components/LearningCoverage";
import { defaultLearningCoverage } from "@/data/learning-coverage";

export default function Home() {
  return (
    <div className="space-y-16 bg-background pb-16">
      <StudyOverview data={defaultStudyOverviewData} fullHeight={false} />
      <StudyPlanOverview data={defaultStudyPlanData} />
      <KnowledgeMap data={defaultKnowledgeMapData} className="rounded-2xl border border-border shadow" />

      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-indigo-500" />
          <h2 className="text-xl font-semibold text-foreground">章节与知识点覆盖</h2>
        </div>
        <LearningCoverage data={defaultLearningCoverage} />
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-sky-500" />
          <h2 className="text-xl font-semibold text-foreground">资源覆盖度</h2>
        </div>
        <ResourceCoverage data={defaultResourceCoverage} />
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <h2 className="text-xl font-semibold text-foreground">信息与行动</h2>
        </div>
        <InfoAction data={defaultInfoAction} />
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <h2 className="text-xl font-semibold text-foreground">信息</h2>
        </div>
        <Info data={defaultInfo} />
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <h2 className="text-xl font-semibold text-foreground">学生卡片</h2>
        </div>
        <StudentCard students={defaultStudents} />
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <h2 className="text-xl font-semibold text-foreground">配套视频</h2>
        </div>
        <VideoCard videos={defaultVideos} />
      </section>

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
