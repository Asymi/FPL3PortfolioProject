import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus, destroyHabit } from '../../Actions/actions';
import Streak from '../Streak/Streak';

export class DisplayHabit extends Component {
    updateStatus = () => {
      this.props.tickHabit(this.props.info)
    }
    removeHabit = () => {
      this.props.deleteHabit(this.props.info)
    }
    render() {
        return (
            <div>
              <p>{this.props.info.habit}</p>
              <Streak habitId={this.props.info.habit_id} />
              <button onClick={this.updateStatus}>{this.props.info.status ? "Complete" : "Incomplete"}</button>
              <button onClick={this.removeHabit}>Delete</button>
            </div>
        )
    }
}

const mSTP = state => ({
  userId: state.userid
})

const mDTP = dispatch => ({
  tickHabit: habitInfo => dispatch(updateStatus(habitInfo)),
  deleteHabit: habitInfo => dispatch(destroyHabit(habitInfo))
})

export default connect(mSTP, mDTP)(DisplayHabit);
