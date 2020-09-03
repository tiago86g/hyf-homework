import React, { useState, useEffect } from 'react';

export default function HyfRepo() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.github.com/users/HackYourFuture-CPH/repos`;
        const getHyfUser = await fetch(url).then(res => res.json());
        setRepos(getHyfUser);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [repos]);
  return (
    <div>
      <h1>Hack Your Future repository</h1>
      <ul style={{ listStyle: 'none' }}>
        {repos.map(item => {
          return (
            <li key={item.id}>
              <a href={item.html_url}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <a
        href='https://github.com/HackYourFuture-CPH'
        target='https://github.com/HackYourFuture-CPH'>
        <button>See on GitHub</button>
      </a>
    </div>
  );
}
