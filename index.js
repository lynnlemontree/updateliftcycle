import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './child';

let texts = [
    'Hello world',
    'world Hello'
];
let num = 0;
class App extends React.Component{
    
    render(){

        return(
            <Child text={texts[num++]}/>
        )
    }
}



ReactDOM.render(<App />,root);

setTimeout(() => ReactDOM.render(<App />,root),1000);

