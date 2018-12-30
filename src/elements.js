import styled from "styled-components";

export const EditorContainer = styled.div`
  width: 80%;
  transition: 0.5s;
  height: 48%;
  border-radius: 10px;
  background: white;
  box-shadow: 0 0.5px 6px rgba(0, 0, 0, 0.63);
  overflow: hidden;
  position: relative;
  padding-top: 35px;
`;

export const Editor = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 16px;
  resize: none;
  border-radius: 0 0 10px 10px;
  &:focus {
    outline: none;
    border: 2px solid #10a896;
  }
`;

export const PreviewContainer = styled.div`
  width: 80%;
  transition: 0.5s;
  height: 48%;
  border-radius: 10px;
  background: white;
  font-size: 16px;
  box-shadow: 0 0.5px 6px rgba(0, 0, 0, 0.63);
  position: relative;
  overflow: hidden;
`;

export const Previewer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  padding: 20px;
  padding-top: 55px;
  cursor: no-drop;

  blockquote {
    border-left: 3px solid #224b4b;
    color: #224b4b;
    padding-left: 5px;
    margin-left: 25px;
  }

  code {
    background: white;
    padding: 1px 4px 2px 4px;
    font-size: 12px;
    font-weight: bold;
  }

  pre {
    background: white;
    padding: 5px 0 5px 5px;
  }

  h1 {
    border-bottom: 2px solid lightgray;
  }

  h2 {
    border-bottom: 1px solid lightgray;
  }

  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: 2px solid lightgray;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const Toolbar = styled.div`
  width: 100%;
  height: 35px;
  background: #10a896;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  padding: 2.5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: white;
`;

export const Icon = styled.i`
  transition: 0.3s;
  font-size: 25px;
  color: white;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    font-size: 30px;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.resizeEditor &&
    `
        ${EditorContainer} {
            transition: 0.5s;
            height: 100%;
        }
        ${PreviewContainer} {
            display: none;
        }
    `}

    ${props =>
    props.resizePreview &&
    `
        ${PreviewContainer} {
            transition: 0.5s;
            height: 100%;
        }
        ${EditorContainer} {
            display: none;
        }
    `}
`;
