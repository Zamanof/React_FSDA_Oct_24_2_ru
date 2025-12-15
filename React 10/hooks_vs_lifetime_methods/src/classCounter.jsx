import React, {Component} from "react";

export default class ClassCounter extends Component {
    render() {
        return (
            <p>{this.props.value}</p>
        )
    }
}