import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminAudit() {
  const rows = [
    { at: "2026-01-16 10:02", actor: "admin", action: "UPDATE_SETTINGS" },
    { at: "2026-01-16 09:51", actor: "admin", action: "BAN_USER" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">감사 로그</h1>
        <p className="text-sm text-muted-foreground">관리자 동작 이력을 확인합니다.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 기록</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">시간</TableHead>
                  <TableHead>사용자</TableHead>
                  <TableHead>동작</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{r.at}</TableCell>
                    <TableCell>{r.actor}</TableCell>
                    <TableCell>{r.action}</TableCell>
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
