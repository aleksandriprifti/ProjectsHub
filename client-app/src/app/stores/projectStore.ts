import { makeAutoObservable, runInAction } from "mobx";
import { Project } from "../models/Project";
import agent from "../api/agent";

export default class ProjectStore {
  projects: Project[] = [];
  selectedProject: Project | undefined = undefined;
  editMode = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadProjects = async () => {
    try {
      const projects = await agent.Projects.list();
      runInAction(() => {
        projects.forEach((project) => {
          project.createdAt = project.createdAt.split("T")[0];
          project.dueDate = project.dueDate.split("T")[0];
          this.projects.push(project);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  selectProject = (id: string) => {
    this.selectedProject = this.projects.find((x) => x.id === id);
  };

  cancelSelectedProject = () => {
    this.selectedProject = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectProject(id) : this.cancelSelectedProject();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  createProject = async (project: Project) => {
    try {
      await agent.Projects.create(project);
      runInAction(() => {
        this.projects.push(project);
        this.selectedProject = project;
        this.editMode = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateProject = async (project: Project) => {
    try {
      await agent.Projects.update(project);
      runInAction(() => {
        this.projects = [...this.projects.filter((x) => x.id !== project.id)];
        this.selectedProject = project;
        this.editMode = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteProject = async (id: string) => {
    try {
      await agent.Projects.delete(id);
      runInAction(() => {
        this.projects = [...this.projects.filter((x) => x.id !== id)];
      });
    } catch (error) {
      console.log(error);
    }
  };
}
