import { ReactNode } from "react";

export interface Project {
  id: string;
  projectName: string;
  createdAt: string;
  dueDate: string;
  isActive: string;
}

export interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  projectId: number;
  project: string;
}
