import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import ProjectList from "../../features/projects/dashboard/ProjectList";
import LoginForm from "../../features/users/LoginForm";
import MembersDashboard from "../../features/teamMember/MembersDashboard";
import ProjectDashboard from "../../features/projects/dashboard/ProjectDashboard";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'projects', element: <ProjectDashboard /> },
            { path: 'teammembers', element: <MembersDashboard /> },
            { path: 'login', element: <LoginForm /> },

        ]
    }
]

export const router = createBrowserRouter(routes);