import React from 'react';
import ReactDom from 'react-dom'

const Example = () => {
    return (<div><h1>Hello React</h1></div>);
};

ReactDom.render(<Example />, document.getElementById("root"))