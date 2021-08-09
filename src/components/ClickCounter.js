import React from 'react';

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
