import React from 'react';

class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <div>
          <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
        </div>
      </div>
    );
  }
}

export default HoverCounter;
