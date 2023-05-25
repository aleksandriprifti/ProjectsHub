import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from '../stores/store';
import HomePage from '../../features/home/HomePage';
import ModalContainer from '../common/modals/ModalContainer';

function App() {
  const { projectStore } = useStore();
  const { selectedProject, editMode } = projectStore;

  useEffect(() => {
    projectStore.loadProjects();
  }, [projectStore])

  // which route has the user gone to
  const location = useLocation();
  // const handleSelectProject = (id: string) => {
  //   setSelectedProject(projects.find(x => x.id === id));
  // }

  // const hanldeCancelSelecteProject = () => {
  //   setSelectedProject(undefined);
  // }

  // const handleFormOpen = (id?: string) => {
  //   id ? handleSelectProject(id) : hanldeCancelSelecteProject();
  //   setEditMode(true);
  // }

  // const handleFormClose = () => {
  //   setEditMode(false);
  // }

  // const handleCreateOrEditProject = (project: Project) => {

  //   if (project.id) {
  //     agent.Projects.update(project).then(() => {
  //       setProjects([...projects.filter(x => x.id !== project.id), project]);
  //       setSelectedProject(project)
  //       setEditMode(false);
  //     })
  //   } else {
  //     agent.Projects.create(project).then(() => {
  //       setProjects([...projects, project])
  //       setSelectedProject(project)
  //       setEditMode(false)
  //     })
  //   }
  // }

  // const handleDeleteProject = (id: string) => {
  //   agent.Projects.delete(id).then(() => {
  //     setProjects([...projects.filter(x => x.id !== id)]);
  //   });
  // }

  return (
    < >
      <ModalContainer />
      {location.pathname == '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>)}

    </ >
  );
}

export default observer(App);
