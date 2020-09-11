import React, { Component } from 'react';


export class Streak extends Component {
    
    render() {
        return (
            <div>
                {this.props.info ? <p>Current: {this.props.info.current} Longest: {this.props.info.longest}</p> : "Loading streaks..."}
            </div>
        )
    }
}

export default Streak;