import React, { Component } from 'react';


export class Streak extends Component {
    
    render() {
        return (
            <div id="streaktext">
                {this.props.info ? <p>Current Streak: {this.props.info.current} day(s) | Longest Streak: {this.props.info.longest} day(s)</p>  : "Loading streaks..."}
            </div>
        )
    }
}

export default Streak;