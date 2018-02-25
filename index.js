import React from 'react';

// components
import Button from './src/components/Button.jsx';

class MultiStepForm extends React.Component {
  componentWillMount() {
    let state = {};
    this.props.children.forEach((i, index) => state[index] = false);
    this.setState({ ...state, currentIndex: 0 });
  }

  checkValidity = (event) => {
    event.preventDefault();
    if (this.props.validate()) this.setState({ currentIndex: this.state.currentIndex + 1 });
  }

  stepBack = (event) => {
    event.preventDefault();
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  }

  submit = () => {
    if (this.props.validate()) this.props.submit();
  }

  render() {
    const { currentIndex } = this.state;
    while (this.state[currentIndex] === false) {
      return (
        <div>
          {
            this.props.children[currentIndex]
          }
          {currentIndex === this.props.children.length - 1 ? <div className="button-field">
            {this.props.children.length !== 1 && <div><Button label="Previous" background={theme.colors.primaryColor} onClick={this.stepBack} /></div>}
            <div><Button label={this.props.submitText} background={theme.colors.primaryColor} onClick={this.submit} /></div>
          </div> :
            <div className="button-field">
              {currentIndex !== 0 && <div><Button label="Previous" background={theme.colors.primaryColor} onClick={this.stepBack} /></div>}
              <div><Button label="Next" background={theme.colors.primaryColor} onClick={this.checkValidity} /></div>
            </div>
          }
        </div>
      );
    }
  }
}

MultiStepForm.defaultProps = {
  submitText: "Submit"
}

export default MultiStepForm;
