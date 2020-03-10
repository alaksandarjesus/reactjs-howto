import React from "react";

const html$ = <div>I am rendered from outside the component</div>;

export default class Howto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aka: "Beta" };
    this.changeAkaHandler = this.changeAkaHandler.bind(this);
  }
  componentDidMount() {
    alert("i am executed whenever component is mounted");
  }
  changeAkaHandler() {
    this.setState({ aka: "Gamma" });
  }
  render() {
    return (
      <div>
        <p>I am from how to component</p>
        <p>
          I am getting data from parent component{" "}
          <strong>{this.props.name}</strong>
        </p>
        <p>
          I am the local value aka, <strong>{this.state.aka}</strong>
        </p>
        <p>
          <button onClick={this.changeAkaHandler}>Change Aka</button>
        </p>
        <p>
          <button onClick={this.props.onStateLiftedUp}>State Lift up</button>
        </p>
        <p>{html$}</p>
      </div>
    );
  }
}
