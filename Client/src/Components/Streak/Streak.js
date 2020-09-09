import React, { Component } from 'react';

export class Streak extends Component {
    state = {
        fetched: false
    }

    componentDidMount(){
        //fetch(`http://localhost:3000/habits/streak/${props.habitId}`)
        fetch(`http://localhost:3000/habits/streak/3`)
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
        let streak;
        let longestStreak = 0;
        const arr = obj.ordHabIns
        const indexTrack = []

        console.log(arr)
        for(let i = 0; i < arr.length; i++){
            if (temp !== undefined && temp === arr[i].status ){
                streak++;
            } else {
                streak = 1;
            }

            temp = arr[i].status;

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
