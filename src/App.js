import React, { Component } from "react";
import {
  Container,
  EditorContainer,
  Editor,
  Previewer,
  Toolbar,
  Icon,
  PreviewContainer
} from "./elements.js";
import MarkedPreview from "./MarkedPreview";
var marked = require("marked");
var htmlParser = require("html-react-parser");

marked.setOptions({
  breaks: true
});

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      resizeEditor: false,
      resizePreview: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.resizeEditor = this.resizeEditor.bind(this);
    this.resizePreview = this.resizePreview.bind(this);
  }

  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }

  async resizeEditor() {
    let resizeEditor = !this.state.resizeEditor;
    await this.setState({ resizeEditor });
    console.log(this.state.resizeEditor);
  }

  resizePreview() {
    let resizePreview = !this.state.resizePreview;
    this.setState({ resizePreview });
  }

  render() {
    return (
      <Container
        className="App"
        resizeEditor={this.state.resizeEditor}
        resizePreview={this.state.resizePreview}
      >
        <EditorContainer>
          <Toolbar>
            Editor
            <Icon className="material-icons" onClick={this.resizeEditor}>
              fullscreen
            </Icon>
          </Toolbar>
          <Editor
            onChange={this.handleChange}
            id="editor"
            value={this.state.markdown}
          />
        </EditorContainer>
        <PreviewContainer>
          <Toolbar>
            Previewer
            <Icon
              className="material-icons"
              onClick={this.resizePreview}
              resize={this.state.resizePreview}
            >
              fullscreen
            </Icon>
          </Toolbar>
          <Previewer id="preview">
            {htmlParser(marked(this.state.markdown))}
          </Previewer>
        </PreviewContainer>
      </Container>
    );
  }
}

export default App;
