import React, {useState, useEffect} from 'react';
import axios from 'axios'
import MainLayout from '../layouts/main';
import { useParams } from 'react-router-dom'; 


import * as api from '../api';

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
    <>
      <button onClick={save}>save</button>
      <h3>{header}</h3>
      {userDo.map(user => <a target='_blank' href={`https://www.instagram.com/${user}/`} key={user}><div>+ {user}</div></a>)}
      <br/>
      <br/>
      {userUndo.map(user => <a target='_blank' href={`https://www.instagram.com/${user}/`} key={user}><div>- {user}</div></a>)}
    </>
  )
}


function Info() {
  const { userId } = useParams();

  return (
    <MainLayout>
      <h1>Follow</h1>
      <Follows 
        header='following'
        url={api.GET_FOLLOWING(userId)}
      />
      <Follows 
        header='followers'
        url={api.GET_FOLLOWERS(userId)}/>    
    </MainLayout>
  );
}

export default Info;
