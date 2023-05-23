import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { Project } from '../models/Project';
import NavBar from './NavBar';
import ProjectDashboard from '../../features/projects/dashboard/ProjectDashboard';
import agent from '../api/agent';

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Projects.list().then(response => {
      let projects: Project[] = [];
      response.forEach(project => {
        project.createdAt = project.createdAt.split('T')[0];
        project.dueDate = project.dueDate.split('T')[0];
        projects.push(project);
      })
      setProjects(projects);
    })

  }, [])

  const handleSelectProject = (id: string) => {
    setSelectedProject(projects.find(x => x.id === id));
  }

  const hanldeCancelSelecteProject = () => {
    setSelectedProject(undefined);
  }

  const handleFormOpen = (id?: string) => {
    id ? handleSelectProject(id) : hanldeCancelSelecteProject();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleCreateOrEditProject = (project: Project) => {

    if (project.id) {
      agent.Projects.update(project).then(() => {
        setProjects([...projects.filter(x => x.id !== project.id), project]);
        setSelectedProject(project)
        setEditMode(false);
      })
    } else {
      agent.Projects.create(project).then(() => {
        setProjects([...projects, project])
        setSelectedProject(project)
        setEditMode(false)
      })
    }
  }

  const handleDeleteProject = (id: string) => {
    agent.Projects.delete(id).then(() => {
      setProjects([...projects.filter(x => x.id !== id)]);
    });
  }

  return (
    < >
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ProjectDashboard
          projects={projects}
          teamMembers={undefined}
          selectedProject={selectedProject}
          selectProject={handleSelectProject}
          cancelSelectProject={hanldeCancelSelecteProject}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditProject}
          deleteProject={handleDeleteProject}
        />
      </Container>
    </ >
  );
}

export default App;
