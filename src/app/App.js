import React from 'react';
import UserAuth from './UserAuth';

/**
 * App: main component of project
 * @returns
 */
const App = () => {
  const displayLine = 'Hello';
  const displayName = 'World';

  return (
    <div>
      <h1 className="helloWorld">{`${displayLine} ${displayName}`}!</h1>
      <UserAuth />
    </div>
  );
};

export default App;
