import React, {useState, useEffect} from 'react';
import axios from 'axios'
import MainLayout from '../layouts/main';
import { useParams } from 'react-router-dom'; 
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import * as api from '../api';
import { Divider } from '@material-ui/core';


function Follows({ url, header }) {
  // May be make single variable ?
  const [userDo, setUserDo] = useState([]);
  const [userUndo, setUserUndo] = useState([]);

  useEffect(() => {
    // TODO name should be from url
    axios.get(url).then(response => {
      if (response.data && response.data.do) {
        setUserDo(response.data.do)
      }
      if (response.data && response.data.undo) {
        setUserUndo(response.data.undo)
      }
    }) 
  }, []);

  function save() {
    axios.post(url, {
      do: userDo,
      undo: userUndo
    })
  }

  return (
    <Paper elevation={3} className='follow__paper'>
      <div className='follow__paper-header'>
        <h3>{header}</h3>
        <Button variant='contained' onClick={save}>save</Button>
      </div>
      <Divider/>
      <div>
        {userDo.map(user => <div>+<a target='_blank' href={`https://www.instagram.com/${user}/`} key={user}> {user}</a></div>)}
      </div>
      <Divider/>
      <div>
        {userUndo.map(user => <div>-<a target='_blank' href={`https://www.instagram.com/${user}/`} key={user}> {user}</a></div>)}
      </div>
    </Paper>
  )
}



function Info() {
  const { userId } = useParams();

  return (
    <MainLayout>
      <h1>Follow</h1>
      <div className="follows__items">
        <Follows 
          header='Following'
          url={api.GET_FOLLOWING(userId)}
        />
        <Follows 
          header='Followers'
          url={api.GET_FOLLOWERS(userId)}/>   
      </div> 
    </MainLayout>
  );
}

export default Info;
