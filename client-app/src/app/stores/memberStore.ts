import { makeAutoObservable, runInAction } from "mobx";
import { TeamMember } from "../models/Project";
import agent from "../api/agent";

export default class MemberStore {
  members: TeamMember[] = [];
  selectedMember: TeamMember | undefined = undefined;
  editMode = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadMembers = async () => {
    try {
      const members = await agent.TeamMembers.list();
      console.log("Members", members);
      runInAction(() => {
        members.forEach((member) => {
          console.log(member);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

    selectMember = (id: string) => {
        //this.selectedMember = this.members.find((x) => x.id == id);
    };

  cancelSelectedMember = () => {
    this.selectedMember = undefined;
  };

    openForm = (id?: string) => {
        id ? this.selectMember(id) : this.cancelSelectedMember();
        this.editMode = true;
    };

  closeForm = () => {
    this.editMode = false;
  };

  //   createProject = async (project: Project) => {
  //     try {
  //       await agent.Projects.create(project);
  //       runInAction(() => {
  //         this.projects.push(project);
  //         this.selectedProject = project;
  //         this.editMode = false;
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   updateProject = async (project: Project) => {
  //     try {
  //       await agent.Projects.update(project);
  //       runInAction(() => {
  //         this.projects = [...this.projects.filter((x) => x.id !== project.id)];
  //         this.selectedProject = project;
  //         this.editMode = false;
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   deleteProject = async (id: string) => {
  //     try {
  //       await agent.Projects.delete(id);
  //       runInAction(() => {
  //         this.projects = [...this.projects.filter((x) => x.id !== id)];
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
}
