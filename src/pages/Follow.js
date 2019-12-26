import React, {useState, useEffect} from 'react';
import axios from 'axios'
import MainLayout from '../layouts/main';

import * as api from '../api';


function Follow() {
  // May be make single variable ?
  const [userDo, setUserDo] = useState([]);
  const [userUndo, setUserUndo] = useState([]);

  useEffect(() => {
    // TODO name should be from url
    axios.get(api.GET_FOLLOWING('fromlightbeam')).then(response => {
      if (response.data && response.data.do) {
        setUserDo(response.data.do)
      }
      if (response.data && response.data.undo) {
        setUserUndo(response.data.undo)
      }
    }) 
  }, []);

  function save() {
    axios.post(api.GET_FOLLOWING('fromlightbeam'), {
      do: userDo,
      undo: userUndo
    })
  }

  return (
    <MainLayout>
      <div>
        <button onClick={save}>save</button>
        <h1>Follow</h1>
        <div>
          <h3>Following</h3>
          {userDo.map(user => <div key={user}>+ {user}</div>)}
          <br/>
          <br/>
          {userUndo.map(user => <div key={user}>- {user}</div>)}
          <h3>Followers</h3>
        </div>
      </div>
    </MainLayout>
  );
}

export default Follow;
