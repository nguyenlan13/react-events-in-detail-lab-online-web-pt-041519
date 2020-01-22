// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    constructor(props) {
        super(props)
    }

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return(
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}