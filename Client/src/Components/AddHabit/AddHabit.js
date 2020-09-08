import React, { Component } from 'react'

export class AddHabit extends Component {
    render() {
        return (
            <div>
                <form id="habitform">
                    <label for="habitname">Habit</label><br/>
                    <input type="text" id="habitname" placeholder="Please enter a habit"></input><br/>
                    <br/>
                    <label for="frequency" id="frequency">Frequency</label><br/>
                    <select name="frequency">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select><br/>
                    <br/>
                    <label for="enddate">Until When?</label><br/>
                    <input type="text" id="enddate" placeholder="Please enter a date in the form YYYY-MM-DD"></input><br/>
                    <br/>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default AddHabit
