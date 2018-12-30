import React, { Component } from "react";
import { Container } from "./elements";
var marked = require("marked");
var htmlParser = require("html-react-parser");

class MarkedPreview extends Component {
  componentDidUpdate() {
    console.log(marked(this.props.markdown));
  }
  render() {
    return <div>{htmlParser(marked(this.props.markdown))}</div>;
  }
}

export default MarkedPreview;
