import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminContent() {
  const posts = [
    { id: "P-104", title: "문의드립니다", status: "open" },
    { id: "P-105", title: "강의 추천", status: "ok" },
  ]
  const reports = [
    { id: "R-0903", reason: "스팸", status: "open" },
    { id: "R-0904", reason: "욕설", status: "triage" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">콘텐츠</h1>
        <p className="text-sm text-muted-foreground">게시글/댓글/신고 등 콘텐츠 관련 항목을 관리합니다.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>관리</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="posts">
            <TabsList>
              <TabsTrigger value="posts">게시글</TabsTrigger>
              <TabsTrigger value="reports">신고</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="mt-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[140px]">ID</TableHead>
                      <TableHead>제목</TableHead>
                      <TableHead className="text-right">상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.map((r) => (
                      <TableRow key={r.id}>
                        <TableCell className="font-medium">{r.id}</TableCell>
                        <TableCell>{r.title}</TableCell>
                        <TableCell className="text-right">{r.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[140px]">ID</TableHead>
                      <TableHead>사유</TableHead>
                      <TableHead className="text-right">상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((r) => (
                      <TableRow key={r.id}>
                        <TableCell className="font-medium">{r.id}</TableCell>
                        <TableCell>{r.reason}</TableCell>
                        <TableCell className="text-right">{r.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
