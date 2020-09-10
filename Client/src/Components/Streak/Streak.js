import React, { Component } from 'react';

export class Streak extends Component {
    state = {
        fetched: false
    }

    componentDidMount(){
        fetch(`http://localhost:3000/habits/streak/${this.props.habitId}`)
        .then(resp => resp.json())
        .then(r => {
            console.log(r)
            this.streak = this.longestStreak(r)
            this.setState({ fetched: true})
            console.log(this.streak)
        })
    }

    // Function to calculate longest streak, takes ordered array below
    // {ordHabIns:[{"habitid":..., "date":..., "status":...},...,{...}]
    longestStreak = (obj) => {
        let temp;
        let streak=0;
        let longestStreak = 0;
        const arr = obj.ordHabIns
        const indexTrack = []

        console.log(arr)
        for(let i = 0; i < arr.length; i++){
            temp = arr[i].status;

            if (temp !== undefined && temp ){
                streak++;
            }
            // } else {
            //     streak = 1;
            // }

            if (streak > longestStreak){
                longestStreak = streak;
                indexTrack.push(i)
            }
        }
        console.log(indexTrack)
        return longestStreak
    }
    
    render() {
        return (
            <div>
                <h1>Streak {console.log("I happen first")}</h1>
                <p>{this.streak}</p>
            </div>
        )
    }
}

export default Streak;
