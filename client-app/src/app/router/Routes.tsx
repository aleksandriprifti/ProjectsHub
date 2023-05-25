import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProjectList from "../../features/projects/dashboard/ProjectList";
import { TeamMemberList } from "../../features/projects/dashboard/TeamMemberList";
import LoginForm from "../../features/users/LoginForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'projects', element: <ProjectList /> },
            { path: 'teammembers', element: <TeamMemberList /> },
            { path: 'login', element: <LoginForm /> }
        ]
    }
]

export const router = createBrowserRouter(routes);