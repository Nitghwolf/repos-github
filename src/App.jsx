import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';

import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';
import AddName from './component/AddName';
import NavBar from './component/NavBar';
import StarsBack from './component/background/StarsBack';


function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
    nick: ""
  });

  const [name, setName] = useState("");
  const [git_nick, setGit_nick] = useState("");

  const changeInputRegister = (name) => {
    setName(name);
  }

  function changeGit_nick(name) {
    setGit_nick(name);
    setAppState({nick: name})
  }

  useEffect(() => {
    if(git_nick){
      addName(git_nick);
    }
  }, [git_nick]);

  function addName(name){
      setAppState({ loading: true });
      const apiUrl = `https://api.github.com/users/${name}/repos`;
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setAppState({ loading: false, repos: allRepos });
      });
  }


  // write the file
  function saveFile(){
    const data = [];
    appState.repos.map(repo => {
      const repoobj = []
      repoobj.push(repo.name + ' -- ');
      repoobj.push(repo.description + ' -- ');
      repoobj.push(repo.html_url + ' ');
      data.push(repoobj + '\n');
    });
    let file = new File([data.toString().replaceAll(",", "")], `${appState.repos[0].owner.login}.txt`, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
  }


  return (
    <div className='App'>
      <StarsBack />
      <NavBar name={name} changeGit_nick={changeGit_nick} changeInputRegister={changeInputRegister}/>
      <div className='container'>
        <h1>Репозитории GitHub</h1>

      </div>
        <AddName onSend={addName} />
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      {((appState.repos) && (name !== "") && (<button onClick={saveFile} className="submit-feedback">Save</button>))}
      <footer>
        <div className='footer'>
          Built with by Andrey Volkov
        </div>
      </footer>
    </div>
  );
}
export default App;
