import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps {
    openCreateForm : () => void;
}

export const NavBar:React.FC<IProps>= ({openCreateForm}) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}}/>
                    VR
                </Menu.Item> 
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={openCreateForm} positive content='CreateActivity' size='medium'/>
                </Menu.Item>
                <Menu.Item>
                    <Button positive content='Financials' size='medium'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openCreateForm} positive content='GenerateBill' size='medium'/>
                </Menu.Item>
                <Menu.Item>
                    <Button positive content='About' size='medium'/>
                </Menu.Item>
                <Menu.Item>
                    <Button positive content='Contact Us' size='medium'/>
                </Menu.Item>
                <Menu.Item>
                    <Button positive content='UserInfo' size='medium'/>
                </Menu.Item>
            </Container>   
        </Menu>
    )
}
