import React, { useState, Component } from 'react';
import DisplayHabit from '../../Components/DisplayHabit/DisplayHabit';
import AddHabit from '../../Components/AddHabit/AddHabit';
import Modal from 'react-modal';
import { connect } from 'react-redux';

Modal.setAppElement('#root');
//Warning: need to set App Element for Modal
function Dashboard (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    if(props.userid){
        return (
                <div className="Dashboard">
                    <h1>Hello Dashboard</h1>
                    <button onClick={()=>{setModalIsOpen(true)}}>+</button>
                    <DisplayHabit />
                    <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
                        <h2>Modal up</h2>
                        <AddHabit/>
                        <div>
                            <button onClick={()=>setModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>
                </div>
        )
    } else {
        props.history.push('/')
        return (null)
    }
}

const mSTP = state => ({ userid: state.userid})
export default connect(mSTP)(Dashboard)
