import React from 'react';

const User = props => {
  const func = props.name;
  return func(false);
};

export default User;
