import React,{Component} from 'react';
import { Header, Icon, List, ListItem } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';


class  App extends Component {
  state ={
    values : []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
    .then((response ) => {
      
      this.setState({  
        values : response.data
    })
    })
  }
  render()
  {
    return (
      <div>
          <Header as='h2'>
            <Icon name='users' />
            <Header.Content>VR</Header.Content>
          </Header>
          <List>
            {this.state.values.map((value: any) =>( 
                <ListItem key={value.id}>{value.name}</ListItem>
            ))}
          </List>
      </div>
    );
  }
  
}

export default App;
