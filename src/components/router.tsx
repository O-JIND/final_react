import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Lectures from "@/pages/Lectures";
import MyPage from "@/pages/MyPage";
import Careers from "@/pages/Careers";
import Certifications from "@/pages/Certifications";
import Community from "@/pages/Community";
import Events from "@/pages/Events";
import Mentoring from "@/pages/Mentoring";
import Support from "@/pages/Support";
import MyPageStructure from "./MyPageStruc";

// Admin
import AdminLayout from "@/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminUsers from "@/pages/admin/AdminUsers";
import AdminCourses from "@/pages/admin/AdminCourses";
import AdminContent from "@/pages/admin/AdminContent";
import AdminSettings from "@/pages/admin/AdminSettings";
import AdminAudit from "@/pages/admin/AdminAudit";

// 라우터 설정
// 상위 App (헤더, 네비게이션메뉴, 푸터) -> 하위 라우트들
// loader로 로딩 전에 권한 확인 loader : AuthLoader

// section 핸들러 예시 - sidebar 표시 여부 등 설정 가능
// { path: "community", element: <Community />, 
// handle: { section: "community", sidebar: true, title: "커뮤니티" } },
// { path: "lectures/:id/room", element: <LectureRoom />, 
// handle: { section: "lecture", sidebar: false, title: "강의실" } },



const router = createBrowserRouter([
    { path: '/login', element: <Home /> },
    { path: '/signup', element: <Home /> },
    {
        path: "/",
        // 상위 컴포넌트
        element: <App />,
        children: [
            { index: true, element: <Home />, handle: { sidebar: false, title: "홈" } },
            {
                path: "lectures", element: <Lectures />, handle: { section: "lectures", sidebar: true, title: "강의" },
                children: [
                    { path: "all-lectures", element: <Lectures /> },
                    { path: "my", element: <Lectures /> },
                    { path: "my11", element: <Lectures /> },
                    { path: "aaa", element: <Lectures /> },
                ]
            },
            {
                path: "careers", element: <Careers />, handle: { section: "careers", sidebar: true, title: "커리어" },
                children: [

                ]
            },
            {
                path: "certifications", element: <Certifications />, handle: { section: "certifications", sidebar: true, title: "자격증" },
                children: [

                ]
            },
            {
                path: "community", element: <Community />, handle: { section: "community", sidebar: true, title: "커뮤니티" },
                children: [

                ]
            },
            {
                path: "events", element: <Events />, handle: { section: "events", sidebar: true, title: "이벤트" },
                children: [

                ]
            },
            {
                path: "mentoring", element: <Mentoring />, handle: { section: "mentoring", sidebar: true, title: "멘토링" },
                children: [

                ]
            },
            {
                path: "support", element: <Support />, handle: { section: "support", sidebar: true, title: "고객센터" },
                children: [

                ]
            },

        ]
    },

    {
        path: "/my-page", element: <MyPageStructure />, children: [
            { index: true, element: <MyPage />, handle: { section: "my-page", sidebar: true, title: "마이페이지" } },
            { path: 'settings', element: <MyPage />, handle: { section: "my-page", sidebar: true, title: "마이페이지" } },
            { path: 'notifications', element: <MyPage />, handle: { section: "my-page", sidebar: true, title: "마이페이지" } },
        ]
    }

    ,

    // Admin console (separate layout)
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { index: true, element: <AdminDashboard />, handle: { title: "대시보드" } },
            { path: "users", element: <AdminUsers />, handle: { title: "사용자" } },
            { path: "courses", element: <AdminCourses />, handle: { title: "강의 관리" } },
            { path: "content", element: <AdminContent />, handle: { title: "콘텐츠" } },
            { path: "settings", element: <AdminSettings />, handle: { title: "설정" } },
            { path: "audit", element: <AdminAudit />, handle: { title: "감사 로그" } },
        ]
    }

]);

export default router;