import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function AdminCourses() {
  const rows = [
    { id: "C-001", title: "React 기초", status: "published" },
    { id: "C-002", title: "Spring Boot 입문", status: "draft" },
    { id: "C-003", title: "JLPT N2 문법", status: "review" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">강의 관리</h1>
          <p className="text-sm text-muted-foreground">강의 생성/검수/공개 상태를 관리합니다.</p>
        </div>
        <Button>강의 추가</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>목록</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">ID</TableHead>
                  <TableHead>제목</TableHead>
                  <TableHead className="text-right">상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.id}</TableCell>
                    <TableCell>{r.title}</TableCell>
                    <TableCell className="text-right">{r.status}</TableCell>
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
