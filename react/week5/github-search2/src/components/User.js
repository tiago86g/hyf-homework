import React, { useState, useEffect } from 'react';

export default function User({ match }) {
  // console.log({ match });
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.github.com/users/${match.params.id}`;
        const matchedUser = await fetch(url).then(res => res.json());
        setUser(matchedUser); // connect "match" with the "user" useState
      } catch (err) {
        return console.error();
      }
    };
    fetchData();
  }, [match]);
  console.log({ match });
  console.log({ user });

  if (!user.login) {
    return (
      <div>
        <p>User not found!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>GitHub user</h1>
        <img src={user.avatar_url} alt={user.login} style={{ maxWidth: 300 }} />
        <p>
          Name: <strong>{user.name || 'not available'}</strong>
        </p>
        <p>
          Username: <strong>{user.login || 'not available'}</strong>
        </p>
        <p>
          E-mail: <strong>{user.email || 'not available'}</strong>
        </p>
        <p>
          Location: <strong>{user.location || 'not available'}</strong>
        </p>
        <p>
          Company: <strong>{user.company || 'not available'}</strong>
        </p>
        <p>
          Created at:{' '}
          <strong>{user.created_at.slice(0, 10) || 'not available'}</strong>
        </p>
        <p>
          Following: <strong>{user.following || 'not available'}</strong>
        </p>
        <p>
          Followers: <strong>{user.followers || 'not available'}</strong>
        </p>
        <p>
          Type: <strong>{user.type || 'not available'}</strong>
        </p>
        <p>
          Twitter: <strong>{user.twitter_username || 'not available'}</strong>
        </p>
        <p>
          Last update:{' '}
          <strong>{user.updated_at.slice(0, 10) || 'not available'}</strong>
        </p>
        <a href={user.html_url} target={user.html_url}>
          <button>See on GitHub</button>
        </a>
      </div>
    );
  }
}
