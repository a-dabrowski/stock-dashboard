import React, { Component } from "react";
import ReactDOM from "react-dom";

const modal = document.getElementById("portal");

export default class Portal extends Component {
  container: Element;
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }
  componentDidMount() {
    modal.appendChild(this.container);
  }
  componentWillUnmount() {
    modal.removeChild(this.container);
  }


  render() {
  const { children } = this.props;
  return ReactDOM.createPortal(children, this.container);
  }
}
