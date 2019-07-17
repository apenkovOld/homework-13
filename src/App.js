import React, { Component } from "react";
import InputAlert from "./components/input";
import withPortal from "./components/withPortal";

const alertList = document.querySelector("#alert-list");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { alertText: "", alerts: [] };
  }

  updateAlertText = event => {
    this.setState({ alertText: event.target.value });
  };

  addAlert = () => {
    this.setState({
      alerts: [...this.state.alerts, this.state.alertText],
      alertText: ""
    });
  };

  render() {
    const PortalComponent = withPortal(alertList)(() => (
      <div>
        {this.state.alerts.map(alert => (
          <div>{alert}</div>
        ))}
      </div>
    ));
    return (
      <div className="App">
        <InputAlert
          alertText={this.state.alertText}
          updateAlertText={this.updateAlertText}
          addAlert={this.addAlert}
        />
        {this.state.alerts.length > 0 && <PortalComponent />}
      </div>
    );
  }
}
