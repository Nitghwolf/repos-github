import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';
import AddName from './component/AddName';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/Nitghwolf/repos`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  function addName(name){
      setAppState({ loading: true });
      const apiUrl = `https://api.github.com/users/${name}/repos`;
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        console.log(allRepos);
        setAppState({ loading: false, repos: allRepos });
      });
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>Репозитории GitHub</h1>
      </div>
        <AddName onSend={addName} />
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built with by Andrey Volkov
        </div>
      </footer>
    </div>
  );
}
export default App;
