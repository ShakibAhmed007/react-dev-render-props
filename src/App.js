import React from 'react';
import './style.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';

export default function App() {
  return (
    <div>
      <h1>Render Props</h1>
      <p> Similar Functional Component should be reused </p>
      <p> User component is an example of Render props </p>
      <User render={isLoggedIn => (isLoggedIn ? 'Shakib' : 'Guest')} />
      <br />
      <br />
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}
