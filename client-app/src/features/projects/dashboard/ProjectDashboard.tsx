import { Grid, List } from 'semantic-ui-react'
import ProjectList from './ProjectList';
import ProjectDetails from '../details/ProjectDetails';
import ProjectForm from '../form/ProjectForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


const ProjectDashboard = () => {

    const { projectStore } = useStore();
    const { selectedProject, editMode } = projectStore;

    return (
        <Grid>
            <Grid.Column width='12'>
                <ProjectList />
            </Grid.Column>
            <Grid.Column width='4'>
                {selectedProject && !editMode &&
                    < ProjectDetails />
                }
                {editMode && <ProjectForm />}
            </Grid.Column>
        </Grid>
    )
}

export default observer(ProjectDashboard)