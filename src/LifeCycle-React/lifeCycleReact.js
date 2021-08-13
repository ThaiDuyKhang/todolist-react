import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

export default class LifeCycleReact extends Component {

    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps')
        return null;
    }

    // shouldComponentUpdate(){
    //     return true;
    // }

    render() {
        return (
            <div>
                <ChildComponents/>
            </div>
        )
    }

    componentDidMount(){
        console.log("componetDidUpdate");
    }

}
