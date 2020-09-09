import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getHabits } from '../../Actions/actions';

export class DisplayHabit extends Component {
    render() {
        return (
            <div>
              {this.props.habits ? this.props.habits.map((item, index) => (

                  <div key={index}>
                    <p>{item.habit}</p>
                  </div>

              )) : "Loading..."}
            </div>
        )
    }
}

const mSTP = state => ({
  userId: state.userid,
  habits: state.dailyHabits.habits
})

// const mDTP = dispatch => {
//   getHabits: userId => dispatch(getHabits(userId))
// }

export default connect(mSTP)(DisplayHabit);
