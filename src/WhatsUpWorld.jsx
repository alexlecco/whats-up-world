import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  color: PropTypes.string.isRequired,
};

class WhatsUpWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color } = this.props;
    const text = "whats up world!";

    return (
      <div>
        <p style={{ color: color }}>{text}</p>
      </div>
    );
  }
}

WhatsUpWorld.propTypes = propTypes;

export default WhatsUpWorld;
