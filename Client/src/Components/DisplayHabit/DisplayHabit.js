import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus, destroyHabit } from '../../Actions/actions';
import './DisplayHabit.css';


export class DisplayHabit extends Component {
    updateStatus = () => {
      this.props.tickHabit(this.props.info)
    }
    removeHabit = () => {
      this.props.deleteHabit(this.props.info)
    }
    render() {
        return (
            <div id="DisplayHabit">
              <div id="habitBox">
                <p id="habitName">{this.props.info.habit}</p>
                <button id="statusbtn" onClick={this.updateStatus}>{this.props.info.status ? "Complete" : "Incomplete"}</button>
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
  deleteHabit: habitInfo => dispatch(destroyHabit(habitInfo))
})

export default connect(mSTP, mDTP)(DisplayHabit);
