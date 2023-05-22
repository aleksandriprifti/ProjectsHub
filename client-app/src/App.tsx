import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { error } from 'console';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/Projects")
      .then(response => {
        console.log(response.data);
        setProjects(response.data)
      })
      .catch(error => error.Message)
  }, [])

  console.log(projects);

  return (
    <div >
      <Header as="h2" icon="tasks" content="Projects" />
      <List>{projects.map((project: any) => (
        <List.Item key={project.Id}>{project.projectName}</List.Item>
      ))}</List>
    </div >
  );
}

export default App;
