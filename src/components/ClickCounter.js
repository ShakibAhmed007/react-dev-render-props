import React from 'react';
import withCounter from './HOC/withCounter';

const ClickCounter = props => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Count {count} Times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
