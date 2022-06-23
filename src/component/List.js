import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p className='sorry'>No repos, sorry</p>;
  return (
    <ul>
      <div className='header-repos'>
        <h2 className='list-head'>Доступные публичные репозитории</h2>
        <h3 className='list-head'>Владелец: {repos[0].owner.login}</h3>
        <div className='div-avatar' style={{background: `center/cover url(${repos[0].owner.avatar_url}) no-repeat`}}></div>
      </div>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
            <br />
            <span className='repo-description'><a href={repo.html_url} target="_blank">{repo.html_url}</a></span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;