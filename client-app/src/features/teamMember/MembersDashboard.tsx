import React from 'react';
import { Grid } from 'semantic-ui-react';
import MembersList from './MembersList';
import MemberDetails from './MemberDetails';
import MemberForm from './MemberForm';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';


const MembersDashboard = () => {

    const { memberStore } = useStore();
    const { selectedMember, editMode, } = memberStore;

    return (

        <Grid>
            <Grid.Column width='12'>
                <MembersList />
            </Grid.Column>
            <Grid.Column width='4'>
                {selectedMember && !editMode &&
                    < MemberForm />
                }
                {editMode && <MemberForm />}
            </Grid.Column>
        </Grid>
    )
}

export default observer(MembersDashboard)