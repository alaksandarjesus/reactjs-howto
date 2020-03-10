import React from "react";

const html$ = <div>I am rendered from outside the component</div>;
const lists = ["Learn React", "Code simple todo application"];
const lists$ = lists.map(list => {
  return <li>{list}</li>;
});
export default class Howto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aka: "Beta", value: "" };
    this.changeAkaHandler = this.changeAkaHandler.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // alert("i am executed whenever component is mounted");
  }
  changeAkaHandler() {
    this.setState({ aka: "Gamma" });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
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
        <div>{lists$}</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
