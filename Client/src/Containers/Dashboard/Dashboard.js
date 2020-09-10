import React, { useState } from 'react';
import DisplayHabit from '../../Components/DisplayHabit/DisplayHabit';
import Streak from '../../Components/Streak/Streak';
import AddHabit from '../../Components/AddHabit/AddHabit';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import './Dashboard.css';



Modal.setAppElement('#root');
//Warning: need to set App Element for Modal
function Dashboard (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    if(props.userid){
        return (
                <div className="Dashboard">
                    <div id="dashboardbg">
                        <h1 id="dashboardTitle">Hello Dashboard</h1>
                        <button id="addhabitbtn" onClick={()=>{setModalIsOpen(true)}}>+</button>

                        {props.habits ? props.habits.map((item, index) => (<DisplayHabit key={index} info={item}/>)) : "Loading habits..."}

                        <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
                            <h2 id="modalTitle">Add New Habit</h2>
                            
                            <AddHabit closeModal={()=>setModalIsOpen(false)}/>

                            <button  id="closebtn" onClick={()=>setModalIsOpen(false)}><p>+</p></button>

                        </Modal>
                    </div>
                </div>
        )
    } else {
        props.history.push('/')
        return (null)
    }
}

const mSTP = state => ({ 
    userid: state.userid,
    habits: state.dailyHabits
})

export default connect(mSTP)(Dashboard)
