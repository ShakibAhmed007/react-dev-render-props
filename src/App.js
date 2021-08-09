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
      <ClickCounter />
      <HoverCounter />
      <User render={isLoggedIn => (isLoggedIn ? 'Shakib' : 'Guest')} />
    </div>
  );
}
