import React from 'react';

export class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {text:"world hello"}
    }
    componentWillReceiveProps(nextProps){
        alert(nextProps.text)
    }
    shouldComponentUpdate(nextProps,nextState){
        this.setState()
        if(this.props.text == nextProps.text){
            return false;
        }else{
            return true;
        }

    }
    render(){
        return <h1>{this.props.text}</h1>
       
    }
}