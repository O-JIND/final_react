import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">설정</h1>
        <p className="text-sm text-muted-foreground">서비스 운영 설정을 관리합니다.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>기본</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <Label>유지보수 모드</Label>
              <div className="text-xs text-muted-foreground">사용자 접근을 제한합니다.</div>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label>지원 이메일</Label>
            <Input placeholder="support@example.com" className="max-w-md" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
