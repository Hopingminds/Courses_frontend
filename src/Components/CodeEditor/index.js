import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function CodeEditor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />;
// return(<iframe src="https://trinket.io/embed/blocks/e18618f777" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>)
}
export default CodeEditor;