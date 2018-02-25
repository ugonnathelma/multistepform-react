import React from 'react';

// stylesheets
import '../style.scss';

class Button extends React.Component {
  render() {
    return (
      <input className="button" {...this.props} onSubmit={this.props.onClick} type="submit" value={this.props.label} />
    );
  }
}

Button.defaultProps = {
  onClick: () => { },
  label: "Submit"
}

export default Button;