import React from "react";

export default class InputAlert extends React.Component {
  ref = React.createRef();
  componentDidMount() {
    this.ref.current.focus();
  }

  render() {
    return (
      <form>
        <input
          ref={this.ref}
          onChange={this.props.updateAlertText}
          value={this.props.alertText}
        />
        <button
          disabled={!this.props.alertText.length}
          onClick={() => {
            this.props.addAlert();
            this.ref.current.focus();
          }}
        >
          Add Alert
        </button>
      </form>
    );
  }
}
