import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus, destroyHabit } from '../../Actions/actions';

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
