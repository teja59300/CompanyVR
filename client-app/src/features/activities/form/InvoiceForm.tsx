import React ,{useState} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IPorps {
    setEditMode :(editMode : boolean) => void;
    activity:IActivity;
}

export const ActivityForm: React.FC<IPorps> = ({setEditMode,activity:initialFormState}) => {

    const initializeForm = () => {
        if(initialFormState)
        {
            return initialFormState;
        }
        else
        {
            return {
                id:'',
                name : '',
                description:'',
                location:'',
                date:'',
                noOfAcres:'',
                amount:'',
                status:''
            };
        }
    };

    const [activity,setActivity] = useState<IActivity>(initializeForm)
    return (
        <Segment clearing>
            <Form>
                <Form.Input 
                    placeholder='Name'
                    value={activity.name}
                />
                <Form.TextArea rows={2}
                     placeholder='Description'
                     value={activity.description}
                />
                <Form.Input type='date'
                     placeholder='Date'
                     value={activity.date}
                />
                <Form.Input
                    placeholder='Loaction'
                    value={activity.location}
                />
                <Form.Input
                     placeholder='NoOfAcres'
                     value = {activity.noOfAcres}
                />
                <Form.Input 
                    placeholder='Amount'
                    value = {activity.amount}
                />
                <Form.Input 
                     placeholder='Status'
                     value = {activity.status}
                />
                <Button floated='right' positive type='submit' content='submit'/>
                <Button onClick={() => setEditMode(false)} floated='right'  type='button' content='cancel'/>
            </Form>
        </Segment>
    )
}
