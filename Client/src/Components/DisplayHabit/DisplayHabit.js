import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus, destroyHabit, getStreaks } from '../../Actions/actions';
import Streak from '../Streak/Streak';

export class DisplayHabit extends Component {
    componentDidMount(){
      this.props.fetchStreaks(this.props.info.habit_id)
    }
    updateStatus = () => {
      this.props.tickHabit(this.props.info)
      setTimeout(() => {this.props.fetchStreaks(this.props.info.habit_id)}, 1000)
    }
    removeHabit = () => {
      this.props.deleteHabit(this.props.info)
    }

    render() {
        return (
            <div>
              <p>{this.props.info.habit}</p>
              <Streak info={this.props.info} />
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
  deleteHabit: habitInfo => dispatch(destroyHabit(habitInfo)),
  fetchStreaks: (userid) => dispatch(getStreaks(userid))
})

export default connect(mSTP, mDTP)(DisplayHabit);
