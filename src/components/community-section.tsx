"use client"
// 번역 작업 추후 수정될 부분 다수이기 때문에 일단 정지

import { ChevronRight, MessageSquare, Heart, Eye, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const popularPosts = [
  {
    id: 1,
    title: "Tips for memorizing Korean vocabulary effectively",
    author: "Sarah K.",
    avatar: "/female-avatar-1.png",
    category: "Study Tips",
    likes: 234,
    comments: 45,
    views: 1200,
    isHot: true,
  },
  {
    id: 2,
    title: "My 6-month journey to Japanese N2",
    author: "Mike T.",
    avatar: "/male-avatar-1.png",
    category: "Success Story",
    likes: 189,
    comments: 32,
    views: 980,
    isHot: true,
  },
  {
    id: 3,
    title: "Best resources for learning Spanish pronunciation",
    author: "Emma L.",
    avatar: "/female-avatar-2.png",
    category: "Resources",
    likes: 156,
    comments: 28,
    views: 756,
    isHot: false,
  },
  {
    id: 4,
    title: "Looking for Chinese language exchange partners",
    author: "David W.",
    avatar: "/male-avatar-2.png",
    category: "Exchange",
    likes: 98,
    comments: 67,
    views: 543,
    isHot: false,
  },
  {
    id: 5,
    title: "How I passed TOPIK 6 in one year",
    author: "Jenny P.",
    avatar: "/female-avatar-3.png",
    category: "Success Story",
    likes: 312,
    comments: 54,
    views: 1890,
    isHot: true,
  },
]

export default function CommunitySection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Community Popular Posts
        </h2>
        <Button variant="ghost" className="text-primary hover:text-primary/80 gap-1">
          View All <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <Card className="bg-card">
        <CardContent className="p-4">
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div
                key={post.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer group"
              >
                <span className="text-lg font-bold text-muted-foreground w-6">{index + 1}</span>
                <Avatar className="w-10 h-10 flex-shrink-0">
                  <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                  <AvatarFallback className="bg-secondary text-secondary-foreground">{post.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                      {post.category}
                    </Badge>
                    {post.isHot && <Badge className="text-xs bg-destructive text-destructive-foreground">HOT</Badge>}
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
