import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus, destroyHabit, getStreaks } from '../../Actions/actions';
import Streak from '../Streak/Streak';
import './DisplayHabit.css';

export class DisplayHabit extends Component {
    updateStatus = () => {
      this.props.tickHabit(this.props.info)
      setTimeout(() => {this.props.fetchStreaks(this.props.info.habit_id)}, 1000)
    }
    removeHabit = () => {
      this.props.deleteHabit(this.props.info)
    }

    render() {
        return (
            <div id="DisplayHabit">
              <div id="habitBox">
                <p id="habitName">{this.props.info.habit}</p>
                <Streak info={this.props.info} />
                <button id="statusbtn" onClick={this.updateStatus}>{this.props.info.status ? "Habit Completed" : "Complete Habit"}</button>
                <button id="deletebtn" onClick={this.removeHabit}>Delete</button>
              </div>
            </div>
        )
    }
}

const mSTP = state => ({
  userId: state.userid
})

const mDTP = dispatch => ({
  tickHabit: habitInfo => dispatch(updateStatus(habitInfo)),
  deleteHabit: habitInfo => dispatch(destroyHabit(habitInfo)),
  fetchStreaks: (userid) => dispatch(getStreaks(userid))
})

export default connect(mSTP, mDTP)(DisplayHabit);
