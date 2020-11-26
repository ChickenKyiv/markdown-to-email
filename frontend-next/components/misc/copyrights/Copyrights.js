import React from 'react';

const Copyright = () => {
  return (
    <em data-testid="copyTest">
      Copyright ©
      {new Date().getFullYear()}
      {' '}
      Hacker Noon. All rights reserved.
    </em>
  );
}

export default Copyright;