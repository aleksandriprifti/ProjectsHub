import { ReactNode } from "react";
import { v4 as uuid } from "uuid";

export interface Project {
  id: string;
  projectName: string;
  createdAt: string;
  dueDate: string;
  isActive: string;
}

export interface TeamMember {
  id: { $uuid: any };
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  projectName: string;
}


