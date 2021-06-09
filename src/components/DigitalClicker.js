// Code DigitalClicker Component Here
import React, { Component } from 'react' 


export class DigitalClicker extends Component{

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    click = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.click}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker