import axios, { AxiosResponse } from "axios";
import { Project, TeamMember } from "../models/Project";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Projects = {
  list: () => requests.get<Project[]>("/projects"),
  details: (id: string) => requests.get<Project>(`/projects/${id}`),
  create: (project: Project) => requests.post<void>("/projects", project),
  update: (project: Project) =>
    requests.put<void>(`/projects/${project.id}`, project),
  delete: (id: string) => requests.delete<void>(`/projects/${id}`),
};

const TeamMembers = {
  list: () => requests.get<TeamMember[]>("/teamMembers"),
};

const agent = {
  Projects,
  TeamMembers,
};

export default agent;
