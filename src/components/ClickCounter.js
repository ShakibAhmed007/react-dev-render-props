import React from 'react';
import withCounter from './HOC/withCounter';

class ClickCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button type="button" onClick={incrementCount}>
          Count {count} Times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
