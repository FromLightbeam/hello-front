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

  function getFollowData() {
    axios.get(url).then(response => {
      if (response.data) {
        setUserDo(response.data.do || [])
        setUserUndo(response.data.undo || [])
      }
    }) 
  } 

  useEffect(() => {
    // TODO name should be from url
    getFollowData();
  }, []);

  function save() {
    axios.post(url, {
      do: userDo,
      undo: userUndo
    }).then(() => getFollowData())
  }

  return (
    <Paper elevation={3} className='follow__paper'>
      <div className='follow__paper-header'>
        <h3>{header}</h3>
        <Button variant='contained' onClick={save}>save</Button>
      </div>
      <Divider/>
      <div>    
        {userDo && userDo.length
          ? userDo.map(user => <div key={user}>+<a target='_blank' href={`https://www.instagram.com/${user}/`}> {user}</a></div>) 
          : <i>...</i>}
      </div>
      <Divider/>
      <div>
        {userUndo && userUndo.length 
          ? userUndo.map(user => <div key={user}>-<a target='_blank' href={`https://www.instagram.com/${user}/`}> {user}</a></div>) 
          : <i>...</i>}
      </div>
    </Paper>
  )
}



function Info() {
  const { userId } = useParams();

  return (
    <MainLayout name='Follow'>
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
