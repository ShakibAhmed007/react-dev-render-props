import React from 'react';
import withCounter from './HOC/withCounter';

class ClickCounter extends React.Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button type="button" onClick={this.incrementCount}>
          Count {count} Times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
