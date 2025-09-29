import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted p-6 font-sans">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl">Hello World</CardTitle>
          <CardDescription>使用 shadcn/ui + Tailwind CSS 构建的示例页面</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-base text-muted-foreground">
          <p>
            这是一个简单的展示页面，演示如何在 Next.js 应用中整合 shadcn/ui
            组件库与 Tailwind CSS。
          </p>
          <p>你可以继续添加更多组件，快速构建现代化的界面。</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <CardAction>
            <Button size="lg">开始探索</Button>
          </CardAction>
          <Button variant="ghost">了解更多</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
