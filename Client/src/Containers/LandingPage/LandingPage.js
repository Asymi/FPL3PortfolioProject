import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    {/* <NavLink to="/signup"><button>Sign Up</button></NavLink>
                    <NavLink to="/login"><button>Login</button></NavLink> */}
                </header>
                <div id="grid-container">
                    {/* Hero Section containing two buttons */}
                    <div id="grid-item1">

                        <p>Habit App</p>
                         <NavLink to="/signup"><button>Sign Up</button></NavLink>
                         <NavLink to="/login"><button>Login</button></NavLink>
                    </div>

                    {/* How it works section containing instructions */}
                    <div id="grid-item2">
                        <p>How it works</p>
                    </div>

                    {/* Why it works section with statistics */}
                    <div id="grid-item3">
                        <p>Why it works</p>
                    </div>

                    {/* Testimonials/reviews section with cards */}
                    <div id="grid-item4">
                        <p>Testimonials</p>
                    </div>

                    {/* Footer with contact information */}
                    <div id="grid-item5">
                          <p>Footer</p>
                    </div>

                </div> 
                {/* End of Grid container */}
        </div>
        )
    }
}

export default LandingPage;
