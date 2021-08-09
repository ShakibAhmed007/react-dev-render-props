import React from 'react';
import withCounter from './HOC/withCounter';

class HoverCounter extends React.Component {
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
        <div>
          <h1 onMouseOver={this.incrementCount}>Hovered {count} Times</h1>
        </div>
      </div>
    );
  }
}

export default HoverCounter;
