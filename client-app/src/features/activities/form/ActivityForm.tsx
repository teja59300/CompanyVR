import React ,{useState, FormEvent} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import {v4 as uuid} from 'uuid';

interface IPorps {
    setEditMode :(editMode : boolean) => void;
    activity:IActivity;
    createActivity : (activity : IActivity) => void;
    editActivity : (activity : IActivity) => void;
}

export const ActivityForm: React.FC<IPorps> = ({
            setEditMode,
            activity:initialFormState,
            createActivity,
            editActivity
            }) => {

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

    const [activity,setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit= () => {
        if(activity.id.length === 0)
        {
            let newActivity = {
                    ...activity,
                    id :uuid()
            }
            createActivity(newActivity)
        }
        else
        {
            editActivity(activity);
        }
    }

    const handleInputChange = (event : FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { title , value } = event.currentTarget;
        setActivity({...activity , [title] : value });
    };

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input 
                    onChange={handleInputChange}
                    title = 'name'
                    placeholder='Name'
                    value={activity.name}
                />
                <Form.TextArea rows={2}
                    onChange={handleInputChange}
                    title = 'description'
                     placeholder='Description'
                     value={activity.description}
                />
                <Form.Input
                    onChange={handleInputChange}
                    title = 'date'
                     type='datetime-local'
                     placeholder='Date'
                     value={activity.date}
                />
                <Form.Input
                    onChange={handleInputChange}
                    title = 'location'
                    placeholder='Loaction'
                    value={activity.location}
                />
                <Form.Input
                    onChange={handleInputChange}
                    title = 'noOfAcres'
                     placeholder='NoOfAcres'
                     value = {activity.noOfAcres}
                />
                <Form.Input 
                    onChange={handleInputChange}
                    title = 'amount'
                    placeholder='Amount'
                    value = {activity.amount}
                />
                <Form.Input 
                    onChange={handleInputChange}
                    title = 'status'
                     placeholder='Status'
                     value = {activity.status}
                />
                <Button floated='right' positive type='submit' content='submit'/>
                <Button onClick={() => setEditMode(false)} floated='right'  type='button' content='cancel'/>
            </Form>
        </Segment>
    )
}
