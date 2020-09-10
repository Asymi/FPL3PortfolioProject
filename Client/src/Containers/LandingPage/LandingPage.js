import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavLink to="/signup"><button>Sign Up</button></NavLink>
                    <NavLink to="/login"><button>Login</button></NavLink>
                </header>
                <div id="grid-container">

				</div>
				{/* Hero Section containing two buttons */}
                <div id="grid-item1">
                    
                </div>
				{/* How it works section containing instructions */}
                <div id="grid-item2">

				</div>

				{/* Why it works section with statistics */}
                <div id="grid-item3">

				</div>

				{/* Testimonials/reviews section with cards */}
                <div id="grid-item4">

                </div>
				{/* Footer with contact information */}
                <div id="grid-item5">

                </div>
            </div>
        )
    }
}

export default LandingPage;
