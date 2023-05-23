import React, { ReactNode } from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Project } from '../../../app/models/Project';
import ProjectList from './ProjectList';
import ProjectDetails from '../details/ProjectDetails';
import ProjectForm from '../form/ProjectForm';

interface Props {
    projects: Project[];
    teamMembers: React.ReactNode;
    selectedProject: Project | undefined;
    selectProject: (id: string) => void;
    cancelSelectProject: () => void;
    editMode: boolean;
    openForm: (id?: string) => void;
    closeForm: () => void;
    createOrEdit: (project: Project) => void;
    deleteProject: (id: string) => void;
}

const ProjectDashboard = ({ projects, selectedProject, selectProject, cancelSelectProject, editMode, openForm, closeForm, createOrEdit, deleteProject }: Props) => {
    return (
        <Grid>
            <Grid.Column width='12'>
                <ProjectList projects={projects} selectProject={selectProject} openForm={openForm} deleteProject={deleteProject} />
            </Grid.Column>
            <Grid.Column width='4'>
                {selectedProject && !editMode &&
                    < ProjectDetails
                        project={selectedProject}
                        cancelSelectProject={cancelSelectProject}
                        openForm={openForm}
                    />
                }
                {editMode && <ProjectForm closeForm={closeForm} project={selectedProject} createOrEdit={createOrEdit} />}

            </Grid.Column>
        </Grid>
    )
}

export default ProjectDashboard