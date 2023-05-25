import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProjectList from "../../features/projects/dashboard/ProjectList";
import { TeamMemberList } from "../../features/projects/dashboard/TeamMemberList";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/projects', element: <ProjectList /> },
            { path: '/teammembers', element: <TeamMemberList /> },
        ]
    }
]

export const router = createBrowserRouter(routes);