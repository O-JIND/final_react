import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  const stats = [
    { title: "오늘 가입", value: "12" },
    { title: "활성 사용자", value: "1,248" },
    { title: "신규 문의", value: "4" },
    { title: "콘텐츠 신고", value: "1" },
  ]

  const recent = [
    { id: "U-1042", type: "가입", who: "jin***", status: "OK" },
    { id: "T-2201", type: "문의", who: "kim***", status: "NEW" },
    { id: "R-0903", type: "신고", who: "lee***", status: "OPEN" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">대시보드</h1>
        <p className="text-sm text-muted-foreground">최근 지표와 처리해야 할 항목을 확인하세요.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 이벤트</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[160px]">ID</TableHead>
                  <TableHead>유형</TableHead>
                  <TableHead>대상</TableHead>
                  <TableHead className="text-right">상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recent.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.id}</TableCell>
                    <TableCell>{r.type}</TableCell>
                    <TableCell>{r.who}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={r.status === "OK" ? "secondary" : "default"}>{r.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
