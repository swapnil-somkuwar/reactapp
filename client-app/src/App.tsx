import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './demo';
import DuckItem from './DuckItem';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

function App() {

  const[activities,setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(response=> {
      setActivities(response.data);
    })
  },[])
  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
      <List>
        {activities.map((activity:any)=>(
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
      <Button>Test</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
